## ADDED Requirements

### Requirement: MDX Project Files
Each portfolio project SHALL be defined in an MDX file located in `/content/projects/`.
Each MDX file SHALL include YAML frontmatter with the following fields:
- `slug`: URL-friendly identifier (used in both `/es/proyectos/[slug]` and `/en/projects/[slug]`)
- `title`: Object with `es` and `en` strings
- `description`: Object with `es` and `en` strings (1-3 sentences)
- `technologies`: Array of strings (e.g., `["Java", "Spring Boot", "PostgreSQL"]`)
- `images`: Array of screenshot file paths (relative to `/public/`)
- `links`: Object with optional `github`, `demo`, and `website` URLs
- `featured`: Boolean — if true, appears in the home page featured projects section
- `year`: Number — year of completion/last update

#### Scenario: Project MDX renders correctly
- **WHEN** user visits `/en/projects/erp-integration-tool`
- **THEN** the page displays the project title, description, technologies as badges, screenshots, and links from the MDX frontmatter

#### Scenario: Project page is bilingual
- **WHEN** user visits `/es/proyectos/herramienta-integracion-erp`
- **THEN** the page displays the Spanish title and description from the same MDX file

### Requirement: Project Listing
The system SHALL display a grid of all projects on the projects page.
Each project card SHALL show: title, description (truncated), technology badges, and a featured indicator.
Projects SHALL be sortable by year (newest first by default).
Featured projects SHALL appear on the home page section.

#### Scenario: Home page shows featured projects
- **WHEN** user visits `/es/`
- **THEN** the featured projects section SHALL display only projects with `featured: true`

#### Scenario: Projects page shows all projects
- **WHEN** user visits `/en/projects`
- **THEN** the page SHALL display all projects sorted by year descending

### Requirement: Project MDX Content Body
The MDX body content (after frontmatter) SHALL contain the full project description in markdown format.
The body SHALL support: headings, paragraphs, lists, code blocks, inline code, links, and images.
Bilingual body content SHALL be supported via locale-specific sections or separate body fields.

#### Scenario: Project detail shows full markdown content
- **WHEN** user views a project detail page
- **THEN** the MDX body is rendered as formatted HTML with proper styling
