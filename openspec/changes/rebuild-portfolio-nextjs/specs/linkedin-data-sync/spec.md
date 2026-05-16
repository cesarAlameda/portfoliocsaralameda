## ADDED Requirements

### Requirement: Content Data Layer
The system SHALL load all portfolio content from JSON files located in the `/content/` directory.
Content files SHALL be read at build time (SSG) — no runtime data fetching.
The content loader SHALL merge data from multiple sources with the following priority:
1. Manual overrides (highest priority)
2. LinkedIn imported data
3. Generated/default content (lowest priority)

#### Scenario: Content loads from JSON at build time
- **WHEN** `next build` is executed
- **THEN** the system reads all JSON files from `/content/` and makes them available to components

#### Scenario: Manual override takes precedence
- **WHEN** a field exists in both the LinkedIn import file and the manual override file
- **THEN** the manual override value SHALL be used

### Requirement: LinkedIn Import Architecture
The system SHALL define TypeScript types that match the LinkedIn exported data JSON structure.
The `/content/` directory SHALL include an `imports/` subdirectory for raw LinkedIn export files.
A utility script SHALL process LinkedIn export files and generate normalized content JSON files.
The system SHALL NOT require a running LinkedIn API — all data comes from manually exported files.

#### Scenario: LinkedIn export is processable
- **WHEN** a LinkedIn data export file is placed in `/content/imports/`
- **THEN** a script can parse it and generate `/content/experience.json` with filtered roles

#### Scenario: Non-technical roles are filtered out
- **WHEN** LinkedIn export contains roles tagged as "customer support", "call center", or non-technical positions
- **THEN** those roles SHALL be excluded from the generated experience output

### Requirement: Content Schema Validation
All content JSON files SHALL conform to defined TypeScript interfaces.
The build process SHALL validate content files against their schemas.
A schema mismatch SHALL cause the build to fail with a descriptive error message.

#### Scenario: Invalid content causes build failure
- **WHEN** a required field is missing from `profile.json`
- **THEN** the build SHALL fail and display an error indicating which field is missing
