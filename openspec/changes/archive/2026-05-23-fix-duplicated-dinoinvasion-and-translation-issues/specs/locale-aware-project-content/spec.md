## ADDED Requirements

### Requirement: Project content renders only in active locale

The project detail page SHALL render only the content that matches the currently active locale (es/en). Content for the non-active locale SHALL be excluded from the rendered output.

### Requirement: MDX content uses locale markers

Each bilingual project MDX file SHALL delimit locale-specific body content using HTML comment markers:
- `<!-- es:start -->` marks the start of Spanish content
- `<!-- es:end -->` marks the end of Spanish content
- `<!-- en:start -->` marks the start of English content
- `<!-- en:end -->` marks the end of English content

Content outside these markers SHALL be treated as locale-independent (rendered for both).

### Requirement: Locale filtering happens at content load time

The `loadProjectBySlug` function SHALL accept an optional `locale` parameter. When provided, non-matching locale content sections SHALL be stripped from the `content` string before returning the Project object.

### Requirement: Project detail page passes locale to content loader

The `[slug]/page.tsx` component SHALL pass the active locale to `loadProjectBySlug` so only matching content is returned.

#### Scenario: Spanish locale renders only Spanish content

- **WHEN** the active locale is `es` and a project detail page is loaded
- **THEN** the rendered content SHALL include only the sections marked with `<!-- es:start -->` ... `<!-- es:end -->`
- **AND** content marked with `<!-- en:start -->` ... `<!-- en:end -->` SHALL NOT appear in the output

#### Scenario: English locale renders only English content

- **WHEN** the active locale is `en` and a project detail page is loaded
- **THEN** the rendered content SHALL include only the sections marked with `<!-- en:start -->` ... `<!-- en:end -->`
- **AND** content marked with `<!-- es:start -->` ... `<!-- es:end -->` SHALL NOT appear in the output

#### Scenario: Content without locale markers renders always

- **WHEN** a project MDX file contains content outside any locale marker block
- **THEN** that content SHALL be rendered regardless of the active locale

#### Scenario: Fallback to full content when no locale param provided

- **WHEN** `loadProjectBySlug` is called without a locale parameter
- **THEN** the full unmodified content SHALL be returned (backward-compatible)
