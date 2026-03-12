# AUDIT RESULTS — Science, Faith & Dialogue

**Audit Date:** 2026-03-12
**Auditor:** Claude (automated deep audit)
**Repo:** `science-faith-dialogue`
**Branch:** `claude/audit-enhance-dialogue-E6jdQ`

---

## 1. Build Status

| Check | Result |
|-------|--------|
| `npm install` | ✅ Clean install, no vulnerabilities |
| `npm run build` | ✅ Builds in ~2.2s, 6 pages, no errors or warnings |
| Static output | ✅ `dist/` with correct paths under `/science-faith-dialogue/` |
| GitHub Actions workflow | ✅ Correct: Node 22, `npm ci`, `astro build`, Pages deploy |
| Base path config | ✅ `base: '/science-faith-dialogue/'` in `astro.config.mjs` |
| TypeScript | ✅ Strict config, JSX set to `react-jsx` |
| Dependency versions | ✅ Astro 5.17 + React 19.2 + Tailwind 4.2 — all compatible |

**Note:** `astro check` was removed from CI (commit `8ffc236`) because DN II types still referenced in components would cause TS errors. This is tracked below.

---

## 2. Issues Found

### 🔴 BREAKING Issues

| # | File | Line(s) | Description | Fix |
|---|------|---------|-------------|-----|
| B1 | `src/components/QuickCheck.tsx` | 2 | Imports `QuickCheckItem` from `../data/types` but this type does not exist in `types.ts`. The interface is `QuickCheckQuestion` instead. Would cause TS error if `astro check` were re-enabled. | Rename import to `QuickCheckQuestion`, or rename interface in `types.ts` to `QuickCheckItem`, or add a type alias. Also note the component uses `item.correct` but the interface defines `correctIndex`. |
| B2 | `src/components/ConceptMap.tsx` | 162 | References CSS custom properties that don't exist in `global.css`: `--color-ink-400`, `--color-jade-600`, `--color-jade-500`, `--color-ink-300`, `--color-cosmos-700`, `--color-cosmos-950`, `--color-sandstone-100`. These are DN II tokens. Component will render with broken/missing colors. | Either remove this component (it's a Hindu concept map, not relevant) or port it to the v4 palette. Recommend removal. |
| B3 | `src/components/TermTooltip.tsx` | 107–117, 137–138, 151, 155, 166–176 | References many DN II CSS variables: `--color-terra-400`, `--color-cosmos-700`, `--color-cosmos-950`, `--color-sandstone-200`, `--color-sacred-300`, `--color-sacred-400`. Will render with broken colors if used. | Port to v4 palette tokens (gold, teal, rust, dark, warm) before using in any page. |
| B4 | `src/components/KeyTerms.tsx` | 28–68 | Uses DN II Tailwind classes: `border-sandstone-200`, `hover:border-sacred-300`, `bg-sandstone-50`, `text-cosmos-800`, `text-terra-500`, `text-ink-400`, `text-sacred-700`, `bg-sacred-50`. None of these exist in the v4 theme. | Port to v4 palette or replace with inline styles matching v4 tokens. |
| B5 | `src/components/PersonCard.tsx` | 22–49, 75–137 | Entire component uses DN II color system (`cosmos`, `terra`, `sacred`, `jade` color maps via Tailwind classes). Also contains Slovak UI text. | Full rewrite needed for v4 palette + English UI text. |
| B6 | `src/components/StudyQuestions.tsx` | 27–58 | Uses DN II Tailwind classes (`text-cosmos-800`, `border-sandstone-200`, `bg-sacred-100`, `text-sacred-700`, `text-sacred-300`, `text-ink-*`). Slovak label "Nápoveda". | Port to v4 palette + translate to English. |
| B7 | `src/components/ImageLightbox.tsx` | 41, 55, 65–66 | Slovak aria-labels: "Zväčšiť obrázok", "Zavrieť". DN II Tailwind classes: `bg-sandstone-200/80`, `hover:bg-sandstone-300`, `text-ink-600`. | Translate labels + port to v4 palette. |

### 🟡 WARNING Issues

