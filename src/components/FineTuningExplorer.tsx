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
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'rgba(201,168,76,0.03)',
    }}>
      <div style={{
        padding: '1.25rem 1.25rem 0.75rem',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: '#c9a84c',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Cosmological Fine-Tuning
        </p>
        <p style={{ fontSize: '0.85rem', color: '#a8a29e', lineHeight: 1.6 }}>
          Adjust the fundamental constants of nature. What happens if they are even slightly different?
        </p>
      </div>

      {/* Constant selector tabs */}
      <div style={{
        display: 'flex',
        gap: '0',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        overflowX: 'auto',
      }}>
        {constants.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            style={{
              padding: '0.75rem 1rem',
              fontFamily: 'sans-serif',
              fontSize: '0.75rem',
              color: c.id === activeId ? '#c9a84c' : '#78716c',
              background: c.id === activeId ? 'rgba(201,168,76,0.08)' : 'transparent',
              border: 'none',
              borderBottom: c.id === activeId ? '2px solid #c9a84c' : '2px solid transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Active constant detail */}
      {active && (
        <div style={{ padding: '1.25rem' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#faf5ee',
            marginBottom: '0.5rem',
          }}>
            {active.name}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#a8a29e', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {active.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* Too small */}
            <div style={{
              padding: '1rem',
              borderRadius: '0.375rem',
              background: 'rgba(168,92,50,0.08)',
              borderLeft: '3px solid #a85c32',
            }}>
              <p style={{
                fontFamily: 'sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#a85c32',
                marginBottom: '0.5rem',
              }}>
                Too small
              </p>
              <p style={{ fontSize: '0.8rem', color: '#d6d3d1', lineHeight: 1.6 }}>
                {active.tooSmall}
              </p>
            </div>

            {/* Too large */}
            <div style={{
              padding: '1rem',
              borderRadius: '0.375rem',
              background: 'rgba(61,139,139,0.08)',
              borderLeft: '3px solid #3d8b8b',
            }}>
              <p style={{
                fontFamily: 'sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3d8b8b',
                marginBottom: '0.5rem',
              }}>
                Too large
              </p>
              <p style={{ fontSize: '0.8rem', color: '#d6d3d1', lineHeight: 1.6 }}>
                {active.tooLarge}
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.75rem',
            color: '#78716c',
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
