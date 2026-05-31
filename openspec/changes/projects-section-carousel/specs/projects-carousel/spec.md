## ADDED Requirements

### Requirement: Projects carousel displays 3 project cards at a time

The homepage projects section SHALL display projects in a horizontal carousel layout. On viewports 768px and wider, the carousel SHALL show exactly 3 project cards side by side. On smaller viewports, the carousel SHALL show exactly 1 project card. The carousel SHALL use the existing `ProjectCard` component for rendering each project.

#### Scenario: Default state shows first 3 projects
- **WHEN** the ProjectsSection renders with 4 or more projects
- **THEN** the carousel SHALL display the first 3 projects (indices 0, 1, 2) as visible cards

#### Scenario: Responsive shows 1 card on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** the carousel SHALL show exactly 1 project card at a time

#### Scenario: All projects are rendered in the DOM
- **WHEN** the carousel renders
- **THEN** ALL projects SHALL be present in the DOM (hidden via overflow, not removed)

### Requirement: Left/right arrow navigation

The carousel SHALL display left and right arrow buttons for navigating between project groups. The left arrow SHALL be hidden when at the first position (index 0). The right arrow SHALL be hidden when at the last position. The maximum index SHALL be `projects.length - visibleCardCount`.

#### Scenario: Left arrow hidden at start
- **WHEN** the carousel is at position 0
- **THEN** the left arrow SHALL NOT be visible

#### Scenario: Right arrow hidden at end
- **WHEN** the carousel is at the last position
- **THEN** the right arrow SHALL NOT be visible

#### Scenario: Both arrows visible in middle positions
- **WHEN** the carousel is at a position that is neither the first nor the last
- **THEN** both left and right arrows SHALL be visible

#### Scenario: Clicking right arrow advances position
- **WHEN** the user clicks the right arrow
- **THEN** the carousel SHALL advance by 1 position (slide by `visibleCardCount` cards)

#### Scenario: Clicking left arrow goes back
- **WHEN** the user clicks the left arrow
- **THEN** the carousel SHALL go back by 1 position

### Requirement: Auto-scroll with hover pause

The carousel SHALL auto-advance to the next position every 5 seconds. When the user hovers over the carousel area, auto-scroll SHALL pause. Auto-scroll SHALL resume when the user stops hovering. Manual navigation SHALL reset the auto-scroll timer.

#### Scenario: Auto-scroll advances automatically
- **WHEN** 5 seconds pass without user interaction
- **THEN** the carousel SHALL advance to the next position (or reset to start if at the end)

#### Scenario: Auto-scroll pauses on hover
- **WHEN** the user hovers over the carousel container
- **THEN** the auto-scroll timer SHALL be paused

#### Scenario: Auto-scroll resumes after hover ends
- **WHEN** the user stops hovering over the carousel container
- **THEN** the auto-scroll SHALL resume after a short delay

#### Scenario: Manual navigation resets auto-scroll timer
- **WHEN** the user clicks an arrow button
- **THEN** the auto-scroll timer SHALL be reset

### Requirement: Smooth slide transition

The carousel SHALL animate position changes using a CSS transition on the `transform` property. The transition SHALL be smooth (300-500ms ease-out).

#### Scenario: Position change animates
- **WHEN** the carousel position changes
- **THEN** the cards SHALL slide smoothly to the new position with a CSS transition

### Requirement: Section decorative elements preserved

The carousel section SHALL retain the existing section layout: SectionTitle, decorative SVG geometry, scroll-reveal intersection observer, and the "View all projects" link.

#### Scenario: SectionTitle renders above carousel
- **WHEN** the ProjectsSection renders
- **THEN** the SectionTitle SHALL appear above the carousel with the existing title and subtitle

#### Scenario: View all projects link appears below carousel
- **WHEN** the ProjectsSection renders
- **THEN** the "View all projects" link SHALL appear below the carousel

#### Scenario: SVG decoration renders
- **WHEN** the ProjectsSection renders
- **THEN** the decorative SVG geometry SHALL be present

#### Scenario: Scroll reveal applies
- **WHEN** the ProjectsSection scrolls into view
- **THEN** the section SHALL fade in using the existing IntersectionObserver pattern
