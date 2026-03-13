import { useState, useEffect } from 'react';
import type { Axis, EntryType } from '../data/convergences';
import { entries } from '../data/convergences';
import AxisFilter from './AxisFilter';
import ConvergenceSummary from './ConvergenceSummary';
import ConvergenceCard from './ConvergenceCard';

interface Props {
  baseUrl: string;
}

export default function ConvergencesApp({ baseUrl }: Props) {
  const [activeAxis, setActiveAxis] = useState<Axis | 'all'>('all');
  const [activeType, setActiveType] = useState<EntryType | 'all'>('all');

  const filtered = entries.filter(e =>
    (activeAxis === 'all' || e.axis === activeAxis) &&
    (activeType === 'all' || e.type === activeType)
  );

  // Handle URL hash on mount — scroll to and highlight a specific entry
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Wait for render
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }, []);

  const handleAxisClick = (axis: Axis) => {
    setActiveAxis(axis);
    // Scroll to filter area
    const filterEl = document.getElementById('convergence-filters');
    if (filterEl) {
      filterEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Summary visualization */}
      <section style={{
        padding: '2rem 1rem',
        background: 'var(--bg-section-alt)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: '1rem',
        }}>
          Distribution across six axes — click a row to filter
        </p>
        <ConvergenceSummary onCellClick={handleAxisClick} />
      </section>

      {/* Filters */}
      <section
        id="convergence-filters"
        style={{
          padding: '1.5rem 1rem',
          position: 'sticky',
          top: '4rem',
          zIndex: 10,
          background: 'rgba(15,20,25,0.97)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(201,168,76,0.1)',
        }}
      >
        <AxisFilter
          activeAxis={activeAxis}
          activeType={activeType}
          onAxisChange={setActiveAxis}
          onTypeChange={setActiveType}
        />
      </section>

      {/* Cards */}
      <section style={{
        maxWidth: '56rem',
        margin: '0 auto',
        padding: '2rem 1rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>
        {filtered.length === 0 && (
          <p style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontFamily: 'var(--serif-body)',
            fontSize: '0.95rem',
            padding: '3rem 0',
          }}>
            No entries match the current filters.
          </p>
        )}
        {filtered.map((entry) => (
          <ConvergenceCard key={entry.id} entry={entry} baseUrl={baseUrl} />
        ))}
      </section>
    </div>
  );
}
