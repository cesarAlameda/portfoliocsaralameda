# About Section

## MODIFIED Requirements

### Requirement: About section displays professional narrative
The about section SHALL present a professional narrative focused on real work experience, not academic background.

#### Scenario: About section renders
- **WHEN** the about section is in view
- **THEN** it SHALL display a section heading "About" or "Sobre mí"
- **THEN** it SHALL display a professional profile picture
- **THEN** it SHALL display text that communicates:
  - Current role: Software Developer specialized in backend, APIs, and integrations
  - Experience: ~1 year of professional development experience
  - Specialization: API development, ERP integrations, process automation, backend architecture
  - Current focus: Applied AI, intelligent automation, LLM workflows
  - Approach: Business-oriented engineering, solution architecture

#### Scenario: About text content
- **WHEN** reading the about paragraph
- **THEN** the text SHALL NOT include phrases like "apasionado por la tecnología" or similar clichés
- **THEN** the text SHALL use professional tone: direct, technical, confident
- **THEN** the text SHALL reference real technologies and approaches (APIs, integrations, automation, architecture)
- **THEN** the text SHALL position the developer as a solutions engineer, not a junior learner

### Requirement: About has social/professional links
The about section SHALL include links to LinkedIn and GitHub.

#### Scenario: Professional links
- **WHEN** viewing the about section
- **THEN** it SHALL display a LinkedIn link/icon
- **THEN** it SHALL display a GitHub link/icon
- **THEN** links SHALL open in a new tab with rel="noopener noreferrer"
- **THEN** icons SHALL be styled consistently with the design system (subtle, monochromatic)
