## 1. CSS Foundation & Color System

- [x] 1.1 Replace `globals.css`: new color palette, remove glassmorphism utilities, new @theme block
- [x] 1.2 Add Space Grotesk font import in locale layout + update CSS custom properties
- [x] 1.3 Add section separator utility and section number decorative utility

## 2. Layout Components Redesign

- [x] 2.1 Redesign Navbar: solid background, bottom border, text-based logo, uppercase nav links
- [x] 2.2 Redesign LanguageSwitcher: text-only, no glass, active/inactive styling
- [x] 2.3 Redesign Footer: heavier visual weight, thicker borders, asymmetric layout

## 3. UI Components Redesign

- [x] 3.1 Replace GlassCard with SurfaceCard: solid background, thin border, 4px radius, no glass
- [x] 3.2 Redesign CTAButton: rectangular (no border-radius), no glass, no framer-motion hover
- [x] 3.3 Redesign SectionTitle: no decorative bar, large typography, section number integration
- [x] 3.4 Redesign TechBadge → remove, replace with text-only technology labels
- [x] 3.5 Redesign SkillBadge → remove glass, use symbol-level prefix indicators
- [x] 3.6 Redesign ProjectCard: solid surface, no badges, technologies as text, asymmetric image

## 4. Section Components Redesign

- [x] 4.1 Redesign HeroSection: asymmetric layout (name left, roles right), no blobs
- [x] 4.2 Redesign AboutSection: narrow column, solid cards, no glass
- [x] 4.3 Redesign ExperienceSection: no timeline line/dots, left-border color coding
- [x] 4.4 Redesign ProjectsSection: asymmetric 2-column grid, featured card spans wider
- [x] 4.5 Redesign SkillsSection: typographic skill labels with symbol prefixes
- [x] 4.6 Redesign ContactSection: minimal, text-based, no glass buttons

## 5. Animation Cleanup

- [x] 5.1 Remove framer-motion whileHover from all components (cards, buttons, interactive elements)
- [x] 5.2 Replace framer-motion scroll animations with CSS transitions
- [x] 5.3 Keep framer-motion only for section stagger on page load
- [x] 5.4 Verify prefers-reduced-motion still works correctly

## 6. Project Detail Page

- [x] 6.1 Redesign project detail layout: remove glass card from markdown content area
- [x] 6.2 Update markdown rendering styles to match new design system
- [x] 6.3 Redesign project header: technology text labels, no badge containers

## 7. Pages & Remaining Files

- [x] 7.1 Redesign Projects listing page: asymmetric grid, consistent with home section
- [x] 7.2 Redesign NotFound page: match new design system
- [x] 7.3 Remove unused assets and old CSS utilities references

## 8. QA & Polish

- [x] 8.1 Test responsive layout
- [x] 8.2 Verify all routes render correctly
- [x] 8.3 Verify i18n, navigation, and language switching
- [x] 8.4 Run `next build` and fix any TypeScript errors
