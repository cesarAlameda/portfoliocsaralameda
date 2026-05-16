## 8. Animations & Polish

- [x] 8.1 Integrate framer-motion: add fade-in on page load for each section with staggered delays
- [x] 8.2 Add scroll-triggered animations: slide-up on viewport entry for sections and cards
- [x] 8.3 Add hover effects: scale/glow on GlassCard, underline animation on links, pulse on CTAs
- [x] 8.4 Implement `prefers-reduced-motion` support: disable or simplify animations
- [x] 8.5 Polish responsive design: test and fix all sections at mobile (375px), tablet (768px), and desktop (1440px) breakpoints

## 9. SEO & Structured Data

- [x] 9.1 Implement `generateMetadata` function per page with localized title, description, OpenGraph, and Twitter tags
- [x] 9.2 Add JSON-LD structured data: Person schema on home page, SoftwareApplication schema on project pages
- [x] 9.3 Configure `next-sitemap` for `sitemap.xml` generation with all localized routes
- [x] 9.4 Create `robots.txt` allowing all crawlers with sitemap reference
- [x] 9.5 Generate default OpenGraph image with branding for pages without custom images

## 10. CV Download

- [x] 10.1 Place CV PDFs in `/public/cv/cv-es.pdf` and `/public/cv/cv-en.pdf`
- [x] 10.2 Implement locale-aware CV download button in Contact section, Hero CTA, and Footer
- [x] 10.3 Configure link attributes: `target="_blank"`, `rel="noopener noreferrer"`, `aria-label` with translated text

## 11. Build & Deploy

- [x] 11.1 Run `next build` and fix any TypeScript errors, missing exports, or broken imports
- [x] 11.2 Test static export output: verify all pages render, all links work, all images load
- [x] 11.3 Test bilingual navigation: verify all localized routes resolve correctly
- [x] 11.4 Test SEO tags: validate metadata, OpenGraph, Twitter cards, JSON-LD using browser dev tools
- [x] 11.5 Test responsive layout on actual mobile device, tablet, and desktop
- [x] 11.6 Configure GitHub Pages or Vercel deployment with custom domain (cesaralameda.dev or similar)
- [x] 11.7 Set up GitHub Actions for automatic deployment on push to main branch

