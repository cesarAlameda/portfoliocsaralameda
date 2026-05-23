## ADDED Requirements

### Requirement: Warm Monochromatic Color Palette
The system SHALL use a warm monochromatic dark color palette with the following CSS custom properties defined in `globals.css`:
- `--bg-primary`: #0d0d0b (near-black with warm undertones)
- `--bg-secondary`: #161614 (slightly lighter than bg-primary)
- `--surface`: #1c1c1a (card/surface backgrounds)
- `--border`: #2a2a28 (default border color)
- `--border-hover`: #3a3a36 (border color on hover)
- `--text-primary`: #e8e4dc (warm off-white for primary text)
- `--text-secondary`: #8a867e (warm gray for secondary text)
- `--text-tertiary`: #5a5854 (muted text)
- `--accent`: #d4a047 (ochre/mustard single accent color)
- `--accent-hover`: #e0b050 (lighter ochre for hover states)
- `--accent-muted`: rgba(212, 160, 71, 0.1) (subtle accent background)

The palette SHALL NOT include any glassmorphism variables (no backdrop-filter, no blur-related colors).

#### Scenario: CSS custom properties defined
- **WHEN** any page renders
- **THEN** all color values are available as CSS custom properties in `globals.css`

#### Scenario: Accent color applied to interactive elements
- **WHEN** user hovers over a clickable element (card, button, link)
- **THEN** the element uses `--accent` or `--accent-hover` for its hover state

### Requirement: No Glassmorphism Colors or Effects
The system SHALL NOT define or use any glassmorphism-related CSS:
- No `backdrop-filter` properties
- No `rgba(255, 255, 255, 0.04)` or similar semi-transparent backgrounds
- No `glass` or `glass-card` utility classes
- No blur effects on any surface

#### Scenario: No glass effects present
- **WHEN** any component renders
- **THEN** no element uses `backdrop-filter` or `blur()` CSS functions

### Requirement: Color Contrast Compliance
All text/background color combinations SHALL maintain WCAG AA contrast ratio (minimum 4.5:1 for normal text, 3:1 for large text).
`--text-primary` on `--bg-primary` SHALL have a contrast ratio of at least 10:1.
`--text-secondary` on `--bg-primary` SHALL have a contrast ratio of at least 7:1.
`--accent` on `--bg-primary` SHALL have a contrast ratio of at least 5:1.

#### Scenario: Text meets contrast requirements
- **WHEN** text is rendered on any background
- **THEN** the contrast ratio meets WCAG AA standards
