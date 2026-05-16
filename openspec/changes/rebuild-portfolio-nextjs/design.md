## Context

The current portfolio is an Angular 19 SPA with a single Spanish language version. It lacks bilingual support, SEO optimization, and a scalable data pipeline. The rebuild targets a Next.js 14+ App Router architecture using TypeScript, TailwindCSS, and next-intl for internationalization. The site will be statically generated (SSG) for performance and deployable to Vercel or GitHub Pages.

The primary user is César Alameda Barquillo — a backend/enterprise developer based in Madrid, Spain. The site needs to present him professionally to recruiters, clients, and collaborators in both Spanish and English.

## Goals / Non-Goals

**Goals:**
- Migrate from Angular to Next.js 14+ App Router with full TypeScript coverage
- Implement bilingual (es/en) support with next-intl and localized routes (`/es/*`, `/en/*`)
- Deliver dark-mode-first glassmorphism design system with TailwindCSS and framer-motion
- Create a JSON-driven content layer that separates data from presentation (preparing for LinkedIn sync)
- Build MDX-based project pages with bilingual frontmatter
- Implement comprehensive SEO: localized metadata, OpenGraph, Twitter cards, JSON-LD
- Generate static export (SSG output) compatible with GitHub Pages
- Include downloadable CV in PDF format
- Filter experience to show only software engineering roles

**Non-Goals:**
- Real-time LinkedIn API integration (data will be imported from exported LinkedIn JSON files)
- User authentication or admin dashboard
- Blog functionality or CMS
- Server-side rendering at runtime (static generation only)
- Database or backend API — content is file-based
- Migration of existing Angular components — full rewrite

## Decisions

### Decision: Next.js 14+ App Router over Pages Router
**Rationale**: App Router provides nested layouts, server components by default, and better i18n support with next-intl. The `[locale]` dynamic segment pattern maps directly to the requirement for localized routes (`/es/proyectos`, `/en/projects`).

**Alternatives considered**: 
- Pages Router: Requires manual i18n routing; less future-proof
- Remix: Great but smaller ecosystem; less static export maturity
- Astro: Excellent for content sites but harder to integrate MDX + React interactivity without islands architecture complexity

### Decision: next-intl over react-i18next / react-intl
**Rationale**: next-intl is purpose-built for Next.js App Router, supports the `[locale]` dynamic routing pattern natively, provides server component translation support, and handles JSON-based message files. It integrates with Next.js's built-in redirect and middleware for language detection.

**Alternatives considered**:
- react-i18next: Works but requires more boilerplate for server components; not App Router-native
- Custom i18n solution: Too much maintenance burden; next-intl handles edge cases (pluralization, formatting, fallbacks)

### Decision: JSON content layer over CMS / headless CMS
**Rationale**: The content schema is well-defined and relatively small (profile, experience, skills, projects). JSON files are version-controllable, easy to edit, and can be programmatically generated from LinkedIn exports. A headless CMS (Contentful, Sanity) would add complexity, cost, and API dependencies that don't align with the static export requirement.

**Alternatives considered**:
- Contentful: Overkill for this scope; introduces API latency for static builds
- MDX-only: Less structured for experience/skills data; JSON is better for tabular/schema data
- Hardcoded in components: Current approach; not maintainable

### Decision: Gray-matter + react-markdown for MDX projects over full MDX compilation
**Rationale**: Using gray-matter to parse YAML frontmatter and react-markdown to render content provides a simpler pipeline than full MDX compilation (next-mdx-remote). For portfolio projects, rich text with embedded images and links suffices — custom React components within MDX are rarely needed.

**Alternatives considered**:
- next-mdx-remote: Full MDX support; useful if projects need embedded interactive components
- Contentlayer: Excellent but deprecated in favor of next-mdx-remote; adds build-time overhead

### Decision: Static export (output: 'export') over Vercel serverless
**Rationale**: The portfolio is purely presentational with no server-side data fetching or API routes needed after build time. Static export means zero hosting costs, maximum performance (CDN-served), and GitHub Pages compatibility.

**Trade-off**: Dynamic features (contact form) must use third-party services (EmailJS, Formspree) rather than Next.js API routes.

### Decision: CSS modules vs TailwindCSS utility classes
**Rationale**: TailwindCSS with CSS custom properties for the glassmorphism design system. Tailwind's utility-first approach aligns with the component architecture — each component's styling is co-located, themable via CSS variables, and responsive by default. No CSS modules needed.

