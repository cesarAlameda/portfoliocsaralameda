## ADDED Requirements

### Requirement: Varied Section Widths
Different sections SHALL use different max-width containers to create visual rhythm:
- Hero section: Full viewport width with horizontal padding
- About section: Narrow column (max-w-3xl) for main text content
- Experience section: Contained (max-w-4xl) with full-width separator lines
- Projects section: Wide (max-w-7xl) for grid layout
- Skills section: Contained (max-w-5xl)
- Contact section: Narrow (max-w-3xl) for minimal layout
- Footer: Full width with contained inner content

Not all sections SHALL use the same container class — each section's width choice SHALL be intentional.

#### Scenario: About section renders in narrow column
- **WHEN** the About section renders
- **THEN** the content is constrained to max-w-3xl, with full-width background

#### Scenario: Projects section uses wide layout
- **WHEN** the Projects section renders
- **THEN** the content uses max-w-7xl for a wider grid

### Requirement: Hero Section Asymmetric Layout
The hero section SHALL NOT be centered. Instead:
- The developer's name SHALL be on the left side (60-70% width), left-aligned
- Role badges SHALL be on the right side (30-40% width), right-aligned at the top
- The summary paragraph SHALL span the full width below the name
- The CTA button SHALL be left-aligned below the summary
- Navigation SHALL be integrated at the top of the hero

#### Scenario: Hero layout is left-right split
- **WHEN** the hero section renders at desktop width
- **THEN** the name is on the left, roles are on the right, summary spans full width

#### Scenario: Mobile hero stacks vertically
- **WHEN** viewport width is less than 768px
- **THEN** all hero elements stack vertically, left-aligned

### Requirement: Projects Grid Asymmetry
The projects grid SHALL NOT use a uniform column grid. Instead:
- The first (featured) project card MAY span 2 columns
- Remaining cards SHALL use a 2-column layout (not 3)
- Cards SHALL NOT all be the same size — intentional variation

#### Scenario: Featured project spans wider
- **WHEN** a project has `featured: true` and is the first in the list
- **THEN** its card spans 2 columns in the grid

#### Scenario: Non-featured projects in 2-column grid
- **WHEN** rendering non-featured projects
- **THEN** they display in a 2-column layout

### Requirement: Section Separators
Between sections, the system SHALL render a full-viewport-width horizontal rule (1px solid `--border`) with generous vertical spacing (py-16 or py-20).
The separator SHALL NOT be a thin line within the content container — it SHALL bleed to viewport edges.

#### Scenario: Separator renders between sections
- **WHEN** scrolling from one section to the next
- **THEN** a full-width horizontal line separates them
