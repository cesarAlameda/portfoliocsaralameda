# Contact Section

## MODIFIED Requirements

### Requirement: Contact form is modern and clean
The contact form SHALL have a redesigned UI matching the new design system while maintaining EmailJS functionality.

#### Scenario: Form renders
- **WHEN** the contact section is in view
- **THEN** it SHALL display a section heading (e.g., "Contact" or "Get in touch")
- **THEN** it SHALL display name, email, and message fields
- **THEN** form fields SHALL use the new design system (dark inputs, subtle borders, indigo focus)
- **THEN** the submit button SHALL use the accent color with hover effect

#### Scenario: Form validation
- **WHEN** user submits without filling required fields
- **THEN** inline validation messages SHALL appear
- **THEN** error messages SHALL be styled with the design system (not default browser styles)

#### Scenario: Form submission
- **WHEN** user fills all fields and submits
- **THEN** the form SHALL send the message via EmailJS (same serviceId, templateId, publicKey)
- **THEN** a success message SHALL be displayed
- **THEN** the form SHALL reset after successful submission
- **WHEN** submission fails
- **THEN** an error message SHALL be displayed

### (REMOVED) Requirement: Legacy contact form design
**Reason:** The contact form UI will be modernized to match the new design system.
**Migration:** The form logic and EmailJS integration remain identical; only the visual presentation changes.
