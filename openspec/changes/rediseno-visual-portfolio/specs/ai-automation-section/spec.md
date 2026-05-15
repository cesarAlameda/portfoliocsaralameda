# AI & Automation Section

## ADDED Requirements

### Requirement: AI section displays AI-related projects and exploration
The AI section SHALL showcase projects and explorations related to applied AI, LLMs, and intelligent automation.

#### Scenario: AI section renders
- **WHEN** the AI section is in view
- **THEN** it SHALL display a section heading (e.g., "AI & Automation" or "Applied AI")
- **THEN** it SHALL display at least one project or exploration entry
- **THEN** each entry SHALL have a title, description, and technologies used

### Requirement: Each AI entry includes technical details
AI entries SHALL include specific technical details about the AI tools, APIs, and workflows used.

#### Scenario: AI entry details
- **WHEN** viewing an AI entry
- **THEN** it SHALL describe the **context** or problem
- **THEN** it SHALL list the **AI tools/APIs** used (e.g., OpenAI API, LangChain, RAG, etc.)
- **THEN** it SHALL describe the **workflow** or architecture
- **THEN** it SHALL mention **learnings** or outcomes

### Requirement: AI section is visually distinct
The AI section SHALL have a slightly different visual treatment to distinguish it from other sections.

#### Scenario: Visual distinction
- **WHEN** the AI section renders
- **THEN** it MAY use a subtle accent color variation
- **THEN** it SHALL maintain consistency with the overall design system
- **THEN** entries SHALL use the same card layout as experience/projects for coherence
