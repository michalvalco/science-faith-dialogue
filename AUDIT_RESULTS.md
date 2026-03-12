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
| Dependency versions | ✅ Astro 5.17.1 + React 19.2.4 + Tailwind 4.2.0 — all compatible |

**Note:** `astro check` is currently disabled in CI (see `.github/workflows/deploy.yml`) because DN II types still referenced in components would cause TS errors. This is tracked below.

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
8. **Remove dead CSS selectors** for `[data-accordion-content]` and `[data-expandable]` in global.css

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

### Source Documents Reviewed

| Document | Focus | Used in |
|----------|-------|---------|
| `Valco_Science_Creation_Contingency_Human_Person_TNTI_Manuscript.md` | Full manuscript — master source for all Acts | Acts I–V, Closing |
| `McGrath_Science_Religion_2020_Reading_Notes.md` | McGrath's methodology, models, historical analysis | Opening (colligation), Act I (contingency), Act IV (limits) |
| `Nguyen_Emptiness_of_Everything_Reading_Notes.md` | Buddhist śūnyatā, dependent origination, no-self | Act II (Buddhist response), Act III (anattā), Act V (apophatic) |
| `McGrath_Territories_Reading_Notes.md` | Epistemological territories, multiple rationalities | Opening (colligation), Act IV (scientism critique) |

### Presentation vs. Manuscript — Detailed Alignment

- **Act I (Creation & Contingency):** Faithfully presents the Logos argument, de-divinization thesis, contingency-demands-observation argument, Torrance's "object determines method" principle, and the Jaki/Harrison historical thesis. All well-sourced.
- **Act II (Buddhist Response):** Engages Nguyen's *Emptiness of Everything* accurately (compositionality + impermanence = emptiness). The fork diagram captures the genuine divergence. Colligation concept properly attributed to Whewell/McGrath.
- **Act III (The Person Who Knows):** Imago Dei four-fold analysis (sovereignty, correspondence, relationality, storytelling) matches the manuscript. Engagement with Nguyen's eliminativism is fair and substantive.
- **Act IV (Limits of Science):** Kidd's three impulses of scientism properly presented. Feser's circularity argument correctly summarized. Midgley reference accurate.
- **Act V (Mystery & Trans-Rational):** Otto's numinous, Weber's *stahlhartes Gehäuse*, Vico's epistemic humility, Gregory of Nyssa, Pseudo-Dionysius — all properly sourced.
- **Closing:** Four pillars summary is accurate. "What Happens to Love?" section is original to the presentation (not in the v4 HTML or reading notes) — a genuine extension.

### Arguments in Sources NOT Used in Presentation

| # | Argument | Source | Potential Use |
|---|----------|--------|---------------|
| 1 | McGrath's 5 science-religion models (conflict, independence, dialogue, integration, partial overlap) | McGrath Reading Notes | Could strengthen Opening as a framing device |
| 2 | Galileo affair as *intra-Christian* debate, not science-vs-religion | McGrath Reading Notes | Would nuance Act I's historical claims |
| 3 | Darwin's complex personal faith journey | McGrath Reading Notes | Could enrich Act IV's science-faith boundary discussion |
| 4 | McGrath's critique of Dawkins' "God of the gaps" misrepresentation | McGrath Reading Notes | Relevant to Act IV on scientism |
| 5 | Nguyen's analysis of *saṅkhāra* (volitional formations) as karma mechanism | Nguyen Reading Notes | Could deepen Act II's dependent origination discussion |
| 6 | Nguyen's detailed *paṭicca-samuppāda* 12-link chain | Nguyen Reading Notes | Fork diagram could reference specific links |
| 7 | McGrath's "empirical fit" criterion for theology | Territories Reading Notes | Strengthens the colligation methodology argument |
| 8 | Polkinghorne's critical realism as bridge methodology | McGrath Reading Notes | Supports the Opening's epistemological pluralism |
| 9 | Nguyen's distinction between conventional and ultimate truth (*saṃvṛti-satya* / *paramārtha-satya*) | Nguyen Reading Notes | Could add depth to Act V's apophatic/śūnyatā comparison |
| 10 | McGrath's analysis of "natural theology" vs "theology of nature" | Territories Reading Notes | Could clarify Act I's theological framing |

