## Context

The portfolio uses a bilingual setup (`es` / `en`) powered by `next-intl`. The locale is determined by the URL prefix (`/es/` or `/en/`). While most UI components properly consume `useTranslations()` from `next-intl`, two issues remain:

1. **Project duplication**: `ProjectsSection.tsx` and `ProjectsGrid.tsx` both render the first featured project separately AND then iterate over ALL projects (including the first) in a grid, causing DinoInvasion to appear twice since it's the only featured project.
2. **Translation leaks in MDX content**: The 4 project MDX files contain both Spanish and English sections separated by `---`. The frontmatter (`title`, `description`) correctly uses locale keys (`es`/`en`), but the body content below is rendered entirely via `react-markdown` without any locale filtering — so both languages appear simultaneously.

## Goals / Non-Goals

**Goals:**
- Eliminate duplication of the first featured project in both `ProjectsSection.tsx` and `ProjectsGrid.tsx`
- Make ProjectCard labels ("Featured", "View Project →") locale-aware via `useTranslations`
- Make project detail page (`[slug]/page.tsx`) render only content matching the active locale
- All changes must be backward-compatible and maintain the existing visual design

**Non-Goals:**
- No restructuring of the MDX content model or schema (frontmatter stays the same)
- No new external dependencies
- No changes to the language switcher or routing mechanism
- No changes to the hero, about, experience, skills, contact, navbar, or footer (unless their translations have issues we discover)

## Decisions

### Decision 1: Filter first featured from grid render
- **Approach**: In both `ProjectsSection.tsx` and `ProjectsGrid.tsx`, when rendering the grid, filter out the first featured project (if any) so it doesn't appear both as a hero card and in the grid.
- **Rationale**: Minimal diff, clear intent. The featured[0] is already rendered separately as a full-width card.
- **Alternative considered**: Restructuring the render logic entirely — unnecessary scope creep for a simple fix.

### Decision 2: Split MDX content by locale
- **Approach**: Refactor each project MDX file so the body content is separated by locale. We'll use a convention where content sections are delimited by locale markers in the MDX, and the `[slug]/page.tsx` will filter content before passing to `react-markdown`.
- **Implementation**: The simplest approach is to store locale-specific content in the frontmatter itself (add `content` field as `{ es: string, en: string }`), OR keep the MDX file but pre-process the content string to extract only the relevant locale's content.
- **Chosen approach**: Modify the MDX frontmatter to include explicit `contentEs` and `contentEn` fields, or better yet, keep the MDX body but wrap sections in locale markers `<!-- es -->` / `<!-- en -->` that we parse when loading. However, the cleanest approach is to **move content into frontmatter** as `content: { es: "...", en: "..." }` since the MDX files already use `gray-matter` for frontmatter parsing.
- **Actual chosen**: The MDX files already have bilingual content separated by `---`. We'll update the schema to extract content by locale. In practice, the simplest approach is: **split each MDX file into two separate content sections within the body, delimited by HTML comments**, and filter on the server side in `[slug]/page.tsx` when passing content to `react-markdown`.

### Decision 3: Use existing i18n message keys for ProjectCard
- **Approach**: Add missing keys `projects.featured` and `projects.view_project` to both `es.json` and `en.json`, then use `useTranslations("projects")` in `ProjectCard.tsx`.
- **Rationale**: The `next-intl` infrastructure is already in place; this is a straightforward addition.
- **Note**: The "GitHub" link can stay as-is since it's a proper noun / brand name (technicism).

### Decision 4: MDX content locale filtering strategy
- **Approach**: We'll use a **HTML comment marker convention** in the MDX files. Sections will be wrapped with `<!-- es:start -->` / `<!-- es:end -->` and `<!-- en:start -->` / `<!-- en:end -->`. The `loadProjectBySlug` function will accept the locale and strip out non-matching sections.
- **Alternative considered**: Keeping two separate MDX files per project (e.g., `dino-invasion.es.mdx` and `dino-invasion.en.mdx`) — too complex for the current scale.

Full details: see specs.

## Risks / Trade-offs

- **[Risk]** MDX comment markers could be accidentally broken by content edits → **Mitigation**: Use clear, memorable markers and document the convention.
- **[Risk]** The `featured` label in `SKILL_CATEGORY_LABELS` or similar hardcoded strings elsewhere might be missed → **Mitigation**: Comprehensive grep for hardcoded English UI strings after changes.
- **[Trade-off]** Filtering MDX content on the server side with string parsing is slightly fragile but avoids adding a new dependency (like a custom MDX plugin).
