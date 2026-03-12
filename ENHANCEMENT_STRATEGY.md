# Enhancement Strategy — Presentation Page Layout & UX

**Date:** 2026-03-12
**Target:** `src/pages/presentation.astro` + `src/styles/global.css` + `src/layouts/BaseLayout.astro`
**Goal:** Transform the presentation from a flat single-column scroll into a rich, navigable scholarly reading experience

---

## Current State

The presentation page is a **552-line, ~66 KB single-column layout** at `max-width: 48rem`. Every element uses inline `style=""` attributes. The reader experience is:

- No orientation — you don't know where you are in the argument
- No way to jump between sections
- No way to return to the top after a long scroll
- No margin notes despite the CSS already supporting them (`global.css` lines 270–296)
- No use of the wide screen — the content is trapped in a narrow center column even on 1920px+ monitors
- The `<details>` insight boxes are the only interactive elements
- Pull quotes use two inconsistent styles
- No reading progress indicator

---

## Proposed Layout: Three-Zone Architecture

On screens ≥ 1280px, the presentation page adopts a **three-zone layout**:

```
┌─────────────────────────────────────────────────────────────────────┐
│  ████ Progress bar (thin, gold, fixed top)                         │
├──────────────┬──────────────────────────────┬───────────────────────┤
│              │                              │                       │
│  Sticky ToC  │   Main Prose Column          │   Margin Notes Zone   │
│  (left rail) │   (max-width ~42rem)         │   (right rail)        │
│              │                              │                       │
│  Opening     │   [Content flows here]       │   [Contextual notes,  │
│  Act I  ●    │                              │    term definitions,   │
│  Act II      │   Pull quote...              │    cross-references]   │
│  Act III     │                              │                       │
│  Act IV      │   <details> insight box      │   margin-note: "See   │
│  Act V       │                              │   McGrath, ch. 4"     │
│  Closing     │   Fork diagram...            │                       │
│              │                              │                       │
│              │                              │   ↑ Back to top       │
├──────────────┴──────────────────────────────┴───────────────────────┤
│  Navigation footer                                                  │
└─────────────────────────────────────────────────────────────────────┘
```

### Responsive Behavior

| Breakpoint | Layout | ToC | Margin Notes | Back-to-top |
|------------|--------|-----|--------------|-------------|
| ≥ 1280px | Three-zone (left rail + center + right rail) | Sticky left sidebar | Float right in margin | Fixed bottom-right |
| 768px–1279px | Two-zone (center + collapsible ToC) | Floating button → slide-in overlay | Inline (below paragraph) | Fixed bottom-right |
| < 768px | Single column | Hamburger → full-width dropdown | Inline (below paragraph) | Fixed bottom-right |

---

## Component Breakdown

### 1. Reading Progress Bar

**What:** A thin (3px) gold bar at the very top of the viewport showing scroll progress through the presentation.

**Implementation:** Pure CSS + tiny inline `<script>` in `presentation.astro`. No React needed.

```
Position: fixed, top: 0, left: 0, z-index: 60
Width: calc(scrollY / (docHeight - viewportHeight) * 100%)
Color: var(--color-gold-400) with a subtle glow
```

**Effort:** ~15 lines JS + ~5 lines CSS. Tiny. High impact.

### 2. Sticky Table of Contents (Left Rail)

**What:** A fixed sidebar listing all sections (Opening, Act I–V, Closing) with:
- Active section highlighting via Intersection Observer
- Compact labels with act accent colors
- Click-to-scroll navigation
- Subtle dot/line connecting the items vertically

**Implementation:** Astro component (no React needed — pure HTML + CSS + `<script>`). The section IDs already exist (`#opening`, `#act-i`, `#act-ii`, etc.).

