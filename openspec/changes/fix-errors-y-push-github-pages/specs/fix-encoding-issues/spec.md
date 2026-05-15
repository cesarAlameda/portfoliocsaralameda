## ADDED Requirements

### Requirement: File paths with Spanish characters SHALL be valid

All file paths referenced in the application SHALL use correctly encoded Spanish characters.

#### Scenario: CV download path is valid

- **WHEN** user clicks "Download CV" in the navigation
- **THEN** the downloaded file SHALL have a valid filename with correct Spanish characters
- **AND** the URL path SHALL not contain replacement characters (`�`)

#### Scenario: LinkedIn URLs are valid

- **WHEN** viewing the about section or footer
- **THEN** the LinkedIn profile URL SHALL be `https://www.linkedin.com/in/césar-alameda-barquillo-b059882b0`
- **AND** SHALL NOT contain encoding artifacts or replacement characters

### Requirement: Displayed names SHALL use correct Spanish spelling

All displayed person names and company names SHALL use correct Spanish characters.

#### Scenario: Name renders with correct accents

- **WHEN** viewing any component that displays "César Alameda Barquillo" or "MAIS Informática"
- **THEN** the names SHALL display with correct accent marks and ñ character
- **AND** SHALL NOT show replacement characters
