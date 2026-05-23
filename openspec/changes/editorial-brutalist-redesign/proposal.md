## Why

The current portfolio uses a generic dark-mode glassmorphism aesthetic that is visually indistinguishable from thousands of SaaS templates, AI-generated sites, and Framer/Webflow starter kits. While technically functional, it lacks visual identity, personality, and the editorial craftsmanship expected from a senior developer's portfolio. The design does not reflect César's individuality as a developer — it looks like a template anyone could use.

## What Changes

- **Complete visual redesign**: Replace glassmorphism/SaaS aesthetic with an editorial brutalist warm style
- **New color system**: Monochromatic warm palette (near-black with warm undertones) + single accent color (mustard/ochre #d4a047)
- **Typography-driven layout**: Single type family (Space Grotesk) used with aggressive size hierarchy, negative tracking, and mono for technical metadata
- **Asymmetrical compositions**: Break away from perfectly centered/symmetric layouts; use left-right splits, staggered grids, and intentional imbalance
- **Remove glassmorphism completely**: No backdrop-filter, no blur effects, no semi-transparent overlays
- **Remove all decorative blobs/gradients**: No blurred circles, no gradient backgrounds, no decorative flourishes
- **Replace glass cards with solid surface cards**: Solid backgrounds (#1c1c1a), thin solid borders, minimal border-radius (4px max)
- **Replace tech badges with typographic labels**: Technologies displayed as text separated by "·" rather than pill badges with glass effect
- **Minimal animations**: Remove framer-motion from micro-interactions; use CSS transitions only; keep framer-motion only for page-load staggering
- **Section layout variation**: Not all sections use the same max-width container; alternate between full-width, contained, and narrow layouts
- **Bold section numbering**: Large translucent section numbers (01, 02, 03) as visual anchors
- **New navigation design**: Solid background navbar (no glass), text-based logo, uppercase nav links with wide tracking
- **Redesigned footer**: Heavier visual weight, thicker borders, asymmetric layout
- **Project cards without glass**: Solid cards, images bleed to edges, technologies listed as text
- **Experience section without timeline**: Remove vertical line and dot markers; use left-border color coding instead
- **Contact section minimal**: Clean, typographic, without glass buttons

## Capabilities

### New Capabilities
- `editorial-color-system`: Warm monochromatic dark palette with single ochre accent, CSS custom properties replacing all glassmorphism variables
- `typographic-hierarchy`: Aggressive type scale with Space Grotesk, oversized headings, negative letter-spacing, mono for metadata
- `asymmetric-layout-system`: Composable layout components that enable left-right splits, staggered grids, and varied section widths
- `solid-surface-component-library`: Replacement of all glassmorphism UI components (cards, badges, buttons, navbar) with solid-surface equivalents
- `minimal-animation-system`: Reduced animation footprint, CSS-only micro-interactions, framer-motion restricted to page-load staggering
- `section-numbering-visual`: Large translucent section numbers as decorative/structural elements

### Modified Capabilities
- `dark-theme-glassmorphism`: Replaced entirely by `editorial-color-system` and `solid-surface-component-library` (breaking visual change, same content)
- `content-schema`: No changes to data models; visual-only changes

## Impact

- **BREAKING**: Complete visual redesign of ALL components — every .tsx file with visual output changes
- **BREAKING**: `globals.css` completely rewritten: new color palette, no glassmorphism utilities, new font system
- **BREAKING**: All UI components (GlassCard, TechBadge, SkillBadge, CTAButton, SectionTitle, ProjectCard) rewritten with new visual system
- **BREAKING**: All section components (HeroSection, AboutSection, ExperienceSection, ProjectsSection, SkillsSection, ContactSection) re-layouted
- **BREAKING**: Layout components (Navbar, Footer, LanguageSwitcher) redesigned
- **No change**: All content files, data schemas, TypeScript types, loaders, i18n, routing, SEO, metadata generation remain untouched
- **No new dependencies**: Same tech stack (Next.js, TailwindCSS, framer-motion, JetBrains Mono) reused, plus Space Grotesk font added
