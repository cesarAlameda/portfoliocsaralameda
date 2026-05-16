## ADDED Requirements

### Requirement: Contact Section
The system SHALL include a Contact section with the following elements:
- LinkedIn profile link with icon
- GitHub profile link with icon
- Email link (mailto:) with icon
- Download CV button (links to language-appropriate PDF)
- Professional summary or call-to-action text in the current locale

#### Scenario: Contact section displays all links
- **WHEN** user scrolls to the Contact section
- **THEN** LinkedIn, GitHub, and email links are visible and clickable, each with an appropriate icon

### Requirement: Link Behavior
LinkedIn and GitHub links SHALL open in a new tab with `rel="noopener noreferrer"`.
Email link SHALL use `mailto:` protocol and open the default email client.
All links SHALL include `aria-label` attributes for accessibility.

#### Scenario: External link opens in new tab
- **WHEN** user clicks the LinkedIn link
- **THEN** a new browser tab opens to `https://linkedin.com/in/césar-alameda-barquillo-b059882b0`

#### Scenario: Email link opens mail client
- **WHEN** user clicks the email link
- **THEN** the default email client opens with the email address populated

### Requirement: Accessibility
All interactive elements in the Contact section SHALL be keyboard-navigable.
Focus indicators SHALL be visible (not removed).
Icons SHALL have `aria-hidden="true"` with text labels for screen readers.

#### Scenario: Keyboard navigation works
- **WHEN** user tabs through the Contact section
- **THEN** all links and buttons receive visible focus indicators and are activatable via Enter key
