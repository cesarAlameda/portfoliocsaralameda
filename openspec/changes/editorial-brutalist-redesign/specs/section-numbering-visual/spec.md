## ADDED Requirements

### Requirement: Decorative Section Numbers
Each content section (About, Experience, Projects, Skills, Contact) SHALL display a large background section number:
- Number: 01, 02, 03, 04, 05 (matching section order)
- Font: `--font-mono` (JetBrains Mono)
- Size: 10rem
- Weight: 700
- Color: `--text-primary` at 4% opacity (nearly invisible, subtle texture)
- Positioning: Absolutely positioned at the top-right or top-left of the section, behind content
- The number SHALL NOT be interactive or selectable

#### Scenario: Section number renders behind content
- **WHEN** the About section renders
- **THEN** a large "01" is visible behind the section content at very low opacity

#### Scenario: Section number does not affect layout
- **WHEN** a section renders
- **THEN** the section number is absolutely positioned and does not affect content flow
