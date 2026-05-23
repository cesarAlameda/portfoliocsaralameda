## ADDED Requirements

### Requirement: ProjectCard uses translated labels

The ProjectCard component SHALL use `useTranslations("projects")` from `next-intl` for all user-facing labels instead of hardcoded English strings.

### Requirement: "Featured" label is locale-aware

The "Featured" indicator text (`◆ Featured`) in ProjectCard SHALL use the translation key `projects.featured` from the locale message files.

### Requirement: "View Project" link text is locale-aware

The "View Project →" link text in ProjectCard SHALL use the translation key `projects.view_project` from the locale message files. The `es.json` file already contains this key (with value "Ver proyecto"), but `en.json` already contains "View project".

### Requirement: Message files include "featured" key

Both `messages/es.json` and `messages/en.json` SHALL include a `projects.featured` key with the appropriate translation:
- `es.json`: `"featured": "Destacado"`
- `en.json`: `"featured": "Featured"`

#### Scenario: ProjectCard renders translated "Featured" label

- **WHEN** the project is marked as featured and the active locale is `es`
- **THEN** the label SHALL display `◆ Destacado`
- **WHEN** the active locale is `en`
- **THEN** the label SHALL display `◆ Featured`

#### Scenario: ProjectCard renders translated "View Project" link

- **WHEN** the ProjectCard renders the project detail link
- **THEN** the link text SHALL match the `projects.view_project` translation for the active locale
- **AND** the trailing `→` arrow SHALL be preserved

#### Scenario: Hardcoded English strings removed

- **WHEN** the ProjectCard component is rendered in any locale
- **THEN** the output SHALL NOT contain the hardcoded strings "View Project →" or "◆ Featured" in English when the locale is `es`
