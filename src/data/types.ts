// Science, Faith & Dialogue — Type Definitions
// Extended from DN II types for this project's needs

export interface KeyTerm {
  id: string;
  term: string;
  originalScript?: string;       // e.g., Greek, Latin, Sanskrit, Pali
  transliteration?: string;
  language?: string;              // 'Greek' | 'Latin' | 'Sanskrit' | 'Pali' | 'German'
  definition: string;
  tradition: 'Christian' | 'Buddhist' | 'Philosophical' | 'Scientific' | 'Shared';
  sourceRef?: string;            // Location reference: Act (e.g. 'Act I'), chapter (e.g. 'Ch. 1'), or section (e.g. 'Preface')
}

export interface TraditionMeta {
  key: KeyTerm['tradition'];
  label: string;
  color: string;
  icon: string;
}

export const traditions: TraditionMeta[] = [
  { key: 'Christian', label: 'Christian Theology & Philosophy', color: '#c9a84c', icon: '✦' },
  { key: 'Buddhist', label: 'Buddhist Philosophy', color: '#3d8b8b', icon: '☸' },
  { key: 'Philosophical', label: 'Philosophy of Science & General Philosophy', color: '#78716c', icon: '◇' },
  { key: 'Scientific', label: 'Scientific Concepts', color: '#78716c', icon: '◈' },
  { key: 'Shared', label: 'Shared & Bridging Concepts', color: '#a85c32', icon: '⊕' },
];

export const traditionColors: Record<KeyTerm['tradition'], string> = Object.fromEntries(
  traditions.map(t => [t.key, t.color])
) as Record<KeyTerm['tradition'], string>;

export type ScholarTradition = 'Christian' | 'Buddhist' | 'Philosophical';

export interface ScholarTraditionMeta {
  key: ScholarTradition;
  label: string;
  color: string;
  icon: string;
}

export const scholarTraditions: ScholarTraditionMeta[] = [
  { key: 'Christian', label: 'Christian Theology & Philosophy', color: '#c9a84c', icon: '✦' },
  { key: 'Buddhist', label: 'Buddhist Philosophy', color: '#3d8b8b', icon: '☸' },
  { key: 'Philosophical', label: 'Philosophy & Science', color: '#78716c', icon: '◇' },
];

export const scholarTraditionColors: Record<ScholarTradition, string> = Object.fromEntries(
  scholarTraditions.map(t => [t.key, t.color])
) as Record<ScholarTradition, string>;

export interface Person {
  id: string;
  name: string;
  dates: string;
  role: string;
  tradition: ScholarTradition;
  contribution: string;
  keyIdeas: string[];
  quote?: { text: string; source: string };
  wikiUrl?: string;
  webUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  yearDisplay: string;           // e.g., "c. 354–430" or "1934"
  title: string;
  description: string;
  category: 'theology' | 'science' | 'philosophy' | 'buddhism' | 'dialogue';
}

export interface ConceptNode {
  id: string;
  label: string;
  tradition: 'Christian' | 'Buddhist';
  description: string;
  x: number;
  y: number;
}

export interface ConceptConnection {
  from: string;
  to: string;
  type: 'convergence' | 'divergence' | 'dialogue';
  label?: string;
}

export interface FineTuningConstant {
  id: string;
  name: string;
  description: string;
  tooSmall: string;
  tooLarge: string;
}

export interface ImagoDeiUnderstanding {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyThinker: string;
  implication: string;
}

export interface StudyQuestion {
  id: string;
  question: string;
  hint?: string;
  relatedAct: string;
}

export interface QuickCheckQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