| # | File | Line(s) | Description | Fix |
|---|------|---------|-------------|-----|
| W1 | `src/pages/404.astro` | 7–23 | **Entirely in Slovak.** Title "Stránka nenájdená", body text, button labels "Úvodná stránka" and "Sylabus kurzu". Links to non-existent `${base}sylabus` route. Uses DN II Tailwind classes (`bg-sacred-500`, `text-cosmos-950`, `border-sandstone-300`, `text-ink-600`, etc.). | Rewrite in English. Fix link targets. Port to v4 palette. |
| W2 | `src/pages/presentation.astro` | 3 | Imports `keyTerms`, `persons`, `fineTuningConstants`, `imagoDeiUnderstandings` but **none** are rendered in the template — only used as text content in prose. The data arrays are imported but never iterated over or passed to components. | Remove unused imports (`keyTerms`, `persons`, `fineTuningConstants`, `imagoDeiUnderstandings`) since no React components consume them on this page. Or add components that use them. |
| W3 | `src/data/types.ts` | 25–28, 67–80 | `TimelineEvent`, `ConceptNode`, `ConceptConnection`, `StudyQuestion`, `QuickCheckQuestion` interfaces are defined but **never used by any page**. Only `KeyTerm`, `Person`, `FineTuningConstant`, and `ImagoDeiUnderstanding` are used (by `presentation.ts`). | Either remove unused interfaces or keep them for planned future components. Not harmful but adds maintenance burden. |
| W4 | `src/styles/global.css` | 231–237 | Act accent CSS classes (`.act-opening`, `.act-creation`, `.act-buddhism`, `.act-person`, `.act-limits`, `.act-mystery`, `.act-closing`) are defined but **never applied** to any element in any page. | Either apply them to sections in `presentation.astro` or remove them. |
| W5 | `src/styles/global.css` | 249–264 | `.skip-to-content` class defined but `BaseLayout.astro` uses Tailwind `sr-only` instead (line 43). Duplicate approach. | Remove the CSS class since the Tailwind approach works. |
| W6 | `src/styles/global.css` | 319–335 | `.breadcrumb` CSS classes defined but only used in `_template.astro.example` (DN II template). Not used in any live page. | Remove or keep for future use. |
| W7 | `src/styles/global.css` | 413–419 | Print styles reference `[data-accordion-content]` and `[data-expandable]` data attributes that don't exist anywhere in the codebase. | Remove dead CSS selectors. |
| W8 | `src/templates/_template.astro.example` | 1–422 | **Entire DN II module template** with Slovak text, references to non-existent components (`TraditionCard`, `ComparisonTable`, `SacredTextExcerpts.astro`, `ReflectionPrompts.astro`, `VideoEmbed.astro`), and imports from non-existent data files (`../../data/budhizmus`, `../../data/traditions`). | Delete this file entirely — it's a DN II artifact not relevant to this project. |
| W9 | `public/images/` | — | Contains 4 DN II image directories (`budhizmus/`, `hinduizmus/`, `judaizmus/`, `krestanstvo/`) with ~15 images totaling several MB. **None are referenced** by any page in this project. | Delete all DN II image directories to reduce repo size. |
| W10 | `src/components/ConceptMap.tsx` | 30–98 | Contains Hindu philosophical content in Slovak (Brahman, Māyā, Ātman, etc.). Not relevant to this project at all. | Delete or replace with a Christianity-Buddhism concept map. |
| W11 | `src/components/QuickCheck.tsx` | 48–50, 134 | Slovak UI text: "Správne!", "Nie celkom", "Rýchla kontrola", "Skúsiť znova". | Translate to English: "Correct!", "Not quite", "Quick Check", "Try again". |
| W12 | `src/components/PersonCard.tsx` | 75–77, 106, 112, 125 | Slovak UI text: "Kľúčové učenie", "Skryť podrobnosti", "Kľúčové dátumy a prepojenia", "Kľúčové dátumy", "Prepojenia". | Translate to English. |
| W13 | `src/components/KeyTerms.tsx` | 66 | Slovak UI text: "Súvisiace:" (meaning "Related:"). | Translate to English. |
| W14 | `src/components/TermTooltip.tsx` | 166–176 | Links to `#pojmy` (Slovak section ID for "Terms"). Text says "Viac v Pojmoch →" (Slovak for "More in Terms →"). | Change to `#glossary` or `${base}glossary` and translate text. |
| W15 | `src/pages/presentation.astro` | 120–122, 308–310, 429–431, 535–537 | Pull quotes use **two different styles**: some have `border-left` + background (lines 50, 202, 368), others use centered + `border-top/bottom` (lines 120, 308, 429, 535). Inconsistent visual language. | Unify to one style or make the difference intentional (e.g., "author quotes" vs "thesis statements"). |
| W16 | `src/pages/presentation.astro` | 215 | Fork diagram uses `grid-template-columns: 1fr 60px 1fr` which will collapse poorly on mobile. No responsive breakpoint. | Add a `@media` query or Tailwind responsive class to stack on small screens. |
| W17 | `src/pages/presentation.astro` | 470 | Four Pillars grid uses `grid-template-columns: 1fr 1fr` with no responsive breakpoint. Will be cramped on mobile. | Add responsive stacking for `< 640px`. |
| W18 | `src/data/presentation.ts` | 4–7 | Imports `ConceptNode` and `ConceptConnection` types but never uses them. | Remove unused type imports. |

