# Projects Section

## MODIFIED Requirements

### Requirement: Projects displayed as product cards
The projects section SHALL display projects as detailed product-style cards instead of a carousel.

#### Scenario: Card layout renders
- **WHEN** the projects section is in view
- **THEN** projects SHALL be displayed as cards in a vertical or grid layout (not a carousel)
- **THEN** each card SHALL display the project title prominently
- **THEN** each card SHALL display a project image or screenshot
- **THEN** cards SHALL have hover effects (subtle lift, border highlight)

#### Scenario: Project details
- **WHEN** viewing a project card
- **THEN** it SHALL display: **context** (what problem it solves)
- **THEN** it SHALL display: **technologies** used (as pill badges)
- **THEN** it SHALL display: **architecture** description
- **THEN** it SHALL display: **APIs** consumed or designed
- **THEN** it SHALL display: **integrations** performed
- **THEN** it SHALL display: **challenges** faced
- **THEN** it SHALL display: **results** or outcomes
- **THEN** it SHALL include a link to the repository or live demo

#### Scenario: Card interaction
- **WHEN** user clicks on a project card link
- **THEN** the link SHALL open in a new tab with rel="noopener noreferrer"
- **WHEN** user hovers over a card
- **THEN** the card SHALL have a subtle transform (translateY -2px) and border color change
- **THEN** the transition SHALL be smooth (200ms ease)

### Requirement: Projects data uses typed interfaces
Project data SHALL be defined in TypeScript with typed interfaces, not loaded from JSON.

#### Scenario: Data structure
- **WHEN** inspecting the project data source
- **THEN** there SHALL be a TypeScript interface defining all project fields
- **THEN** the interface SHALL include: title, description, image, technologies[], architecture, apis[], integrations[], challenges[], results[], url, category
- **THEN** data SHALL be imported directly from a .ts file (not fetched via HttpClient)

### Requirement: Responsive project grid
The projects section SHALL adapt its layout to screen size.

#### Scenario: Desktop grid
- **WHEN** viewport width is 768px or greater
- **THEN** projects SHALL display in a 2-column grid
- **THEN** cards SHALL have consistent height

#### Scenario: Mobile layout
- **WHEN** viewport width is less than 768px
- **THEN** projects SHALL display in a single column
- **THEN** cards SHALL stack vertically with adequate spacing

### (REMOVED) Requirement: Project carousel navigation
**Reason:** Replaced by card-based grid layout for better information density and professional appearance.
**Migration:** The carousel component will be removed. Projects data will be migrated to the new card format.
