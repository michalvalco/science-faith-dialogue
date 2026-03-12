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

export interface Person {
  id: string;
  name: string;
  dates: string;
  role: string;
  tradition: string;
  contribution: string;
  imageUrl?: string;
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
