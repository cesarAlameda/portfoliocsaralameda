## ADDED Requirements

### Requirement: CV Download
The system SHALL provide downloadable CV PDFs in both Spanish and English.
CV files SHALL be stored in `/public/cv/` as `cv-es.pdf` and `cv-en.pdf`.
The Download CV button SHALL link to the correct language version based on the current locale.
The CV download SHALL open in a new tab when clicked.

#### Scenario: Download CV in Spanish from Spanish page
- **WHEN** user is on `/es/` and clicks "Descargar CV"
- **THEN** the browser downloads `/cv/cv-es.pdf` or opens it in a new tab

#### Scenario: Download CV in English from English page
- **WHEN** user is on `/en/` and clicks "Download CV"
- **THEN** the browser downloads `/cv/cv-en.pdf` or opens it in a new tab
