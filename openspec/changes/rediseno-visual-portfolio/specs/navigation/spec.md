# Navigation

## MODIFIED Requirements

### Requirement: Navbar is minimal and sticky
The navigation bar SHALL be sticky, minimal, and visually subtle.

#### Scenario: Navbar renders
- **WHEN** the page loads
- **THEN** a sticky navigation bar SHALL be visible at the top
- **THEN** the navbar SHALL use a transparent/blurred background (backdrop-filter: blur)
- **THEN** the navbar SHALL contain the developer's name/logo on the left
- **THEN** the navbar SHALL contain navigation links on the right
- **THEN** links SHALL include: About, Experience, Projects, AI, Contact, [CV]

#### Scenario: Scroll behavior
- **WHEN** user scrolls down
- **THEN** the navbar background MAY become slightly more opaque
- **WHEN** user clicks a nav link
- **THEN** the page SHALL smooth-scroll to the corresponding section
- **THEN** the active section link MAY be highlighted

### Requirement: Navbar is responsive
The navbar SHALL adapt to mobile viewports.

#### Scenario: Mobile navigation
- **WHEN** viewport is less than 768px
- **THEN** navigation links MAY be hidden behind a hamburger/menu toggle
- **THEN** the menu SHALL open as a full-screen or slide-in overlay
- **THEN** clicking a link SHALL close the menu and scroll to the section

#### Scenario: Desktop navigation
- **WHEN** viewport is 768px or greater
- **THEN** all navigation links SHALL be visible inline
- **THEN** links SHALL have hover effects with subtle underline or color change
- **THEN** the CV link SHALL trigger a download (same as current functionality)

### (REMOVED) Requirement: Legacy navbar design
**Reason:** The navbar will be redesigned for a more minimal and premium appearance.
**Migration:** The scroll-to-section and CV download functionality remain; only visual presentation changes.
