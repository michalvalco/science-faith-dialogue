import { useState } from 'react';

interface Tradition {
  id: string;
  label: string;
  color: string;
  icon: string;
  thesis: string;
  details: string[];
}

const traditions: Tradition[] = [
  {
    id: 'buddhist',
    label: 'Dependent Origination',
    color: 'var(--color-teal-500)',
    icon: '☸',
    thesis: 'The network of interdependence is itself the fundamental reality.',
    details: [
      'Phenomena arise in mutual conditioning — nothing stands outside the web.',
      'No transcendent ground is posited. The web is self-sustaining.',
      'The question "Why is there a web at all?" is dissolved, not answered.',
      'Emptiness (śūnyatā) means nothing has fixed, independent essence.',
    ],
  },
  {
    id: 'christian',
    label: 'Creation',
    color: 'var(--color-gold-400)',
    icon: '✦',
    thesis: 'The web itself is grounded in a transcendent Source beyond the web.',
    details: [
      'Creatures are genuinely interdependent — but the web does not explain itself.',
      'Contingency: the web exists, but did not have to exist.',
      'Persons possess a given nature and vocation not reducible to the web.',
      'The Logos (divine reason) is the ground of both order and intelligibility.',
    ],
  },
];

export default function ForkDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div style={{
      margin: '2.5rem 0',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      border: '1px solid color-mix(in srgb, var(--color-dark-200) 20%, transparent)',
    }}>
      {/* Shared starting point */}
      <div style={{
        padding: '1.25rem',
        textAlign: 'center',
        background: 'color-mix(in srgb, var(--color-rust-500) 5%, transparent)',
        borderBottom: '1px solid color-mix(in srgb, var(--color-dark-200) 15%, transparent)',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: 'var(--color-rust-500)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          The Fork in the Road
        </p>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          fontStyle: 'italic',
          color: 'var(--color-dark-200)',
          lineHeight: 1.6,
        }}>
          Both traditions reject self-sufficient independence.<br />
          But they diverge on what grounds interdependence.
        </p>
      </div>

      {/* Fork branches */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>
        {traditions.map((t) => {
          const isActive = activeId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveId(isActive ? null : t.id)}
              aria-expanded={isActive}
              style={{
                padding: '1.25rem',
                background: isActive
                  ? `color-mix(in srgb, ${t.color} 8%, transparent)`
                  : 'transparent',
                border: 'none',
                borderTop: `3px solid ${t.color}`,
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                marginBottom: '0.35rem',
              }} aria-hidden="true">
                {t.icon}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: t.color,
                marginBottom: '0.5rem',
              }}>
                {t.label}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--color-dark-200)',
                lineHeight: 1.6,
              }}>
                {t.thesis}
              </p>

              {isActive && (
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: '1rem',
                  textAlign: 'left',
                }}>
                  {t.details.map((d, i) => (
                    <li key={i} style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-dark-100)',
                      lineHeight: 1.6,
                      padding: '0.35rem 0',
                      borderTop: i > 0 ? `1px solid color-mix(in srgb, ${t.color} 15%, transparent)` : 'none',
                    }}>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom note */}
      <div style={{
        padding: '0.75rem 1.25rem',
        textAlign: 'center',
        borderTop: '1px solid color-mix(in srgb, var(--color-dark-200) 15%, transparent)',
      }}>
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--color-dark-300)',
          fontStyle: 'italic',
        }}>
          That is not a refutation. It is a genuine fork in the road.
        </p>
      </div>
    </div>
  );
}
