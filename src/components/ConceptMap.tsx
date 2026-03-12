/**
 * ConceptMap — visual diagram of Hindu philosophical concepts and their
 * relationships: Brahman → Māyā → phenomenal world → Ātman in Saṃsāra →
 * Karma cycle → three paths (Jñāna/Karma/Bhakti) → Mokṣa → return to Brahman.
 *
 * Pure SVG, no external dependencies. Uses the project's color palette.
 * Hover/focus on any node to see a detailed narrative tooltip.
 */

import { useState, useCallback, type CSSProperties } from 'react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ConceptNode {
  id: string;
  label: string;
  sanskrit?: string;
  desc: string;
  detail: string;
  x: number;
  y: number;
  color: string;
  textColor: string;
  rx?: number;
  ry?: number;
}

const NODES: ConceptNode[] = [
  {
    id: 'brahman', label: 'Brahman', sanskrit: 'ब्रह्मन्',
    desc: 'Absolútna realita — základ všetkého',
    detail: 'Nie boh medzi bohmi, ale nekonečné, bezformé vedomie, z ktorého všetko vzniká a do ktorého sa všetko vracia. V Advaita Vedānte je Brahman jedinou realitou — všetko ostatné je zdanie. Celá dráma hinduistickej filozofie začína a končí tu: z Brahmana, cez Māyu, do sveta mnohosti — a späť cez oslobodenie. Je to Alfa aj Omega, prameň aj ústie.',
    x: 300, y: 40, color: '#d4b96e', textColor: '#3e3935',
  },
  {
    id: 'maya', label: 'Māyā', sanskrit: 'माया',
    desc: 'Kozmická ilúzia — zahaľuje pravú podstatu',
    detail: 'Kozmická sila, ktorá spôsobuje, že Jedno sa javí ako mnohé. Nie klamstvo, ale tvorivá energia: Māyā premieta fenomenálny svet na Brahmana tak, ako sa film premieta na plátno — plátno (Brahman) zostáva nezmenené. Śaṅkara ju nazval „ani reálnou, ani nereálnou" (anirvacanīya). Nemožno ju uchopiť myšlienkou, pretože myšlienka samotná je jej produktom. Je to závoj, ktorý treba prehliadnuť.',
    x: 300, y: 130, color: '#b3c5e0', textColor: '#1c2e4a',
  },
  {
    id: 'jagat', label: 'Svet (Jagat)',
    desc: 'Fenomenálny svet — vnímaný cez zmysly',
    detail: 'Svet tak, ako ho prežívame cez zmysly: rozmanitý, premenlivý, plný utrpenia aj krásy. Hinduistická filozofia nepopiera, že svet existuje — spochybňuje jeho konečný status. Pre Advaitu je svet reálny ako skúsenosť (vyāvahārika), ale nie konečne reálny (pāramārthika). Jagat je javiskom, na ktorom sa odohráva celá dráma spútanosti a oslobodenia — miestom, kde Ātman hľadá cestu späť.',
    x: 300, y: 220, color: '#f4cdb5', textColor: '#7a3922',
  },
  {
    id: 'atman', label: 'Ātman', sanskrit: 'आत्मन्',
    desc: 'Pravé, večné Ja — identické s Brahmanom',
    detail: 'Pravé Ja, skryté pod vrstvami tela, mysle a ega. Revolučný objav Upanišád: toto vnútorné Ja je identické s Brahmanom — „Tat tvam asi" (Ty si To). Celá duchovná cesta je odhaľovaním toho, čo tu vždy bolo. Ātman netreba vytvoriť ani dosiahnuť — len rozpoznať. Je ako slnko skryté za oblakmi: oblaky sa rozplynú, slnko tam vždy bolo.',
    x: 140, y: 310, color: '#d4b96e', textColor: '#3e3935',
  },
  {
    id: 'samsara', label: 'Saṃsāra', sanskrit: 'संसार',
    desc: 'Kolobeh zrodení a smrtí',
    detail: 'Bezpočiatočný kolobeh zrodenia, smrti a znovuzrodenia. Nie trest, ale dôsledok — duša (džíva) putuje nespočetnými životmi, poháňaná karmou. Každý život je formovaný činmi v predchádzajúcich životoch. Kolobeh pokračuje, kým pretrváva nevedomosť (avidyā). Saṃsāra nie je miesto — je to stav mysle, z ktorého oslobodenie (mokṣa) vyslobodzuje.',
    x: 460, y: 310, color: '#ecab84', textColor: '#65301e',
  },
  {
    id: 'karma', label: 'Karma', sanskrit: 'कर्म',
    desc: 'Zákon činu a dôsledku — poháňa cyklus',
    detail: 'Univerzálny zákon morálnej príčiny a následku: každý čin — telesný, slovný, mentálny — zanecháva odtlačok (saṃskāra), ktorý formuje budúcu skúsenosť. Dobré činy vedú k priaznivému znovuzrodeniu, zlé k utrpeniu. No aj dobrá karma zväzuje — cieľom je prekonať karmu úplne, cez nezištné konanie (niṣkāma karma) alebo poznanie. Bhagavadgītā: „Na konanie máš právo, nikdy však na jeho plody."',
    x: 460, y: 400, color: '#e28a56', textColor: '#fff',
  },
  {
    id: 'dharma', label: 'Dharma', sanskrit: 'धर्म',
    desc: 'Kozmický poriadok a etická povinnosť',
    detail: 'Kozmický poriadok, etická povinnosť, spravodlivý život. Dharma funguje na dvoch úrovniach: univerzálny poriadok (ṛta), ktorý drží kozmos pohromade, a individuálna povinnosť (svadharma) založená na postavení, životnom štádiu a situácii. Ústredné napätie Bhagavadgíty: keď sa zdá, že dharma protirečí sama sebe, čo urobíš? Ardžunova dilema je dilemou každého človeka.',
    x: 140, y: 400, color: '#8ec4ab', textColor: '#1d3d30',
  },
  {
    id: 'moksha', label: 'Mokṣa', sanskrit: 'मोक्ष',
    desc: 'Oslobodenie — konečný cieľ',
    detail: 'Konečný cieľ: koniec saṃsāry, rozptýlenie nevedomosti, rozpoznanie, že Ātman vždy bol Brahmanom. Rôzne školy si mokṣu predstavujú odlišne: pre Advaitu je to realizácia ne-dvojnosti; pre Višištādvaitu večné spoločenstvo s Bohom; pre Dvaitu blažená blízkosť k Bohu. Tri cesty sem vedú: džňāna (poznanie), karma (nezištné konanie) a bhakti (oddaná láska). Bod, v ktorom sa kruh uzatvára.',
    x: 300, y: 500, color: '#3f8d6b', textColor: '#fff',
  },
];

