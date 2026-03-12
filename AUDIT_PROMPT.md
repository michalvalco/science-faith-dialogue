# Claude Code: Deep Audit & Enhancement Plan for `science-faith-dialogue`

## Context

This is an Astro 5 + React 19 + Tailwind CSS 4 + TypeScript project — an interactive
scholarly resource based on a guest lecture delivered at the Tran Nhan Tong Institute
(VNU Hanoi) in March 2026. It was cloned from a Slovak world religions teaching site
(`dn-ii-dejiny-nabozenstiev`) and adapted for English-language, single-presentation use.

The repo lives at: `C:\Users\valco\OneDrive\Documents\GitHub\science-faith-dialogue`

Read `CLAUDE.md` at the repo root first — it contains the full project orientation.

## Phase 1: Deep Audit

Systematically examine every file in the repo. For each issue found, classify it as:
- **🔴 BREAKING** — will cause build failure or runtime error
- **🟡 WARNING** — functional but incorrect, misleading, or inconsistent
- **🟢 SUGGESTION** — optional improvement

### 1.1 Build & Config Audit
- Read `package.json`, `astro.config.mjs`, `tsconfig.json`
- Check that all dependencies are compatible (Astro 5 + React 19 + Tailwind 4)
- Verify the GitHub Pages deployment config in `.github/workflows/`
- Check `base` path configuration for GitHub Pages (`/science-faith-dialogue/`)
- Try `npm install && npm run build` if possible; report any errors

### 1.2 Content Audit — `presentation.astro`
- Read the full file (~66 KB)
- Check for: unclosed HTML tags, mismatched quotes, broken Astro expressions
- Verify all `<details>` elements have proper `<summary>` children
- Check that the fork diagram grid renders correctly (3-column CSS Grid)
- Look for any leftover `<!-- TODO -->` comments that were missed
- Verify all special characters render correctly (ā, ī, ū, ś, ñ, ṃ, ṇ, ž, etc.)
- Check that pull-quote styling is consistent throughout

### 1.3 Data Layer Audit — `src/data/`
- Read `types.ts` and `presentation.ts`
- Verify all exported arrays match their TypeScript interfaces
- Check for unused exports (data defined but never consumed by any page)
- Verify that `fineTuningConstants` and `imagoDeiUnderstandings` data is actually
  used somewhere — if not, flag it (these were meant for React components)

### 1.4 Layout & Navigation Audit
- Read `BaseLayout.astro`
- Verify navigation links work with the `base` URL prefix
- Check that the mobile menu works
- Verify Google Fonts are loaded (Cormorant Garamond, Lora, JetBrains Mono)
- Check for any leftover Slovak-language text from DN II

### 1.5 CSS Audit — `global.css`
- Verify Tailwind 4 `@theme` syntax is correct
- Check that all CSS custom properties are actually used somewhere
- Look for any leftover DN II class names (`.module-*`, `.tradition-*`, etc.)
- Verify print stylesheet works with the new color tokens
- Check act-accent classes (`.act-opening`, `.act-creation`, etc.) — are they used?

### 1.6 Supporting Pages Audit
- Read `index.astro`, `glossary.astro`, `further-reading.astro`, `about.astro`, `404.astro`
- Check for broken links, leftover Slovak text, outdated references
- Verify each page uses `BaseLayout` correctly

### 1.7 Components Audit
- Read all `.tsx` files in `src/components/`
- Check for DN II-specific imports or references
- Verify React components use `client:visible` or `client:load` directives properly
- Check if any component references data/types that no longer exist

### 1.8 Leftover DN II Artifacts
- Search the entire repo for Slovak words: "modul", "náboženst", "dejiny", "tradíci"
- Search for references to removed files or routes
- Check `src/pages/moduly/` — does this directory still exist? Should it be removed?
- Check `src/templates/` — is anything in here still needed?

### 1.9 Resources Folder — `resources/`
The repo contains a `resources/` folder with source materials for the presentation:
- `McGrath_Science_Religion_2020_Reading_Notes.md` — annotated reading notes
- `McGrath_Territories_Reading_Notes.md` — methodology source notes
- `Nguyen_Emptiness_of_Everything_Reading_Notes.md` — Buddhist source notes
- `Nguyen Hoang Hai - The Emptiness of Everything 2025 reduced.pdf` — full book (text)
- `Valco_Science_Creation_Contingency_Human_Person_TNTI_Manuscript.md` — full manuscript

