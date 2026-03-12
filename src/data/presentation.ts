// Science, Faith & Dialogue — Presentation Data
// Structured data for components throughout the presentation

import type {
  KeyTerm, Person, TimelineEvent, FineTuningConstant,
  ImagoDeiUnderstanding, ConceptNode, ConceptConnection
} from './types';

// ===== KEY TERMS =====

export const keyTerms: KeyTerm[] = [
  {
    id: 'logos',
    term: 'Logos',
    originalScript: 'Λόγος',
    language: 'Greek',
    definition: 'Reason, word, ordering principle. In Christian theology (John 1:1), the divine Word through whom all things were created — the rational ground of the universe.',
    tradition: 'Christian',
    relatedAct: 'Act I'
  },
  {
    id: 'contingency',
    term: 'Contingency',
    language: 'Latin',
    originalScript: 'contingentia',
    definition: 'The property of existing but not necessarily so. The universe exists, but it did not have to exist — it depends on something beyond itself.',
    tradition: 'Philosophical',
    relatedAct: 'Act I'
  },
  {
    id: 'imago-dei',
    term: 'Imago Dei',
    originalScript: 'imago Dei',
    language: 'Latin',
    definition: 'Image of God. The theological claim (Genesis 1:26-27) that human beings bear a unique likeness to their Creator — grounding human dignity, rationality, relationality, and creativity.',
    tradition: 'Christian',
    relatedAct: 'Act III'
  },
  {
    id: 'colligation',
    term: 'Colligation',
    definition: 'William Whewell\'s concept: an act of thought that brings together empirical facts by "superinducing" upon them a connecting idea. McGrath extends it to mean constructing a big picture across intellectual disciplines.',
    tradition: 'Philosophical',
    relatedAct: 'Opening'
  },
  {
    id: 'pratitya-samutpada',
    term: 'Pratītyasamutpāda',
    originalScript: 'प्रतीत्यसमुत्पाद',
    language: 'Sanskrit',
    definition: 'Dependent origination. The foundational Buddhist principle that all things exist in causal relationships — nothing exists independently. "Because this exists, that exists."',
    tradition: 'Buddhist',
    relatedAct: 'Act II'
  },
  {
    id: 'sunyata',
    term: 'Śūnyatā',
    originalScript: 'शून्यता',
    language: 'Sanskrit',
    definition: 'Emptiness. Not nothingness, but the absence of inherent, independent, fixed existence. All things are "empty" of self-nature because they arise dependently.',
    tradition: 'Buddhist',
    relatedAct: 'Act II'
  },
  {
    id: 'anatta',
    term: 'Anattā',
    originalScript: 'अनात्मन्',
    language: 'Pali',
    definition: 'No-self. The Buddhist teaching that there is no permanent, independent soul or self. All phenomena — including the "self" — are composites of changing conditions.',
    tradition: 'Buddhist',
    relatedAct: 'Act III'
  },
  {
    id: 'karuna',
    term: 'Karuṇā',
    originalScript: 'करुणा',
    language: 'Sanskrit',
    definition: 'Compassion. One of the four sublime states (brahmavihāra) in Buddhism. Active wish for the alleviation of suffering in all sentient beings.',
    tradition: 'Buddhist',
    relatedAct: 'Closing'
  },
  {
    id: 'scientism',
    term: 'Scientism',
    definition: 'The totalizing attitude that regards science as the ultimate standard and arbiter of all questions. Kidd identifies three impulses: imperialist, salvific, and absolutist.',
    tradition: 'Philosophical',
    relatedAct: 'Act IV'
  },
  {
    id: 'numinous',
    term: 'Numinous',
    language: 'Latin',
    originalScript: 'numinosum',
    definition: 'Rudolf Otto\'s term for the mysterium tremendum et fascinans — an experience of awe, terror, and fascination before the "wholly other." Trans-rational, not irrational.',
    tradition: 'Shared',
    relatedAct: 'Act V'
  },
  {
    id: 'apophatic',
    term: 'Apophatic / Via Negativa',
    language: 'Greek',
    originalScript: 'ἀποφατικός',
    definition: 'The theological method of describing God by negation — saying what God is not. Recognizes that God exceeds all positive conceptualization.',
    tradition: 'Christian',
    relatedAct: 'Act V'
  },
  {
    id: 'stahlhartes-gehaeuse',
    term: 'Stahlhartes Gehäuse',
    language: 'German',
    definition: 'Max Weber\'s "shell as hard as steel" — the iron cage of rationalism that confines us to only what can be proven "rational," excluding mystery, beauty, and meaning.',
    tradition: 'Philosophical',
    relatedAct: 'Act V'
  },
];

