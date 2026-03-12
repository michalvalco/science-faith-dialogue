import { useState } from 'react';
import type { ImagoDeiUnderstanding } from '../data/types';

interface Props {
  understandings: ImagoDeiUnderstanding[];
}

const icons: Record<string, string> = {
  sovereignty: '\u{1F451}',    // crown
  correspondence: '\u{1F4A1}', // lightbulb
  relationality: '\u{1F91D}',  // handshake
  storytelling: '\u{1F4D6}',   // book
};

export default function ImagoDeiCards({ understandings }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div style={{ margin: '2.5rem 0' }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem',
        letterSpacing: '2px',
        color: '#c9a84c',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        textAlign: 'center',
      }}>
        Four Understandings of the Imago Dei
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
      }}>
        {understandings.map((u) => {
          const isActive = activeId === u.id;
          return (
            <button
              key={u.id}
              onClick={() => setActiveId(isActive ? null : u.id)}
              style={{
                background: isActive ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.03)',
                border: `1px solid ${isActive ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.15)'}`,
                borderRadius: '0.5rem',
                padding: '1.25rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {icons[u.id] || '\u2728'}
              </div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#faf5ee',
                marginBottom: '0.25rem',
              }}>
                {u.title}
              </h4>
              <p style={{
                fontFamily: 'sans-serif',
                fontSize: '0.7rem',
                color: '#c9a84c',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
              }}>
                {u.subtitle}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: '#a8a29e',
                lineHeight: 1.6,
                marginBottom: isActive ? '0.75rem' : 0,
              }}>
                {u.description}
              </p>
              {isActive && (
                <div style={{ borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                  <p style={{ fontSize: '0.8rem', color: '#d6d3d1', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#c9a84c' }}>Key thinker:</strong> {u.keyThinker}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#a8a29e', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {u.implication}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