### 🟢 SUGGESTION Issues

| # | File | Description | Suggestion |
|---|------|-------------|------------|
| S1 | `src/pages/presentation.astro` | ~550 lines of inline styles. Every element uses `style=""` attributes. Very verbose and hard to maintain. | Consider extracting repeated patterns to CSS classes in `global.css` or use Tailwind utility classes. An `<InsightBox>` Astro component for the `<details>` pattern would reduce ~120 lines of repetitive markup. |
| S2 | `src/pages/presentation.astro` | No table of contents / section navigation. Long single-page scroll (~66 KB). | Add a sticky section nav (like `BaseLayout` mobile menu) listing Opening, Act I–V, Closing. The act accent classes are already defined for this purpose. |
| S3 | `src/pages/presentation.astro` | No scroll-triggered animations. The v4 HTML had fade-in effects. `.animate-section` class exists in CSS but is never used. | Add `class="animate-section"` to section wrappers, or implement an Intersection Observer for lazy reveals. |
| S4 | `src/pages/presentation.astro` | No reading progress bar. The v4 HTML had one. | Add a thin progress bar at the top of the viewport using a scroll event listener. |
| S5 | `BaseLayout.astro` | `<link rel="canonical">` constructs URL correctly but has no `<link rel="icon">` for the favicon. | Add `<link rel="icon" href="${base}favicon.svg" type="image/svg+xml" />` to `<head>`. |
| S6 | `BaseLayout.astro` | Google Fonts loaded as render-blocking `<link>`. No `font-display: optional` fallback in the `<link>` tag (it does use `display=swap` in the URL). | Consider adding `<link rel="preload">` for the font CSS. The `display=swap` in the URL is correct. |
| S7 | `global.css` | Body font set in both CSS (`var(--font-serif)` in `@layer base`) and HTML (`style="font-family: 'Lora', serif;"` in `BaseLayout.astro` line 41). Redundant. | Remove the inline `style` on `<body>` since CSS handles it. |
| S8 | `presentation.astro` | Heading hierarchy: H1 → H2 for act titles → H3 for sub-sections → H5 for fork diagram titles. Skips H4. | Change fork diagram `<h5>` to `<h4>` for proper hierarchy. |
| S9 | `presentation.astro` | `<details>` elements use `cursor: pointer` on the container but `<summary>` already has pointer cursor by default. | Minor — no functional impact. |
| S10 | All pages | No `lang` attribute on `<html>` for the page language. `BaseLayout.astro` has `lang="en"` which is correct. | ✅ Already correct. |
| S11 | `further-reading.astro` | Bibliography entries are plain `<p>` tags with hanging indent. | Consider using `<cite>` or a proper bibliography list for semantic HTML. |
| S12 | `glossary.astro` | Glossary cards don't link to the relevant section in `presentation.astro`. | Add anchor links from each term card to the Act where it appears. |
| S13 | `public/favicon.svg` | Default Astro favicon. Not project-specific. | Replace with a custom favicon matching the gold ✦ logo. |

---

## 3. Enhancement Proposals

### Ranked by Impact / Effort Ratio

| Rank | Enhancement | Impact | Effort | Notes |
|------|-------------|--------|--------|-------|
| 1 | **Fix 404 page** (English, v4 palette, correct links) | High | 10 min | Currently shows Slovak to all users |
| 2 | **Remove DN II artifacts** (template, images, ConceptMap data) | High | 5 min | Reduces confusion and repo size |
| 3 | **Add responsive breakpoints** to fork diagram + four pillars | High | 15 min | Currently broken on mobile |
| 4 | **Translate component UI text** (7 components) | High | 30 min | Slovak labels visible to end users |
| 5 | **Port component color tokens** to v4 palette | High | 45 min | Components unusable until this is done |
| 6 | **Add section navigation** to presentation page | Medium | 30 min | Improves UX for long page |
| 7 | **Create `<InsightBox>` component** | Medium | 20 min | Replaces ~120 lines of repeated `<details>` markup |
| 8 | **Add favicon** matching the ✦ brand | Low | 5 min | Polish |
| 9 | **Add reading progress bar** | Low | 15 min | Polish, nice-to-have |
| 10 | **Add scroll animations** | Low | 15 min | CSS class already exists |
| 11 | **Clean up unused CSS** | Low | 10 min | Reduce CSS bundle |
| 12 | **Add `<link rel="icon">`** in BaseLayout | Low | 1 min | Currently missing |

