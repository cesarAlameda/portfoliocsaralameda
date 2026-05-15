## 1. Design System Foundation

- [x] 1.1 Create CSS custom properties in `src/styles.css` (colors, spacing, typography, shadows, transitions) as defined in layout-redesign spec
- [x] 1.2 Define global typography styles (system font stack, heading sizes, body text, monospace for code)
- [x] 1.3 Set up base layout structure: max-width containers, section spacing, background colors
- [x] 1.4 Add backdrop-filter support for glassmorphism effects (nav, cards)
- [x] 1.5 Add scroll-snap type behavior for sections (optional enhancement)

## 2. Update HTML Entry Point

- [x] 2.1 Update `src/index.html` with new meta tags, Open Graph tags, and JSON-LD structured data
- [x] 2.2 Update document title and description for SEO
- [x] 2.3 Add preconnect links for external resources
- [x] 2.4 Add language and semantic attributes to HTML tag

## 3. Hero Section (New Component)

- [x] 3.1 Generate new `hero` component and register in app.component.ts
- [x] 3.2 Create professional headline: name + specialization statement (APIs, ERP Integrations, Intelligent Automation)
- [x] 3.3 Add status badge with availability indicator
- [x] 3.4 Add primary and secondary CTA buttons with smooth-scroll navigation
- [x] 3.5 Style hero with large typography, subtle background effect (gradient/grain)
- [x] 3.6 Make hero responsive (mobile stack, desktop centered)

## 4. About Section (Rewrite)

- [x] 4.1 Rewrite about content in `aboutme.component.ts` with professional narrative focused on:
    - ~1 year professional experience
    - Specialization in APIs, integrations, ERP, automation
    - Current AI exploration
    - Business-oriented engineering approach
- [x] 4.2 Remove academic/student language, clichés, generic phrases
- [x] 4.3 Redesign about layout with the new design system (clean card, minimal profile image)
- [x] 4.4 Update social links (GitHub, LinkedIn) with new icon styling (monochromatic, subtle)

## 5. Experience Section (New Component)

- [x] 5.1 Generate new `experience` component
- [x] 5.2 Create TypeScript data interface for experience entries (role, company, date, location, problem, solution, stack, integrations, impact)
- [x] 5.3 Populate with at least one real experience entry with detailed breakdown
- [x] 5.4 Implement timeline layout with cards
- [x] 5.5 Add tech stack badges per entry
- [x] 5.6 Make responsive (timeline on desktop, stacked cards on mobile)

## 6. Tech Stack Section (Replaces Skills)

- [x] 6.1 Generate new `tech-stack` component
- [x] 6.2 Create technology data grouped by category (Backend, APIs & Integrations, Databases, AI & Tools, Frontend)
- [x] 6.3 Display technologies as text pill/badge elements (no icons, no progress bars)
- [x] 6.4 Remove old `skills` component from app.component.html and app.component.ts imports
- [x] 6.5 Style with the new design system

## 7. Projects Section (Redesign)

- [x] 7.1 Rewrite `projects.component.ts`: migrate from JSON + HttpClient to typed TypeScript data
- [x] 7.2 Create detailed Project interface with fields: title, description, image, technologies[], architecture, apis[], integrations[], challenges[], results[], url, category
- [x] 7.3 Update project data in TypeScript with real technical details per project
- [x] 7.4 Replace carousel UI with card grid layout (2 columns desktop, 1 column mobile)
- [x] 7.5 Add project detail sections: context, tech badges, architecture, APIs used, integrations, challenges, results
- [x] 7.6 Add hover effects and card interactions
- [x] 7.7 Remove carousel navigation logic (previous/next, filter by skill)

## 8. AI & Automation Section (New Component)

- [x] 8.1 Generate new `ai-automation` component
- [x] 8.2 Create TypeScript data interface for AI projects/explorations
- [x] 8.3 Add entries for AI explorations (LLM workflows, AI APIs, intelligent automation tools)
- [x] 8.4 Implement card layout consistent with other sections
- [x] 8.5 Add visual distinction (subtle accent or badge indicating "exploration")

## 9. Contact Section (Modernize)

- [x] 9.1 Redesign contact form UI with new design system (dark inputs, indigo focus, clean layout)
- [x] 9.2 Maintain existing EmailJS logic (serviceId, templateId, publicKey unchanged)
- [x] 9.3 Update form validation styling
- [x] 9.4 Add success/error message styling
- [x] 9.5 Ensure form is fully responsive

## 10. Navigation (Redesign)

- [x] 10.1 Update nav.component with new minimal design (transparent, backdrop-filter blur, subtle)
- [x] 10.2 Add active section detection and link highlighting
- [x] 10.3 Implement mobile hamburger menu with slide-in overlay
- [x] 10.4 Maintain CV download functionality
- [x] 10.5 Update navigation links to include: About, Experience, Projects, AI, Contact, CV

## 11. Footer (Redesign)

- [x] 11.1 Redesign footer with minimal layout (simple copyright, email, social links)
- [x] 11.2 Apply new design system colors and spacing
- [x] 11.3 Make responsive

## 12. Animations & Interactions

- [x] 12.1 Implement IntersectionObserver-based fade-in animation for sections
- [x] 12.2 Add slide-up animation for section content
- [x] 12.3 Add subtle hover effects on cards, buttons, and links
- [x] 12.4 Respect `prefers-reduced-motion`
- [x] 12.5 Add smooth scroll behavior to all anchor navigations

## 13. App Component Assembly

- [x] 13.1 Reorder sections in `app.component.html`: Nav → Hero → About → Experience → Tech Stack → Projects → AI & Automation → Contact → Footer
- [x] 13.2 Update `app.component.ts` imports with all new components
- [x] 13.3 Remove old skills component import
- [x] 13.4 Ensure app.component.css uses new design system variables
- [x] 13.5 Remove old skillSelected event emitter logic

## 14. Responsive QA & Polish

- [x] 14.1 Test and fix layout on mobile (320px+)
- [x] 14.2 Test and fix layout on tablet (768px)
- [x] 14.3 Test and fix layout on desktop (1024px+)
- [x] 14.4 Verify all links open correctly
- [x] 14.5 Verify EmailJS contact form works end-to-end
- [x] 14.6 Verify CV download works
- [x] 14.7 Check Lighthouse performance, accessibility, SEO scores
- [x] 14.8 Test prefers-reduced-motion behavior