**Structure:**
```html
<aside class="toc-rail">
  <nav aria-label="Presentation sections">
    <a href="#opening" class="toc-link" data-section="opening">
      <span class="toc-dot"></span>
      <span class="toc-label">Opening</span>
    </a>
    <a href="#act-i" class="toc-link" data-section="act-i">
      <span class="toc-dot"></span>
      <span class="toc-label">Act I · Creation</span>
    </a>
    <!-- ... -->
  </nav>
</aside>
```

**Behavior:**
- Desktop (≥1280px): Fixed position left rail, always visible
- Tablet (768–1279px): Hidden by default, toggled by a floating "§" button (bottom-left)
- Mobile (<768px): Accessible via a dropdown at the top of the page

**Effort:** ~60 lines HTML, ~80 lines CSS, ~30 lines JS (Intersection Observer). Medium.

### 3. Margin Notes (Right Rail)

**What:** Tufte-style sidenotes that appear in the right margin on wide screens. The CSS already exists in `global.css` (lines 270–296) but is never used.

**Content types for margin notes:**
- Source attributions ("McGrath, *Science & Religion*, ch. 4")
- Key term quick definitions (linking to glossary)
- Cross-references between Acts ("See also Act V's treatment of this theme")
- Original-language terms with transliterations
- Brief editorial notes ("This is the presentation's original contribution")

**Implementation:** HTML `<aside class="margin-note">` elements placed inline within the prose. The existing CSS floats them right on ≥1440px. We adjust the breakpoint to ≥1280px to align with the three-zone layout.

**Current CSS (already exists, needs minor adjustment):**
```css
.margin-note {
  /* Mobile: inline block below paragraph */
  display: block;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  /* ... */
}

@media (min-width: 1280px) {  /* was 1440px */
  .margin-note {
    float: right;
    clear: right;
    margin-right: -16rem;  /* adjust for new layout */
    width: 13rem;
    /* ... */
  }
}
```

**Effort:** Adjust 2 CSS values + add ~20–30 margin note elements to `presentation.astro`. Low-medium.

### 4. Back-to-Top Button

**What:** A small floating button (bottom-right) that appears after scrolling past the first section. Click returns to `#top`.

**Implementation:** Pure CSS + JS. Show/hide based on `scrollY > 400`.

```html
<button id="back-to-top" class="back-to-top" aria-label="Back to top">↑</button>
```

**Styling:**
- 40×40px circle, `var(--color-gold-400)` on `var(--color-dark-900)`
- `position: fixed; bottom: 2rem; right: 2rem;`
- `opacity: 0` when near top, `opacity: 1` when scrolled down
- Smooth scroll via `scroll-behavior: smooth` (already in CSS)

**Effort:** ~10 lines HTML, ~15 lines CSS, ~8 lines JS. Tiny.

### 5. Three-Column CSS Grid Container

**What:** A CSS Grid wrapper that creates the three-zone layout on wide screens.

**Implementation:** Replace the current `max-width: 48rem; margin: 0 auto;` pattern with a grid container:

```css
.presentation-layout {
  display: grid;
  grid-template-columns: 1fr;  /* mobile: single column */
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 1280px) {
  .presentation-layout {
    max-width: 90rem;
    grid-template-columns: 14rem 1fr 16rem;
    gap: 2rem;
    padding: 0 2rem;
  }
}
```

The left column holds the sticky ToC. The center column holds the prose (natural max-width from the prose class). The right column provides space for margin notes to float into without overlapping.

**Key decision:** The dark-background sections (Act I, Act V, Closing) span the full viewport width for visual impact, but the *content within them* still follows the three-column grid. This means each full-width section gets its own internal grid.

**Effort:** ~30 lines CSS + restructure the `<section>` wrappers in `presentation.astro`. Medium.

---

## Additional UX Enhancements

### 6. InsightBox Component (Astro, not React)

Extract the repeated `<details>` pattern (7 instances, ~120 lines of duplicated markup) into an Astro component:

```astro
<!-- src/components/InsightBox.astro -->
---
interface Props {
  title: string;
  color?: 'gold' | 'teal' | 'rust';
}
const { title, color = 'teal' } = Astro.props;
---
<details class={`insight-box insight-box--${color}`}>
  <summary>{title}<span class="insight-explore">Explore</span></summary>
  <div class="insight-content"><slot /></div>
</details>
```

