## 1. Fix duplicated first featured project in ProjectsSection

- [x] 1.1 In `ProjectsSection.tsx`, filter out `featured[0]` from the grid iteration so it's not rendered twice
- [x] 1.2 Verify the fix: DinoInvasion should appear only once (as the full-width hero card)

## 2. Fix duplicated first featured project in ProjectsGrid

- [x] 2.1 In `ProjectsGrid.tsx`, apply the same filter to exclude `featured[0]` from the grid iteration
- [x] 2.2 Verify the fix on the `/projects` page

## 3. Add "featured" translation key to message files

- [x] 3.1 Add `"featured": "Destacado"` under the `projects` section in `messages/es.json`
- [x] 3.2 Add `"featured": "Featured"` under the `projects` section in `messages/en.json`

## 4. Make ProjectCard labels locale-aware

- [x] 4.1 Add `useTranslations` import and hook call in `ProjectCard.tsx` for the `projects` namespace
- [x] 4.2 Replace hardcoded `"◆ Featured"` with `{t("featured")}` wrapped appropriately
- [x] 4.3 Replace hardcoded `"View Project →"` with `{t("view_project")} →` (keeping the arrow)
- [x] 4.4 Verify ProjectCard renders correct labels in both locales

## 5. Add locale marker content to project MDX files

- [x] 5.1 Update `content/projects/dino-invasion.mdx`: wrap Spanish body content in `<!-- es:start -->` ... `<!-- es:end -->` and English body content in `<!-- en:start -->` ... `<!-- en:end -->`
- [x] 5.2 Update `content/projects/erp-integration-tool.mdx`: same locale marker wrapping
- [x] 5.3 Update `content/projects/hotel-reservations.mdx`: same locale marker wrapping
- [x] 5.4 Update `content/projects/spring-boot-api.mdx`: same locale marker wrapping

## 6. Implement locale filtering in the MDX content loader

- [x] 6.1 Add a `stripNonMatchingLocaleContent(content: string, locale: "es" | "en"): string` utility function in `src/lib/mdx-loader.ts`
- [x] 6.2 Modify `loadProjectBySlug` to accept an optional `locale` parameter and apply filtering
- [x] 6.3 Ensure backward compatibility: when no locale is passed, return full content unchanged

## 7. Pass locale from project detail page to content loader

- [x] 7.1 In `src/app/[locale]/projects/[slug]/page.tsx`, pass the active locale to `loadProjectBySlug`
- [x] 7.2 Verify: Spanish locale shows only Spanish MDX content; English locale shows only English MDX content

## 8. Final verification

- [x] 8.1 Run the dev server and check that DinoInvasion is not duplicated in the home page projects section
- [x] 8.2 Check that DinoInvasion is not duplicated on the `/projects` page
- [x] 8.3 Check project detail pages in Spanish: no English body content visible
- [x] 8.4 Check project detail pages in English: no Spanish body content visible
- [x] 8.5 Check that ProjectCard labels ("Featured" / "View Project") show correctly in both locales

