import type { Axis, EntryType } from '../data/convergences';
import { axisLabels, typeColors, entries } from '../data/convergences';

interface Props {
  activeAxis: Axis | 'all';
  activeType: EntryType | 'all';
  onAxisChange: (axis: Axis | 'all') => void;
  onTypeChange: (type: EntryType | 'all') => void;
}

const axes: (Axis | 'all')[] = ['all', 'ontology', 'person', 'soteriology', 'ethics', 'epistemology', 'science'];
const types: (EntryType | 'all')[] = ['all', 'convergence', 'divergence', 'opportunity'];

function countForAxis(axis: Axis | 'all', type: EntryType | 'all'): number {
  return entries.filter(e =>
    (axis === 'all' || e.axis === axis) &&
    (type === 'all' || e.type === type)
  ).length;
}

export default function AxisFilter({ activeAxis, activeType, onAxisChange, onTypeChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Axis filters */}
      <div style={{
        display: 'flex',
        gap: '0.35rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {axes.map((axis) => {
          const isActive = activeAxis === axis;
          const count = countForAxis(axis, activeType);
          const label = axis === 'all' ? 'All Axes' : axisLabels[axis];
          return (
            <button
              key={axis}
              onClick={() => onAxisChange(axis)}
              style={{
                padding: '0.4rem 0.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.03em',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--color-gold-400)' : '2px solid transparent',
                background: isActive ? 'color-mix(in srgb, var(--color-gold-400) 8%, transparent)' : 'transparent',
                color: isActive ? 'var(--color-gold-400)' : '#9aa3b0',
                cursor: 'pointer',
                borderRadius: '0.25rem 0.25rem 0 0',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
              <span style={{ marginLeft: '0.35rem', opacity: 0.6 }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Type filters */}
      <div style={{
        display: 'flex',
        gap: '0.35rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {types.map((type) => {
          const isActive = activeType === type;
          const count = countForAxis(activeAxis, type);
          const accent = type === 'all' ? '#9aa3b0' : typeColors[type].accent;
          const label = type === 'all' ? 'All Types' : typeColors[type].label;
          return (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              style={{
                padding: '0.35rem 0.7rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: `1px solid ${isActive ? accent : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '9999px',
                background: isActive ? `color-mix(in srgb, ${accent} 12%, transparent)` : 'transparent',
                color: isActive ? accent : '#9aa3b0',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {label}
              <span style={{ marginLeft: '0.3rem', opacity: 0.6 }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
