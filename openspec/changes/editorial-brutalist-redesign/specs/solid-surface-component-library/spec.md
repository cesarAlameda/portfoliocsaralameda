## ADDED Requirements

### Requirement: Solid Surface Cards (Replaces GlassCard)
The system SHALL replace all glassmorphism cards with solid surface cards using:
- Background: `--surface` (#1c1c1a)
- Border: 1px solid `--border` (#2a2a28)
- Border-radius: 4px (NOT rounded-2xl or rounded-xl)
- Padding: 1.5rem (p-6) default
- No backdrop-filter, no blur, no semi-transparency
- Hover state: border color changes to `--accent` (#d4a047), background lightens to `--bg-secondary` (#161614)
- No translateY or scale hover animation

#### Scenario: Card renders without glass effects
- **WHEN** any card component renders
- **THEN** it has solid background, thin solid border, 4px border-radius, no blur

#### Scenario: Card hover changes border color
- **WHEN** user hovers over an interactive card
- **THEN** the border color changes to ochre, background shifts slightly

### Requirement: Rectangular Buttons (Replaces Rounded CTAButton)
The system SHALL replace all rounded buttons with rectangular buttons:
- Border-radius: 0 (or 2px maximum, not rounded-lg)
- No box-shadow
- No backdrop-filter or glass effect
- Primary variant: background `--accent`, text `--bg-primary`, bold weight
- Secondary variant: border 1px solid `--border`, text `--text-primary`, bold weight
- Outline variant: no background, border 1px solid `--border`, text `--text-secondary`
- Hover: color change only, no scale, no translateY

#### Scenario: Primary button renders
- **WHEN** a primary CTA button renders
- **THEN** it has solid ochre background, dark text, no border-radius, no shadow

#### Scenario: Button hover does not scale
- **WHEN** user hovers over any button
- **THEN** the button does NOT scale or translate; only colors change

### Requirement: Text-Only Technology Labels (Replaces TechBadge/SkillBadge)
The system SHALL NOT use pill-shaped or glass-styled badges for technologies or skills.
Technology names SHALL be rendered as plain text in `--font-mono`.
Multiple technologies SHALL be separated by " · " (space middle-dot space).
Skills SHALL use a prefix symbol (★ ▸ ● ○) to indicate level, no background container.

#### Scenario: Technology list renders as text
- **WHEN** a project card renders technologies
- **THEN** the technologies display as `Java · Spring Boot · PostgreSQL` without any visual container

#### Scenario: Skill with level indicator
- **WHEN** a skill renders
- **THEN** it displays as `★ Java` for expert, `▸ Spring Boot` for advanced, etc.

### Requirement: Solid Navigation Bar (Replaces Glass Navbar)
The navbar SHALL use:
- Background: `--bg-primary` (#0d0d0b), solid
- Bottom border: 1px solid `--border` (#2a2a28)
- No backdrop-filter, no glass effect, no blur
- Logo: text-based full name or "César Alameda" (not `&lt;CA /&gt;`)
- Nav links: uppercase, letter-spacing 0.05em, font-mono
- Active/current section link: accent color

#### Scenario: Navbar renders without glass
- **WHEN** the navbar renders
- **THEN** it has solid background, bottom border, no blur, no transparency

### Requirement: Language Switcher as Text Button
The language switcher SHALL NOT use glass styling.
It SHALL render as a text button in `--font-mono` with:
- Current language in `--text-primary`, `--accent` underline
- Inactive language in `--text-tertiary`
- Hover: `--accent` color
- No background, no border, no container

#### Scenario: Language switcher shows current language
- **WHEN** user is on Spanish version
- **THEN** "ES" is highlighted in accent, "EN" is dimmed

### Requirement: Section Title without Decorative Line
The SectionTitle component SHALL NOT display a decorative underline/bar below the title.
The title SHALL use the aggressive typographic scale (clamp(2rem, 4vw, 4rem), bold, negative tracking).
The subtitle (if present) SHALL appear below in `--text-secondary`, no decorative elements.

#### Scenario: Section title renders without decoration
- **WHEN** any section title renders
- **THEN** the title is large and bold with no underline, no bar, no decorative line
