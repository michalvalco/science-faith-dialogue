import { useState, useRef, useCallback } from 'react';

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
    color: 'var(--color-rust-500)',
    description: 'A compulsion to extend scientific concepts and methods into areas where their competency is uncalibrated and almost certainly problematic.',
    example: 'Ethics, aesthetics, metaphysics, and theology all become "pre-scientific" rather than differently rational.',
  },
  {
    id: 'salvific',
    title: 'The Salvific Urge',
    label: 'Salvific',
    color: 'var(--color-teal-500)',
    description: 'An insistence that science can satisfy our ethical, spiritual, and existential needs.',
    example: 'The white coat replaces the cassock; the laboratory becomes the temple.',
  },
  {
    id: 'absolutist',
    title: 'The Absolutist Urge',
    label: 'Absolutist',
    color: 'var(--color-gold-400)',
    description: 'A compulsion to assign to science the exclusive task of providing complete, totalizing accounts of life, the universe, and everything.',
    example: 'Only the measurable is real. If science cannot study it, it does not exist.',
  },
];

const emojiMap: Record<string, string> = {
  imperialist: '\u{1F30D}',
  salvific: '\u{1F52C}',
  absolutist: '\u{1F4CF}',
};

export default function ScientismRadar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % impulses.length;
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + impulses.length) % impulses.length;
    else if (e.key === 'Home') nextIndex = 0;
    else if (e.key === 'End') nextIndex = impulses.length - 1;
    if (nextIndex !== null) {
      e.preventDefault();
      setActiveId(impulses[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  }, []);

  return (
    <div style={{
      margin: '2rem 0',
      border: '1px solid var(--color-dark-50)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'white',
    }}>
      <div style={{ padding: '1.25rem 1.25rem 0.75rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: 'var(--color-rust-500)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          The Three Impulses of Scientism
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-300)', lineHeight: 1.6 }}>
          Ian James Kidd identifies three distinct impulses. Click each to explore.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Scientism impulses"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          borderTop: '1px solid var(--color-dark-50)',
        }}
      >
        {impulses.map((imp, index) => {
          const isActive = activeId === imp.id;
          const tabId = `sci-tab-${imp.id}`;
          const panelId = `sci-panel-${imp.id}`;
          const isFocusable = isActive || (activeId === null && index === 0);
          return (
            <button
              key={imp.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={isActive ? panelId : undefined}
              tabIndex={isFocusable ? 0 : -1}
              onClick={() => setActiveId(isActive ? null : imp.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              style={{
                padding: '1.25rem 1rem',
                background: isActive ? `color-mix(in srgb, ${imp.color} 6%, transparent)` : 'transparent',
                border: 'none',
                borderBottom: isActive ? `3px solid ${imp.color}` : '3px solid transparent',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div
                aria-hidden="true"
                style={{
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
                }}
              >
                {emojiMap[imp.id]}
              </div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                color: isActive ? imp.color : 'var(--color-dark-700)',
              }}>
                {imp.label}
              </p>
            </button>
          );
        })}
      </div>

      {activeId && (
        <div
          role="tabpanel"
          id={`sci-panel-${activeId}`}
          aria-labelledby={`sci-tab-${activeId}`}
          style={{
            padding: '1.25rem',
            borderTop: '1px solid var(--color-dark-50)',
            background: 'var(--color-warm-200)',
          }}
        >
          {impulses.filter((i) => i.id === activeId).map((imp) => (
            <div key={imp.id}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: imp.color,
                marginBottom: '0.5rem',
              }}>
                {imp.title}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-500)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                {imp.description}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--color-dark-300)',
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
