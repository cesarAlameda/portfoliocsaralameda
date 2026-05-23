## MODIFIED Requirements

### Requirement: Dark Mode Default
The system SHALL default to dark mode on first visit.
The system SHALL NOT show a light theme toggle.
All colors SHALL be defined as CSS custom properties in `globals.css` for consistent theming.
The dark mode color palette SHALL use warm monochromatic colors (ochre accent, warm blacks/grays) instead of the previous blue-tinted palette.

#### Scenario: Page loads in dark mode
- **WHEN** a user visits the site for the first time
- **THEN** the page renders with warm dark background (#0d0d0b) and warm white text (#e8e4dc)

### Requirement: Glassmorphism Design System — REMOVED
**Reason**: Replaced by solid-surface editorial brutalist design system
**Migration**: All `glass` and `glass-card` CSS utilities removed. Cards now use solid backgrounds (#1c1c1a) with 1px solid borders (#2a2a28) and 4px border-radius. No backdrop-filter, no blur, no semi-transparent backgrounds anywhere.

### Requirement: Responsive Design
The system SHALL be fully responsive across:
- Mobile (320px-767px): Single column layouts, stacked vertically
- Tablet (768px-1023px): Asymmetric grids begin, visible navigation
- Desktop (1024px+): Asymmetric multi-column layouts, full navigation, section-specific max-widths

#### Scenario: Mobile layout stacks vertically
- **WHEN** viewport width is 375px
- **THEN** sections display in a single column, all asymmetry collapses to vertical stacking

#### Scenario: Desktop layout shows asymmetric grid
- **WHEN** viewport width is 1440px
- **THEN** hero uses left-right split, project cards use asymmetric 2-column grid

### Requirement: Clean Typography
The system SHALL use Space Grotesk for headings and body text, and JetBrains Mono for technical metadata.
Fonts SHALL be loaded from Google Fonts:
- Primary: Space Grotesk (weights 300-700)
- Monospace: JetBrains Mono (weights 400-700)
Font sizes SHALL use the aggressive scale defined in `typographic-hierarchy` spec.

#### Scenario: Typography system is consistent
- **WHEN** any page renders
- **THEN** headings use Space Grotesk, body text uses Space Grotesk, technical metadata uses JetBrains Mono
