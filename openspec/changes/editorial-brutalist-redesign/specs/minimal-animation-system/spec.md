## ADDED Requirements

### Requirement: CSS-Only Micro-Interactions
All hover effects, focus states, and micro-interactions SHALL use CSS transitions only.
No framer-motion or JavaScript animation libraries SHALL be used for hover effects.
Transition duration SHALL be 150ms-200ms for color changes, with `ease-in-out` timing.
Transition properties SHALL be explicitly scoped (e.g., `transition: border-color 150ms ease-in-out, background-color 150ms ease-in-out`).
Do NOT use `transition: all`.

#### Scenario: Card hover uses CSS transition
- **WHEN** user hovers over an interactive card
- **THEN** the border-color and background-color transition using CSS, not JavaScript

#### Scenario: No transform animations on hover
- **WHEN** user hovers over any interactive element
- **THEN** the element does NOT scale, translate, or rotate

### Requirement: Framer-Motion Restricted to Section Staggering
framer-motion SHALL ONLY be used for:
- Staggered fade-in of sections on page load (each section fades in with increasing delay)
- The `AnimatePresence` component for page transitions (optional)

framer-motion SHALL NOT be used for:
- Hover effects on cards, buttons, or links
- Scroll-triggered animations (whileInView)
- Any micro-interaction that can be achieved with CSS

#### Scenario: No framer-motion hover effects
- **WHEN** user hovers over a card or button
- **THEN** no framer-motion `whileHover` or `animate` prop is active on that element

### Requirement: Respect prefers-reduced-motion
The system SHALL continue to respect `prefers-reduced-motion: reduce` by disabling all animations.
The existing implementation in `globals.css` SHALL be preserved:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

#### Scenario: Reduced motion disables animations
- **WHEN** user has `prefers-reduced-motion: reduce` set
- **THEN** all animations and transitions are disabled