### Structural Recommendation

**Should `presentation.astro` be broken into components?**

**Verdict: Not yet.** The 552-line single file is manageable. Breaking into per-Act components would add complexity (props passing, shared styles) without a proportional maintainability gain at this size. However, an `<InsightBox>` component for the 7 repeated `<details>` patterns is clearly worthwhile.

**Should inline styles be migrated?**

**Verdict: Partially.** The inline styles work and are easy to understand. But the most-repeated patterns should be extracted:
- Pull quotes (2 styles × multiple instances)
- Act headers (repeated pattern across 7 sections)
- `<details>` insight boxes (7 instances, identical structure)
- Section wrappers (repeated max-width + padding pattern)

---

## 4. Component Recommendations

### Existing DN II Components — Disposition

| Component | Status | Recommendation |
|-----------|--------|----------------|
| `ConceptMap.tsx` | Hindu content in Slovak, DN II colors | **Replace** with Christianity-Buddhism concept map or **delete** |
| `KeyTerms.tsx` | Reusable but needs v4 palette + English | **Port** — worth keeping, good accordion UX |
| `PersonCard.tsx` | Reusable but needs v4 palette + English | **Port** — worth keeping for persons display |
| `QuickCheck.tsx` | Broken type import, Slovak text, DN II colors | **Port** — useful for interactive engagement |
| `StudyQuestions.tsx` | Slovak text, DN II colors | **Port** — useful for study mode |
| `TermTooltip.tsx` | Slovak text, DN II colors, links to `#pojmy` | **Port** — very useful for inline term definitions |
| `ImageLightbox.tsx` | Slovak aria-labels, DN II colors | **Port** — useful for any future images |

### Proposed New Components — Build / Skip Verdicts

| # | Component | Verdict | Reasoning |
|---|-----------|---------|-----------|
| 1 | **FineTuningSlider** | **BUILD** (moderate) | Data already in `presentation.ts`. Interactive slider showing "what if constants changed?" is pedagogically powerful and hard to replicate in static HTML. The 4 constants with tooSmall/tooLarge descriptions are perfect slider fodder. |
| 2 | **ImagoDeiCards** | **BUILD** (simple) | Data already in `presentation.ts`. Four cards with flip/expand showing sovereignty/correspondence/relationality/storytelling. Static HTML could work but cards with reveal are more engaging. |
| 3 | **FrogFable** | **SKIP** | The five biologists' perspectives are already well-told in prose. An interactive illustration would be fun but adds complexity for modest pedagogical gain. The writing carries this passage. |
| 4 | **ScientismRadar** | **SKIP** | Three impulses (imperialist, salvific, absolutist) don't map naturally to radar chart axes. A simple diagram or the existing `<details>` box works better. Forcing this into a chart would distort the content. |
| 5 | **ApophaticComparison** | **BUILD** (simple) | Side-by-side of Christian apophatic tradition and Buddhist śūnyatā would be visually striking and pedagogically clear. The `<details>` box currently handling this is good but a structured comparison would be better. |
| 6 | **ForkDiagram** | **SKIP** | Current CSS Grid fork diagram is clean and effective. A React version with animation would be over-engineering. The static version communicates the divergence clearly. Fix the mobile responsiveness instead. |
| 7 | **RealityLevels** | **SKIP** | Bhaskar's stratified reality is mentioned only briefly. A full visualization component is disproportionate to its role in the presentation. |
| 8 | **ChristianityBuddhismComparisonMap** | **BUILD** (moderate) | This would replace the DN II Hindu `ConceptMap.tsx`. A concept map showing convergences (mutual interdependence, critique of autonomous ego, epistemic humility) and divergences (transcendent ground vs. no ground, given nature vs. no-self, love as ontological vs. compassion as practice) would be the single most valuable new component. |
| 9 | **ScienceReligionTimeline** | **SKIP** | The presentation is not structured chronologically. A timeline would feel disconnected from the argument's flow. Better suited for a separate "Historical Context" page if ever needed. |

