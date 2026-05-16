## ADDED Requirements

### Requirement: Software-Only Experience Display
The system SHALL display only software-development-related experience in the main Experience section.
Experience entries SHALL have a `type` field in the content schema indicating "software" or "other".
Entries with `type: "software"` SHALL appear in the primary timeline/card layout.
Entries with `type: "other"` SHALL be excluded from the main experience view by default.

#### Scenario: Software roles displayed in primary section
- **WHEN** the Experience section renders
- **THEN** only roles with `type: "software"` appear in the main experience timeline

#### Scenario: Non-software roles hidden
- **WHEN** an experience entry has `type: "other"`
- **THEN** it does NOT appear in the main Experience section

### Requirement: Optional "Other Experience" Section
The system MAY include a secondary, collapsible "Other Experience" section.
If included, this section SHALL be visually distinct from the main experience section (smaller, less prominent).
This section SHALL use a translated title: "Otra Experiencia" (ES) / "Other Experience" (EN).

#### Scenario: Other experience is collapsible
- **WHEN** the "Other Experience" section exists and contains entries
- **THEN** it appears as a collapsible/expandable section below the main experience

### Requirement: Experience Timeline
The main Experience section SHALL display roles in reverse chronological order (newest first).
Each role SHALL display: company name, role title, period, location, description, and technology tags.
The timeline SHALL use a vertical layout with connecting line/indicator.

#### Scenario: Experience ordered newest first
- **WHEN** the Experience section renders
- **THEN** the most recent role appears at the top of the timeline
