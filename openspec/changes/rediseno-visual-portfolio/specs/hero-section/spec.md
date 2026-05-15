# Hero Section

## ADDED Requirements

### Requirement: Hero displays professional statement
The hero section SHALL display a clear professional statement identifying the developer's specialization in APIs, integrations, and intelligent automation.

#### Scenario: Hero renders on load
- **WHEN** the page loads
- **THEN** the hero section SHALL be visible at the top of the viewport
- **THEN** the hero SHALL display a primary heading with the developer's name
- **THEN** the hero SHALL display a subtitle with specialization (e.g., "Software Developer focused on APIs, ERP Integrations & Intelligent Automation")
- **THEN** the hero SHALL display a brief value proposition (1-2 lines)

### Requirement: Hero has call-to-action buttons
The hero section SHALL include action buttons for primary user journeys.

#### Scenario: CTA buttons are displayed
- **WHEN** the hero section renders
- **THEN** it SHALL include a primary CTA button (e.g., "View my work")
- **THEN** it SHALL include a secondary CTA button (e.g., "Get in touch")
- **THEN** the primary CTA SHALL scroll to the experience/projects section
- **THEN** the secondary CTA SHALL scroll to the contact section

### Requirement: Hero has status indicator
The hero section SHALL include a visual indicator of current professional status.

#### Scenario: Status badge renders
- **WHEN** the hero section renders
- **THEN** it SHALL display a subtle status badge (e.g., "Open to opportunities" or "Available for projects")
- **THEN** the badge SHALL have an online/green dot indicator

### Requirement: Hero is responsive
The hero section SHALL adapt to all screen sizes.

#### Scenario: Hero on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** the hero content SHALL stack vertically
- **THEN** the heading SHALL scale appropriately for smaller screens
- **THEN** buttons SHALL be full-width

#### Scenario: Hero on desktop
- **WHEN** the viewport width is 768px or greater
- **THEN** the hero content SHALL be centered with max-width containment
- **THEN** buttons SHALL be side-by-side with appropriate spacing
