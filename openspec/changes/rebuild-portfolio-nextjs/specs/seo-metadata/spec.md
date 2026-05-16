## ADDED Requirements

### Requirement: Localized Page Metadata
Every page SHALL generate a unique `<title>` and `<meta name="description">` for each locale.
Metadata SHALL be localized: Spanish pages use Spanish titles/descriptions, English pages use English.
The site name SHALL be "César Alameda | Backend Developer" (English) or "César Alameda | Desarrollador Backend" (Spanish).

#### Scenario: Spanish page has Spanish metadata
- **WHEN** user visits `/es/`
- **THEN** the page `<title>` contains a Spanish title and `<meta name="description">` contains a Spanish description

#### Scenario: English page has English metadata
- **WHEN** user visits `/en/projects`
- **THEN** the page `<title>` and `<meta name="description">` are in English

### Requirement: OpenGraph Tags
Every page SHALL include OpenGraph meta tags:
- `og:title` — Page title in the current locale
- `og:description` — Page description in the current locale
- `og:image` — Page-specific or default OpenGraph image
- `og:url` — Canonical URL for the current page and locale
- `og:type` — `website` for the home page, `article` for project pages
- `og:locale` — `es_ES` or `en_US` depending on current locale

#### Scenario: OpenGraph tags render on project page
- **WHEN** social media crawler visits `/en/projects/bukkit-plugin`
- **THEN** the page includes `og:title`, `og:description`, `og:image`, `og:url`, `og:type: article`, and `og:locale: en_US`

### Requirement: Twitter Cards
Every page SHALL include Twitter Card meta tags:
- `twitter:card` — `summary_large_image`
- `twitter:title` — Page title in the current locale
- `twitter:description` — Page description in the current locale
- `twitter:image` — OpenGraph image URL

#### Scenario: Twitter card meta present
- **WHEN** a Twitter crawler visits any page
- **THEN** `twitter:card: summary_large_image` and associated tags are present

### Requirement: JSON-LD Structured Data
The home page SHALL generate JSON-LD structured data of type `Person` with:
- `name`: "César Alameda Barquillo"
- `jobTitle`: Array of roles (e.g., "Backend Developer", "Enterprise Software Developer")
- `address`: { `addressLocality`: "Madrid", `addressCountry`: "ES" }
- `sameAs`: Array of LinkedIn and GitHub profile URLs
- `knowsAbout`: Array of technologies from the skills data

Project pages SHALL generate JSON-LD of type `SoftwareApplication` or `CreativeWork` with:
- `name` — Bilingual project title
- `description` — Project description
- `applicationCategory` — "DeveloperApplication"
- `operatingSystem` — Cross-platform

#### Scenario: Home page includes Person schema
- **WHEN** Google crawls the home page
- **THEN** JSON-LD script tag with `@type: Person` is present in the page head

#### Scenario: Project page includes SoftwareApplication schema
- **WHEN** Google crawls a project detail page
- **THEN** JSON-LD script tag with `@type: SoftwareApplication` is present in the page head

### Requirement: Sitemap and Robots
The system SHALL generate a `sitemap.xml` containing all localized URLs.
The system SHALL generate a `robots.txt` allowing all crawlers and pointing to the sitemap.

#### Scenario: Sitemap includes localized URLs
- **WHEN** search engine fetches `/sitemap.xml`
- **THEN** the sitemap lists both `/es/proyectos/...` and `/en/projects/...` variants of each page

### Requirement: SEO-Friendly Routes
The system SHALL use descriptive, keyword-rich URL slugs in both languages.
Spanish slugs SHALL use Spanish keywords (e.g., `/es/proyectos/plugin-bukkit-gestion`).
English slugs SHALL use English keywords (e.g., `/en/projects/bukkit-management-plugin`).
URLs SHALL use kebab-case with hyphens separating words.

#### Scenario: SEO slugs are language-appropriate
- **WHEN** user visits the projects page
- **THEN** the Spanish URL is `/es/proyectos` and the English URL is `/en/projects`
