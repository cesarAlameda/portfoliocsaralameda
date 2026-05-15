# Tech Stack

## ADDED Requirements

### Requirement: Tech stack displays focused technologies
The tech stack section SHALL display the developer's relevant technologies without grids of icons or percentage bars.

#### Scenario: Tech stack renders
- **WHEN** the tech stack section is in view
- **THEN** it SHALL display a section heading (e.g., "Tech Stack" or "Technologies")
- **THEN** it SHALL group technologies by category (e.g., Backend, APIs & Integrations, Databases, AI & Tools, Frontend)

### Requirement: Tech stack uses text-based badges
Technologies SHALL be displayed as text labels/pills, not just icon grids.

#### Scenario: Technology badges
- **WHEN** rendering a technology category
- **THEN** each technology SHALL be displayed as a text pill/badge
- **THEN** badges SHALL have subtle hover effects
- **THEN** the section SHALL avoid generic progress bars or percentage indicators

### Requirement: Categories are meaningful
Technology categories SHALL reflect real specializations, not generic lists.

#### Scenario: Category grouping
- **WHEN** rendering the tech stack
- **THEN** backend technologies SHALL be grouped together (e.g., Java, Spring Boot, C#, .NET, PHP, Node.js)
- **THEN** API/integration tools SHALL be grouped (e.g., REST, Postman, Swagger, ERP connectors)
- **THEN** database technologies SHALL be grouped (e.g., MySQL, PostgreSQL, Oracle, SQL Server)
- **THEN** AI/tools SHALL be grouped (e.g., OpenAI API, LangChain, Python, automation scripts)
- **THEN** frontend technologies SHALL be minimal (e.g., Angular, TypeScript, HTML/CSS)

### Requirement: No skills section legacy
The old skills section with logo grid SHALL be completely removed and replaced by this tech stack section.

#### Scenario: Legacy removal
- **WHEN** the new tech stack component renders
- **THEN** the old app-skills component SHALL NOT be present in the DOM
- **THEN** no skill percentage bars or rating systems SHALL be displayed