Check whether the presentation content is consistent with and well-supported by these
source materials. Flag any claims in `presentation.astro` that lack grounding in the
sources, or where stronger textual support exists in the resources but was not used.
Also check whether `further-reading.astro` and `glossary.astro` are consistent with
the reading notes and manuscript.

## Phase 2: Enhancement Suggestions

After completing the audit, propose enhancements organized by priority.

### 2.0 Literature Enrichment (via Web Search)
Use web search to identify relevant **peer-reviewed academic sources** that could
strengthen the presentation's arguments or fill gaps found during the audit.
Focus areas:
- Science-religion dialogue (especially post-2020 publications)
- Buddhist-Christian comparative philosophy
- AI ethics from theological/philosophical perspectives
- Fine-tuning argument and anthropic principle (recent data or critiques)
- Dependent origination as philosophy of science
- Christian personalism and transhumanism
- Apophatic theology in dialogue with Buddhist emptiness

For each relevant source found:
1. Create a concise `.md` file in `resources/` with: full citation, key arguments,
   relevant quotes (with page numbers where available), and a note on how it connects
   to the presentation content.
2. If the source suggests a correction or strengthening of an argument in the
   presentation, flag it in the audit results.

Do NOT fabricate citations. Only add sources you can verify via web search.

### 2.1 Structural Enhancements
- Should `presentation.astro` be broken into Astro components (one per Act)?
  Evaluate trade-offs: single-page scroll experience vs. maintainability
- Should the inline styles be migrated to Tailwind utility classes or CSS classes
  from `global.css`? The current approach works but is verbose (~66 KB of inline styles)
- Is there a better way to handle the `<details>` insight boxes? Consider an Astro
  component like `<InsightBox title="..." accentColor="...">` for consistency
- Should we add a table of contents / section nav for the presentation page?

### 2.2 Visual Enhancements
- Evaluate the fork diagram — does it need a responsive breakpoint for mobile?
  The 3-column grid may collapse poorly on small screens
- The four pillars grid in the Closing — same responsive question
- Pull quotes use two different styles (border-left vs centered). Should they be unified?
- Consider adding subtle scroll-triggered fade-in animations (the v4 HTML had these)
- Consider a reading progress bar (v4 HTML had one)
- Evaluate typography scale — is it consistent across all sections?

### 2.3 React Component Proposals
For each proposed component, specify:
- What it does
- What data it consumes (from `presentation.ts` or new data)
- Rough complexity estimate (simple / moderate / complex)
- Whether it's worth building or if the static HTML is sufficient

Candidates (from CLAUDE.md):
1. **FineTuningSlider** — interactive slider showing what happens if physical constants change
2. **ImagoDeiCards** — four cards showing sovereignty/correspondence/relationality/storytelling
3. **FrogFable** — interactive illustration of five biologists' perspectives
4. **ScientismRadar** — radar/spider chart of Kidd's three impulses
5. **ApophaticComparison** — side-by-side comparison of Christian apophatic and Buddhist śūnyatā
6. **ForkDiagram** — React version of the CSS fork (with animation?)
7. **RealityLevels** — Bhaskar's stratified reality visualization
8. **ChristianityBuddhismComparisonMap** — concept map of convergences/divergences
9. **ScienceReligionTimeline** — historical timeline of key figures and events

For each, answer: "Is this component worth the build cost, or does the current
static HTML/CSS serve the purpose well enough?"

### 2.4 Accessibility Enhancements
- Check heading hierarchy (h1 → h2 → h3 sequence)
- Verify color contrast ratios meet WCAG AA
- Check that all interactive elements are keyboard-accessible
- Verify `<details>` elements work with screen readers
- Check for missing `alt` text, `aria-labels`, or `role` attributes

### 2.5 Performance
- Check for unused CSS (DN II leftovers that inflate the bundle)
- Check image optimization (if any images exist)
- Verify fonts are loaded efficiently (display: swap)

## Output Format

Write your findings to: `AUDIT_RESULTS.md` in the repo root.

Structure it as:
1. **Build Status** — does it build? What errors/warnings?
2. **Issues Found** — table with columns: File | Line | Severity | Description | Fix
3. **Enhancement Proposals** — ranked by impact/effort ratio
4. **Component Recommendations** — build/skip verdict for each of the 9 candidates
5. **Quick Wins** — things that can be fixed in < 5 minutes each
