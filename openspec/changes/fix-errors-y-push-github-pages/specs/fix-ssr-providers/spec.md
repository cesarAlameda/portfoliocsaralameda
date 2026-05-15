## ADDED Requirements

### Requirement: SSR providers SHALL be consistent

The `main.ts` and `main.server.ts` files SHALL provide the same set of root providers for consistent server-side rendering.

#### Scenario: main.server.ts includes router provider

- **WHEN** the server bootstraps the application
- **THEN** `main.server.ts` SHALL include `provideRouter(routes)` 
- **AND** the providers SHALL be consistent with `main.ts`

#### Scenario: SSR hydration completes without errors

- **WHEN** the application loads in a browser after SSR
- **THEN** there SHALL be no hydration mismatch errors in the browser console
