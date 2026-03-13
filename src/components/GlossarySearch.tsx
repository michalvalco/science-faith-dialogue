import { useState, useMemo } from 'react';

interface Term {
  id: string;
  term: string;
  originalScript?: string;
  definition: string;
  tradition: string;
}

interface Props {
  allTerms: Term[];
}

export default function GlossarySearch({ allTerms }: Props) {
  const [query, setQuery] = useState('');

  const matchCount = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return allTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.originalScript && t.originalScript.toLowerCase().includes(q))
    ).length;
  }, [query, allTerms]);

  return (
    <div style={{
      maxWidth: '32rem',
      margin: '0 auto',
      padding: '1.5rem 1rem 0',
    }}>
      <div style={{ position: 'relative' }}>
        <input
          type="search"
          placeholder="Search terms, definitions..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // Toggle visibility of all glossary cards via DOM
            const q = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll<HTMLElement>('[data-glossary-term]');
            cards.forEach((card) => {
              if (!q) {
                card.style.display = '';
                return;
              }
              const termName = (card.getAttribute('data-glossary-term') || '').toLowerCase();
              const termDef = (card.getAttribute('data-glossary-def') || '').toLowerCase();
              const termScript = (card.getAttribute('data-glossary-script') || '').toLowerCase();
              const match = termName.includes(q) || termDef.includes(q) || termScript.includes(q);
              card.style.display = match ? '' : 'none';
            });
            // Also hide empty section headers
            const sections = document.querySelectorAll<HTMLElement>('[data-glossary-section]');
            sections.forEach((section) => {
              if (!q) {
                section.style.display = '';
                return;
              }
              const visibleCards = section.querySelectorAll<HTMLElement>('[data-glossary-term]:not([style*="display: none"])');
              section.style.display = visibleCards.length > 0 ? '' : 'none';
            });
          }}
          aria-label="Search glossary"
          style={{
            width: '100%',
            padding: '0.65rem 1rem 0.65rem 2.5rem',
            fontFamily: 'var(--font-serif)',
            fontSize: '0.9rem',
            color: '#1c1917',
            background: 'white',
            border: '1px solid #e7e5e4',
            borderRadius: '9999px',
            outline: 'none',
          }}
        />
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '0.85rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1rem',
            height: '1rem',
            color: '#a8a29e',
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      {matchCount !== null && (
        <p style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#a8a29e',
          fontFamily: 'sans-serif',
          marginTop: '0.5rem',
        }}>
          {matchCount === 0 ? 'No matches found' : `${matchCount} term${matchCount === 1 ? '' : 's'} found`}
        </p>
      )}
    </div>
  );
}