### Decision: Single-page layout with sections vs. multiple pages
**Rationale**: Single-page scrollable layout for the main portfolio (Home sections stacked vertically), with separate routes for individual project detail pages. This provides a smooth browsing experience while keeping project deep-links for SEO.

## Architecture Overview

```
portfoliocsaralameda/
├── messages/                    # next-intl translation JSON files
│   ├── es.json
│   └── en.json
├── content/                     # Content layer
│   ├── profile.json             # Personal info, summary, roles
│   ├── experience.json          # Work history (filtered)
│   ├── skills.json              # Skills by category
│   ├── projects/                # MDX project files
│   │   ├── project-1.mdx
│   │   └── project-2.mdx
│   └── social.json              # Contact links, CV path
├── public/
│   ├── cv/                      # CV PDFs
│   │   ├── cv-es.pdf
│   │   └── cv-en.pdf
│   ├── images/                  # Screenshots, profile pic, OG images
│   └── icon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/            # Localized routes
│   │   │   ├── layout.tsx       # Root layout with i18n provider
│   │   │   ├── page.tsx         # Home page (all sections)
│   │   │   └── projects/
│   │   │       └── [slug]/
│   │   │           └── page.tsx # Individual project page
│   │   ├── not-found.tsx
│   │   └── globals.css          # Tailwind + glassmorphism theme
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── GlassCard.tsx
│   │       ├── TechBadge.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SectionTitle.tsx
│   │       └── CTAButton.tsx
│   ├── lib/
│   │   ├── content-loader.ts    # Loads and parses JSON + MDX content
│   │   ├── schema.ts            # TypeScript types for content schema
│   │   └── seo.ts               # JSON-LD and metadata generators
│   ├── middleware.ts            # next-intl language detection & redirect
│   └── i18n.ts                  # next-intl request config
├── next.config.ts               # next-intl plugin, static export config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Data Flow

1. **Build time**: Content loader reads JSON files from `/content/` and MDX frontmatter
2. **Translation layer**: next-intl serves localized strings from `/messages/{locale}.json`
3. **Component rendering**: Server components fetch data, pass typed props to client components where interactivity is needed
4. **Static generation**: Next.js generates all routes at build time (SSG)
5. **SEO**: Each page's metadata is generated from content data + localized translations

## Migration Plan

1. **Phase 1 — Scaffold**: Initialize Next.js project, install dependencies, configure TypeScript, TailwindCSS, next-intl
2. **Phase 2 — Content Schema**: Define TypeScript types, create JSON content files with bilingual structure
3. **Phase 3 — Layout & Theme**: Build Navbar, Footer, LanguageSwitcher, dark theme globals.css with glassmorphism utilities
4. **Phase 4 — Sections**: Implement each portfolio section as a server component (Hero, About, Experience, Projects, Skills, Contact)
5. **Phase 5 — Project Pages**: MDX pipeline for individual project pages with routing
6. **Phase 6 — SEO**: Structured data, metadata generation, sitemap, robots.txt, OpenGraph images
7. **Phase 7 — Polish**: Animations (framer-motion), responsive testing, performance audit
8. **Phase 8 — Deploy**: Static export, GitHub Pages or Vercel deployment, custom domain

**Rollback**: Keep the existing Angular deployment intact. The new site deploys to a different subdomain or path until validated. Git history preserves the old codebase.

## Risks / Trade-offs

- **Risk**: Static export limits dynamic features (no contact form backend) → **Mitigation**: Use EmailJS or Formspree for contact form submissions
- **Risk**: JSON content files require manual editing for non-technical users → **Mitigation**: Prepare CLI scripts for LinkedIn JSON import automation
- **Risk**: Large image assets slow down build times and page loads → **Mitigation**: Use next/image with sharp for optimization; lazy loading below-the-fold
- **Risk**: SEO rankings may drop temporarily during migration → **Mitigation**: Implement 301 redirects from old paths; keep both sites live in parallel during transition
- **Trade-off**: SSG means content updates require a rebuild — acceptable for portfolio use case (infrequent updates)
- **Trade-off**: next-intl JSON messages for translations must be maintained separately from MDX project content — intentionally separated by design (translations in messages/, content in MDX frontmatter)
