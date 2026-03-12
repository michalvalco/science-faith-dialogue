import { useState } from 'react';
import type { FineTuningConstant } from '../data/types';

interface Props {
  constants: FineTuningConstant[];
}

export default function FineTuningExplorer({ constants }: Props) {
  const [activeId, setActiveId] = useState(constants[0]?.id ?? '');

  const active = constants.find((c) => c.id === activeId) ?? constants[0];

  return (
    <div style={{
      margin: '2.5rem 0',
      border: '1px solid color-mix(in srgb, var(--color-gold-400) 20%, transparent)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'color-mix(in srgb, var(--color-gold-400) 3%, transparent)',
    }}>
      <div style={{
        padding: '1.25rem 1.25rem 0.75rem',
        borderBottom: '1px solid color-mix(in srgb, var(--color-gold-400) 15%, transparent)',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: 'var(--color-gold-400)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Cosmological Fine-Tuning
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6 }}>
          Adjust the fundamental constants of nature. What happens if they are even slightly different?
        </p>
      </div>

      {/* Constant selector tabs */}
      <div
        role="tablist"
        aria-label="Cosmological constants"
        style={{
          display: 'flex',
          gap: '0',
          borderBottom: '1px solid color-mix(in srgb, var(--color-gold-400) 15%, transparent)',
          overflowX: 'auto',
        }}
      >
        {constants.map((c) => {
          const isActive = c.id === activeId;
          const tabId = `ft-tab-${c.id}`;
          const panelId = `ft-panel-${c.id}`;
          return (
            <button
              key={c.id}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(c.id)}
              style={{
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: isActive ? 'var(--color-gold-400)' : 'var(--color-dark-300)',
                background: isActive ? 'color-mix(in srgb, var(--color-gold-400) 8%, transparent)' : 'transparent',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--color-gold-400)' : '2px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      {/* Active constant detail */}
      {active && (
        <div
          role="tabpanel"
          id={`ft-panel-${active.id}`}
          aria-labelledby={`ft-tab-${active.id}`}
          style={{ padding: '1.25rem' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--color-warm-200)',
            marginBottom: '0.5rem',
          }}>
            {active.name}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {active.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* Too small */}
            <div style={{
              padding: '1rem',
              borderRadius: '0.375rem',
              background: 'color-mix(in srgb, var(--color-rust-500) 8%, transparent)',
              borderLeft: '3px solid var(--color-rust-500)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-rust-500)',
                marginBottom: '0.5rem',
              }}>
                Too small
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-100)', lineHeight: 1.6 }}>
                {active.tooSmall}
              </p>
            </div>

            {/* Too large */}
            <div style={{
              padding: '1rem',
              borderRadius: '0.375rem',
              background: 'color-mix(in srgb, var(--color-teal-500) 8%, transparent)',
              borderLeft: '3px solid var(--color-teal-500)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-teal-500)',
                marginBottom: '0.5rem',
              }}>
                Too large
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-dark-100)', lineHeight: 1.6 }}>
                {active.tooLarge}
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.75rem',
            color: 'var(--color-dark-300)',
            fontStyle: 'italic',
            textAlign: 'center',
            marginTop: '1rem',
          }}>
            The universe exists in a narrow band where life is possible. Coincidence — or design?
          </p>
        </div>
      )}
    </div>
  );
}
