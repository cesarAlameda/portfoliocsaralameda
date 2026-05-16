## ADDED Requirements

### Requirement: Dark Mode Default
The system SHALL default to dark mode on first visit.
The system SHALL NOT show a light theme toggle in the initial implementation.
All colors SHALL be defined as CSS custom properties in `globals.css` for consistent theming.

#### Scenario: Page loads in dark mode
- **WHEN** a user visits the site for the first time
- **THEN** the page renders with dark background colors and light text

### Requirement: Glassmorphism Design System
Cards and containers SHALL use glassmorphism styling:
- Semi-transparent background with backdrop blur (`backdrop-filter: blur(10-20px)`)
- Subtle border with low opacity (`border: 1px solid rgba(255,255,255,0.1)`)
- Border radius on cards (`border-radius: 12-16px`)
- Box shadow for depth without excessive gradients
Background SHALL feature a dark gradient or subtle pattern that reveals the glass effect.

#### Scenario: Glass card renders correctly
- **WHEN** a card component (e.g., project card, experience card) is rendered
- **THEN** it displays with semi-transparent background, blur effect, and subtle border

### Requirement: Smooth Animations
The system SHALL use framer-motion for page and component animations:
- Fade-in on page load (staggered per section)
- Slide-up on scroll into viewport
- Hover scale effect on interactive cards and buttons
- Smooth page transitions between routes
Animations SHALL be subtle and not distracting — under 300ms duration.
Animations SHALL respect `prefers-reduced-motion` by disabling or simplifying.

#### Scenario: Section animates on scroll
- **WHEN** user scrolls to a new section
- **THEN** the section fades in with a slight upward slide

#### Scenario: Reduced motion respected
- **WHEN** user has `prefers-reduced-motion: reduce` set in their OS/browser
- **THEN** all animations are disabled or reduced to opacity-only transitions

### Requirement: Responsive Design
The system SHALL be fully responsive across:
- Mobile (320px-767px): Single column, hamburger navigation
- Tablet (768px-1023px): Two-column grids, visible navigation
- Desktop (1024px+): Multi-column layouts, full navigation, max-width container (1280px)

#### Scenario: Mobile layout stacks vertically
- **WHEN** viewport width is 375px
- **THEN** sections display in a single column, navigation collapses to hamburger menu

#### Scenario: Desktop layout shows multi-column grid
- **WHEN** viewport width is 1440px
- **THEN** project cards display in a 3-column grid, navigation is fully visible

### Requirement: Clean Typography
The system SHALL use a monospace or technical font for code/tech elements and a clean sans-serif for body text.
Font choices SHALL be loaded from Google Fonts or self-hosted:
- Headings: Inter or similar clean sans-serif
- Body: Inter or system-ui
- Code/tech: JetBrains Mono or Fira Code
Font sizes SHALL use a consistent scale (e.g., Tailwind's default type scale).

#### Scenario: Typography system is consistent
- **WHEN** any page renders
- **THEN** headings use the heading font stack, body uses the body font stack, and tech badges use the monospace font
