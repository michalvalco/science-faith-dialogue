# CLAUDE.md — Science, Faith & Dialogue

## Project Overview
Interactive scholarly resource for the Erasmus+ KA171 project between EBF UK (Comenius University, Bratislava) and TNTI (VNU Hanoi). Based on a guest lecture delivered March 12, 2026 at TNTI.

**Stack:** Astro 5 + React 19 + Tailwind CSS 4 + TypeScript
**Cloned from:** `dn-ii-dejiny-nabozenstiev` (Slovak world religions teaching site)
**Language:** English
**Deploy:** GitHub Pages via GitHub Actions (auto on push to `main`)

## Repository Structure
```
src/
├── layouts/
│   └── BaseLayout.astro          ✅ Complete — English nav, dark/gold/teal theme
├── pages/
│   ├── index.astro               ✅ Complete — English landing page
│   ├── presentation.astro        ✅ Complete — full content, all 6 Acts + Opening + Closing
│   ├── glossary.astro            ✅ Complete — renders keyTerms from data
│   ├── further-reading.astro     ✅ Complete — bibliography
│   ├── about.astro               ✅ Complete — Erasmus+ project info
│   └── 404.astro                 ✅ From DN II (may need English update)
├── data/
│   ├── types.ts                  ✅ Complete — all interfaces defined
│   └── presentation.ts           ✅ Complete — keyTerms, persons, fineTuning, imagoDei
├── components/                   ✅ DN II reusable components kept:
│   ├── ConceptMap.tsx            (generic — needs new data for this project)
│   ├── KeyTerms.tsx              (reusable as-is)
│   ├── PersonCard.tsx            (reusable as-is)
│   ├── QuickCheck.tsx            (reusable as-is)
│   ├── StudyQuestions.tsx        (reusable as-is)
│   ├── TermTooltip.tsx           (reusable as-is)
│   └── ImageLightbox.tsx         (reusable as-is)
│   ❌ NEW components (optional enhancements, not blocking):
│   ├── ChristianityBuddhismComparisonMap.tsx
│   ├── ScienceReligionTimeline.tsx
│   ├── FrogFable.tsx
│   ├── RealityLevels.tsx
│   ├── FineTuningSlider.tsx
│   ├── ImagoDeiCards.tsx
│   ├── ScientismRadar.tsx
│   ├── ApophaticComparison.tsx
│   └── ForkDiagram.tsx
└── styles/
    └── global.css                ✅ Complete — v4 palette (dark/gold/teal/rust), English comments
```

## Color Palette (v4 identity)
- Dark background: `#0f1419`
- Warm background: `#faf5ee`
- Gold accent: `#c9a84c`
- Teal accent: `#3d8b8b`
- Rust accent: `#a85c32`
- Text on dark: `#faf5ee` / `#d6d3d1` / `#a8a29e`
- Text on light: `#1c1917` / `#44403c` / `#78716c`

## Typography
- Display: Cormorant Garamond (loaded via Google Fonts in BaseLayout)
- Body: Lora
- Code/Labels: JetBrains Mono

## Current Status (March 12, 2026)
- **Phases 1–3:** ✅ Complete (repo copy, strip, config, data layer)
- **Phase 4 (Pages):** ✅ All pages created and filled with full content
  - `presentation.astro` now contains ~66 KB of content: Opening, Acts I–V, Closing
  - All v4 HTML content ported + manuscript expansions (Slovakia anecdote, enhanced
    Apophatic/Śūnyatā section with Gregory of Nyssa, "What Happens to Love?" closing)
  - Interactive `<details>` elements for insight boxes (Five Questions, Order+Contingency,
    Colligation, Three Perspectives, AI Test, Scientism impulses, Apophatic/Śūnyatā)
  - Fork Diagram (CSS Grid comparison of Dependent Origination vs Creation)
  - Four Pillars grid in Closing
  - Pull quotes throughout
- **Phase 5 (CSS):** ✅ global.css migrated from DN II to v4 palette
- **Phase 6 (Components):** ❌ Not started — 9 new React components (optional enhancements)
- **Phase 7 (Deploy):** ❌ Not started — git init, remote, push, Pages config

## Key Source Files (Project Knowledge Base)
- `Valco - Presentation TNTI Hanoi_v4 March 2026.html` — original v4 HTML
- `Valco_Science_Creation_Contingency_Human_Person_TNTI_Manuscript.md` — full manuscript
- `McGrath_Science_Religion_2020_Reading_Notes.md` — annotated reading notes
- `Nguyen_Emptiness_of_Everything_Reading_Notes.md` — Buddhist source notes
- `McGrath_Territories_Reading_Notes.md` — methodology source notes

## Next Session Priorities
1. Build interactive React components (start with ImagoDeiCards, FineTuningSlider)
   — these are enhancements, not blockers; the site is fully readable without them
2. Git init, create remote, push, deploy to GitHub Pages
3. Consider: responsive tweaks for mobile, 404 page English update
