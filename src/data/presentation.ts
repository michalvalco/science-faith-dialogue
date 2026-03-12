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
