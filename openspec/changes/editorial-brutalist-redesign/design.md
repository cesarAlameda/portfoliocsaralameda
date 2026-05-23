## Context

The portfolio is a Next.js 15 App Router + TypeScript + TailwindCSS 4 site with 16 components, 4 layout files, and JSON/MDX content. The current visual system uses glassmorphism (backdrop-filter, semi-transparent backgrounds, blur effects) on all surfaces — cards, navbar, badges, buttons, and section titles. This creates a uniform, polished, but generic SaaS aesthetic. The redesign must replace all visual styling while preserving 100% of the content, functionality, routing, i18n, SEO, and data layer.

The approach is to treat this as a **visual skin replacement** with no functional changes. Every component's markup structure may change (for layout), styling classes will completely change, but TypeScript types, props interfaces, data fetching, and behavior remain identical.

## Goals / Non-Goals

**Goals:**
- Replace glassmorphism with solid-surface editorial brutalist design
- Implement new color system: warm monochromatic + single ochre accent
- Introduce Space Grotesk as primary typeface alongside JetBrains Mono
- Restructure layouts: asymmetrical, varied section widths, intentional imbalance
- Remove all decorative flourishes (blobs, gradients, blurred circles)
- Replace framer-motion micro-interactions with CSS transitions
- Keep framer-motion only for page-load section staggering
- Redesign every UI component and section with new visual language
- Maintain exact same content, data, routes, i18n, SEO, and functionality
- Ensure responsive design at mobile (375px), tablet (768px), desktop (1440px)

**Non-Goals:**
- No changes to content files (JSON, MDX, translations)
- No changes to routing, middleware, or navigation logic
- No changes to TypeScript types, schemas, or interfaces
- No changes to data loaders (content-loader, mdx-loader)
- No changes to SEO metadata generation or JSON-LD
- No changes to next.config, sitemap, robots.txt
- No changes to build process or deployment
- No new dependencies beyond adding Space Grotesk font

## Decisions

### Decision: Space Grotesk over Inter/System UI
**Rationale**: Space Grotesk has a distinctive, slightly quirky character that feels editorial and designed — not the default "corporate web" font. Its wide glyphs work well for oversized headings, and it has good legibility at body sizes. It pairs naturally with JetBrains Mono for technical metadata.

**Alternatives considered**:
- Fraunces: Too editorial/variable, might feel pretentious
- Helvetica Now/Neue Haas Grotesk: Too expensive/licensed
- Inter: Current font, too generic, no personality
- System UI stack: Loses control over rendering across platforms

### Decision: Single accent color (ochre #d4a047) over multi-color palette
**Rationale**: Restraint creates identity. One warm accent color on a dark warm background is distinctive, memorable, and avoids the "rainbow SaaS dashboard" look. Ochre specifically is non-technological — it references print design, Swiss posters, editorial work.

**Alternatives considered**:
- Red (#e63946): Too aggressive/alert-looking
- Cyan (#00b4d8): Too "tech startup"
- Green: Too "finance/success"
- No accent (pure monochrome): Lacks contrast points for interaction

### Decision: Solid surface cards (no backdrop-filter) over glassmorphism
**Rationale**: Glassmorphism is the defining visual cliché of 2023-2024 web templates. Removing it entirely is the single most impactful change for achieving a non-generic look. Solid cards with thin borders and minimal border-radius (4px) reference brutalist and editorial print design.

**Trade-off**: Cards won't have the "floating" quality of glass; instead they'll feel grounded and intentional. This is the desired effect.

### Decision: Asymmetrical layouts via per-section CSS rather than abstract layout components
**Rationale**: Each section needs a unique composition — hero is left-right split, about is full-width with narrow text column, projects is staggered asymmetric grid. Trying to abstract this into reusable layout components would over-engineer and restrict creative freedom. Each section gets its own layout logic.

**Trade-off**: More CSS per section, but each section's layout is intentional and distinct.

### Decision: Replace badge/pill components with typographic text labels
**Rationale**: Rounded pill badges with glass effect are a hallmark of "modern SaaS UI." Replacing them with plain text (technologies separated by "·" in JetBrains Mono) reinforces the editorial direction. For skill levels, use a simple symbol prefix (★ ▸ ●) instead of colored dots inside glass pills.

### Decision: Keep framer-motion but restrict to section staggering only
**Rationale**: framer-motion is already a dependency. Removing it entirely would require alternative approaches for the staggered section entrance animation (which is a genuine UX improvement). The change is to remove all hover animations, whileHover effects, and scroll-triggered slide-ups — replacing those with pure CSS transitions.

### Decision: Section numbers (01, 02, 03) as background decorative elements
**Rationale**: Large translucent numbers behind section content add visual depth without decorative flourishes. They reference Swiss design posters and editorial layouts. They're purely CSS (pseudo-elements or absolute positioning), no extra markup.

## Visual Design Reference

### Color Tokens
```
--bg-primary:    #0d0d0b   (near-black warm)
--bg-secondary:  #161614   (slightly lighter)
--surface:       #1c1c1a   (card backgrounds)
--border:        #2a2a28   (subtle borders)
--border-hover:  #3a3a36   (border on hover)
--text-primary:  #e8e4dc   (warm white)
--text-secondary:#8a867e   (warm gray)
--text-tertiary: #5a5854   (muted)
--accent:        #d4a047   (ochre/mustard)
--accent-hover:  #e0b050   (lighter ochre)
--accent-muted:  rgba(212, 160, 71, 0.1)
```

### Typography Scale
```
--font-sans: 'Space Grotesk', sans-serif
--font-mono: 'JetBrains Mono', monospace

Hero name:      clamp(3rem, 8vw, 8rem) / weight 700 / tracking -0.03em
Section number: 10rem / weight 700 / opacity 0.04
Section title:  clamp(2rem, 4vw, 4rem) / weight 700
Card title:     1.5rem / weight 600
Body:           0.9375rem / weight 400 / leading 1.7
Meta (mono):    0.8125rem / weight 400
Small (mono):   0.75rem / weight 400
```

### Component Design Tokens
```
Navbar:          solid bg #0d0d0b, border-bottom 1px solid #2a2a28
Cards:           bg #1c1c1a, border 1px solid #2a2a28, radius 4px
Card hover:      border-color #d4a047
Buttons:         rect (radius 0), bold text
Primary btn:     bg #d4a047, text #0d0d0b
Secondary btn:   border 1px solid #2a2a28, text #e8e4dc
Badges:          NONE - replaced with text
Section nums:    absolute positioned, font-mono, 10rem, opacity 0.04
Timeline:        NONE - replaced with left-border 3px solid
Separators:      horizontal rule, 1px solid #2a2a28, full-width
```

## Risks / Trade-offs

- **Risk**: Space Grotesk may not have the readability of Inter at small sizes → **Mitigation**: Use 0.9375rem minimum body size with 1.7 line-height; test on mobile
- **Risk**: Removing framer-motion hover effects may make site feel static → **Mitigation**: Replace with CSS color transitions (border-color, background-color) that are instant and responsive
- **Risk**: Asymmetrical layouts may break at mobile widths → **Mitigation**: Design mobile-first; asymmetrical only applies at md+ breakpoints; mobile stacks vertically
- **Trade-off**: Section-specific layouts mean more lines of CSS per component, but each section has unique visual identity
- **Trade-off**: No glass/badge effects means the site looks intentionally spartan — this is the desired effect, but stakeholders accustomed to "polished" templates may need context
- **Trade-off**: Removing the "Featured" pill badge requires alternative visual indicator (ocre left-border or marker symbol)