// ===== NGUYEN HOANG HAI — THE EMPTINESS OF EVERYTHING (2025) =====
// Terms extracted from Nguyen Hoang Hai, The Emptiness of Everything:
// Contemplating Modern Sciences through Buddhist Principles, 2nd ed. (VNU Press, 2025).
// These reflect Nguyen's distinctive usage and the specific Buddhist–scientific
// vocabulary that structures his argument.

export const nguyenTerms: KeyTerm[] = [
  // --- Buddhist Foundational Principles (as Nguyen deploys them) ---
  {
    id: 'nguyen-dukkha',
    term: 'Dukkha',
    originalScript: 'दुःख',
    language: 'Sanskrit',
    definition: 'Suffering. Nguyen identifies three layers: (1) physical suffering — birth, aging, sickness, death; (2) mental suffering — the hedonic treadmill where pleasures fade and desires replace desires; (3) suffering from ignorance — the deepest layer, not recognizing that the entire world is impermanent. "This entire book is only to show us suffering due to ignorance."',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-middle-way',
    term: 'Madhyamā-pratipad',
    originalScript: 'मध्यमा प्रतिपद्',
    language: 'Sanskrit',
    definition: 'The Middle Way. Nguyen presents two levels: (1) Southern Buddhism — avoiding extremes of hedonism and asceticism; (2) Northern Buddhism (Madhyamaka) — avoiding eternalism and annihilationism. He extends it to science: the principle of least action in physics and fitness in evolution are "manifestations of the middle way." Dopamine homeostasis is its neuroscientific expression.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-four-noble-truths',
    term: 'Four Noble Truths',
    originalScript: 'चत्वारि आर्यसत्यानि',
    language: 'Sanskrit',
    definition: 'The diagnostic and therapeutic framework of Buddhism: (1) the truth of suffering, (2) the truth of its origin (craving/ignorance), (3) the truth of its cessation, (4) the truth of the path leading to cessation. Nguyen emphasizes that "mere belief is not enough but must also understand, verify, and practice" — positioning Buddhism as empirically oriented.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-noble-eightfold-path',
    term: 'Noble Eightfold Path',
    originalScript: 'आर्य अष्टाङ्गिक मार्ग',
    language: 'Sanskrit',
    definition: 'The practical path to the cessation of suffering: right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration. For Nguyen, it is the therapeutic counterpart to the diagnostic Four Noble Truths.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-three-marks',
    term: 'Tilakkhaṇa / Three Marks of Existence',
    originalScript: 'तिलक्खण',
    language: 'Pali',
    definition: 'Impermanence (anicca), suffering (dukkha), and no-self (anattā). Nguyen presents these as closely related consequences of dependent origination — not independent doctrines but three facets of the same insight. His entire book is structured as a scientific demonstration of the first two marks across every domain of reality.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-anicca',
    term: 'Anicca',
    originalScript: 'अनिच्च',
    language: 'Pali',
    definition: 'Impermanence. One of the three marks of existence. Nguyen equates it with "emptiness in time" — interactions between the parts of any composite entity are constantly changing. He sets Planck time (5.4 × 10⁻⁴⁴ s) as the theoretical lower bound of impermanence.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-dharma',
    term: 'Dharma / Dharmas',
    originalScript: 'धर्म',
    language: 'Sanskrit',
    definition: 'In Nguyen\'s usage: (1) the Buddha\'s teaching (Dharma, singular); (2) all phenomena, all constituents of reality (dharmas, plural). Nāgārjuna\'s critical move was to extend emptiness from persons to all dharmas — making dependent origination an ontological principle about everything in the universe.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-atman-anatman',
    term: 'Ātman vs. Anātman',
    originalScript: 'आत्मन् / अनात्मन्',
    language: 'Sanskrit',
    definition: 'The Upanishadic Self Theory (ātman — permanent, unchanging soul identical with brahman) versus the Buddhist No-Self Theory (anātman — no permanent, independent soul; all things always transform). Nguyen presents this contrast in Table 1.1 as the fundamental fork between Hindu and Buddhist metaphysics.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-two-truths',
    term: 'Two Truths',
    language: 'Sanskrit',
    originalScript: 'सत्यद्वय',
    definition: 'Conventional truth (saṃvṛti-satya) — the world as we experience it — and ultimate truth (paramārtha-satya) — emptiness. Nguyen maps this onto modern physics: the 3D world we perceive is conventional truth; the deeper quantum-informational substrate (as revealed by the holographic principle) is closer to ultimate truth.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 2'
  },
  {
    id: 'nguyen-sunyata-sunyata',
    term: 'Śūnyatā-śūnyatā',
    originalScript: 'शून्यता-शून्यता',
    language: 'Sanskrit',
    definition: 'Emptiness of emptiness. Nguyen recognizes this as a self-referential paradox analogous to the liar\'s paradox, Russell\'s paradox, and Gödel\'s incompleteness. Nāgārjuna\'s solution: refuse the subject–object division. "Emptiness is not what is known, nor is it the knower, but is the dissolution of both in the insight of dependent origination."',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-eight-negations',
    term: 'Eight Negations',
    language: 'Sanskrit',
    definition: 'Nāgārjuna\'s foundational formula from Madhyamaka Treatise 1.1: "Neither arising nor ceasing, neither permanent nor annihilated, neither one nor different, neither coming nor going." Nguyen presents this as the logical structure of emptiness — reality resists all binary categorization.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-madhyamaka',
    term: 'Madhyamaka',
    originalScript: 'मध्यमक',
    language: 'Sanskrit',
    definition: 'The Middle Way school founded by Nāgārjuna. Nguyen explicitly follows Madhyamaka rather than Yogācāra (consciousness-only), because Madhyamaka equates dependent origination with emptiness as an ontological principle about all dharmas, not only about consciousness.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-yogacara',
    term: 'Yogācāra',
    originalScript: 'योगाचार',
    language: 'Sanskrit',
    definition: 'The consciousness-only school of Buddhist philosophy. Nguyen acknowledges it but criticizes its overemphasis on consciousness. He prefers the Madhyamaka framework because it applies emptiness to all phenomena, not just mental events — making it more amenable to dialogue with the natural sciences.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-ayatana',
    term: 'Āyatana / Six Sense Bases',
    originalScript: 'आयतन',
    language: 'Sanskrit',
    definition: 'The six roots of perception: eye, ear, nose, tongue, body, and mind — each with its corresponding object (dust), consciousness, and physical substrate. Nguyen maps these onto modern neuroscience (Table 5.1): rhodopsin in vision, hair cells in hearing, chemical receptors in taste/smell, Piezo receptors in touch. All five physical senses operate through electromagnetic interactions.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-tsongkhapa-levels',
    term: 'Tsongkhapa\'s Three Levels',
    definition: 'Three levels of dependent origination identified by Tsongkhapa: (1) causal dependence — causes and conditions produce impermanence in time; (2) whole–part dependence — compositionality in space; (3) dependence on conceptual imputation — dependent origination in mind. Nguyen uses levels (1) and (2) for scientific application, setting aside (3) as "subjective."',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-truc-lam',
    term: 'Trúc Lâm',
    language: 'Vietnamese',
    definition: 'Vietnamese Zen Buddhist tradition founded by King Trần Nhân Tông (1258–1308). Nguyen positions his work within this lineage — a distinctively Vietnamese synthesis of Zen practice, political engagement, and philosophical inquiry. The book closes with Trần Nhân Tông\'s poem: "Living in the world, joyful in the Way, follow conditions."',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  // --- Nguyen's Methodological Innovations ---
  {
    id: 'nguyen-two-property-test',
    term: 'Two-Property Test for Emptiness',
    definition: 'Nguyen\'s central methodological innovation. To prove emptiness in any domain, demonstrate two properties: (1) compositionality — the thing is made of parts whose interactions produce its properties (emptiness in space); (2) impermanence — those interactions constantly change (emptiness in time). This test is applied systematically across matter, life, the human body, and consciousness.',
    tradition: 'Buddhist',
    relatedAct: 'Preface'
  },
  {
    id: 'nguyen-compositionality',
    term: 'Compositionality (Emptiness in Space)',
    definition: 'The first criterion of Nguyen\'s two-property test. Things are composed of parts, and their properties arise from the interaction of those parts — not from any intrinsic self-nature. Applied from subatomic particles (quarks in protons) through cells (organelles in cells) to consciousness (neural networks in the brain). Lower bound: Planck length (1.6 × 10⁻³⁵ m).',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-impermanence',
    term: 'Impermanence (Emptiness in Time)',
    definition: 'The second criterion of Nguyen\'s two-property test. Interactions between parts are constantly changing — nothing remains static. Applied from quantum fluctuations (virtual particles) through biological metabolism (cell renewal every ~18 months) to consciousness (continuous neural state changes). Lower bound: Planck time (5.4 × 10⁻⁴⁴ s).',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 1'
  },
  {
    id: 'nguyen-planck-limits',
    term: 'Planck Limits',
    definition: 'Planck length (1.6 × 10⁻³⁵ m) and Planck time (5.4 × 10⁻⁴⁴ s) — the theoretical lower bounds of compositionality and impermanence respectively. Nguyen uses these as the ultimate horizon of his two-property test, acknowledging that "human experimental capabilities are far from touching those limits."',
    tradition: 'Scientific',
    relatedAct: 'Ch. 1'
  },
  // --- Scientific Concepts (as Nguyen bridges them with Buddhism) ---
  {
    id: 'nguyen-holographic-principle',
    term: 'Holographic Principle',
    definition: 'The principle (\'t Hooft 1994, developed by Susskind and Maldacena) that 3D information can be encoded on a 2D boundary surface. Nguyen draws the explicit Buddhist parallel: "the phenomenal world we sense (relative truth) is only a manifestation of a deeper reality (ultimate truth)." Spacetime is emergent, not fundamental.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 2'
  },
  {
    id: 'nguyen-emergent-spacetime',
    term: 'Emergent Spacetime',
    definition: 'Building on Ryu-Takayanagi (2006) and Engelhardt (2015): quantum entanglement in a lower-dimensional conformal field theory creates spacetime structure. "Without quantum entanglement, there is no spacetime." Nguyen\'s Buddhist reading: spacetime has no independent self-nature — it is dependently originated from quantum entanglement.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 2'
  },
  {
    id: 'nguyen-entropy-arrow',
    term: 'Entropy and the Arrow of Time',
    definition: 'Nguyen argues that the arrow of time is "assigned to" entropy increase (second law of thermodynamics). Time is not an independent entity but is linked to the directionality of thermodynamic processes. In the Conclusion, he extends this: "the anisotropy of entropy leads to the anisotropy of truth–goodness–beauty" — values are not independent but arise from life\'s thermodynamic conditions.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 2'
  },
  {
    id: 'nguyen-information-conservation',
    term: 'Information Conservation (Susskind\'s "Law −1")',
    definition: 'Leonard Susskind\'s principle that information is always conserved — it is never destroyed. Entropy equals hidden information. The Bekenstein-Hawking formula shows black hole entropy is proportional to the area of the event horizon. Nguyen treats information as potentially "the most fundamental category — more fundamental than matter or consciousness."',
    tradition: 'Scientific',
    relatedAct: 'Ch. 2'
  },
  {
    id: 'nguyen-hedonic-treadmill',
    term: 'Hedonic Treadmill / Dopamine Baseline',
    definition: 'The neuroscientific mechanism behind the Buddhist second suffering (dissatisfaction). The brain constantly recalibrates its dopamine baseline: pleasure raises the baseline, and when stimulation stops, dopamine drops below the new baseline, producing suffering. "Suffering and pleasure are processed by the same brain region" (Anna Lembke). Nguyen links this to the middle way as dopamine homeostasis.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-dopamine-serotonin',
    term: 'Pleasure vs. Happiness (Dopamine vs. Serotonin)',
    definition: 'A key distinction in Nguyen\'s neuroscience of suffering: pleasure (dopamine-mediated) is strong, addictive, and short-lived; happiness (serotonin-mediated) is gentler, non-addictive, and lasting. Modern society produces dopamine overload — easy access to stimuli that spike dopamine, creating addiction cycles. The Buddhist path reduces dopamine-spiking inputs and cultivates serotonin-supporting practices.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 5'
  },
  // --- Nguyen's Distinctive Conceptual Framework ---
  {
    id: 'nguyen-brain-turing',
    term: 'Brain as Turing Machine',
    definition: 'Nguyen\'s "bold claim" (his words: "approximation" adopted "temporarily"): brain activity is like a Turing machine, justified by (1) materialist premises and (2) neuron activities following basic logic principles. The brain operates at ~20 W but performs ~10¹⁸ operations per second. He acknowledges the philosophical zombie objection (Chalmers) but proceeds on this working hypothesis.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-consciousness-os',
    term: 'Consciousness as Operating System',
    definition: 'Nguyen\'s central metaphor for consciousness: DNA sets goals (like a board of directors); consciousness executes them (like an executive board). But DNA "intentionally hides, does not let consciousness know about its control" — creating the illusion of free will. Consciousness can sometimes resist DNA: monks and clergy voluntarily abandon reproduction.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-appropriateness-truthfulness',
    term: 'Appropriateness vs. Truthfulness',
    definition: 'Nguyen\'s claim that consciousness evolved for "appropriateness, not truthfulness" — the brain models reality not to be accurate but to enhance survival. This raises the self-referential question: is the book itself an "appropriate" model for survival, or is it actually true? Nguyen acknowledges this tension but does not resolve it.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-extended-self',
    term: 'Extended Self',
    definition: 'After Russell Belk (1988): tools, weapons, institutions, and now smartphones are extensions of the body and mind. Nguyen argues the smartphone is "the most diverse expansion ever" — functional, anthropomorphic, and ontological (it affects us even when we don\'t want it to). If the self is constituted by relationships, and tools expand the network of relationships, then the self is expandable — and vulnerable.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 4'
  },
  {
    id: 'nguyen-endosymbiosis',
    term: 'Endosymbiosis as Emptiness',
    definition: 'Nguyen\'s biological argument for no-self: the human body is not a unified entity but a symbiotic ecosystem. Mitochondria were originally foreign bacteria; the human genome contains ~80% self-replicators of unknown function; the gut hosts tens of trillions of microorganisms. "The human genome is a symbiotic ecosystem where genes cooperate and compete to exist and replicate." The organism has no self-nature.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 4'
  },
  {
    id: 'nguyen-toxoplasma-analogy',
    term: 'T. gondii Analogy (DNA as Puppet Master)',
    definition: 'Nguyen\'s most provocative argument: just as Toxoplasma gondii manipulates mice into fearlessly approaching cats, human desires may be "ignorant actions" controlled by DNA through proteins. "DNA can create consciousness like robots create The Matrix" — hiding its purposes so "the body always is deluded that it is living for itself, not for the DNA master." The self as an illusion crafted by DNA.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 4'
  },
  {
    id: 'nguyen-life-2-0',
    term: 'Life 2.0',
    definition: 'Max Tegmark\'s concept, adopted by Nguyen: human intelligence (software) can learn quickly and surpass genetic hardware. Life 1.0 (bacteria) — both hardware and software evolve slowly. Life 2.0 (humans) — hardware evolves slowly but software can be redesigned rapidly. Life 3.0 (AI) — both hardware and software can be redesigned. Consciousness\'s ability to resist DNA commands makes humans a transitional form.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-yoneda-self',
    term: 'Yoneda\'s Lemma (Applied to Self)',
    definition: 'A remarkable move: Nguyen invokes category theory\'s Yoneda Lemma to formalize the relational self. Two entities are isomorphic if and only if their relationships with all other entities are isomorphic. Applied to persons: "twin brothers are still different because their relationships with themselves and with the external world are different." Identity = the totality of relationships, nothing more.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 4'
  },
  {
    id: 'nguyen-theseus-ship',
    term: 'Ship of Theseus (Nguyen\'s Two Versions)',
    definition: 'Nguyen distinguishes two versions: the "Aegeus version" (continuously repaired, retains functional continuity) and the "Piraeus version" (rebuilt from old parts, retains material identity). He concludes that relational identity — the history of relationships with the world — is what constitutes the self. Physical matter is continuously replaced (~18 months for total body mass renewal), yet consciousness creates the illusion of permanence.',
    tradition: 'Philosophical',
    relatedAct: 'Ch. 4'
  },
  {
    id: 'nguyen-three-sufferings',
    term: 'Three-Layered Suffering of the Self',
    definition: 'Nguyen\'s distinctive formulation: (1) fulfilling desires that actually serve DNA, not the "self"; (2) not recognizing this manipulation — "ignorant actions"; (3) recognizing it but being unable to escape. "The real escape is precisely escaping this body, escaping reincarnation." This is the deepest form of dukkha: structural, not circumstantial.',
    tradition: 'Buddhist',
    relatedAct: 'Ch. 4'
  },
  {
    id: 'nguyen-ignorance',
    term: 'Avidyā / Ignorance',
    originalScript: 'अविद्या',
    language: 'Sanskrit',
    definition: 'For Nguyen, the "most core problem that Buddhism raises, understood as wrong awareness about reality." Not mere lack of information but structural misapprehension: the belief that composite, impermanent phenomena have permanent self-nature. The entire book is, in his own words, "only to show us suffering due to ignorance."',
    tradition: 'Buddhist',
    relatedAct: 'Conclusion'
  },
  {
    id: 'nguyen-quantum-consciousness',
    term: 'Quantum Consciousness (Penrose-Hameroff)',
    definition: 'The hypothesis that quantum effects in microtubules within neurons may play a role in generating consciousness. Nguyen notes a 2024 study showing quantum effects can occur at room temperature in neurons, but acknowledges that "how consciousness forms from those quantum effects still needs other research." He also references Integrated Information Theory (IIT) as combining materialist and panpsychist elements.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 5'
  },
  {
    id: 'nguyen-it-from-bit',
    term: '"It from Bit" (John Wheeler)',
    definition: 'The hypothesis that information is the most fundamental category — more fundamental than matter or consciousness. Nguyen adopts this as consistent with the Buddhist view: if information is primary and matter/consciousness are derivative, then the material world we perceive is doubly empty — composite, impermanent, and possibly not even the fundamental level of description.',
    tradition: 'Scientific',
    relatedAct: 'Ch. 2'
  },
];

// ===== FINE-TUNING CONSTANTS =====

export const fineTuningConstants: FineTuningConstant[] = [
  {
    id: 'strong-coupling',
    name: 'Strong Coupling Constant',
    description: 'Governs the strong nuclear force that binds protons and neutrons in atomic nuclei.',
    tooSmall: 'Only hydrogen would exist — no carbon, no chemistry of life.',
    tooLarge: 'All hydrogen converted to helium; no long-lived stars to sustain planetary systems.'
  },
  {
    id: 'weak-fine',
    name: 'Weak Fine Constant',
    description: 'Governs the weak nuclear force responsible for radioactive decay and stellar fusion.',
    tooSmall: 'No hydrogen formed in the early universe — no stars, no planets.',
    tooLarge: 'Supernovae unable to eject heavier elements necessary for life (carbon, oxygen, iron).'
  },
  {
    id: 'electromagnetic',
    name: 'Electromagnetic Fine Structure Constant',
    description: 'Determines the strength of electromagnetic interactions between charged particles.',
    tooSmall: 'Stars burn out too quickly for life to evolve on orbiting planets.',
    tooLarge: 'Stars not hot enough to warm planets to temperatures capable of sustaining life.'
  },
  {
    id: 'gravitational',
    name: 'Gravitational Fine Structure Constant',
    description: 'Determines the strength of gravitational attraction between massive objects.',
    tooSmall: 'Stars and planets cannot form — insufficient gravitational coalescence.',
    tooLarge: 'Stars formed but burn out too quickly for biological evolution.'
  }
];

// ===== FOUR UNDERSTANDINGS OF IMAGO DEI =====

export const imagoDeiUnderstandings: ImagoDeiUnderstanding[] = [
  {
    id: 'sovereignty',
    title: 'Sovereignty',
    subtitle: 'The King\'s Representative',
    description: 'The Hebrew selem (image) carries ancient Near-Eastern political meaning — like a statue representing a king\'s authority in a distant province.',
    keyThinker: 'Gerhard von Rad',
    implication: 'To bear the imago Dei is to be accountable to God — a vocation of stewardship and responsibility within creation.'
  },
  {
    id: 'correspondence',
    title: 'Correspondence',
    subtitle: 'Rational Soul Reflecting the Creator',
    description: 'The image of God refers to the correspondence between human reason and the rationality of God as creator. The human mind can apprehend and behold God.',
    keyThinker: 'Augustine of Hippo',
    implication: 'The world is rationally intelligible because both it and we derive from the same rational Creator. Science is possible because of the imago Dei.'
  },
  {
    id: 'relationality',
    title: 'Relationality',
    subtitle: 'Created for Communion',
    description: 'The image of God is about the capacity to relate — to God, to other persons, to creation. We are meant to exist in relationship.',
    keyThinker: 'Christian Personalism',
    implication: 'The deepest human truth is relational, not atomistic. Love is not a by-product of evolution but a participation in the relational character of God\'s own being.'
  },
  {
    id: 'storytelling',
    title: 'Story-Telling',
    subtitle: 'Co-Creators with God',
    description: 'The human instinct to tell stories of meaning is grounded in a Christian doctrine of creation. We are "co-creators" with God in the construction of real and imagined worlds.',
    keyThinker: 'J. R. R. Tolkien',
    implication: 'Human creativity — narrative, art, science — is an expression of the divine image. An AI can generate text, but can it participate in the creative act of God?'
  }
];

// ===== KEY PERSONS =====

export const persons: Person[] = [
  {
    id: 'mcgrath',
    name: 'Alister E. McGrath',
    dates: 'b. 1953',
    role: 'Historical theologian, philosopher of science',
    tradition: 'Christianity (Anglican)',
    contribution: 'Developed the concepts of "colligation" and "multiple situated rationalities" for science-religion dialogue. Author of Territories of Human Reason (2019) and Science and Religion (2020).'
  },
  {
    id: 'nguyen',
    name: 'Nguyen Hoang Hai',
    dates: 'contemporary',
    role: 'Vice-President of VNU Hanoi, physicist and Buddhist scholar',
    tradition: 'Buddhism (Vietnamese Zen)',
    contribution: 'Author of The Emptiness of Everything (2025), demonstrating convergences between Buddhist principles and modern science across physics, biology, and consciousness.'
  },
  {
    id: 'torrance',
    name: 'Thomas F. Torrance',
    dates: '1913–2007',
    role: 'Systematic theologian, philosopher of science',
    tradition: 'Christianity (Reformed)',
    contribution: 'Argued that every discipline must engage reality "according to its distinct nature" — the object determines the method. Contingent rationality of creation.'
  },
  {
    id: 'polkinghorne',
    name: 'John Polkinghorne',
    dates: '1930–2021',
    role: 'Particle physicist and Anglican priest',
    tradition: 'Christianity (Anglican)',
    contribution: 'Developed the concept of "metaquestions" — questions science raises but cannot answer. Advocated for a "new natural theology" that supplements, not displaces, science.'
  },
  {
    id: 'otto',
    name: 'Rudolf Otto',
    dates: '1869–1937',
    role: 'Theologian and phenomenologist of religion',
    tradition: 'Christianity (Lutheran)',
    contribution: 'Developed the concept of the numinous (mysterium tremendum et fascinans) — the trans-rational core of religious experience that overwhelms and saturates rational capacities.'
  },
  {
    id: 'nagarjuna',
    name: 'Nāgārjuna',
    dates: 'c. 150–250 CE',
    role: 'Founder of Madhyamaka (Middle Way) school',
    tradition: 'Buddhism (Mahayana)',
    contribution: 'Extended dependent origination from a principle about sentient beings to an ontological principle about all dharmas. Developed the concept of śūnyatā-śūnyatā (emptiness of emptiness).'
  }
];
