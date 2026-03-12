import { useState } from 'react';

interface Impulse {
  id: string;
  title: string;
  label: string;
  color: string;
  description: string;
  example: string;
}

const impulses: Impulse[] = [
  {
    id: 'imperialist',
    title: 'The Imperialist Urge',
    label: 'Imperialist',
    color: '#a85c32',
    description: 'A compulsion to extend scientific concepts and methods into areas where their competency is uncalibrated and almost certainly problematic.',
    example: 'Ethics, aesthetics, metaphysics, and theology all become "pre-scientific" rather than differently rational.',
  },
  {
    id: 'salvific',
    title: 'The Salvific Urge',
    label: 'Salvific',
    color: '#3d8b8b',
    description: 'An insistence that science can satisfy our ethical, spiritual, and existential needs.',
    example: 'The white coat replaces the cassock; the laboratory becomes the temple.',
  },
  {
    id: 'absolutist',
    title: 'The Absolutist Urge',
    label: 'Absolutist',
    color: '#c9a84c',
    description: 'A compulsion to assign to science the exclusive task of providing complete, totalizing accounts of life, the universe, and everything.',
    example: 'Only the measurable is real. If science cannot study it, it does not exist.',
  },
];

export default function ScientismRadar() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div style={{
      margin: '2rem 0',
      border: '1px solid #e7e5e4',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'white',
    }}>
      <div style={{ padding: '1.25rem 1.25rem 0.75rem' }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: '#a85c32',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          The Three Impulses of Scientism
        </p>
        <p style={{ fontSize: '0.85rem', color: '#78716c', lineHeight: 1.6 }}>
          Ian James Kidd identifies three distinct impulses. Click each to explore.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0',
        borderTop: '1px solid #e7e5e4',
      }}>
        {impulses.map((imp) => {
          const isActive = activeId === imp.id;
          return (
            <button
              key={imp.id}
              onClick={() => setActiveId(isActive ? null : imp.id)}
              style={{
                padding: '1.25rem 1rem',
                background: isActive ? `${imp.color}10` : 'transparent',
                border: 'none',
                borderBottom: isActive ? `3px solid ${imp.color}` : '3px solid transparent',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                border: `2px solid ${imp.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontSize: '1.2rem',
                background: isActive ? imp.color : 'transparent',
                color: isActive ? 'white' : imp.color,
                transition: 'all 0.2s',
              }}>
                {imp.id === 'imperialist' ? '\u{1F30D}' : imp.id === 'salvific' ? '\u{1F52C}' : '\u{1F4CF}'}
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: isActive ? imp.color : '#1c1917',
              }}>
                {imp.label}
              </p>
            </button>
          );
        })}
      </div>

      {activeId && (
        <div style={{
          padding: '1.25rem',
          borderTop: '1px solid #e7e5e4',
          background: '#faf5ee',
        }}>
          {impulses.filter((i) => i.id === activeId).map((imp) => (
            <div key={imp.id}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.1rem',
                fontWeight: 600,
                color: imp.color,
                marginBottom: '0.5rem',
              }}>
                {imp.title}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#44403c', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                {imp.description}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: '#78716c',
                fontStyle: 'italic',
                lineHeight: 1.6,
                borderLeft: `3px solid ${imp.color}`,
                paddingLeft: '0.75rem',
              }}>
                {imp.example}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
