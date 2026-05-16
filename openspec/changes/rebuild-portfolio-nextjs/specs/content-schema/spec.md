## ADDED Requirements

### Requirement: Profile Schema
The system SHALL define a `profile.json` content file with the following TypeScript interface:
```typescript
interface Profile {
  name: string;
  location: string;
  languages: string[];
  roles: string[];
  summary: { es: string; en: string };
  avatar?: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  cv: { es: string; en: string };
}
```

#### Scenario: Profile data is accessible
- **WHEN** any component accesses profile data
- **THEN** the data matches the defined Profile interface and contains all required fields

### Requirement: Experience Schema
The system SHALL define an `experience.json` content file:
```typescript
interface Experience {
  company: string;
  role: string;
  location: string;
  period: { start: string; end: string | null };
  description: { es: string; en: string };
  technologies: string[];
  type: "software" | "other";
}
```
Only entries with `type: "software"` SHALL appear in the main Experience section.
Entries with `type: "other"` MAY appear in an optional "Other Experience" secondary section.

#### Scenario: Only software roles in main experience
- **WHEN** the Experience section renders
- **THEN** only entries where `type === "software"` are displayed

### Requirement: Skills Schema
The system SHALL define a `skills.json` content file:
```typescript
interface Skill {
  name: string;
  category: "Backend" | "Databases" | "Enterprise Software" | "Frontend" | "Dev Tools" | "Game Development";
  level?: "expert" | "advanced" | "intermediate" | "familiar";
}
```
Skills SHALL be grouped and displayed by category.
Each category SHALL have a translated label in both languages.

#### Scenario: Skills render grouped by category
- **WHEN** the Skills section renders
- **THEN** skills are displayed in visually distinct groups labeled by their category

### Requirement: Social/Links Schema
The system SHALL define a `social.json` content file with contact links and credentials.
The social data SHALL be accessible to the Contact section, Footer, and any CTA buttons.

#### Scenario: Contact section renders social links
- **WHEN** user views the Contact section
- **THEN** LinkedIn, GitHub, and email links are displayed as interactive buttons/icons
