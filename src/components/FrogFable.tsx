import { useState } from 'react';

interface Biologist {
  id: string;
  title: string;
  color: string;
  explanation: string;
}

const biologists: Biologist[] = [
  {
    id: 'physiology',
    title: 'Physiologist',
    color: 'var(--color-gold-400)',
    explanation: 'Impulses from the frog\'s brain stimulated its leg muscles — a cascade of electrochemical signals from the central nervous system to the skeletal musculature.',
  },
  {
    id: 'biochem',
    title: 'Biochemist',
    color: 'var(--color-teal-500)',
    explanation: 'Fibrous proteins (actin and myosin) slid past each other, activated by ATP hydrolysis — the molecular engine of contraction.',
  },
  {
    id: 'devel',
    title: 'Developmental Biologist',
    color: 'var(--color-rust-500)',
    explanation: 'Ontogenetic processes gave rise to the frog\'s nervous system and limb structures during embryonic development — pattern formation guided by Hox genes.',
  },
  {
    id: 'behav',
    title: 'Animal Behaviourist',
    color: 'var(--color-gold-400)',
    explanation: 'The frog detected a lurking snake and executed an escape response — a fixed action pattern triggered by a predator cue.',
  },
  {
    id: 'evol',
    title: 'Evolutionary Biologist',
    color: 'var(--color-teal-500)',
    explanation: 'Natural selection ensured only those ancestors that could detect and evade predators survived to breed — adaptive fitness across generations.',
  },
];

export default function FrogFable() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div style={{
      margin: '2rem 0',
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
          The Frog and the Five Biologists
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6 }}>
          A frog jumps into a pond. Five biologists explain why. Click each to hear their answer.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        fontSize: '2.5rem',
        letterSpacing: '0.5rem',
        opacity: 0.6,
      }}>
        <span aria-hidden="true">{'\u{1F438}'}</span>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        padding: '0 1.25rem 1rem',
        justifyContent: 'center',
      }}>
        {biologists.map((b) => {
          const isActive = activeId === b.id;
          const panelId = `frog-panel-${b.id}`;
          return (
            <button
              key={b.id}
              onClick={() => setActiveId(isActive ? null : b.id)}
              aria-expanded={isActive}
              aria-controls={isActive ? panelId : undefined}
              style={{
                padding: '0.5rem 0.75rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--color-dark-900)' : b.color,
                background: isActive ? b.color : 'transparent',
                border: `1px solid ${b.color}`,
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {b.title}
            </button>
          );
        })}
      </div>

      {activeId && (
        <div
          id={`frog-panel-${activeId}`}
          style={{
            padding: '1rem 1.25rem 1.25rem',
            borderTop: '1px solid color-mix(in srgb, var(--color-gold-400) 15%, transparent)',
          }}
        >
          {biologists.filter((b) => b.id === activeId).map((b) => (
            <div key={b.id} style={{
              borderLeft: `3px solid ${b.color}`,
              paddingLeft: '1rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-warm-200)',
                marginBottom: '0.25rem',
              }}>
                The {b.title}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-100)', lineHeight: 1.6 }}>
                {b.explanation}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeId && (
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--color-dark-300)',
          fontStyle: 'italic',
          textAlign: 'center',
          padding: '0 1.25rem 1.25rem',
        }}>
          All five are right. None refutes the others. Together they offer explanatory depth.
        </p>
      )}
    </div>
  );
}
