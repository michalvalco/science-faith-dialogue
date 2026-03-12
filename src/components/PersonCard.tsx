import { useState } from 'react';

interface Person {
  name: string;
  originalName?: string;
  years: string;
  role: string;
  tradition: string;
  color: 'cosmos' | 'terra' | 'sacred' | 'jade';
  keyDates: { year: string; event: string }[];
  keyIdeas: string[];
  quote?: { text: string; source: string };
  connections?: { name: string; relation: string }[];
}

interface PersonCardProps {
  person: Person;
}

const colorMap = {
  cosmos: {
    bg: 'bg-cosmos-50',
    border: 'border-cosmos-200',
    accent: 'bg-cosmos-600',
    badge: 'bg-cosmos-100 text-cosmos-700',
    text: 'text-cosmos-800',
  },
  terra: {
    bg: 'bg-terra-50',
    border: 'border-terra-200',
    accent: 'bg-terra-600',
    badge: 'bg-terra-100 text-terra-700',
    text: 'text-terra-800',
  },
  sacred: {
    bg: 'bg-sacred-50',
    border: 'border-sacred-200',
    accent: 'bg-sacred-600',
    badge: 'bg-sacred-100 text-sacred-700',
    text: 'text-sacred-800',
  },
  jade: {
    bg: 'bg-jade-50',
    border: 'border-jade-200',
    accent: 'bg-jade-600',
    badge: 'bg-jade-100 text-jade-700',
    text: 'text-jade-800',
  },
};

export default function PersonCard({ person }: PersonCardProps) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[person.color];

  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} overflow-hidden transition-all duration-300`}>
      <div className={`${c.accent} h-1.5`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={`font-display text-2xl font-semibold ${c.text}`}>
              {person.name}
            </h3>
            {person.originalName && (
              <p className="text-ink-400 text-sm font-sans italic">{person.originalName}</p>
            )}
          </div>
          <span className={`${c.badge} px-3 py-1 rounded-full font-sans text-sm font-medium`}>
            {person.years}
          </span>
        </div>
        <p className="text-ink-600 mb-1">{person.role}</p>
        <p className="text-ink-400 text-sm font-sans mb-4">{person.tradition}</p>

        {/* Kľúčové učenie / myšlienky */}
        <div className="mb-4">
          <p className="font-sans text-xs uppercase tracking-wider text-ink-400 mb-2">Kľúčové učenie</p>
          <div className="flex flex-wrap gap-2">
            {person.keyIdeas.map((idea, i) => (
              <span key={i} className={`${c.badge} px-3 py-1 rounded-full text-xs font-sans`}>
                {idea}
              </span>
            ))}
          </div>
        </div>

        {person.quote && (
          <blockquote className="border-l-3 border-sacred-400 pl-4 py-2 my-4 bg-white/50 rounded-r-lg">
            <p className="text-sm italic text-ink-600 leading-relaxed">
              „{person.quote.text}"
            </p>
            <p className="text-xs text-ink-400 mt-1 font-sans">— {person.quote.source}</p>
          </blockquote>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-sans text-ink-500 hover:text-ink-700 transition-colors mt-2"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {expanded ? 'Skryť podrobnosti' : 'Kľúčové dátumy a prepojenia'}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-ink-400 mb-2">Kľúčové dátumy</p>
              <div className="space-y-2">
                {person.keyDates.map((d, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="font-sans font-semibold text-ink-500 w-20 flex-shrink-0">{d.year}</span>
                    <span className="text-ink-600">{d.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {person.connections && person.connections.length > 0 && (
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-ink-400 mb-2">Prepojenia</p>
                <div className="space-y-1">
                  {person.connections.map((conn, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <span className="font-semibold text-ink-700">{conn.name}</span>
                      <span className="text-ink-400">—</span>
                      <span className="text-ink-500">{conn.relation}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
