import { useState } from 'react';
import type { ConvergenceDivergence } from '../data/convergences';
import { typeColors, axisLabels } from '../data/convergences';

interface Props {
  entry: ConvergenceDivergence;
  baseUrl: string;
  /** Map of convergence keyTerm string → glossary entry ID for cross-linking */
  termGlossaryMap?: Record<string, string>;
}

export default function ConvergenceCard({ entry, baseUrl, termGlossaryMap = {} }: Props) {
  const [expanded, setExpanded] = useState(false);
  const color = typeColors[entry.type];
  const panelId = `analysis-${entry.id}`;

  return (
    <div
      id={entry.id}
      style={{
        borderRadius: '0.75rem',
        border: '1px solid rgba(255,255,255,0.06)',
        borderLeft: `4px solid ${color.accent}`,
        overflow: 'hidden',
        background: 'var(--color-dark-900)',
      }}
    >
      {/* Header: type badge + axis + title */}
      <div style={{ padding: '1.25rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '0.65rem',
            fontFamily: 'var(--font-mono)',
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
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-dark-100)',
          }}>
            {axisLabels[entry.axis]}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--color-warm-200)',
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
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-gold-400)',
            marginBottom: '0.5rem',
          }}>
            {entry.christianPerspective.label}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-100)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {entry.christianPerspective.description}
          </p>
          {entry.christianPerspective.keyThinkers.length > 0 && (
            <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-dark-300)', marginBottom: '0.35rem' }}>
              {entry.christianPerspective.keyThinkers.join(' · ')}
            </p>
          )}
          {entry.christianPerspective.keyTerms.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
              {entry.christianPerspective.keyTerms.map((term) => {
                const glossaryId = termGlossaryMap[term];
                const pillStyle = {
                  fontSize: '0.6rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '9999px',
                  background: 'rgba(201,168,76,0.1)',
                  color: 'var(--color-gold-400)',
                  textDecoration: 'none' as const,
                };
                return glossaryId ? (
                  <a key={term} href={`${baseUrl}glossary#${glossaryId}`} style={pillStyle}>
                    {term}
                  </a>
                ) : (
                  <span key={term} style={pillStyle}>
                    {term}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Buddhist perspective */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(61,139,139,0.15)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-teal-500)',
            marginBottom: '0.5rem',
          }}>
            {entry.buddhistPerspective.label}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-100)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {entry.buddhistPerspective.description}
          </p>
          {entry.buddhistPerspective.keyThinkers.length > 0 && (
            <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-dark-300)', marginBottom: '0.35rem' }}>
              {entry.buddhistPerspective.keyThinkers.join(' · ')}
            </p>
          )}
          {entry.buddhistPerspective.keyTerms.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
              {entry.buddhistPerspective.keyTerms.map((term) => {
                const glossaryId = termGlossaryMap[term];
                const pillStyle = {
                  fontSize: '0.6rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '9999px',
                  background: 'rgba(61,139,139,0.1)',
                  color: 'var(--color-teal-500)',
                  textDecoration: 'none' as const,
                };
                return glossaryId ? (
                  <a key={term} href={`${baseUrl}glossary#${glossaryId}`} style={pillStyle}>
                    {term}
                  </a>
                ) : (
                  <span key={term} style={pillStyle}>
                    {term}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Analysis toggle */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <button
          id={`btn-${entry.id}`}
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
            fontFamily: 'var(--font-mono)',
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
          role={expanded ? 'region' : undefined}
          aria-labelledby={expanded ? `btn-${entry.id}` : undefined}
          style={{
            maxHeight: expanded ? '60rem' : '0',
            overflowY: expanded ? 'auto' : 'hidden',
            transition: 'max-height 0.3s ease',
            ...(expanded ? { tabIndex: 0 } : {}),
          }}
        >
          <div style={{ padding: '0 1.5rem 1.25rem' }}>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--color-warm-200)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-serif)',
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
            <p key={i} style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--color-dark-300)', lineHeight: 1.5 }}>
              {src}
            </p>
          ))}
        </div>
        {entry.relatedAct && (
          <a
            href={`${baseUrl}presentation#${entry.relatedAct.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
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
