## Why

The portfolio has two main issues: (1) **DinoInvasion appears duplicated** in the projects section — in `ProjectsSection.tsx` the first featured project is rendered separately and then ALL projects (including the first featured) are rendered again in the grid, causing DinoInvasion to show twice; (2) **Translation inconsistencies** — the project MDX files contain both Spanish and English content in the same file (separated by `---`), so `react-markdown` renders ALL languages regardless of the active locale, plus some UI texts like "Featured" and "View Project →" in `ProjectCard.tsx` are hardcoded in English while the i18n system is already set up with `next-intl`.

## What Changes

1. **Fix duplicated DinoInvasion in ProjectsSection**: Prevent the first featured project from appearing twice in the projects section by filtering out the first featured project from the main grid render.
2. **Fix duplicated DinoInvasion in ProjectsGrid**: Same fix applied to the `/projects` page grid component.
3. **Make project MDX content locale-aware**: Split the bilingual MDX files so each locale renders only its own language content, OR implement a mechanism to filter content based on the active locale.
4. **Localize hardcoded English labels in ProjectCard**: Replace "Featured" and "View Project →" with `useTranslations` calls from the existing i18n messages.
5. **Fix ProjectCard's "View Project" link to use locale-appropriate text**: Ensure the project detail link uses the translated string.
6. **Move MDX content sections to locale-aware rendering**: Ensure the project detail page only shows content matching the current locale.

## Capabilities

### New Capabilities
- `locale-aware-project-content`: Each project detail page renders only the content that matches the active locale (es/en), solving the mixed-language MDX output.
- `locale-aware-project-card`: ProjectCard component uses `useTranslations` for all user-facing labels instead of hardcoded English strings.

### Modified Capabilities
*(None — this is a bugfix/refinement change, not introducing new requirements)*

## Impact

- **Components**: `ProjectsSection.tsx`, `ProjectsGrid.tsx`, `ProjectCard.tsx`, `src/app/[locale]/projects/[slug]/page.tsx`
- **Content**: All 4 project MDX files (`dino-invasion.mdx`, `erp-integration-tool.mdx`, `hotel-reservations.mdx`, `spring-boot-api.mdx`)
- **Messages**: `messages/es.json`, `messages/en.json` — already have `projects.view_project` but need `featured` label added
- No API, database, or dependency changes.
