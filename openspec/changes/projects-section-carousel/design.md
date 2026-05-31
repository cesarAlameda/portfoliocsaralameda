## Context

The homepage `ProjectsSection` currently renders projects in an asymmetric layout: the first featured project spans the full width (making its image and card too large and visually dominant), while the remaining projects are arranged in a 2-column grid below. This creates an unbalanced visual hierarchy and takes up too much vertical space on the landing page.

We have 4 projects total, which is an ideal number for a carousel that shows 3 at a time — allowing the user to navigate between a "pages" showing projects [1,2,3] and [2,3,4].

The existing `ProjectCard` component is well-designed and should be reused without modification. The only changes are to the layout/composition logic in `ProjectsSection`.

## Goals / Non-Goals

**Goals:**
- Replace the asymmetric layout with a horizontal carousel showing 3 project cards at a time
- Add left/right arrow navigation buttons that hide/show based on carousel position
- Implement automatic horizontal scrolling every ~5 seconds
- Pause auto-scroll on hover/interaction
- Keep all existing functionality (section title, subtitle, decorative SVG, "View all projects" link)
- Reuse existing `ProjectCard` component as-is
- Maintain the existing scroll-reveal intersection observer for the section

**Non-Goals:**
- No changes to the `/projects` page or `ProjectsGrid` component
- No changes to `ProjectCard` component internals
- No changes to translations, data fetching, or routing
- No new npm dependencies — pure React state + CSS
- No swipe/touch support (out of scope for this change)
- No animation library integration beyond what's already present

## Decisions

**1. Approach: Pure React carousel vs. external library**
- Chosen: Pure React state (`useState` + `useEffect`) with CSS `overflow-x: hidden` on the container
- Rationale: With only 4 projects and a simple 3-at-a-time display, a full carousel library (Swiper, Embla) would be overkill. A `currentIndex` state with transforms works simply and cleanly.
- Alternatives considered: Embla Carousel (too heavy for this use case), Swiper (configuration overhead)

**2. Navigation strategy: translateX vs. scroll-snap**
- Chosen: CSS `transform: translateX()` on the inner track, calculated as `-currentIndex * (cardWidth + gap) / 3` (since 3 cards are visible)
- Rationale: Gives smooth control over transitions via CSS `transition: transform`. Each "page" shifts by exactly the width of 3 cards + gaps.
- Alternatives considered: `scroll-snap` with overflow-x auto (less control over auto-scroll timing and arrow visibility)

**3. Arrow visibility logic**
- Left arrow hidden when `currentIndex === 0`
- Right arrow hidden when `currentIndex === maxIndex` (where `maxIndex = projects.length - 3`)
- For 4 projects with 3 visible: maxIndex = 1 (two positions: [0,1,2] and [1,2,3])

**4. Auto-scroll behavior**
- `useEffect` with `setInterval` at 5000ms
- Auto-scroll pauses when user hovers over the carousel (`onMouseEnter`/`onMouseLeave`)
- Auto-scroll resets timer on manual navigation

**5. Responsive behavior**
- On `md` and above: show 3 cards horizontally in the carousel
- On smaller screens (< `md`): fall back to showing 1 card, making the carousel scroll one card at a time
- Arrow navigation adapts to the visible count

## Risks / Trade-offs

- [Responsive complexity] → Carousel needs to work at both 3-cards and 1-card views. Using a dynamic `visibleCount` based on screen width handles this cleanly with a `useEffect` + resize listener.
- [Auto-scroll can be annoying] → Pause on hover and reset on manual interaction mitigates this. Users who don't interact just see a gentle rotation.
- [Only 4 projects] → The carousel is lightweight and will naturally scale as more projects are added. The `maxIndex` calculation is dynamic based on `projects.length - visibleCount`.
