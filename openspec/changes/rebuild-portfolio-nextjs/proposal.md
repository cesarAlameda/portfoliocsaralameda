## Why

The current portfolio is built with Angular and is a single-language (Spanish-only) static site. As César Alameda Barquillo expands his professional reach, the portfolio needs a modern, bilingual (Spanish/English), SEO-optimized rebuild that presents him as a senior backend/enterprise developer. The new architecture must support automated LinkedIn data syncing, dynamic content, and scalable project pages — capabilities the current Angular implementation cannot efficiently support.

## What Changes

- **Complete stack migration**: Replace Angular 19 with Next.js (App Router) + TypeScript + TailwindCSS
- **Bilingual support**: Full i18n with Spanish (default) and English, SEO-friendly localized routes (`/es/...`, `/en/...`)
- **Dark mode by default**: Glassmorphism aesthetic with dark theme, smooth animations, and responsive design
- **LinkedIn data-driven content**: Architecture prepared for LinkedIn export ingestion as primary data source
- **Experience filtering**: Only software development roles displayed; non-technical experience excluded
- **MDX-based project pages**: Each project as an MDX file with bilingual frontmatter, screenshots, tech tags, and links
- **SEO overhaul**: Localized metadata, OpenGraph tags, Twitter cards, JSON-LD structured data for search engine ranking
- **Content schema**: JSON-driven reusable content schema separating data from presentation
- **Component library**: Modular, reusable component architecture with proper TypeScript typing
- **CV download**: Hosted downloadable PDF CV

## Capabilities

### New Capabilities
- `bilingual-i18n`: Full Spanish/English support with next-intl, localized routes, language switcher preserving navigation state and theme
- `linkedin-data-sync`: Data layer architecture for importing LinkedIn exported JSON data as primary content source with manual override support
- `mdx-projects`: MDX-based project pages with bilingual frontmatter, screenshots, tech stack metadata, and GitHub/demo links
- `seo-metadata`: Localized metadata, OpenGraph tags, Twitter cards, JSON-LD structured data per page for search engine ranking
- `dark-theme-glassmorphism`: Dark mode by default, glassmorphism UI, smooth animations, responsive TailwindCSS design system
- `content-schema`: Reusable JSON content schema for profile, experience, skills, projects, and translations
- `cv-download`: Downloadable PDF CV
- `experience-filter`: LinkedIn-synced experience display filtering out non-software-engineering roles with optional "Other Experience" section
- `contact-section`: Contact section with LinkedIn, GitHub, email links

### Modified Capabilities
- (No existing specs to modify — this is a full rebuild)

## Impact

- **BREAKING**: Complete removal of Angular codebase — all existing components, services, routing, and styles replaced
- **New dependencies**: Next.js, react, next-intl, tailwindcss, framer-motion, sharp, gray-matter, react-markdown, next-sitemap
- **Structure change**: Project with `/content/`, `/messages/`, `/public/cv/`, `/src/app/[locale]/` structure
- **Data pipeline**: New JSON schema for profile, experience, skills, projects replacing current hardcoded Angular component data
- **Build output**: Static export (SSG) for GitHub Pages or Vercel deployment
- **SEO**: New sitemap.xml, robots.txt, OpenGraph images generation pipeline