### Original Extensions (Presentation Goes Beyond Sources)

1. **"What Happens to Love?" closing section** — Not in manuscript, v4 HTML, or reading notes. A genuine original extension of the argument from imago Dei to love as ontological category.
2. **Slovakia anecdote** (Opening) — Personal narrative not found in any academic source. Serves as rhetorical hook.
3. **AI Test insight box** (Act III) — The Turing Test framing for imago Dei is original to the presentation; sources discuss AI only in passing.

### Tension Points Needing Clarification

1. **Colligation attribution:** The presentation attributes colligation primarily to Whewell via McGrath, but the McGrath reading notes show McGrath develops it substantially beyond Whewell. The presentation could be clearer that this is McGrath's *retrieval and extension* of Whewell.
2. **Nguyen's position on consciousness:** The presentation frames Nguyen as "eliminativist" about the self, but the reading notes show Nguyen is more nuanced — he distinguishes between *conventional* self (accepted) and *ultimate* self (denied). The fork diagram could acknowledge this nuance.
3. **Fine-tuning argument strength:** The presentation presents fine-tuning as evidence for creation, but the McGrath reading notes show McGrath himself is cautious about fine-tuning as a "proof" — he prefers it as "consonance" or "empirical fit." The presentation's enthusiasm may slightly overstate McGrath's position.

### Glossary Cross-Check

All 12 key terms in `presentation.ts` are well-defined and consistent with the reading notes. The `originalScript` values are accurate with one note:

- **Anattā:** The glossary uses Pali script `අනත්ත` which is actually **Sinhala** script, not Pali (which uses Roman transliteration or Devanāgarī). This is not incorrect per se (Sinhala is used for Theravāda texts) but could be noted or changed to Devanāgarī `अनात्मन्` (anātman, Sanskrit equivalent).

### Further Reading — Gaps Analysis

| Author/Work | Cited in Presentation | In Further Reading | Action |
|-------------|----------------------|-------------------|--------|
| Kidd, Ian James (scientism analysis) | Act IV | ❌ Missing | **Add** — his work is central to the scientism framework |
| Gregory of Nyssa (*Life of Moses*) | Act V | ❌ Missing | **Add** — primary source for apophatic tradition |
| Pseudo-Dionysius (*Mystical Theology*) | Act V | ❌ Missing | **Add** — primary source for apophatic theology |
| Weber, Max (*stahlhartes Gehäuse*) | Act V | ❌ Missing | **Add** — *The Protestant Ethic and the Spirit of Capitalism* |
| Vico, Giambattista (*New Science*) | Act V | ❌ Missing | **Add** — epistemic humility argument source |
| Whitehead, A.N. (referenced in manuscript) | Manuscript | ❌ Missing | **Consider** — *Science and the Modern World* |
| Whewell, William (colligation originator) | Opening, methodology | ❌ Missing | **Add** — *Philosophy of the Inductive Sciences* |
| Rose, Steven (*Lifelines*) | Act III (frog fable) | ✅ Present | Verified — Rose tells the frog fable in this book |
| Midgley, Mary (*Science as Salvation*) | Act IV | ✅ Present | Verified |

---

## 9. Literature Enrichment Suggestions

*Based on web search for post-2020 peer-reviewed sources relevant to the presentation's arguments. All sources below verified with DOIs and publication details.*

### Tier 1 — Directly Relevant (Verified, DOI-confirmed)

1. **Fumagalli, Roberto. "The Universe's Fine-Tuning Does Call for Explanation." *Journal for General Philosophy of Science* (2025). DOI: 10.1007/s10838-025-09734-8**
   - Systematically evaluates recent critiques of fine-tuning arguments, concluding they fail to undermine the core conclusion that cosmic fine-tuning genuinely calls for explanation.
   - **Connection:** Directly supports Act I's contingency/fine-tuning argument with current philosophical defense.

2. **Boyce, Kenneth & Philip Swenson. "The Fine-Tuning Argument Against the Multiverse." *The Philosophical Quarterly* 76, no. 1 (2026): 39–50. DOI: 10.1093/pq/pqae068**
   - Argues that the multiverse response to fine-tuning may be self-undermining using formal Bayesian reasoning.
   - **Connection:** Strengthens the fine-tuning discussion by showing multiverse objections may actually favor single-universe design.

