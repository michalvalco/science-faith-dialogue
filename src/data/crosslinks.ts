/**
 * Cross-linking utilities for connecting glossary terms, scholars,
 * and convergence entries across the site.
 */
import { keyTerms, nguyenTerms, persons } from './presentation';
import { entries } from './convergences';

// ─── Term → Glossary ID mapping ───────────────────────────────────────────

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Map from lowercase term name → glossary entry ID */
const termToGlossaryId = new Map<string, string>();
for (const t of [...keyTerms, ...nguyenTerms]) {
  termToGlossaryId.set(t.term.toLowerCase(), t.id);
  termToGlossaryId.set(normalize(t.term), t.id);
}

/**
 * Given a convergence keyTerm string, return the glossary entry ID if one exists.
 * Returns null if no match found.
 */
export function glossaryIdForTerm(term: string): string | null {
  return termToGlossaryId.get(term.toLowerCase()) ?? termToGlossaryId.get(normalize(term)) ?? null;
}

/**
 * Build a Record<string, string> mapping convergence keyTerm strings to glossary IDs
 * for all terms that have glossary entries. Suitable for passing as a prop.
 */
export function buildTermGlossaryMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const entry of entries) {
    for (const term of [...entry.christianPerspective.keyTerms, ...entry.buddhistPerspective.keyTerms]) {
      const id = glossaryIdForTerm(term);
      if (id) {
        map[term] = id;
      }
    }
  }
  return map;
}

// ─── Scholar → Convergence cross-reference ────────────────────────────────

/**
 * For a given person name, find convergence entries that reference them.
 * Uses fuzzy matching: checks if the person's last name appears in any
 * keyThinker string, handling cases like "Augustine" vs "Augustine of Hippo".
 */
export function convergencesForScholar(personName: string): Array<{
  id: string;
  title: string;
  type: string;
}> {
  // Extract last name for fuzzy matching, stripping common suffixes
  const suffixes = new Set(['jr.', 'jr', 'sr.', 'sr', 'ii', 'iii', 'iv']);
  const nameParts = personName.split(' ').filter(p => !suffixes.has(p.toLowerCase()));
  const lastName = nameParts[nameParts.length - 1];
  const shortNames = [lastName, personName];
  // Add first name for single-name thinkers like "Aristotle"
  if (nameParts.length === 1) {
    shortNames.push(nameParts[0]);
  }

  const matches: Array<{ id: string; title: string; type: string }> = [];
  const seen = new Set<string>();

  for (const entry of entries) {
    const allThinkers = [
      ...entry.christianPerspective.keyThinkers,
      ...entry.buddhistPerspective.keyThinkers,
    ];
    for (const thinker of allThinkers) {
      if (seen.has(entry.id)) break;
      for (const name of shortNames) {
        if (thinker === name || thinker.includes(name)) {
          matches.push({ id: entry.id, title: entry.title, type: entry.type });
          seen.add(entry.id);
          break;
        }
      }
    }
  }

  return matches;
}

/**
 * Build a map of person ID → convergence references for all persons.
 */
export function buildScholarConvergenceMap(): Record<string, Array<{
  id: string;
  title: string;
  type: string;
}>> {
  const map: Record<string, Array<{ id: string; title: string; type: string }>> = {};
  for (const person of persons) {
    const refs = convergencesForScholar(person.name);
    if (refs.length > 0) {
      map[person.id] = refs;
    }
  }
  return map;
}
