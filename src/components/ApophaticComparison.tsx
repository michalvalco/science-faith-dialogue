import { useState } from 'react';

interface Tradition {
  id: string;
  label: string;
  icon: string;
  color: string;
  tradition: string;
  concept: string;
  thinkers: string[];
  keyInsight: string;
  practice: string;
}

const traditions: Tradition[] = [
  {
    id: 'christian',
    label: 'Apophatic Theology',
    icon: '✦',
    color: 'var(--color-gold-400)',
    tradition: 'Christian',
    concept: 'Via Negativa — the way of negation',
    thinkers: ['Gregory of Nyssa', 'Pseudo-Dionysius', 'Meister Eckhart'],
    keyInsight: 'God exceeds all categories. Our most truthful speech about God is disciplined by the awareness that God surpasses every concept. God is beyond being, beyond goodness, beyond every name. The theologia negativa is not theological laziness — it is the discipline of refusing to let our concepts become idols.',
    practice: 'Contemplative prayer, the Cloud of Unknowing, entry into divine darkness — not the darkness of ignorance, but of superabundant light that overwhelms creaturely capacity.',
  },
  {
    id: 'buddhist',
    label: 'Śūnyatā',
    icon: '☸',
    color: 'var(--color-teal-500)',
    tradition: 'Buddhist',
    concept: 'Emptiness — the absence of inherent existence',
    thinkers: ['Nāgārjuna', 'Candrakīrti', 'Tsongkhapa'],
    keyInsight: 'All phenomena are empty of self-nature (svabhāva) because they arise dependently. Śūnyatā-śūnyatā — emptiness of emptiness itself — refuses both ontology and epistemology. It is a method of contemplation that is meta-ontological and meta-epistemological.',
    practice: 'Meditation (vipassanā, zazen), the prajñāpāramitā literature, the Heart Sutra: "Form is emptiness, emptiness is form."',
  },
];

interface SharedPoint {
  label: string;
  description: string;
}

const sharedGround: SharedPoint[] = [
  {
    label: 'Epistemic Humility',
    description: 'Both resist reducing reality to whatever the current conceptual apparatus can handle.',
  },
  {
    label: 'Beyond Concepts',
    description: 'Both insist that ultimate reality cannot be fully grasped by discursive thought or linguistic formulation.',
  },
  {
    label: 'Corrective to Hubris',
    description: 'Both offer a powerful check on the scientific and philosophical tendency to totalize — to claim one method or framework captures everything.',
  },
];

const genuineDifference = 'The Christian tradition says God exceeds our categories because God is more than what we can think — superabundant being. The Buddhist tradition says phenomena are empty because they lack inherent existence. The epistemic humility is remarkably convergent, but the metaphysical claims are genuinely different.';

export default function ApophaticComparison() {
  const [activeTradition, setActiveTradition] = useState<string | null>(null);
  const [showShared, setShowShared] = useState(false);

  return (
    <div style={{
      margin: '2.5rem 0',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      border: '1px solid color-mix(in srgb, var(--color-gold-400) 20%, transparent)',
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
          Shared Territory
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6 }}>
          The apophatic tradition and śūnyatā — two paths to the limits of thought.
        </p>
      </div>

      {/* Two traditions side by side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
      }}>
        {traditions.map((t) => {
          const isActive = activeTradition === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTradition(isActive ? null : t.id)}
              aria-expanded={isActive}
              style={{
                padding: '1.25rem',
                background: isActive ? `color-mix(in srgb, ${t.color} 8%, transparent)` : 'transparent',
                border: 'none',
                borderTop: `2px solid ${t.color}`,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }} aria-hidden="true">{t.icon}</span>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: t.color,
                }}>
                  {t.label}
                </h4>
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--color-dark-300)',
                fontStyle: 'italic',
                marginBottom: '0.5rem',
              }}>
                {t.concept}
              </p>

              {isActive && (
                <div style={{ marginTop: '0.5rem' }}>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-dark-100)',
                    lineHeight: 1.7,
                    marginBottom: '0.75rem',
                  }}>
                    {t.keyInsight}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.3rem',
                    marginBottom: '0.75rem',
                  }}>
                    {t.thinkers.map((thinker) => (
                      <span key={thinker} style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '9999px',
                        background: `color-mix(in srgb, ${t.color} 10%, transparent)`,
                        color: t.color,
                        border: `1px solid color-mix(in srgb, ${t.color} 25%, transparent)`,
                      }}>
                        {thinker}
                      </span>
                    ))}
                  </div>

                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-dark-200)',
                    lineHeight: 1.6,
                    borderLeft: `2px solid ${t.color}`,
                    paddingLeft: '0.75rem',
                    fontStyle: 'italic',
                  }}>
                    {t.practice}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Shared ground toggle */}
      <div style={{
        borderTop: '1px solid color-mix(in srgb, var(--color-gold-400) 15%, transparent)',
      }}>
        <button
          onClick={() => setShowShared(!showShared)}
          aria-expanded={showShared}
          style={{
            width: '100%',
            padding: '0.75rem 1.25rem',
            background: showShared ? 'color-mix(in srgb, var(--color-rust-500) 5%, transparent)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.2s',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            color: 'var(--color-rust-500)',
            letterSpacing: '0.05em',
          }}>
            {showShared ? '▾' : '▸'} Shared Ground & Genuine Difference
          </span>
        </button>

        {showShared && (
          <div style={{ padding: '0 1.25rem 1.25rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              {sharedGround.map((point) => (
                <div key={point.label} style={{
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  background: 'color-mix(in srgb, var(--color-rust-500) 5%, transparent)',
                  borderLeft: '2px solid var(--color-rust-500)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--color-rust-500)',
                    marginBottom: '0.25rem',
                  }}>
                    {point.label}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-100)', lineHeight: 1.6 }}>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--color-dark-200)',
              lineHeight: 1.7,
              fontStyle: 'italic',
              borderTop: '1px solid color-mix(in srgb, var(--color-dark-200) 15%, transparent)',
              paddingTop: '0.75rem',
            }}>
              {genuineDifference}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
