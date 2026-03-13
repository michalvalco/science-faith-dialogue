import { useState } from 'react';

interface TimelineEvent {
  id: string;
  year: number;
  yearDisplay: string;
  title: string;
  description: string;
  category: 'theology' | 'science' | 'philosophy' | 'buddhism' | 'dialogue';
}

const categoryColors: Record<TimelineEvent['category'], string> = {
  theology: 'var(--color-gold-400)',
  science: 'var(--color-teal-500)',
  philosophy: 'var(--color-dark-200)',
  buddhism: 'var(--color-teal-500)',
  dialogue: 'var(--color-rust-500)',
};

const categoryLabels: Record<TimelineEvent['category'], string> = {
  theology: 'Theology',
  science: 'Science',
  philosophy: 'Philosophy',
  buddhism: 'Buddhism',
  dialogue: 'Dialogue',
};

const events: TimelineEvent[] = [
  {
    id: 'nagarjuna',
    year: 200,
    yearDisplay: 'c. 150–250',
    title: 'Nāgārjuna\'s Mūlamadhyamakakārikā',
    description: 'The foundational text of Madhyamaka philosophy articulates śūnyatā (emptiness) and dependent origination as the fundamental nature of all phenomena.',
    category: 'buddhism',
  },
  {
    id: 'augustine',
    year: 400,
    yearDisplay: 'c. 354–430',
    title: 'Augustine of Hippo',
    description: 'Developed the theology of creation ex nihilo and the correspondence understanding of the imago Dei — the human mind reflecting the rationality of its Creator.',
    category: 'theology',
  },
  {
    id: 'gregory-nyssa',
    year: 380,
    yearDisplay: 'c. 335–395',
    title: 'Gregory of Nyssa',
    description: 'Pioneered apophatic theology: the soul\'s journey toward God is an ever-deepening entry into divine darkness — not ignorance, but superabundant light.',
    category: 'theology',
  },
  {
    id: 'aquinas',
    year: 1270,
    yearDisplay: 'c. 1225–1274',
    title: 'Thomas Aquinas\'s Summa',
    description: 'Synthesized Aristotelian philosophy with Christian theology, articulating the five ways and the doctrine of analogy — speaking truthfully about God while respecting divine transcendence.',
    category: 'theology',
  },
  {
    id: 'galileo',
    year: 1632,
    yearDisplay: '1632',
    title: 'Galileo\'s Dialogue',
    description: 'Dialogue Concerning the Two Chief World Systems. Often cited as the origin of the science–religion "conflict," but the reality was far more complex than the popular myth suggests.',
    category: 'science',
  },
  {
    id: 'newton',
    year: 1687,
    yearDisplay: '1687',
    title: 'Newton\'s Principia',
    description: 'Philosophiæ Naturalis Principia Mathematica — a work of natural philosophy written by a deeply religious thinker who saw scientific law as evidence of divine design.',
    category: 'science',
  },
  {
    id: 'otto',
    year: 1917,
    yearDisplay: '1917',
    title: 'Rudolf Otto: Das Heilige',
    description: 'Distinguished the irrational from the non-rational. The numinous — the mysterium tremendum et fascinans — is trans-rational, not below reason but beyond its reach.',
    category: 'philosophy',
  },
  {
    id: 'godel',
    year: 1931,
    yearDisplay: '1931',
    title: 'Gödel\'s Incompleteness Theorems',
    description: 'No consistent formal system can prove all truths about arithmetic — a mathematical demonstration that reason itself has structural limits.',
    category: 'science',
  },
  {
    id: 'torrance',
    year: 1969,
    yearDisplay: '1969',
    title: 'Torrance: Theological Science',
    description: 'Argued that every discipline must engage reality "according to its distinct nature" — the object determines the method. Developed contingent rationality.',
    category: 'theology',
  },
  {
    id: 'jaki',
    year: 1978,
    yearDisplay: '1978',
    title: 'Jaki: The Road of Science',
    description: 'Argued convincingly that the contingency of creation was one of the intellectual preconditions for the emergence of modern empirical science.',
    category: 'dialogue',
  },
  {
    id: 'polkinghorne',
    year: 1998,
    yearDisplay: '1998',
    title: 'Polkinghorne: Belief in God in an Age of Science',
    description: 'Particle physicist and Anglican priest argued that the fine-tuning of cosmological constants points toward a deeper intelligibility in nature.',
    category: 'dialogue',
  },
  {
    id: 'mcgrath',
    year: 2019,
    yearDisplay: '2019',
    title: 'McGrath: Territories of Human Reason',
    description: 'Developed "colligation" and "multiple situated rationalities" — no single method exhausts reality. Epistemological pluralism as intellectual virtue.',
    category: 'dialogue',
  },
  {
    id: 'nguyen',
    year: 2024,
    yearDisplay: '2024',
    title: 'Nguyen: The Emptiness of Everything',
    description: 'Applied dependent origination and śūnyatā systematically to modern science — from quarks to consciousness — arguing that compositionality and impermanence reveal emptiness.',
    category: 'buddhism',
  },
  {
    id: 'valco',
    year: 2026,
    yearDisplay: '2026',
    title: 'This Lecture: TNTI Hanoi',
    description: 'A Christian philosopher and a Buddhist philosopher sit down together at the Tran Nhan Tong Institute to explore what their traditions can learn from each other about science, personhood, and mystery.',
    category: 'dialogue',
  },
];