**Effort:** ~20 lines component + ~30 lines CSS + replace 7 instances. Low.

### 7. Unify Pull Quote Styles

Currently two styles:
- **Style A:** `border-left` + gradient background (used for prose quotes)
- **Style B:** Centered + `border-top/bottom` (used for thesis statements)

**Proposal:** Keep both but make them intentional CSS classes:
- `.pull-quote--prose` — for attributed or contextual quotes (border-left)
- `.pull-quote--thesis` — for standalone thesis statements (centered, border-top/bottom)

**Effort:** ~15 lines CSS + update class names on ~8 elements. Low.

### 8. Section Transition Markers

Add subtle visual transitions between Acts — a thin decorative divider with the act number/symbol:

```html
<div class="act-divider" aria-hidden="true">
  <span class="act-divider__number">II</span>
</div>
```

This helps the reader feel the structure even while scrolling. The act accent colors (already defined in CSS but unused) would finally be applied here.

**Effort:** ~15 lines CSS + ~7 divider elements. Low.

### 9. Mobile-Responsive Fork Diagram

The fork diagram (`grid-template-columns: 1fr 60px 1fr`) breaks on mobile. Fix:

```css
@media (max-width: 640px) {
  .fork-diagram {
    grid-template-columns: 1fr;
  }
  .fork-connector { display: none; }
}
```

**Effort:** ~10 lines CSS. Tiny. (Already flagged as W16 in audit.)

### 10. Mobile-Responsive Four Pillars Grid

Same fix for the Four Pillars (`grid-template-columns: 1fr 1fr`):

```css
@media (max-width: 640px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}
```

**Effort:** ~5 lines CSS. Tiny. (Already flagged as W17 in audit.)

---

## Implementation Order

| Phase | Items | Effort | Cumulative |
|-------|-------|--------|------------|
| **A: Quick structural fixes** | #9 Fork responsive, #10 Pillars responsive, #7 Pull quote unification | ~30 min | 30 min |
| **B: Navigation & orientation** | #1 Progress bar, #4 Back-to-top, #2 Sticky ToC | ~1.5 hrs | 2 hrs |
| **C: Three-column layout** | #5 CSS Grid container, #3 Margin notes (adjust CSS + add content) | ~2 hrs | 4 hrs |
| **D: Component extraction** | #6 InsightBox, #8 Section dividers | ~45 min | ~5 hrs |

**Phase A** is non-breaking — pure CSS additions that improve mobile without touching the desktop layout.

**Phase B** adds navigation features that work independently of the layout change.

**Phase C** is the big structural change — switching from `max-width: 48rem` to a CSS Grid. This should be done in one pass since it touches every section wrapper.

**Phase D** is cleanup/polish that reduces code duplication.

---

## What This Does NOT Include

- **React components** (FineTuningSlider, ImagoDeiCards, etc.) — these are separate Phase 6 work
- **Dark mode toggle** — the site already has a dark palette for certain sections; a full toggle is a separate feature
- **Search** — not needed for a 6-page site
- **Comments/annotations** — out of scope for a scholarly presentation

---

## Files Modified

| File | Changes |
|------|---------|
| `src/pages/presentation.astro` | Grid wrapper, margin notes, InsightBox usage, section IDs, responsive fixes |
| `src/styles/global.css` | Three-column grid, ToC rail, progress bar, back-to-top, InsightBox, pull quote variants, section dividers, responsive breakpoints |
| `src/layouts/BaseLayout.astro` | Progress bar script (or in presentation.astro), back-to-top button |
| `src/components/InsightBox.astro` | **New file** — Astro component for `<details>` insight boxes |

---

*This strategy transforms the presentation from a readable-but-static long scroll into a navigable, layered scholarly reading experience — without losing the simplicity of static HTML or requiring React.*
