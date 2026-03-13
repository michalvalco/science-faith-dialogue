import { useState } from 'react';

interface Level {
  id: string;
  label: string;
  color: string;
  science: string;
  philosophy: string;
  theology: string;
}

const levels: Level[] = [
  {
    id: 'physical',
    label: 'Physical Reality',
    color: 'var(--color-teal-500)',
    science: 'Quarks, atoms, forces, fields — described by physics with extraordinary precision.',
    philosophy: 'Why is there something rather than nothing? Why these laws and not others?',
    theology: 'Creation: the world is real, contingent, and ordered by Logos. Buddhist: compositionality and impermanence reveal śūnyatā.',
  },
  {
    id: 'biological',
    label: 'Biological Reality',
    color: 'var(--color-teal-500)',
    science: 'DNA, cells, evolution, ecosystems — described by the life sciences.',
    philosophy: 'What is life? Is it reducible to chemistry, or does it exhibit emergent properties?',
    theology: 'Creatures are not divine, but they are good — gift, not accident. Buddhist: dependent origination pervades all living systems.',
  },
  {
    id: 'personal',
    label: 'Personal Reality',
    color: 'var(--color-gold-400)',
    science: 'Neuroscience, psychology, behavioural genetics — mechanisms of mind and behaviour.',
    philosophy: 'What is consciousness? Can the mind know truth, or only model survival?',
    theology: 'Imago Dei: the person is irreducibly relational, oriented toward truth and the good. Buddhist: anattā — no permanent self, but still moral agency.',
  },
  {
    id: 'moral',
    label: 'Moral & Aesthetic Reality',
    color: 'var(--color-gold-400)',
    science: 'Evolutionary ethics, moral psychology — the origins of moral intuitions.',
    philosophy: 'Is goodness real, or merely adaptive? Are values discovered or invented?',
    theology: 'Christian: moral order grounded in the Creator\'s character. Buddhist: karuṇā and mettā as paths to liberation.',
  },
  {
    id: 'transcendent',
    label: 'Transcendent Reality',
    color: 'var(--color-rust-500)',
    science: 'Science reaches its limits: Gödel, awe, trans-scientific questions.',
    philosophy: 'The numinous, the mysterium tremendum, the boundary of reason.',
    theology: 'Christian apophatic theology: God exceeds all categories. Buddhist: śūnyatā-śūnyatā — emptiness of emptiness itself.',
  },
];

const perspectives = [
  { key: 'science' as const, label: 'Science', color: 'var(--color-teal-500)' },
  { key: 'philosophy' as const, label: 'Philosophy', color: 'var(--color-dark-200)' },
  { key: 'theology' as const, label: 'Theology', color: 'var(--color-gold-400)' },
];

export default function RealityLevels() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

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
          Strata of Reality
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6 }}>
          Reality has layers that no single method can exhaust. Click each level to see how different disciplines engage it.
        </p>
      </div>

      <div style={{ padding: '0 1.25rem 1.25rem' }}>
        {levels.map((level, index) => {
          const isActive = activeLevel === level.id;
          return (
            <div key={level.id}>
              <button
                onClick={() => setActiveLevel(isActive ? null : level.id)}
                aria-expanded={isActive}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: isActive
                    ? `color-mix(in srgb, ${level.color} 8%, transparent)`
                    : 'transparent',
                  border: 'none',
                  borderLeft: `3px solid ${level.color}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: level.color,
                  minWidth: '1.5rem',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-warm-200)',
                }}>
                  {level.label}
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.75rem',
                  color: 'var(--color-dark-300)',
                  transition: 'transform 0.2s',
                  transform: isActive ? 'rotate(90deg)' : 'rotate(0)',
                }}>
                  ▸
                </span>
              </button>

              {isActive && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem 1.25rem',
                  marginLeft: '3px',
                  borderLeft: `3px solid color-mix(in srgb, ${level.color} 30%, transparent)`,
                }}>
                  {perspectives.map((p) => (
                    <div key={p.key} style={{
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      background: `color-mix(in srgb, ${p.color} 5%, transparent)`,
                      borderTop: `2px solid ${p.color}`,
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: p.color,
                        marginBottom: '0.35rem',
                      }}>
                        {p.label}
                      </p>
                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-dark-100)',
                        lineHeight: 1.6,
                      }}>
                        {level[p.key]}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p style={{
        fontSize: '0.75rem',
        color: 'var(--color-dark-300)',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: '0 1.25rem 1.25rem',
      }}>
        Each stratum is real. None refutes the others. Together they reveal a reality too rich for any single method.
      </p>
    </div>
  );
}
