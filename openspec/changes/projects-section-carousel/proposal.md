## Why

The current Projects section on the homepage uses an asymmetric layout where the first featured project spans full width (making its image too large) and remaining projects are in a 2-column grid. This looks unbalanced and wastes vertical space. A carousel-style grid showing 3 projects at a time with horizontal navigation arrows and auto-scrolling would be more engaging, compact, and visually consistent.

## What Changes

- Replace the current `ProjectsSection` component's asymmetric layout (full-width first project + 2-column grid) with a horizontal carousel that shows 3 projects at a time
- Add left/right navigation arrows that appear/disappear based on current position
- Implement automatic horizontal scrolling at intervals
- Use the existing `ProjectCard` component (no changes to card itself needed)
- Keep the "View all projects" link below the carousel
- Maintain scroll-reveal animations on the section itself
- Update the `ProjectsGrid` component on the `/projects` page remains unchanged

## Capabilities

### New Capabilities
- `projects-carousel`: Horizontal carousel for the homepage projects section that displays 3 project cards at a time with arrow navigation and auto-scroll

### Modified Capabilities
- (none)

## Impact

- `src/components/sections/ProjectsSection.tsx` — complete rewrite of the layout logic
- No changes to `ProjectCard`, navigation, routing, translations, or data layer
- No new dependencies required (can use existing React state + useEffect for the carousel logic)
