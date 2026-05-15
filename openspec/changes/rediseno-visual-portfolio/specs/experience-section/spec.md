# Experience Section


## ADDED Requirements

### Requirement: Experience section displays professional timeline
The experience section SHALL display the developer's professional work history in a timeline-like layout.

#### Scenario: Experience section renders
- **WHEN** the experience section is in view
- **THEN** it SHALL display a section heading "Experience"
- **THEN** it SHALL display at least one work experience entry
- **THEN** each entry SHALL include: company/role, date range, location

### Requirement: Each experience has detailed breakdown
Each experience entry SHALL include detailed information about problem, solution, stack, and impact.

#### Scenario: Experience details are displayed
- **WHEN** viewing an experience entry
- **THEN** it SHALL display the **problem** or context the developer faced
- **THEN** it SHALL display the **solution** implemented
- **THEN** it SHALL display the **tech stack** used (languages, frameworks, tools, APIs)
- **THEN** it SHALL display the **integrations** performed (systems connected, APIs consumed)
- **THEN** it SHALL display the **impact** or results achieved (measurable when possible)

### Requirement: Experience uses premium card layout
Experience entries SHALL use a card-based or timeline layout with clear visual hierarchy.

#### Scenario: Entry layout
- **WHEN** rendering an experience entry
- **THEN** the role/company SHALL be the most prominent text
- **THEN** the date range SHALL be subtle and secondary
- **THEN** the details SHALL use bullet points with clear labels (Problem, Solution, Stack, Impact)
- **THEN** tech tags SHALL be displayed as small pill/badge elements

### Requirement: Experience is responsive
Experience entries SHALL adapt to mobile and desktop layouts.

#### Scenario: Mobile layout
- **WHEN** viewport is less than 768px
- **THEN** the timeline line SHALL be hidden or simplified
- **THEN** cards SHALL be full-width with adequate padding

#### Scenario: Desktop layout
- **WHEN** viewport is 768px or greater
- **THEN** entries SHALL use a timeline layout with alternating or left-aligned cards
