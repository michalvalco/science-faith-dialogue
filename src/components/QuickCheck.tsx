import { useState } from 'react';
import type { QuickCheckItem } from '../data/types';

interface QuickCheckProps {
  item: QuickCheckItem;
}

export default function QuickCheck({ item }: QuickCheckProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === item.correct;

  return (
    <div
      className="my-8 rounded-xl border bg-white overflow-hidden"
      style={{
        borderColor: answered
          ? isCorrect
            ? 'var(--color-jade-300)'
            : 'var(--color-terra-300)'
          : 'var(--color-sandstone-200)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 flex items-center gap-2"
        style={{
          background: answered
            ? isCorrect
              ? 'var(--color-jade-50)'
              : 'var(--color-terra-50)'
            : 'var(--color-sandstone-100)',
          borderBottom: '1px solid var(--color-sandstone-200)',
        }}
      >
        <span
          className="font-sans text-xs font-semibold uppercase tracking-wider"
          style={{
            color: answered
              ? isCorrect
                ? 'var(--color-jade-700)'
                : 'var(--color-terra-700)'
              : 'var(--color-ink-400)',
          }}
        >
          {answered
            ? isCorrect
              ? 'Správne!'
              : 'Nie celkom'
            : 'Rýchla kontrola'}
        </span>
      </div>

      {/* Question */}
      <div className="px-5 pt-4 pb-2">
        <p
          className="font-display text-ink-800 leading-relaxed"
          style={{ fontSize: '1.05rem' }}
          dangerouslySetInnerHTML={{ __html: item.question }}
        />
      </div>

      {/* Options */}
      <div className="px-5 pb-4 space-y-2">
        {item.options.map((opt, i) => {
          const isThis = selected === i;
          const isRight = i === item.correct;
          let bg = 'var(--color-sandstone-50)';
          let border = 'var(--color-sandstone-200)';
          let labelColor = 'var(--color-ink-700)';

          if (answered) {
            if (isRight) {
              bg = 'var(--color-jade-50)';
              border = 'var(--color-jade-400)';
              labelColor = 'var(--color-jade-800)';
            } else if (isThis && !isRight) {
              bg = 'var(--color-terra-50)';
              border = 'var(--color-terra-300)';
              labelColor = 'var(--color-terra-800)';
            }
          }

          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => setSelected(i)}
              className="w-full text-left rounded-lg px-4 py-2.5 flex items-center gap-3 transition-all"
              style={{
                background: bg,
                border: `1px solid ${border}`,
                cursor: answered ? 'default' : 'pointer',
                opacity: answered && !isRight && !isThis ? 0.5 : 1,
              }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-sans text-xs font-bold"
                style={{
                  background: answered && isRight
                    ? 'var(--color-jade-200)'
                    : 'var(--color-sandstone-200)',
                  color: answered && isRight
                    ? 'var(--color-jade-800)'
                    : 'var(--color-ink-500)',
                }}
              >
                {answered && isRight ? '✓' : String.fromCharCode(65 + i)}
              </span>
              <span
                className="font-sans text-sm leading-snug"
                style={{ color: labelColor }}
                dangerouslySetInnerHTML={{ __html: opt }}
              />
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answer) */}
      {answered && (
        <div
          className="px-5 pb-4"
          style={{ borderTop: '1px solid var(--color-sandstone-200)' }}
        >
          <p
            className="font-sans text-sm text-ink-600 leading-relaxed pt-3"
            dangerouslySetInnerHTML={{ __html: item.explanation }}
          />
          <button
            onClick={() => setSelected(null)}
            className="mt-2 font-sans text-xs text-ink-400 hover:text-cosmos-600 transition-colors"
          >
            Skúsiť znova
          </button>
        </div>
      )}
    </div>
  );
}
