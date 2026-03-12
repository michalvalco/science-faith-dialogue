import { useState } from 'react';

interface Term {
  term: string;
  originalScript?: string;
  transliteration?: string;
  language: string;
  definition: string;
  related?: string[];
}

interface KeyTermsProps {
  terms: Term[];
  tradition: string;
}

export default function KeyTerms({ terms }: KeyTermsProps) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {terms.map((t) => {
          const isOpen = expandedTerm === t.term;
          return (
            <div
              key={t.term}
              className="border border-sandstone-200 rounded-lg bg-white overflow-hidden hover:border-sacred-300 transition-colors"
            >
              <button
                onClick={() => setExpandedTerm(isOpen ? null : t.term)}
                className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-sandstone-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-display text-lg font-semibold text-cosmos-800">
                      {t.term}
                    </span>
                    {t.originalScript && (
                      <span className="text-xl text-terra-500 font-normal">
                        {t.originalScript}
                      </span>
                    )}
                  </div>
                  {t.transliteration && (
                    <p className="text-xs font-sans text-ink-400 italic mt-0.5">
                      {t.transliteration} ({t.language})
                    </p>
                  )}
                  {!t.transliteration && (
                    <p className="text-xs font-sans text-ink-400 mt-0.5">{t.language}</p>
                  )}
                </div>
                <svg
                  className={`flex-shrink-0 w-4 h-4 text-ink-400 transition-transform duration-200 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 border-t border-sandstone-100">
                  <p className="text-ink-600 text-sm leading-relaxed mt-3">{t.definition}</p>
                  {t.related && t.related.length > 0 && (
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-sans text-ink-400">Súvisiace:</span>
                      {t.related.map((r, i) => (
                        <span key={i} className="text-xs font-sans px-2 py-0.5 bg-sacred-50 text-sacred-700 rounded-full">
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
