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
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '2px',
        color: 'var(--color-gold-400)',
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
          const detailsId = `imago-details-${u.id}`;
          return (
            <button
              key={u.id}
              onClick={() => setActiveId(isActive ? null : u.id)}
              aria-expanded={isActive}
              aria-controls={isActive ? detailsId : undefined}
              style={{
                background: isActive
                  ? 'color-mix(in srgb, var(--color-gold-400) 10%, transparent)'
                  : 'color-mix(in srgb, var(--color-gold-400) 3%, transparent)',
                border: `1px solid ${isActive
                  ? 'color-mix(in srgb, var(--color-gold-400) 40%, transparent)'
                  : 'color-mix(in srgb, var(--color-gold-400) 15%, transparent)'}`,
                borderRadius: '0.5rem',
                padding: '1.25rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} aria-hidden="true">
                {icons[u.id] || '\u2728'}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--color-warm-200)',
                marginBottom: '0.25rem',
              }}>
                {u.title}
              </h4>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                color: 'var(--color-gold-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
              }}>
                {u.subtitle}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--color-dark-200)',
                lineHeight: 1.6,
                marginBottom: isActive ? '0.75rem' : 0,
              }}>
                {u.description}
              </p>
              {isActive && (
                <div
                  id={detailsId}
                  style={{
                    borderTop: '1px solid color-mix(in srgb, var(--color-gold-400) 20%, transparent)',
                    paddingTop: '0.75rem',
                    marginTop: '0.25rem',
                  }}
                >
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-100)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--color-gold-400)' }}>Key thinker:</strong> {u.keyThinker}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-200)', lineHeight: 1.6, fontStyle: 'italic' }}>
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