3. **Stepien, Rafal K. "Tetralemma and Trinity: An Essay on Buddhist and Christian Ontologies." *Comparative and Continental Philosophy* 14, no. 3 (2022): 236–254. DOI: 10.1080/17570638.2022.2170876**
   - Uses Nāgārjuna's fourfold tetralemma and Hegel's dialectic to propose novel understanding of the ontological status of self vs. no-self.
   - **Connection:** Directly relevant to the fork diagram and Buddhist-Christian comparative ontology in Acts II–III.

4. **Scherz, Paul. "AI as Person, Paradigm, and Structure: Notes toward an Ethics of AI." *Theological Studies* 85, no. 1 (2024): 124–144. DOI: 10.1177/00405639231223891**
   - Categorizes theological responses to AI into three frames: AI-as-person, AI-as-paradigm, AI-as-structure. Member of a Vatican AI working group.
   - **Connection:** Directly relevant to Act III's AI Test insight box and imago Dei discussion.

5. **Hershenov, David. "Why Christians Should Not Embrace Extreme Transhumanism." *Christian Bioethics* 31, no. 2 (2025): 92–102. DOI: 10.1093/cb/cbaf005 (Open Access)**
   - Three anti-transhumanist theses grounding human dignity in embodied animality against transhumanist aspirations.
   - **Connection:** Supports Act III's Christian personalism and the argument that the person cannot be reduced to information.

6. **Shimizu, Kosuke. "Buddhism, Quantum Theory and International Relations." *European Journal of International Relations* (2024). DOI: 10.1177/17550882231214894**
   - Drawing on Rovelli's references to Nāgārjuna in *Helgoland*, argues dependent origination constitutes "discontinuous relationality" — relations that continuously arise contingently.
   - **Connection:** Bridges Buddhist pratītyasamutpāda and modern physics, directly relevant to Act II's contingency theme.

7. **Zhang, Shiying. "The Self and the Other: A Further Reflection on Buddhist-Christian Dialogue." *Religions* (MDPI) 15, no. 3 (2024): Article 376. DOI: 10.3390/rel15030376 (Open Access)**
   - Explores how phenomenological and postmodern philosophy contribute to awareness of otherness in Buddhist-Christian dialogue.
   - **Connection:** Relevant to the presentation's comparative methodology and encounter between traditions.

### Tier 2 — Previously Suggested (Not DOI-verified)

8. **McGrath, Alister E. *Natural Philosophy: On Retrieving a Lost Disciplinary Imaginary.* Oxford: OUP, 2023.**
   - Argues for recovering "natural philosophy" as integrative framework. Extends the colligation theme.
   - **Connection:** Strengthens the Opening's argument about epistemological pluralism.

9. **Kidd, Ian James. "Charging Others with Epistemic Vices." *The Monist* 103, no. 2 (2020): 181–196.**
   - Develops the epistemic vice framework for understanding scientism. The three impulses discussed in Act IV originate from Kidd's broader work.
   - **Connection:** Act IV directly uses Kidd's framework. This paper should be in Further Reading.

10. **Tanzella-Nitti, Giuseppe. "Theology and Science: Where Does Theology Stand in the Age of Artificial Intelligence?" *Scientia et Fides* 11, no. 1 (2023): 15–38.**
    - Catholic theologian examines AI through theological anthropology.
    - **Connection:** Relevant to Act III and the AI Test insight box.

### Tier 3 — Supplementary

11. **KCL Doctoral Thesis: "Buddhist Śūnyatā and Christian Apophaticism." King's College London.**
    - Uses Derridean deconstruction as analytical bridge between Buddhist śūnyatā and Christian apophatic theology.
    - **Connection:** Directly relevant to Act V's apophatic/śūnyatā comparison.

12. **"Dialogue Between Science and Religious Education." *Science & Education* (Springer, 2025). DOI: 10.1007/s11191-025-00710-8**
    - Proposes methodology for navigating science-religion tensions in educational settings.
    - **Connection:** Relevant to the presentation's pedagogical framing as an interactive scholarly resource.

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
