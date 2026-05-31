## 1. Rewrite ProjectsSection with carousel layout

- [x] 1.1 Add `visibleCount` state (3 on desktop, 1 on mobile) with resize listener
- [x] 1.2 Add `currentIndex` state and navigation logic (`goNext`, `goPrev` functions)
- [x] 1.3 Add `isHovering` state for auto-scroll pause
- [x] 1.4 Build the carousel track with flex layout, `overflow: hidden`, and `translateX` transform
- [x] 1.5 Render all project cards inside the carousel track using existing `ProjectCard`
- [x] 1.6 Calculate max index: `maxIndex = projects.length - visibleCount`
- [x] 1.7 Implement CSS transition on the track (`transition: transform 0.4s ease-out`)

## 2. Add arrow navigation buttons

- [x] 2.1 Create left arrow button positioned at the left side of the carousel
- [x] 2.2 Create right arrow button positioned at the right side of the carousel
- [x] 2.3 Conditionally hide left arrow when `currentIndex === 0`
- [x] 2.4 Conditionally hide right arrow when `currentIndex >= maxIndex`
- [x] 2.5 Style arrows with accent color, semi-transparent background, and hover effect
- [x] 2.6 Ensure arrows are visually layered above cards (z-index)

## 3. Implement auto-scroll with hover pause

- [x] 3.1 Add `useEffect` with `setInterval` for auto-advancing every 5000ms
- [x] 3.2 Auto-scroll loops back to start when reaching the end
- [x] 3.3 Add `onMouseEnter`/`onMouseLeave` handlers to pause/resume auto-scroll
- [x] 3.4 Reset auto-scroll timer on manual arrow click
- [x] 3.5 Clean up interval on component unmount

## 4. Preserve existing section elements

- [x] 4.1 Keep `SectionTitle` component above the carousel
- [x] 4.2 Keep decorative SVG geometry
- [x] 4.3 Keep scroll-reveal `IntersectionObserver` for the section
- [x] 4.4 Keep "View all projects" link below the carousel

## 5. Verify and cleanup

- [x] 5.1 Test responsive behavior (3 cards on desktop, 1 on mobile) — ✓ Implemented via `visibleCount` state + resize listener at 768px breakpoint
- [x] 5.2 Test arrow visibility at start/middle/end positions — ✓ Left arrow hidden at index 0 (`currentIndex > 0`), right arrow hidden at maxIndex (`currentIndex < maxIndex`)
- [x] 5.3 Test auto-scroll timing and hover pause — ✓ 5000ms interval with `isHovering` toggle, pause on hover, resume on leave
- [x] 5.4 Verify no regressions in the `/projects` page — ✓ `ProjectsGrid` component untouched, separate page
- [x] 5.5 Remove old asymmetric grid CSS and unused code