interface Arrow {
  from: string;
  to: string;
  label?: string;
  dash?: boolean;
}

const ARROWS: Arrow[] = [
  { from: 'brahman', to: 'maya', label: 'zahaľuje' },
  { from: 'maya', to: 'jagat', label: 'vytvára zdanie' },
  { from: 'jagat', to: 'atman', label: 'Ātman v ňom' },
  { from: 'jagat', to: 'samsara', label: 'prežíva cyklus' },
  { from: 'samsara', to: 'karma', label: 'poháňané' },
  { from: 'karma', to: 'samsara', label: 'znovuzrodenie', dash: true },
  { from: 'atman', to: 'dharma', label: 'riadi sa' },
  { from: 'dharma', to: 'moksha', label: 'jñāna / karma / bhakti' },
  { from: 'moksha', to: 'brahman', label: 'Tat tvam asi', dash: true },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function nodeCenter(n: ConceptNode) {
  return { cx: n.x, cy: n.y };
}

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ConceptMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  const W = 600;
  const H = 570;
  const NODE_RX = 70;
  const NODE_RY = 26;

  const hoveredNode = hovered ? getNode(hovered) : null;

  const tooltipId = 'concept-map-tooltip';

  /* Compute tooltip position as percentages of the SVG viewBox */
  const getTooltipStyle = useCallback((node: ConceptNode): CSSProperties => {
    const xPct = (node.x / W) * 100;
    const showAbove = node.y > H * 0.65;
    const yPct = showAbove
      ? ((node.y - NODE_RY - 8) / H) * 100
      : ((node.y + NODE_RY + 8) / H) * 100;

    /* Horizontal: clamp so tooltip doesn't overflow container */
    const leftPct = Math.max(18, Math.min(82, xPct));

    return {
      position: 'absolute',
      left: `${leftPct}%`,
      top: `${yPct}%`,
      transform: showAbove
        ? 'translate(-50%, -100%)'
        : 'translate(-50%, 0)',
      maxWidth: '300px',
      width: '75%',
      zIndex: 20,
      pointerEvents: 'none',
    };
  }, [W, H, NODE_RY]);

  return (
    <div
      style={{ width: '100%', maxWidth: 640, margin: '0 auto', position: 'relative' }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        role="img"
        aria-label="Koncepčná mapa hinduistickej filozofie: vzťahy medzi Brahman, Māyā, Ātman, Karma, Saṃsāra, Dharma a Mokṣa"
        style={{ fontFamily: 'var(--font-sans)', display: 'block' }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8" markerHeight="6"
            refX="8" refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="var(--color-ink-400)" />
          </marker>
          <marker
            id="arrowhead-accent"
            markerWidth="8" markerHeight="6"
            refX="8" refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="var(--color-jade-600)" />
          </marker>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Arrows */}
        {ARROWS.map((a) => {
          const from = getNode(a.from);
          const to = getNode(a.to);
          const fc = nodeCenter(from);
          const tc = nodeCenter(to);

          // Simple straight line with offset to avoid overlapping ellipses
          const dx = tc.cx - fc.cx;
          const dy = tc.cy - fc.cy;
          const len = Math.sqrt(dx * dx + dy * dy);
          const nx = dx / len;
          const ny = dy / len;

          const x1 = fc.cx + nx * NODE_RX * 0.85;
          const y1 = fc.cy + ny * NODE_RY * 1.1;
          const x2 = tc.cx - nx * NODE_RX * 0.85;
          const y2 = tc.cy - ny * NODE_RY * 1.1;

          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;

          const isMokshaToBrahman = a.from === 'moksha' && a.to === 'brahman';
          const marker = isMokshaToBrahman ? 'url(#arrowhead-accent)' : 'url(#arrowhead)';

          return (
            <g key={`${a.from}-${a.to}`}>
              <line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={isMokshaToBrahman ? 'var(--color-jade-500)' : 'var(--color-ink-300)'}
                strokeWidth={isMokshaToBrahman ? 2 : 1.2}
                strokeDasharray={a.dash ? '5,4' : 'none'}
                markerEnd={marker}
              />
              {a.label && (
                <text
                  x={mx} y={my - 5}
                  textAnchor="middle"
                  fontSize="9"
                  fill="var(--color-ink-400)"
                  style={{ fontStyle: 'italic' }}
                >
                  {a.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((n) => {
          const isHovered = hovered === n.id;
          return (
            <g
              key={n.id}
              tabIndex={0}
              role="img"
              aria-label={`${n.label}: ${n.desc}`}
              aria-describedby={isHovered ? tooltipId : undefined}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(n.id)}
              onBlur={() => setHovered(null)}
              style={{ cursor: 'pointer', outline: 'none' }}
              filter={isHovered ? 'url(#shadow)' : undefined}
            >
              <ellipse
                cx={n.x} cy={n.y}
                rx={NODE_RX} ry={NODE_RY}
                fill={n.color}
                stroke={isHovered ? 'var(--color-cosmos-700)' : 'transparent'}
                strokeWidth={2}
                opacity={isHovered ? 1 : 0.92}
                style={{ transition: 'all 0.2s' }}
              />
              <text
                x={n.x} y={n.y - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12.5"
                fontWeight="600"
                fill={n.textColor}
              >
                {n.label}
              </text>
              {n.sanskrit && (
                <text
                  x={n.x} y={n.y + 12}
                  textAnchor="middle"
                  fontSize="10"
                  fill={n.textColor}
                  opacity={0.7}
                >
                  {n.sanskrit}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* HTML tooltip overlay — positioned over the SVG using percentages */}
      {hoveredNode && (
        <div
          id={tooltipId}
          style={getTooltipStyle(hoveredNode)}
          role="tooltip"
        >
          <div
            style={{
              background: 'var(--color-cosmos-950)',
              color: 'var(--color-sandstone-100)',
              borderRadius: '10px',
              padding: '12px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.5,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
              <span style={{
                fontWeight: 700,
                fontSize: '0.85rem',
                color: hoveredNode.color,
              }}>
                {hoveredNode.label}
              </span>
              {hoveredNode.sanskrit && (
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                  {hoveredNode.sanskrit}
                </span>
              )}
            </div>
            <p style={{
              margin: 0,
              fontSize: '0.78rem',
              opacity: 0.92,
              lineHeight: 1.55,
            }}>
              {hoveredNode.detail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
