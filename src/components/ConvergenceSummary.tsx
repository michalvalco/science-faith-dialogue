import type { Axis, EntryType } from '../data/convergences';
import { axisLabels, typeColors, getSummary } from '../data/convergences';

interface Props {
  onCellClick: (axis: Axis) => void;
}

const axes: Axis[] = ['ontology', 'person', 'soteriology', 'ethics', 'epistemology', 'science'];
const types: EntryType[] = ['convergence', 'divergence', 'opportunity'];

export default function ConvergenceSummary({ onCellClick }: Props) {
  const summary = getSummary();

  return (
    <div style={{
      maxWidth: '48rem',
      margin: '0 auto',
      overflowX: 'auto',
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem',
      }}>
        <thead>
          <tr>
            <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', color: '#8a8278', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Axis
            </th>
            {types.map((type) => (
              <th
                key={type}
                style={{
                  padding: '0.5rem 0.75rem',
                  textAlign: 'center',
                  color: typeColors[type].accent,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontSize: '0.6rem',
                }}
              >
                {typeColors[type].label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {axes.map((axis) => (
            <tr
              key={axis}
              onClick={() => onCellClick(axis)}
              style={{ cursor: 'pointer', transition: 'background 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <td style={{
                padding: '0.6rem 0.75rem',
                color: '#e8e0d4',
                fontSize: '0.75rem',
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}>
                {axisLabels[axis]}
              </td>
              {types.map((type) => {
                const count = summary[axis][type];
                return (
                  <td
                    key={type}
                    style={{
                      padding: '0.6rem 0.75rem',
                      textAlign: 'center',
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {count > 0 ? (
                      <div style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                        {Array.from({ length: count }).map((_, i) => (
                          <span
                            key={i}
                            style={{
                              display: 'inline-block',
                              width: '10px',
                              height: '10px',
                              borderRadius: '2px',
                              background: typeColors[type].accent,
                              opacity: 0.8,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.1)' }}>—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
