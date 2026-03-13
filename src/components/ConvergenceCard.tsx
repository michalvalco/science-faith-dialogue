import { useState } from 'react';
import type { ConvergenceDivergence } from '../data/convergences';
import { typeColors, axisLabels } from '../data/convergences';

interface Props {
  entry: ConvergenceDivergence;
  baseUrl: string;
}

export default function ConvergenceCard({ entry, baseUrl }: Props) {
  const [expanded, setExpanded] = useState(false);
  const color = typeColors[entry.type];
  const panelId = `analysis-${entry.id}`;

  return (
    <div
      id={entry.id}
      style={{
        background: 'var(--bg-deep)',
        borderRadius: '0.75rem',
        borderLeft: `4px solid ${color.accent}`,
        border: '1px solid rgba(255,255,255,0.06)',
        borderLeftWidth: '4px',
        borderLeftColor: color.accent,
        overflow: 'hidden',
      }}
    >
      {/* Header: type badge + axis + title */}
      <div style={{ padding: '1.25rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '0.65rem',
            fontFamily: 'var(--mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '0.2rem 0.5rem',
            borderRadius: '9999px',
            color: color.accent,
            border: `1px solid ${color.accent}`,
            background: 'transparent',
          }}>
            {color.label}
          </span>
          <span style={{
            fontSize: '0.65rem',
            fontFamily: 'var(--mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted-light)',
          }}>
            {axisLabels[entry.axis]}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--serif-display)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--text-light)',
          lineHeight: 1.3,
        }}>
          {entry.title}
        </h3>
      </div>

      {/* Two-column perspectives */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '0',
      }}>
        {/* Christian perspective */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          borderRight: '1px solid rgba(255,255,255,0.04)',
        }}>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--gold)',
            marginBottom: '0.5rem',
          }}>
            {entry.christianPerspective.label}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted-light)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {entry.christianPerspective.description}
          </p>
          {entry.christianPerspective.keyThinkers.length > 0 && (
            <p style={{ fontSize: '0.7rem', fontFamily: 'var(--mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              {entry.christianPerspective.keyThinkers.join(' · ')}
            </p>
          )}
          {entry.christianPerspective.keyTerms.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
              {entry.christianPerspective.keyTerms.map((term) => (
                <span key={term} style={{
                  fontSize: '0.6rem',
                  fontFamily: 'var(--mono)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '9999px',
                  background: 'rgba(201,168,76,0.1)',
                  color: 'var(--gold)',
                }}>
                  {term}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Buddhist perspective */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(61,139,139,0.15)',
        }}>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--teal)',
            marginBottom: '0.5rem',
          }}>
            {entry.buddhistPerspective.label}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted-light)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {entry.buddhistPerspective.description}
          </p>
          {entry.buddhistPerspective.keyThinkers.length > 0 && (
            <p style={{ fontSize: '0.7rem', fontFamily: 'var(--mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              {entry.buddhistPerspective.keyThinkers.join(' · ')}
            </p>
          )}
          {entry.buddhistPerspective.keyTerms.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
              {entry.buddhistPerspective.keyTerms.map((term) => (
                <span key={term} style={{
                  fontSize: '0.6rem',
                  fontFamily: 'var(--mono)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '9999px',
                  background: 'rgba(61,139,139,0.1)',
                  color: 'var(--teal)',
                }}>
                  {term}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Analysis toggle */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={expanded ? panelId : undefined}
          style={{
            width: '100%',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: color.accent,
          }}
        >
          <span style={{
            display: 'inline-block',
            transition: 'transform 0.2s',
            transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
          }}>
            ▸
          </span>
          Analysis
        </button>
        <div
          id={panelId}
          style={{
            maxHeight: expanded ? '30rem' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div style={{ padding: '0 1.5rem 1.25rem' }}>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-light)',
              lineHeight: 1.7,
              fontFamily: 'var(--serif-body)',
              fontStyle: 'italic',
            }}>
              {entry.analysis}
            </p>
          </div>
        </div>
      </div>

      {/* Footer: sources + related act */}
      <div style={{
        padding: '0.75rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          {entry.sources.map((src, i) => (
            <p key={i} style={{ fontSize: '0.65rem', fontFamily: 'var(--mono)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {src}
            </p>
          ))}
        </div>
        {entry.relatedAct && (
          <a
            href={`${baseUrl}presentation#${entry.relatedAct.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--mono)',
              color: color.accent,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Related: {entry.relatedAct} →
          </a>
        )}
      </div>
    </div>
  );
}
