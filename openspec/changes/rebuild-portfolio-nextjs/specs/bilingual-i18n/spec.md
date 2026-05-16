## ADDED Requirements

### Requirement: Bilingual Route Structure
The system SHALL support two languages: Spanish (default, code: `es`) and English (code: `en`).
All routes MUST follow the pattern `/[locale]/...` where locale is either `es` or `en`.
The root `/` route SHALL redirect to `/es/` (Spanish default).
The system SHALL provide SEO-friendly localized route names:
- `/es/proyectos` and `/en/projects` for the projects listing page
- `/es/proyectos/[slug]` and `/en/projects/[slug]` for individual project pages

#### Scenario: Navigating to root redirects to Spanish
- **WHEN** user visits `/`
- **THEN** system redirects to `/es/` with HTTP 307

#### Scenario: English route resolves correctly
- **WHEN** user visits `/en/projects`
- **THEN** system displays the projects page with English content

#### Scenario: Spanish route resolves correctly
- **WHEN** user visits `/es/proyectos`
- **THEN** system displays the projects page with Spanish content

### Requirement: Language Switcher
The system SHALL display a language switcher in the navigation bar.
The switcher SHALL show the current language and allow toggling to the other language.
Switching languages SHALL preserve:
- The current page/path (translated to the equivalent localized route)
- Scroll position
- Theme state (dark/light)
- Any UI state (e.g., expanded sections)

#### Scenario: User switches from Spanish to English
- **WHEN** user is on `/es/proyectos/mi-proyecto` and clicks "EN" in the language switcher
- **THEN** system navigates to `/en/projects/my-project` preserving the same project

#### Scenario: Language switcher maintains scroll position
- **WHEN** user is scrolled halfway down the home page and switches language
- **THEN** the page reloads at the same scroll position on the translated page

### Requirement: Translation Message Files
The system SHALL store all UI translations in JSON message files under `messages/{locale}.json`.
Messages SHALL be organized by section/component namespace.
Technical terminology SHALL remain accurate and consistent across both languages.
Translations MUST NOT be literal word-by-word translations — they SHALL sound natural for native speakers.

#### Scenario: UI text renders in selected language
- **WHEN** user visits `/en/`
- **THEN** all UI text (nav labels, section titles, buttons, footer) displays in English

#### Scenario: Message fallback
- **WHEN** a translation key is missing in the English message file but exists in Spanish
- **THEN** the system SHALL fall back to the Spanish value gracefully (no broken UI)