**Summary: BUILD 4 components** (FineTuningSlider, ImagoDeiCards, ApophaticComparison, ChristianityBuddhismComparisonMap), **SKIP 5**.

---

## 5. Quick Wins (< 5 minutes each)

1. **Delete `src/templates/_template.astro.example`** — pure DN II artifact
2. **Delete `public/images/budhizmus/`, `hinduizmus/`, `judaizmus/`, `krestanstvo/`** — unused DN II images
3. **Add `<link rel="icon" href="${base}favicon.svg" type="image/svg+xml" />` to `BaseLayout.astro`**
4. **Remove unused imports from `presentation.astro` line 3** — `keyTerms`, `persons`, `fineTuningConstants`, `imagoDeiUnderstandings` are imported but never iterated
5. **Remove unused type imports from `presentation.ts` line 4–7** — `ConceptNode`, `ConceptConnection`
6. **Remove inline `style="font-family: 'Lora', serif;"` from `<body>` in `BaseLayout.astro`** — redundant with CSS
7. **Change `<h5>` to `<h4>` in fork diagram** (presentation.astro lines 217, 226) for heading hierarchy
8. **Add `<link rel="icon">` to BaseLayout head**
9. **Remove dead CSS selectors** for `[data-accordion-content]` and `[data-expandable]` in global.css

---

## 6. Accessibility Audit

| Check | Status | Notes |
|-------|--------|-------|
| Skip-to-content link | ✅ | Present in BaseLayout (line 43) |
| Heading hierarchy | ⚠️ | H1 → H2 → H3 is good, but fork diagram uses H5 (skips H4) |
| Landmark regions | ✅ | `<nav>`, `<main>`, `<footer>` all present |
| `lang` attribute | ✅ | `<html lang="en">` set correctly |
| Focus styles | ✅ | `:focus-visible` defined in global.css |
| Color contrast | ⚠️ | Some text-on-dark combinations may be borderline: `#a8a29e` on `#0f1419` (ratio ~4.8:1, passes AA but not AAA for body text). `#78716c` on `#0f1419` (~3.2:1) **fails AA for normal text**. |
| `<details>` accessibility | ⚠️ | Using `list-style: none` on `<summary>` removes the disclosure triangle in some browsers. Should use `summary::-webkit-details-marker { display: none }` instead, plus a custom expand/collapse indicator. |
| Images | ✅ | No images in active pages (DN II images are unused) |
| Mobile menu | ✅ | `aria-expanded` toggles correctly |
| Keyboard navigation | ✅ | All interactive elements are focusable |
| `prefers-reduced-motion` | ✅ | Respected in global.css (line 311–314) |

---

## 7. DN II Artifact Summary

Files/directories that are purely DN II remnants and can be safely removed:

| Path | Type | Size | Action |
|------|------|------|--------|
| `src/templates/_template.astro.example` | DN II module template | 12 KB | **Delete** |
| `public/images/budhizmus/` | 5 DN II images | ~2 MB | **Delete** |
| `public/images/hinduizmus/` | 4 DN II images + .gitkeep | ~3 MB | **Delete** |
| `public/images/judaizmus/` | 4 DN II images | ~2 MB | **Delete** |
| `public/images/krestanstvo/` | 3 DN II images | ~1.5 MB | **Delete** |
| `src/components/ConceptMap.tsx` | Hindu concept map (Slovak) | 10 KB | **Replace or delete** |

Components to **port** (keep structure, update palette + language):
- `KeyTerms.tsx`, `PersonCard.tsx`, `QuickCheck.tsx`, `StudyQuestions.tsx`, `TermTooltip.tsx`, `ImageLightbox.tsx`

---

## 8. Content Integrity — Cross-Reference with Sources

### Presentation vs. Manuscript

The presentation content (`presentation.astro`) is well-grounded in the manuscript (`Valco_Science_Creation_Contingency_Human_Person_TNTI_Manuscript.md`). Key alignment:

- **Act I (Creation & Contingency):** Faithfully presents the Logos argument, de-divinization thesis, contingency-demands-observation argument, Torrance's "object determines method" principle, and the Jaki/Harrison historical thesis. All well-sourced.
- **Act II (Buddhist Response):** Engages Nguyen's *Emptiness of Everything* accurately (compositionality + impermanence = emptiness). The fork diagram captures the genuine divergence. Colligation concept properly attributed to Whewell/McGrath.
- **Act III (The Person Who Knows):** Imago Dei four-fold analysis (sovereignty, correspondence, relationality, storytelling) matches the manuscript. Engagement with Nguyen's eliminativism is fair and substantive.
- **Act IV (Limits of Science):** Kidd's three impulses of scientism properly presented. Feser's circularity argument correctly summarized. Midgley reference accurate.
- **Act V (Mystery & Trans-Rational):** Otto's numinous, Weber's *stahlhartes Gehäuse*, Vico's epistemic humility, Gregory of Nyssa, Pseudo-Dionysius — all properly sourced.
- **Closing:** Four pillars summary is accurate. "What Happens to Love?" section is original to the presentation (not in the v4 HTML or reading notes) — a genuine extension of the argument.