export default function ScienceReligionTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<TimelineEvent['category'] | 'all'>('all');

  const filtered = filter === 'all' ? events : events.filter((e) => e.category === filter);
  const categories: (TimelineEvent['category'] | 'all')[] = ['all', 'theology', 'science', 'philosophy', 'buddhism', 'dialogue'];

  return (
    <div style={{
      margin: '2.5rem 0',
      border: '1px solid color-mix(in srgb, var(--color-gold-400) 20%, transparent)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'color-mix(in srgb, var(--color-gold-400) 3%, transparent)',
    }}>
      <div style={{ padding: '1.25rem 1.25rem 0.75rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          color: 'var(--color-gold-400)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Timeline
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-200)', lineHeight: 1.6 }}>
          Key moments in the science–faith dialogue, from Nāgārjuna to the present.
        </p>
      </div>

      {/* Category filter */}
      <div style={{
        display: 'flex',
        gap: '0.35rem',
        padding: '0 1.25rem 1rem',
        flexWrap: 'wrap',
      }}>
        {categories.map((cat) => {
          const isActive = filter === cat;
          const color = cat === 'all' ? 'var(--color-dark-200)' : categoryColors[cat];
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.3rem 0.6rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: `1px solid ${isActive ? color : 'color-mix(in srgb, var(--color-warm-200) 15%, transparent)'}`,
                borderRadius: '9999px',
                background: isActive ? `color-mix(in srgb, ${color} 12%, transparent)` : 'transparent',
                color: isActive ? color : 'var(--color-dark-300)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat === 'all' ? 'All' : categoryLabels[cat]}
            </button>
          );
        })}
      </div>

      {/* Timeline entries */}
      <div style={{ padding: '0 1.25rem 1.25rem' }}>
        {filtered.map((event, index) => {
          const isExpanded = expandedId === event.id;
          const color = categoryColors[event.category];
          const isLast = index === filtered.length - 1;
          return (
            <div key={event.id} style={{ display: 'flex', gap: '1rem' }}>
              {/* Timeline line + dot */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '1rem',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: isExpanded ? color : 'transparent',
                  border: `2px solid ${color}`,
                  flexShrink: 0,
                  marginTop: '0.35rem',
                }} />
                {!isLast && (
                  <div style={{
                    width: '1px',
                    flex: 1,
                    background: 'color-mix(in srgb, var(--color-warm-200) 15%, transparent)',
                  }} />
                )}
              </div>

              {/* Content */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : event.id)}
                aria-expanded={isExpanded}
                style={{
                  flex: 1,
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 0 1.25rem',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: color,
                  letterSpacing: '0.05em',
                }}>
                  {event.yearDisplay}
                </span>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-warm-200)',
                  marginTop: '0.15rem',
                }}>
                  {event.title}
                </p>
                {isExpanded && (
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-dark-100)',
                    lineHeight: 1.6,
                    marginTop: '0.5rem',
                    borderLeft: `2px solid ${color}`,
                    paddingLeft: '0.75rem',
                  }}>
                    {event.description}
                  </p>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
