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
    color: '#c9a84c',
    explanation: 'Impulses from the frog\'s brain stimulated its leg muscles — a cascade of electrochemical signals from the central nervous system to the skeletal musculature.',
  },
  {
    id: 'biochem',
    title: 'Biochemist',
    color: '#3d8b8b',
    explanation: 'Fibrous proteins (actin and myosin) slid past each other, activated by ATP hydrolysis — the molecular engine of contraction.',
  },
  {
    id: 'devel',
    title: 'Developmental Biologist',
    color: '#a85c32',
    explanation: 'Ontogenetic processes gave rise to the frog\'s nervous system and limb structures during embryonic development — pattern formation guided by Hox genes.',
  },
  {
    id: 'behav',
    title: 'Animal Behaviourist',
    color: '#c9a84c',
    explanation: 'The frog detected a lurking snake and executed an escape response — a fixed action pattern triggered by a predator cue.',
  },
  {
    id: 'evol',
    title: 'Evolutionary Biologist',
    color: '#3d8b8b',
    explanation: 'Natural selection ensured only those ancestors that could detect and evade predators survived to breed — adaptive fitness across generations.',
  },
];

export default function FrogFable() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div style={{
      margin: '2rem 0',
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'rgba(201,168,76,0.03)',
    }}>
      <div style={{ padding: '1.25rem 1.25rem 0.75rem' }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: '#c9a84c',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          The Frog and the Five Biologists
        </p>
        <p style={{ fontSize: '0.85rem', color: '#a8a29e', lineHeight: 1.6 }}>
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
        {'\u{1F438}'}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        padding: '0 1.25rem 1rem',
        justifyContent: 'center',
      }}>
        {biologists.map((b) => (
          <button
            key={b.id}
            onClick={() => setActiveId(activeId === b.id ? null : b.id)}
            style={{
              padding: '0.5rem 0.75rem',
              fontFamily: 'sans-serif',
              fontSize: '0.75rem',
              fontWeight: activeId === b.id ? 600 : 400,
              color: activeId === b.id ? '#0f1419' : b.color,
              background: activeId === b.id ? b.color : 'transparent',
              border: `1px solid ${b.color}`,
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {b.title}
          </button>
        ))}
      </div>

      {activeId && (
        <div style={{
          padding: '1rem 1.25rem 1.25rem',
          borderTop: '1px solid rgba(201,168,76,0.15)',
        }}>
          {biologists.filter((b) => b.id === activeId).map((b) => (
            <div key={b.id} style={{
              borderLeft: `3px solid ${b.color}`,
              paddingLeft: '1rem',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: '#faf5ee',
                marginBottom: '0.25rem',
              }}>
                The {b.title}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#d6d3d1', lineHeight: 1.6 }}>
                {b.explanation}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeId && (
        <p style={{
          fontSize: '0.75rem',
          color: '#78716c',
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
