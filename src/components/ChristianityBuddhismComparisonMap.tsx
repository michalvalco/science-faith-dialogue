import { useState } from 'react';

interface ComparisonRow {
  id: string;
  theme: string;
  christian: string;
  buddhist: string;
  relation: 'convergence' | 'divergence' | 'dialogue';
}

const relationColors: Record<ComparisonRow['relation'], string> = {
  convergence: 'var(--color-teal-500)',
  divergence: 'var(--color-rust-500)',
  dialogue: 'var(--color-gold-400)',
};

const rows: ComparisonRow[] = [
  {
    id: 'ultimate',
    theme: 'Ultimate Reality',
    christian: 'Personal God — triune, transcendent Creator who is the ground of all being. "In the beginning was the Logos."',
    buddhist: 'No creator God. Dharma is the fundamental ordering principle. Reality is the interdependent web itself, with no transcendent ground posited.',
    relation: 'divergence',
  },
  {
    id: 'interdependence',
    theme: 'Interdependence',
    christian: 'Creatures are genuinely interdependent, but the web is grounded in a transcendent Source. Trinity itself is relational.',
    buddhist: 'Pratītyasamutpāda: all phenomena arise in mutual conditioning. Nothing exists independently. The web is fundamental.',
    relation: 'convergence',
  },
  {
    id: 'self',
    theme: 'The Self',
    christian: 'Imago Dei: the person is relational but irreducible. Constituted by relationships, yet possessing a given nature and vocation.',
    buddhist: 'Anattā: no permanent, independent self. The "self" is a composite of changing conditions — skandhas, always in flux.',
    relation: 'divergence',
  },
  {
    id: 'suffering',
    theme: 'Suffering',
    christian: 'Suffering is real. It has meaning within a narrative of fall, redemption, and hope. God enters suffering in the Cross.',
    buddhist: 'Dukkha is the first Noble Truth. Suffering arises from craving (taṇhā) and clinging to impermanent things.',
    relation: 'dialogue',
  },
  {
    id: 'knowledge',
    theme: 'Knowledge & Humility',
    christian: 'Multiple situated rationalities. No single method exhausts reality. Colligation as intellectual virtue.',
    buddhist: 'Two truths: conventional and ultimate. Prajñā (wisdom) transcends conceptual grasping.',
    relation: 'convergence',
  },
  {
    id: 'mystery',
    theme: 'Mystery / Transcendence',
    christian: 'Apophatic theology: God exceeds all categories. The via negativa. Mystery is superabundant being, not nothingness.',
    buddhist: 'Śūnyatā: emptiness of inherent existence. Śūnyatā-śūnyatā: emptiness of emptiness itself. Beyond ontology and epistemology.',
    relation: 'convergence',
  },
  {
    id: 'ethics',
    theme: 'Ethical Calling',
    christian: 'Knowledge is vocation. The knower is a moral agent bearing responsibility before God and neighbour.',
    buddhist: 'Karuṇā (compassion) and mettā (loving-kindness). Right action flows from right understanding.',
    relation: 'convergence',
  },
  {
    id: 'scientism',
    theme: 'Critique of Scientism',
    christian: 'Scientism is bad philosophy, not science. It makes claims about science that science cannot verify.',
    buddhist: 'The brain models reality for appropriateness, not truth. Meditation complements rational inquiry. Gödel applies.',
    relation: 'convergence',
  },
];

export default function ChristianityBuddhismComparisonMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filter, setFilter] = useState<ComparisonRow['relation'] | 'all'>('all');

  const filtered = filter === 'all' ? rows : rows.filter((r) => r.relation === filter);

  return (
    <div style={{
      margin: '2.5rem 0',
      border: '1px solid color-mix(in srgb, var(--color-gold-400) 20%, transparent)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'color-mix(in srgb, var(--color-gold-400) 3%, transparent)',
    }}>
      <div style={{ padding: '1.25rem 1.25rem 0.75rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: 'var(--color-gold-400)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Comparison Map
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6 }}>
          Key themes where Christianity and Buddhism converge, diverge, and open space for dialogue.
        </p>
      </div>

      {/* Relation filter */}
      <div style={{
        display: 'flex',
        gap: '0.35rem',
        padding: '0 1.25rem 1rem',
        flexWrap: 'wrap',
      }}>
        {(['all', 'convergence', 'divergence', 'dialogue'] as const).map((rel) => {
          const isActive = filter === rel;
          const color = rel === 'all' ? 'var(--color-dark-200)' : relationColors[rel];
          return (
            <button
              key={rel}
              onClick={() => setFilter(rel)}
              style={{
                padding: '0.3rem 0.6rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: `1px solid ${isActive ? color : 'color-mix(in srgb, var(--color-warm-200) 15%, transparent)'}`,
                borderRadius: '9999px',
                background: isActive ? `color-mix(in srgb, ${color} 12%, transparent)` : 'transparent',
                color: isActive ? color : 'var(--color-dark-300)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {rel === 'all' ? `All (${rows.length})` : `${rel.charAt(0).toUpperCase() + rel.slice(1)} (${rows.filter((r) => r.relation === rel).length})`}
            </button>
          );
        })}
      </div>

      {/* Comparison rows */}
      <div style={{ padding: '0 1.25rem 1.25rem' }}>
        {filtered.map((row) => {
          const isActive = activeId === row.id;
          const relColor = relationColors[row.relation];
          return (
            <div key={row.id} style={{ marginBottom: '0.25rem' }}>
              <button
                onClick={() => setActiveId(isActive ? null : row.id)}
                aria-expanded={isActive}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: isActive ? `color-mix(in srgb, ${relColor} 6%, transparent)` : 'transparent',
                  border: 'none',
                  borderLeft: `3px solid ${relColor}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-warm-200)',
                  flex: 1,
                }}>
                  {row.theme}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: relColor,
                }}>
                  {row.relation}
                </span>
              </button>

              {isActive && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem 1rem',
                  marginLeft: '3px',
                  borderLeft: `3px solid color-mix(in srgb, ${relColor} 30%, transparent)`,
                }}>
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    background: 'color-mix(in srgb, var(--color-gold-400) 5%, transparent)',
                    borderTop: '2px solid var(--color-gold-400)',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold-400)',
                      marginBottom: '0.35rem',
                    }}>
                      ✦ Christian
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-100)', lineHeight: 1.6 }}>
                      {row.christian}
                    </p>
                  </div>
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    background: 'color-mix(in srgb, var(--color-teal-500) 5%, transparent)',
                    borderTop: '2px solid var(--color-teal-500)',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-teal-500)',
                      marginBottom: '0.35rem',
                    }}>
                      ☸ Buddhist
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-100)', lineHeight: 1.6 }}>
                      {row.buddhist}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
