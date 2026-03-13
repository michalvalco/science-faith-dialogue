# Continuation Prompt: Convergences & Divergences — Research-First Build

## Context

You are working on the `science-faith-dialogue` Astro site at:
`C:\Users\valco\OneDrive\Documents\GitHub\science-faith-dialogue`

Read `CLAUDE.md`, `AUDIT_RESULTS.md`, and `ENHANCEMENT_STRATEGY.md` at the repo root
first — they contain the full project orientation, known issues, and planned architecture.

The site is live at: https://michalvalco.github.io/science-faith-dialogue/

We are adding a new page: **Convergences & Divergences** — an interactive, visually
rich comparison of Buddhism and Christianity. This is not a generic world-religions
comparison. It is a *scholarly* resource grounded in the specific dialogue between
Christian Personalism (Valčo's framework) and Vietnamese Buddhist philosophy (especially
Nguyen Hoang Hai's work on dependent origination). The page should reflect the same
intellectual seriousness, warmth, and honesty as the presentation page.

## Available Source Material

### 1. Existing resources in this repo (`resources/`)
- `McGrath_Science_Religion_2020_Reading_Notes.md` — McGrath on science-religion models
- `McGrath_Territories_Reading_Notes.md` — multiple rationalities, colligation methodology
- `Nguyen_Emptiness_of_Everything_Reading_Notes.md` — Buddhist philosophy of science
- `Valco_Science_Creation_Contingency_Human_Person_TNTI_Manuscript.md` — the full lecture
  manuscript, which already contains significant convergence/divergence analysis

### 2. Reference app at `C:\Users\valco\OneDrive\Documents\GitHub\christianity-and-bud`
This is a separate React app with:
- `src/lib/allReligionsData.ts` (~50 KB) — structured comparison data for 10 religions
  across categories: ultimate reality, soteriology, ethics, scripture, cosmology, etc.
  Each concept has a `convergences` field grouping traditions by shared features.
- `src/components/ComparisonView.tsx` — side-by-side comparison UI (React + shadcn)
- `src/components/ConvergenceVisualization.tsx` — convergence cards with framer-motion
- `src/components/PracticesView.tsx` — spiritual practices comparison
- `PRD.md` — full product requirements document with UX patterns

**Use this repo for structural inspiration and as a starting data seed — but do NOT
copy its content uncritically.** That app is a generic educational tool. Our page is a
*scholarly* resource with specific argumentative commitments. Every claim must be
grounded in peer-reviewed or authoritative academic sources.

### 3. The presentation page itself (`src/pages/presentation.astro`)
Already contains substantial convergence/divergence material:
- Act II: Fork Diagram (Dependent Origination vs. Creation)
- Act II: "Colligation, Not Syncretism" insight box
- Act III: Three Perspectives on Human Nature (evolutionary biology + anthropology +
  theology + Buddhism)
- Act V: Apophatic/Śūnyatā comparison (the deepest convergence in the presentation)
- Closing: "What Happens to Love?" (the sharpest divergence)

---

## Phase 1: Literature Research (DO THIS FIRST)

Use web search to find **peer-reviewed academic sources** on Buddhism-Christianity
comparative philosophy. This is the foundation — everything downstream depends on the
quality of this research. Search strategically across these axes:

### Search Axes (conduct multiple targeted searches for each)

**A. Ontology & Metaphysics**
- Creation vs. dependent origination (pratītyasamutpāda)
- Christian doctrine of creation ex nihilo vs. Buddhist beginninglessness
- Contingency (Torrance, Polkinghorne) vs. emptiness (śūnyatā, Nāgārjuna)
- Trinitarian relational ontology vs. Buddhist interdependence
- Substance metaphysics vs. process/relational metaphysics

**B. The Human Person / Self**
- Imago Dei vs. anattā (no-self)
- Christian Personalism (Mounier, Wojtyla, Valčo) vs. Buddhist deconstruction of self
- Relational personhood: convergences between Trinitarian anthropology and dependent arising
- Soul/consciousness: Christian hylomorphism vs. Buddhist vijñāna (consciousness) theory
- Moral agency without a permanent self (Buddhist ethics) vs. moral agency grounded in
  divine image (Christian ethics)

**C. Soteriology & Liberation**
- Salvation (sōtēria) vs. nirvāṇa/nibbāna
- Grace vs. self-effort (the Shin Buddhist exception — Amida Buddha's vow)
- Sin/hamartia vs. ignorance (avidyā) and craving (taṇhā)
- Eschatology: resurrection of the body vs. reincarnation/rebirth cycles
- The role of community: ecclesia vs. saṅgha

**D. Ethics & Compassion**
- Agapē (Christian love) vs. karuṇā (Buddhist compassion) vs. mettā (loving-kindness)
- Natural law theory vs. Buddhist precepts (śīla)
- Social ethics: Christian social teaching vs. engaged Buddhism (Thich Nhat Hanh)
- Virtue ethics: Aristotelian-Thomistic virtues vs. Buddhist pāramitā (perfections)

**E. Epistemology & Mysticism**
- Apophatic theology (Gregory of Nyssa, Pseudo-Dionysius) vs. śūnyatā
- Via negativa vs. neti neti ("not this, not this")
- Contemplative practice: Christian mysticism (hesychasm, Ignatian) vs. Buddhist meditation
- Faith (pistis) vs. trust (saddhā) — structural parallels
- Revelation vs. awakening (bodhi) as epistemic models

**F. Science & Philosophy of Science**
- Christian theology of nature (Torrance, McGrath) vs. Buddhist naturalism (Nguyen)
- Fine-tuning and the anthropic principle — perspectives from both traditions
- Consciousness: theological anthropology vs. Buddhist mind-science
- AI ethics from Christian and Buddhist perspectives

### Research Protocol

For each axis:
1. Search for recent (2015–2026) peer-reviewed articles, monographs, and book chapters
2. Prioritize: journal articles in Zygon, Theology and Science, Buddhist-Christian Studies,
   Journal of Buddhist Ethics, International Journal for Philosophy of Religion, Sophia,
   Studies in Interreligious Dialogue, and similar venues
3. Also search for key monographs (e.g., Paul Knitter, John Cobb, Masao Abe, Raimon
   Panikkar, Paul Williams, Perry Schmidt-Leukel, John Makransky)
4. **Verify every citation via web search** — do NOT fabricate or hallucinate sources

### Output: Reference File

Create: `resources/Buddhism_Christianity_Convergences_Divergences_Reference.md`

Structure it as follows:

```markdown
# Buddhism & Christianity: Convergences and Divergences
## Scholarly Reference File

### Methodology Note
[Brief note on how sources were selected, what counts as convergence vs. divergence,
and the Valčo/McGrath colligation framework that governs our approach]

### A. Ontology & Metaphysics
#### Convergences
- [Claim] — [Source citation] — [Brief explanation]
#### Genuine Divergences
- [Claim] — [Source citation] — [Brief explanation]
#### Opportunities for Dialogue
- [Open question or productive tension] — [Source]

### B. The Human Person / Self
[Same structure]

### C. Soteriology & Liberation
[Same structure]

[... etc. for all six axes]

### Full Bibliography
[Alphabetical list of all sources cited, in Chicago/Turabian format]
```

For each convergence or divergence entry, include:
- A one-sentence scholarly claim (not a platitude)
- A specific source citation with author, year, and page/chapter where possible
- A 2–3 sentence explanation of the substance
- A note on how this connects to Valčo's presentation (if applicable)

**Quality standard:** This file should be good enough that a doctoral student could use
it as a starting bibliography for a thesis on Buddhist-Christian dialogue. No fluff.
No unsourced generalizations. Every claim grounded.

---

## Phase 2: Data Architecture

After the reference file is complete, design the data structures for the page.

Create: `src/data/convergences.ts`

Draw inspiration from the `christianity-and-bud` repo's `allReligionsData.ts` for the
structural pattern — but adapt it for our specific scholarly context:

```typescript
interface ConvergenceDivergence {
  id: string;
  axis: 'ontology' | 'person' | 'soteriology' | 'ethics' | 'epistemology' | 'science';
  type: 'convergence' | 'divergence' | 'opportunity';
  title: string;
  christianPerspective: {
    label: string;        // e.g. "Creation ex nihilo"
    description: string;  // 3–5 sentences, scholarly but accessible
    keyThinkers: string[]; // e.g. ["Torrance", "McGrath", "Polkinghorne"]
    keyTerms: string[];    // e.g. ["contingency", "Logos", "imago Dei"]
  };
  buddhistPerspective: {
    label: string;
    description: string;
    keyThinkers: string[];
    keyTerms: string[];
  };
  analysis: string;       // Valčo's voice: what this convergence/divergence means,
                          // why it matters, what it opens up
  sources: string[];      // citation keys linking to the reference file
  relatedAct?: string;    // link to presentation section, e.g. "Act II", "Act V"
}
```

Populate this with 15–25 entries drawn from the reference file. Aim for roughly:
- 6–8 genuine convergences (where traditions meet on shared ground)
- 6–8 genuine divergences (where they honestly differ — not polemically)
- 4–6 "opportunities" (productive tensions, open questions, frontier areas)

---

## Phase 3: Page & Component Build

### New page: `src/pages/convergences.astro`

This becomes a new tab in the site navigation (update `BaseLayout.astro` accordingly).

**Page structure:**

1. **Header** — dark section with title, subtitle, and a brief methodological note
   explaining the colligation approach (we are not syncretizing; we are mapping
   genuine convergences and divergences with scholarly honesty)

2. **Filter/View Controls** — allow users to filter by:
   - Axis (ontology, person, soteriology, ethics, epistemology, science)
   - Type (convergences, divergences, opportunities, or all)
   These should be elegant toggle buttons, not a dropdown. Think of them as
   "lenses" through which the user views the material.

3. **Main Content Area** — the comparison items, displayed as interactive cards.
   Each card shows:
   - Title and type badge (convergence = teal, divergence = rust, opportunity = gold)
   - Christian perspective (left, gold accent) and Buddhist perspective (right, teal accent)
   - Analysis paragraph (Valčo's voice) — initially collapsed, expandable
   - Source citations
   - Link to related presentation Act (if applicable)

4. **Summary Visualization** — at the top or bottom, a visual overview showing:
   - How many convergences, divergences, and opportunities exist per axis
   - A way to see the "landscape" at a glance before diving into details

### Visual Design Principles

- Match the v4 palette exactly (dark/warm/gold/teal/rust)
- Use the same typography (Cormorant Garamond display, Lora body, JetBrains Mono labels)
- Cards should feel like the insight boxes on the presentation page — expandable,
  with a satisfying reveal animation
- The two-column Christian/Buddhist layout should echo the Fork Diagram from Act II
- Mobile: cards stack vertically; filter buttons become a scrollable row
- The page should feel like a *scholarly tool*, not a flashy infographic

### React Components to Build

1. **ConvergenceCard.tsx** — the main card component
   - Props: a `ConvergenceDivergence` item
   - Expandable analysis section
   - Color-coded by type (teal/rust/gold border-left + badge)
   - Two-column perspective layout with proper responsive stacking

2. **AxisFilter.tsx** — filter toggle buttons
   - Horizontal row of labeled buttons
   - Active state with accent underline
   - "All" option
   - Counts per filter

3. **ConvergenceSummary.tsx** — visual overview
   - A compact visualization (could be a simple bar chart, radar, or heat grid)
   - Shows distribution of convergences/divergences/opportunities across axes
   - Clickable to scroll to that section

4. **SourceTooltip.tsx** — hover/click tooltip showing full citation
   - Appears when user clicks a source reference
   - Links to the further-reading page if the source is listed there

---

## Phase 4: Integration & Polish

- Add "Convergences" to the navigation in `BaseLayout.astro`
- Update `CLAUDE.md` with the new page and components
- Cross-link from `presentation.astro` — add subtle links in the Fork Diagram,
  the Apophatic/Śūnyatā insight box, and the Closing to the convergences page
- Add relevant new sources to `further-reading.astro`
- Commit, push, verify deployment

---

## Writing Voice

The `analysis` fields in the data and any prose on the page should be written in
Michal Valčo's voice (see `<voice_and_style>` in the project preferences). Key traits:
- Slightly conversational, some informal vocabulary, but maintains academic quality
- Short punchy sentences mixed with longer flowing ones
- Honest about differences — no false irenicism
- Characteristic phrases: "It is curious, however, that...", "To put it slightly
  differently,", "Of utmost importance, then, is...", "Let us not underestimate..."
- The tone of someone who genuinely respects the other tradition while being firmly
  rooted in their own

## Critical Rule

**Research first, build second.** Do not start writing data or building components
until the reference file (`Buddhism_Christianity_Convergences_Divergences_Reference.md`)
is substantially complete. The reference file IS the ground truth. Everything else
derives from it.
