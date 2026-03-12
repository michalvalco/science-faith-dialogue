import { useState, useRef, useEffect, useId } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface TermDef {
  term: string;
  originalScript?: string;
  transliteration?: string;
  definition: string;
}

/* ------------------------------------------------------------------ */
/*  Tooltip component — self-contained (Astro-island-friendly)         */
/* ------------------------------------------------------------------ */

interface TermTooltipProps {
  /** Must match a `term` value in the terms array (case-insensitive) */
  term: string;
  /** The full keyTerms array — passed directly (no context needed) */
  terms: TermDef[];
  /** Override the visible label (defaults to the term itself) */
  label?: string;
}

export default function TermTooltip({ term, terms, label }: TermTooltipProps) {
  const entry = terms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase(),
  );

  const [open, setOpen] = useState(false);
  const [above, setAbove] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipId = useId();

  /* Decide whether to flip the tooltip above the trigger */
  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setAbove(rect.top > 260);
  }, [open]);

  /* Close on outside click/touch (mobile) */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  if (!entry) {
    return <em>{label ?? term}</em>;
  }

  /* First sentence of definition (for compact tooltip) */
  const short =
    entry.definition.split(/\.\s/)[0] +
    (entry.definition.includes('.') ? '.' : '');

  return (
    <span
      ref={wrapRef}
      className="term-tooltip-wrap"
      style={{ position: 'relative', display: 'inline' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        className="term-trigger"
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          // Keep open if focus moves within the wrapper (e.g. to the link)
          if (!wrapRef.current?.contains(e.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
        onClick={() => setOpen((v) => !v)}
        style={{
          cursor: 'help',
          borderBottom: '1.5px dotted var(--color-terra-400)',
          color: 'var(--color-cosmos-700)',
          fontStyle: 'italic',
          background: 'none',
          border: 'none',
          padding: 0,
          font: 'inherit',
          lineHeight: 'inherit',
          borderBottomStyle: 'dotted',
          borderBottomWidth: '1.5px',
          borderBottomColor: 'var(--color-terra-400)',
        }}
      >
        {label ?? term}
      </button>

      {open && (
        <span
          id={tooltipId}
          role="tooltip"
          className="term-tip"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            ...(above
              ? { bottom: 'calc(100% + 8px)' }
              : { top: 'calc(100% + 8px)' }),
            width: 'min(22rem, 90vw)',
            zIndex: 50,
            background: 'var(--color-cosmos-950)',
            color: 'var(--color-sandstone-200)',
            borderRadius: '0.5rem',
            padding: '0.75rem 1rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            fontStyle: 'normal',
            lineHeight: '1.5',
            boxShadow: '0 4px 20px rgba(0,0,0,.25)',
            pointerEvents: 'auto',
          }}
        >
          {/* Header row */}
          <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <strong style={{ color: 'var(--color-sacred-300)', fontSize: '0.875rem' }}>
              {entry.term}
            </strong>
            {entry.originalScript && (
              <span style={{ color: 'var(--color-terra-400)', fontSize: '1rem' }}>
                {entry.originalScript}
              </span>
            )}
          </span>

          {/* Definition */}
          <span style={{ display: 'block' }}>{short}</span>

          {/* Link to full glossary */}
          <a
            href="#pojmy"
            onClick={() => setOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: '0.4rem',
              color: 'var(--color-sacred-400)',
              fontSize: '0.75rem',
              textDecoration: 'none',
            }}
          >
            Viac v Pojmoch&nbsp;&rarr;
          </a>

          {/* Arrow */}
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              ...(above
                ? {
                    bottom: '-6px',
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid var(--color-cosmos-950)',
                  }
                : {
                    top: '-6px',
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderBottom: '6px solid var(--color-cosmos-950)',
                  }),
              width: 0,
              height: 0,
            }}
          />
        </span>
      )}
    </span>
  );
}