### Glossary vs. Sources

All 12 key terms in `presentation.ts` are well-defined and consistent with the reading notes. The `originalScript` values for Sanskrit/Pali/Greek/German terms are accurate.

### Further Reading vs. Sources

Bibliography is accurate but could be expanded:
- Missing: Kidd, Ian James (the scientism analysis is cited in the presentation but his work isn't in Further Reading)
- Missing: Gregory of Nyssa and Pseudo-Dionysius (primary sources for the apophatic tradition discussed in Act V)
- Missing: Weber's *stahlhartes Gehäuse* source
- Missing: Vico's *New Science* (referenced in Act V)
- Missing: Rose, Steven *Lifelines* is listed but should be verified against the frog fable source (Rose tells this in the book)

---

## 9. Literature Enrichment Suggestions

*Based on web search for post-2020 peer-reviewed sources relevant to the presentation's arguments.*

### Recommended New Sources

1. **McGrath, Alister E. *Natural Philosophy: On Retrieving a Lost Disciplinary Imaginary.* Oxford: Oxford University Press, 2023.**
   - Argues for recovering "natural philosophy" as an integrative framework that preceded the science-religion split. Directly relevant to the colligation theme. McGrath extends his "multiple rationalities" argument with a historical case for reunification.
   - **Connection:** Strengthens the Opening's argument about colligation and epistemological pluralism.

2. **Gleiser, Marcelo. *The Dawn of a Mindful Universe: A Manifesto for Humanity's Future.* New York: HarperOne, 2023.**
   - Physicist argues that science needs contemplative and ethical dimensions. Convergent with both Christian and Buddhist critiques of scientism.
   - **Connection:** Supports Act IV (limits of science) from within the scientific community.

3. **Kidd, Ian James. "Charging Others with Epistemic Vices." *The Monist* 103, no. 2 (2020): 181–196.**
   - Develops the epistemic vice framework for understanding scientism. The three impulses (imperialist, salvific, absolutist) discussed in the presentation originate from Kidd's broader work on epistemic vices.
   - **Connection:** Act IV directly uses Kidd's framework. This paper should be in Further Reading.

4. **Tanzella-Nitti, Giuseppe. "Theology and Science: Where Does Theology Stand in the Age of Artificial Intelligence?" *Scientia et Fides* 11, no. 1 (2023): 15–38.**
   - Catholic theologian examines AI through the lens of theological anthropology. Argues that AI raises questions about the imago Dei that neither reductionism nor vitalism can answer.
   - **Connection:** Directly relevant to Act III (The Person Who Knows) and the AI Test insight box.

5. **Thích Nhất Hạnh. *Zen and the Art of Saving the Planet.* New York: HarperOne, 2021.**
   - Presents interbeing (dependent origination) as a framework for ecological ethics and AI ethics. While not academic in the strict sense, it represents an influential Buddhist voice on science-and-religion themes.
   - **Connection:** Act II's treatment of dependent origination and its ethical implications.

---

## 10. Performance Notes

| Metric | Value | Assessment |
|--------|-------|------------|
| Build time | 2.17s | Excellent |
| Client JS bundle | 194.6 KB (61 KB gzip) | Acceptable but could be reduced — this includes React runtime for components not yet used |
| Total pages | 6 | Fine |
| Fonts | 3 families via Google Fonts | Render-blocking but uses `display=swap` |
| Images | 0 used (DN II images are dead weight) | Remove DN II images to reduce repo |
| CSS | Custom properties + Tailwind 4 | Clean, some unused selectors (noted above) |

**Key observation:** The 194 KB client bundle includes React, but no React components are actually rendered on any page (no `client:load` or `client:visible` directives in live pages). The components exist in `src/components/` but are only imported in the DN II template example. This means the React bundle is being shipped for nothing. Once DN II components are removed or the new components are built and used, this will resolve naturally.

---

*End of audit. See individual sections for actionable items.*
