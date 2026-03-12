import { useState } from 'react';

interface Question {
  id: number;
  category: string;
  question: string;
  hint: string;
}

interface StudyQuestionsProps {
  questions: Question[];
}

export default function StudyQuestions({ questions }: StudyQuestionsProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = questions.reduce<Record<string, Question[]>>((acc, q) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([category, qs]) => (
        <div key={category}>
          <h3 className="font-display text-xl font-semibold text-cosmos-800 mb-4">
            {category}
          </h3>
          <div className="space-y-2">
            {qs.map((q) => {
              const isOpen = openId === q.id;
              return (
                <div
                  key={q.id}
                  className="border border-sandstone-200 rounded-lg bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : q.id)}
                    className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-sandstone-50 transition-colors"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 bg-sacred-100 text-sacred-700 rounded-full flex items-center justify-center font-sans text-xs font-bold">
                      {q.id}
                    </span>
                    <span className="flex-1 text-ink-800 leading-relaxed">
                      {q.question}
                    </span>
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-ink-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-0 ml-9">
                      <div className="border-l-2 border-sacred-300 pl-4 py-2">
                        <p className="text-sm font-sans text-ink-500 uppercase tracking-wider mb-1">Nápoveda</p>
                        <p className="text-ink-600 text-sm italic leading-relaxed">{q.hint}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
