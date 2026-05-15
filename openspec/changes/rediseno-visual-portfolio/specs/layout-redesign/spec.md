# Layout Redesign

## ADDED Requirements

### Requirement: Design system uses CSS custom properties
The entire application SHALL use CSS custom properties for the design system (colors, spacing, typography, shadows).

#### Scenario: Design variables are defined
- **WHEN** inspecting the global stylesheet
- **THEN** the `:root` selector SHALL define custom properties for:
  - Background colors (primary: #0a0a0b, surface: #18181b, elevated: #27272a)
  - Text colors (primary: #e4e4e7, secondary: #a1a1aa, muted: #71717a)
  - Accent color (base: #6366f1, hover: #818cf8, subtle: rgba(99,102,241,0.1))
  - Border color: #27272a
  - Font families (heading: system sans-serif, body: system sans-serif, mono: monospace)
  - Font sizes (xs through 4xl scale)
  - Spacing scale (4px increments: 0.25rem through 4rem)
  - Border radius: 0.5rem (cards), 0.25rem (inputs)
  - Transitions: 200ms ease

### Requirement: Layout uses max-width containment
Content sections SHALL be contained within a max-width container for readability.

#### Scenario: Content width
- **WHEN** viewing any section on desktop
- **THEN** the content area SHALL be constrained to a max-width of 1024px
- **THEN** the content SHALL be horizontally centered
- **THEN** background elements MAY extend full-width (e.g., nav, footer)

### Requirement: Sections have consistent spacing
Each major section SHALL have consistent vertical spacing.

#### Scenario: Section spacing
- **WHEN** scrolling between sections
- **THEN** each section SHALL have padding-top and padding-bottom of 5rem on desktop
- **THEN** each section SHALL have padding-top and padding-bottom of 3rem on mobile
- **THEN** section headings SHALL have consistent positioning and sizing

### Requirement: Dark mode only (premium dark)
The application SHALL use a premium dark theme exclusively (no light mode toggle).

#### Scenario: Color scheme
- **WHEN** viewing any part of the application
- **THEN** the background SHALL be #0a0a0b (near-black)
- **THEN** surface elements (cards, nav) SHALL use #18181b
- **THEN** elevated elements (modals, dropdowns) SHALL use #27272a
- **THEN** accent elements SHALL use the indigo palette (#6366f1 family)
- **THEN** text on dark backgrounds SHALL maintain WCAG AA contrast ratio

### Requirement: Typography is clean and readable
The typography SHALL use system fonts for performance and a clean appearance.

#### Scenario: Font usage
- **WHEN** rendering text content
- **THEN** headings SHALL use the system UI font stack with font-weight 600-700
- **THEN** body text SHALL use the system UI font stack with font-weight 400
- **THEN** code/technical terms SHALL use a monospace font
- **THEN** line-height SHALL be 1.6 for body text, 1.2 for headings
- **THEN** font sizes SHALL scale appropriately across breakpoints
