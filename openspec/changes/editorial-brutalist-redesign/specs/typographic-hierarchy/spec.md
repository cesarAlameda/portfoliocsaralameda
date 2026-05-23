## ADDED Requirements

### Requirement: Primary Typeface — Space Grotesk
The system SHALL use Space Grotesk as the primary sans-serif typeface for all headings and body text.
Space Grotesk SHALL be loaded from Google Fonts with the following weights: 300, 400, 500, 600, 700.
The font-family CSS variable `--font-sans` SHALL be set to `'Space Grotesk', sans-serif`.

#### Scenario: Space Grotesk renders on page
- **WHEN** any page loads
- **THEN** all body and heading text uses Space Grotesk

### Requirement: Monospace Typeface — JetBrains Mono
The system SHALL continue using JetBrains Mono for technical metadata: dates, technology names, code snippets, section numbers, and any data labels.
The font-family CSS variable `--font-mono` SHALL remain `'JetBrains Mono', 'Fira Code', monospace`.

#### Scenario: Technical text uses monospace
- **WHEN** a date, technology name, or code element renders
- **THEN** the element uses JetBrains Mono

### Requirement: Aggressive Typographic Scale
The system SHALL implement the following type scale using CSS `clamp()` for responsive sizing:

| Element | Size | Weight | Letter-Spacing | Usage |
|---------|------|--------|----------------|-------|
| Hero name | `clamp(3rem, 8vw, 8rem)` | 700 | `-0.03em` | Main name on hero |
| Section number | `10rem` | 700 | `normal` | Decorative background numbers |
| Section title | `clamp(2rem, 4vw, 4rem)` | 700 | `-0.02em` | Section headings |
| Card title | `1.5rem` | 600 | `-0.01em` | Project/card headings |
| Body | `0.9375rem` | 400 | `normal` | Paragraph text, line-height 1.7 |
| Meta (mono) | `0.8125rem` | 400 | `normal` | Dates, metadata |
| Small (mono) | `0.75rem` | 400 | `normal` | Copyright, tertiary info |

#### Scenario: Hero name renders at correct size
- **WHEN** hero section renders
- **THEN** the developer's name uses the hero name size with bold weight and negative tracking

#### Scenario: Section titles use aggressive scale
- **WHEN** any section title renders
- **THEN** the title is at least 2rem and at most 4rem with bold weight

### Requirement: Typography for Technology Labels
Technology names SHALL be displayed as plain text in JetBrains Mono, NOT as pill badges or visual tags.
Multiple technologies SHALL be separated by the middle dot character "·" with spaces.
Technology labels SHALL NOT have background, border, border-radius, or any container styling.

#### Scenario: Technologies display as text
- **WHEN** a project card or experience entry shows technologies
- **THEN** technologies are rendered as: `Java · Spring Boot · PostgreSQL` without any badge/container styles

### Requirement: Skill Level Indicators
Skill levels SHALL be indicated using prefix symbols in JetBrains Mono:
- Expert: `★` (star) in accent color
- Advanced: `▸` (triangle) in text-secondary
- Intermediate: `●` (dot) in text-tertiary
- Familiar: `○` (circle) in text-tertiary at 60% opacity

#### Scenario: Skill renders with level indicator
- **WHEN** a skill with `level: "expert"` renders
- **THEN** the skill displays as `★ Java` with the star in accent color
