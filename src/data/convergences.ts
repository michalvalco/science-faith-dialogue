/**
 * Convergences & Divergences — Structured Data
 * 
 * Data source: Buddhism_Christianity_Convergences_Divergences_Reference.md
 * Site: science-faith-dialogue (Astro + React)
 * Author voice: Michal Valčo
 * 
 * Design note: entries are keyed to the reference file numbering (§1–§31).
 * The 'analysis' field is written in Valčo's voice — slightly conversational,
 * academic but warm, honest about differences, characteristic phrasing.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type Axis = 
  | 'ontology' 
  | 'person' 
  | 'soteriology' 
  | 'ethics' 
  | 'epistemology' 
  | 'science';

export type EntryType = 'convergence' | 'divergence' | 'opportunity';

export interface Perspective {
  label: string;
  description: string;
  keyThinkers: string[];
  keyTerms: string[];
}

export interface ConvergenceDivergence {
  id: string;
  refNumber: number;          // links to reference file §number
  axis: Axis;
  type: EntryType;
  title: string;
  christianPerspective: Perspective;
  buddhistPerspective: Perspective;
  analysis: string;           // Valčo's voice
  sources: string[];          // Chicago-style short citations
  relatedAct?: string;        // e.g. "Act I", "Act II", "Closing"
}

// ─── Axis metadata ───────────────────────────────────────────────────────────

export const axisLabels: Record<Axis, string> = {
  ontology: 'Ontology & Metaphysics',
  person: 'The Human Person',
  soteriology: 'Salvation & Liberation',
  ethics: 'Ethics & Compassion',
  epistemology: 'Epistemology & Mysticism',
  science: 'Science & Its Limits',
};

export const axisDescriptions: Record<Axis, string> = {
  ontology: 'What is ultimately real? How does reality hold together?',
  person: 'Who are we? What constitutes a human being?',
  soteriology: 'What has gone wrong, and how is it set right?',
  ethics: 'What does love demand? How should we live together?',
  epistemology: 'What can we know — and what lies beyond knowing?',
  science: 'What can science tell us — and where must it fall silent?',
};

export const typeColors: Record<EntryType, { accent: string; label: string }> = {
  convergence: { accent: 'var(--teal)', label: 'Convergence' },
  divergence: { accent: 'var(--rust)', label: 'Divergence' },
  opportunity: { accent: 'var(--gold)', label: 'Opportunity' },
};

// ─── Data ────────────────────────────────────────────────────────────────────

export const entries: ConvergenceDivergence[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // A. ONTOLOGY & METAPHYSICS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'relational-reality',
    refNumber: 1,
    axis: 'ontology',
    type: 'convergence',
    title: 'The Relational Constitution of Reality',
    christianPerspective: {
      label: 'Trinitarian relational ontology',
      description: 'The Christian God is not a solitary monad but an eternal communion of three Persons — Father, Son, and Spirit — whose being is constituted by mutual self-giving. Because reality flows from this relational God, relationality is woven into the fabric of creation itself. The imago Dei, then, is not a property of isolated individuals but the relational character of human existence.',
      keyThinkers: ['Augustine', 'Grenz', 'Zizioulas', 'Moltmann'],
      keyTerms: ['Trinity', 'perichoresis', 'imago Dei', 'communion'],
    },
    buddhistPerspective: {
      label: 'Dependent origination (pratītyasamutpāda)',
      description: 'All phenomena arise in dependence on causes and conditions — nothing exists independently. Nāgārjuna extended this from a principle about sentient beings to an ontological claim about all dharmas in the universe. Nguyen Hoang Hai applies this systematically through the sciences: from quantum entanglement to ecosystems to consciousness, reality at every level is relational.',
      keyThinkers: ['Nāgārjuna', 'Tsongkhapa', 'Nguyen Hoang Hai'],
      keyTerms: ['pratītyasamutpāda', 'śūnyatā', 'interdependence'],
    },
    analysis: 'Here is perhaps the most striking surface convergence in the entire dialogue. Both traditions see the atomized individual — the self-enclosed Cartesian ego — as a distortion of how reality actually works. Reality is, at every level, relational. And yet... the grounding differs profoundly. For the Christian, relationality is grounded in a God who is, in God\'s own being, an eternal fellowship of love. For the Buddhist, relationality is the self-organizing character of a beginningless causal process. The phenomenon is shared; the metaphysical architecture is not. To put it slightly differently: both traditions see the web, but they disagree about whether anyone wove it.',
    sources: [
      'Grenz, The Social God and the Relational Self (2001)',
      'Nguyen, The Emptiness of Everything (2025), Ch. 1.3',
      'Valčo, TNTI lecture (2026), "Gathering the Threads"',
    ],
    relatedAct: 'Act II',
  },

  {
    id: 'creation-vs-beginninglessness',
    refNumber: 4,
    axis: 'ontology',
    type: 'divergence',
    title: 'Creation ex Nihilo vs. Beginninglessness',
    christianPerspective: {
      label: 'Creation ex nihilo',
      description: 'The world was brought into being by a personal God from nothing. This act is free — God did not need to create — and purposive. Creation gives the cosmos its intelligibility, its contingency, and its moral order. The doctrine of creation also desacralizes nature: the sun is not a god, so it may be studied.',
      keyThinkers: ['Torrance', 'McGrath', 'Polkinghorne', 'Aquinas'],
      keyTerms: ['creatio ex nihilo', 'contingency', 'Logos', 'intelligibility'],
    },
    buddhistPerspective: {
      label: 'No First Cause',
      description: 'The Buddha himself famously refused to speculate on ultimate origins (the "poisoned arrow" parable), and Madhyamaka philosophy argues that dependent origination entails no ultimate beginning — all things arise from causes and conditions without requiring a prime mover. Buddhist philosophy critiques creator-god concepts as explanatorily unnecessary and logically problematic — though Schmidt-Leukel argues these critiques often target crude theism that sophisticated Christian theology also rejects.',
      keyThinkers: ['Nāgārjuna', 'Payutto', 'Cabezón'],
      keyTerms: ['pratītyasamutpāda', 'beginninglessness', 'anti-theism'],
    },
    analysis: 'This is the oldest and most discussed divergence in the Buddhist-Christian encounter — and Schmidt-Leukel rightly asks whether it constitutes "the unbridgeable gulf." I think the gulf is genuine but not as simple as it first appears. The Buddhist critique of a creator-God often targets a version of theism that the best Christian theology has already moved beyond — a coercive, interventionist deity who manufactures the world like a potter shaping clay. The Christian doctrine of creation is subtler: it is about the world\'s dependence on a transcendent source of intelligibility, not about a cosmic craftsman. Still — and this matters — Christianity does claim that reality has a beginning, a purpose, and a Giver. Buddhism does not. That difference is real, and honesty requires us not to paper over it.',
    sources: [
      'Schmidt-Leukel (ed.), Buddhism, Christianity and the Question of Creation (2006)',
      'Payutto, Dependent Origination (1994)',
      'Valčo, TNTI lecture (2026), Act I',
    ],
    relatedAct: 'Act I',
  },

  {
    id: 'contingency-vs-emptiness',
    refNumber: 5,
    axis: 'ontology',
    type: 'divergence',
    title: 'Contingency vs. Emptiness',
    christianPerspective: {
      label: 'Contingent order',
      description: 'The world could have been otherwise. Its specific structures are not logically necessary — which is precisely why empirical observation matters. You cannot deduce the number of planets from an armchair. This contingency is grounded in the freedom of the Creator: God could have made a different world, but chose this one.',
      keyThinkers: ['Torrance', 'Polkinghorne', 'McGrath'],
      keyTerms: ['contingency', 'empirical inquiry', 'created order'],
    },
    buddhistPerspective: {
      label: 'Emptiness (śūnyatā)',
      description: 'Things lack inherent existence because they are composites of interdependent, impermanent factors. Nguyen\'s "two-property test" — compositionality plus impermanence — yields emptiness at every level of analysis, from subatomic particles to consciousness. This is not nihilism; it is the recognition that reality is processual, not substantial.',
      keyThinkers: ['Nāgārjuna', 'Nguyen Hoang Hai', 'Tsongkhapa'],
      keyTerms: ['śūnyatā', 'compositionality', 'impermanence'],
    },
    analysis: 'It is curious, however, that both concepts yield a similar practical consequence: epistemological humility. The Christian says, "The world did not have to be this way, so go look." The Buddhist says, "Nothing has a fixed essence, so go look." Both end up insisting on observation over pure deduction. But the metaphysical grounding diverges: contingency presupposes a free Creator whose choices explain the specific character of the world; emptiness presupposes no such ground — the world is the way it is because of causes and conditions, all the way down, with no bottom.',
    sources: [
      'Nguyen, The Emptiness of Everything (2025), Preface',
      'Torrance, Divine and Contingent Order (1981)',
      'McGrath, Territories of Human Reason (2019), Ch. 8',
    ],
    relatedAct: 'Act I',
  },

  {
    id: 'emptiness-of-emptiness',
    refNumber: 7,
    axis: 'ontology',
    type: 'opportunity',
    title: 'The Emptiness of Emptiness & the Limits of Ontological Language',
    christianPerspective: {
      label: 'God beyond all predication',
      description: 'The apophatic tradition (Gregory of Nyssa, Pseudo-Dionysius, Meister Eckhart) insists that God transcends all positive description. Every affirmation must be negated — not because God is less than our concepts, but because God is infinitely more. The culmination is "the brilliant darkness of a hidden silence" (Pseudo-Dionysius).',
      keyThinkers: ['Pseudo-Dionysius', 'Gregory of Nyssa', 'Eckhart'],
      keyTerms: ['apophatic theology', 'via negativa', 'divine darkness'],
    },
    buddhistPerspective: {
      label: 'Śūnyatā-śūnyatā — emptiness is itself empty',
      description: 'Nāgārjuna\'s most radical move: emptiness is not a metaphysical substance or a "thing" to be grasped. It is a method of contemplation — meta-ontological and meta-epistemological. To absolutize emptiness is to fall into a new attachment. This prevents any conceptual framework from becoming ultimate.',
      keyThinkers: ['Nāgārjuna', 'Nguyen Hoang Hai'],
      keyTerms: ['śūnyatā-śūnyatā', 'two truths', 'Madhyamaka'],
    },
    analysis: 'This may be the most intellectually exhilarating site of convergence in the entire dialogue — and also the most treacherous. Nakamura went so far as to call certain passages of Pseudo-Dionysius\'s Mystical Theology "a Christian version of the Heart Sutra." And there is something genuine here: both traditions recognize that the deepest reality exceeds conceptual articulation. Both resist the absolutization of any finite framework. But — and this is where the conversation gets properly interesting — the Christian apophatic tradition anchors its negations in a personal God who is more than what we can think, while Nāgārjuna\'s emptiness transcends both existence and non-existence without anchoring in any Subject at all. The question for our joint project: are these genuinely analogous intellectual operations, or do they merely look similar from the outside?',
    sources: [
      'Nguyen, The Emptiness of Everything (2025), pp. 70–73',
      'Pseudo-Dionysius, Mystical Theology (5th–6th c.)',
      'Nakamura, cited in Ford, "The Zen Priest Considers Dionysius" (2020)',
    ],
    relatedAct: 'Act V',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // B. THE HUMAN PERSON
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'critique-of-autonomous-self',
    refNumber: 2,
    axis: 'person',
    type: 'convergence',
    title: 'The Critique of the Isolated, Autonomous Self',
    christianPerspective: {
      label: 'Personalist critique of individualism',
      description: 'Christian Personalism (Mounier, Wojtyła) argues that the self is constituted through relationships — the child becomes a person through the mother\'s love before the child can even recognize it. The Cartesian cogito, the Lockean individual, the neoliberal consumer-agent: all are distortions. My being as a human person is a gift of love relationships.',
      keyThinkers: ['Mounier', 'Wojtyła', 'Valčo', 'Buber'],
      keyTerms: ['personalism', 'relationality', 'I-Thou', 'constitutive'],
    },
    buddhistPerspective: {
      label: 'No-self as critique of ego-construction',
      description: 'The Buddhist analysis of the five skandhas shows the "self" to be a composite with no permanent substrate. Nguyen extends this into a Buddhist-Marxist critique of neoliberal individualism: the illusion of autonomous selfhood fuels consumerism, environmental destruction, and the dopamine-overload culture.',
      keyThinkers: ['Nguyen Hoang Hai', 'Thich Nhat Hanh'],
      keyTerms: ['anattā', 'five skandhas', 'interdependence'],
    },
    analysis: 'Here the two traditions converge with remarkable force — and the convergence has immediate practical implications for our joint work on AI and technology. Both reject the atomized individual of Western liberal modernity. Both see consumerist self-construction as a pathology. Both call for a recovery of human interconnectedness. This is a shared platform for ethical engagement with AI, transhumanism, and the digital fragmentation of human community. Of utmost importance, then, is that we leverage this convergence not merely as an academic finding but as a genuine basis for collaborative ethics.',
    sources: [
      'Nguyen, The Emptiness of Everything (2025), pp. 282–284',
      'Mounier, Personalism (1952)',
      'Valčo, TNTI lecture (2026), "Gathering the Threads"',
    ],
    relatedAct: 'Act III',
  },

  {
    id: 'imago-dei-vs-anatta',
    refNumber: 10,
    axis: 'person',
    type: 'divergence',
    title: 'Imago Dei vs. Anattā (No-Self)',
    christianPerspective: {
      label: 'Created in the image of God',
      description: 'Human beings bear the imago Dei — an indelible dignity, a relational vocation, and a moral agency grounded in being created by and for communion with God. This dignity cannot be lost through sin, disability, or any change in circumstance. It is the ground of human rights, the basis of the prohibition against instrumentalizing persons, and the source of the claim that every human life is sacred.',
      keyThinkers: ['Grenz', 'Wojtyła', 'Pannenberg', 'Valčo'],
      keyTerms: ['imago Dei', 'dignity', 'personhood', 'moral agency'],
    },
    buddhistPerspective: {
      label: 'No permanent, unchanging self',
      description: 'Mainstream Buddhism teaches anattā: there is no permanent essence to the person. The "self" is a conventional designation for an ever-changing process of interdependent factors (the five skandhas). Clinging to the illusion of a permanent self is the root of suffering. The Bodhisattva ideal extends compassion universally — but grounds it in interdependence rather than individual dignity. (Buddhism is not monolithic here: the Pudgalavādin school argued for a person irreducible to the skandhas, and East Asian Buddha-nature traditions develop accounts some scholars read as affirming an enduring spiritual nature.)',
      keyThinkers: ['Siddhartha Gautama', 'Nāgārjuna', 'Buddhaghosa'],
      keyTerms: ['anattā', 'skandhas', 'conventional self', 'two truths'],
    },
    analysis: 'This is where the dialogue gets sharp — honestly and necessarily sharp. If there is no enduring self, what grounds the irreducible dignity of the person? The Buddhist answer — karma, conventional reality, the Bodhisattva\'s compassion for all beings — is not trivial. But it is not the same as the Christian claim that each person bears an indelible mark of their Creator, a dignity that cannot be dissolved by analysis into component parts. It is precisely because the person is not merely a composite of impermanent factors that the person cannot be treated as a means to an end. This has far-reaching implications for AI ethics: if human dignity is a conventional designation, it can in principle be redesignated. If it is ontologically grounded, it cannot.',
    sources: [
      'Lu et al., "The Self and the Other" in Religions 15.3 (2024)',
      'Nicholson, "Spirit of Contradiction" in Journal of Religion 92.1 (2012)',
      'Yong, "Pneuma and Pratītyasamutpāda" in Zygon 40.1 (2005)',
    ],
    relatedAct: 'Act III',
  },

  {
    id: 'relational-personhood-bridge',
    refNumber: 12,
    axis: 'person',
    type: 'opportunity',
    title: 'Can Relational Personhood Bridge Imago Dei and Dependent Arising?',
    christianPerspective: {
      label: 'Pneumatological personhood',
      description: 'Amos Yong proposes a pneumatological anthropology in which the human person is constituted by the Spirit\'s work within the web of relationships. This retains the irreducible dignity of the imago Dei while taking seriously the relational, processual character of human becoming that neuroscience and Buddhism both emphasize.',
      keyThinkers: ['Yong', 'Grenz', 'Pannenberg'],
      keyTerms: ['pneuma', 'nonreductive physicalism', 'Spirit'],
    },
    buddhistPerspective: {
      label: 'Conventional personhood within dependent origination',
      description: 'Mainstream Buddhist philosophy distinguishes conventional truth (where persons, agency, and moral responsibility are real and operative) from ultimate truth (where analysis reveals no permanent self). The Pudgalavādin tradition even argued for a kind of "person" irreducible to the skandhas — a minority view, but evidence of internal Buddhist debate on this question.',
      keyThinkers: ['Vasubandhu', 'Evan Thompson'],
      keyTerms: ['two truths', 'pudgala', 'conventional reality'],
    },
    analysis: 'The task before us, therefore, is to explore whether the Christian insistence on irreducible personhood and the Buddhist analysis of relational becoming can be held in productive tension without collapsing either into the other. Yong\'s work suggests that a pneumatological approach — grounding personhood in the Spirit\'s relational activity rather than in a static substance — might provide the bridge. The person is genuinely constituted through relationships (Buddhist insight) but those relationships are sustained and dignified by a transcendent ground (Christian claim). Whether this bridge holds... that is precisely what the joint research project exists to discover.',
    sources: [
      'Yong, "Pneuma and Pratītyasamutpāda" in Zygon 40.1 (2005)',
      'Grenz, The Social God and the Relational Self (2001)',
      'Thompson, Waking, Dreaming, Being (2015)',
    ],
    relatedAct: 'Act III',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // C. SOTERIOLOGY & LIBERATION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'distorted-condition',
    refNumber: 13,
    axis: 'soteriology',
    type: 'convergence',
    title: 'The Human Condition Is Distorted',
    christianPerspective: {
      label: 'Sin (hamartia)',
      description: 'Something has gone fundamentally wrong. Christianity names it sin — not merely individual misdeeds, but a systemic distortion of human nature that alienates us from God, from each other, and from ourselves. We are, as Luther saw, "curved in upon ourselves" (incurvatus in se). The diagnosis is moral and relational, not merely cognitive.',
      keyThinkers: ['Augustine', 'Luther', 'Pannenberg'],
      keyTerms: ['hamartia', 'original sin', 'alienation', 'incurvatus in se'],
    },
    buddhistPerspective: {
      label: 'Ignorance (avidyā) and craving (taṇhā)',
      description: 'The root cause of suffering is a fundamental misperception of reality — taking the impermanent as permanent, the unsatisfactory as satisfactory, the non-self as self. This ignorance fuels craving, which fuels clinging, which fuels the cycle of suffering. The diagnosis is epistemic and psychological: we suffer because we do not see things as they actually are.',
      keyThinkers: ['Siddhartha Gautama', 'Nguyen Hoang Hai'],
      keyTerms: ['avidyā', 'taṇhā', 'Four Noble Truths', 'dukkha'],
    },
    analysis: 'Both traditions agree that something has gone deeply wrong — and neither is naive about the depth of the distortion. The difference lies in the diagnosis. Christianity says: the problem is moral rebellion against a loving Creator, a rupture in relationship that only grace can heal. Buddhism says: the problem is cognitive — a failure to perceive reality clearly, correctible through insight and practice. McGrath\'s colligation model is illuminating here: evolutionary biology adds a third voice (we are genetically predisposed to selfish behaviour). These three diagnoses — moral, epistemic, biological — are not mutually exclusive. They can be woven together, each illuminating what the others miss.',
    sources: [
      'McGrath, Territories of Human Reason (2019), pp. 218–221',
      'Nguyen, The Emptiness of Everything (2025), Ch. 1.3.2',
    ],
    relatedAct: 'Act III',
  },

  {
    id: 'salvation-vs-nirvana',
    refNumber: 15,
    axis: 'soteriology',
    type: 'divergence',
    title: 'Salvation vs. Nirvāṇa',
    christianPerspective: {
      label: 'Restoration of relationship (sōtēria)',
      description: 'Christian salvation is the restoration of communion with a personal God — culminating in the resurrection of the body and eternal life. It is not escape from materiality but the redemption and transfiguration of all creation. The telos is not dissolution but fullness: "I came that they may have life, and have it abundantly" (John 10:10).',
      keyThinkers: ['Paul', 'Irenaeus', 'Pannenberg', 'Moltmann'],
      keyTerms: ['sōtēria', 'resurrection', 'eternal life', 'new creation'],
    },
    buddhistPerspective: {
      label: 'Cessation of suffering (nirvāṇa)',
      description: 'Buddhist liberation is the cessation of craving, the extinguishing of the fires of greed, hatred, and delusion, and release from the cycle of rebirth. Nirvāṇa is described primarily in negative terms — what ceases, what is extinguished — though Mahāyāna traditions develop richer positive accounts of Buddha-nature and the Bodhisattva ideal.',
      keyThinkers: ['Siddhartha Gautama', 'Nāgārjuna'],
      keyTerms: ['nirvāṇa', 'cessation', 'saṃsāra', 'liberation'],
    },
    analysis: 'The eschatological difference could hardly be starker. Christianity promises not the dissolution of the person but the fullness of personhood — resurrected bodies, face-to-face communion with God, a creation healed and transfigured. Buddhism promises release from the cycle of suffering — peace, equanimity, the cessation of craving. One tradition moves toward fullness; the other toward stillness. One says the ultimate future is a wedding feast; the other says it is the extinguishing of a flame. Both are responses to genuine suffering. Neither should be caricatured. But they are not saying the same thing.',
    sources: [
      'Schmidt-Leukel (ed.), Buddhism, Christianity and the Question of Creation (2006)',
      'Loy, "Enlightenment in Buddhism and Advaita Vedanta" in IPQ 22.1 (1982)',
    ],
    relatedAct: 'Closing',
  },

  {
    id: 'kenosis-sunyata',
    refNumber: 17,
    axis: 'soteriology',
    type: 'opportunity',
    title: 'Kenosis and Dynamic Śūnyatā',
    christianPerspective: {
      label: 'Christ\'s self-emptying (kenosis)',
      description: 'Paul\'s kenosis hymn (Philippians 2:5–11) describes Christ, "who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, taking the form of a servant." This voluntary self-emptying — not annihilation but the fullness of love expressed through self-giving — is the heart of the incarnation.',
      keyThinkers: ['Paul', 'Moltmann', 'von Balthasar'],
      keyTerms: ['kenosis', 'ekenōsen', 'incarnation', 'self-giving'],
    },
    buddhistPerspective: {
      label: 'Dynamic emptiness (śūnyatā)',
      description: 'Masao Abe proposed that śūnyatā is not static void but a dynamic process of self-emptying that constitutes reality. He saw a structural parallel with kenosis: just as Christ empties himself, so reality "empties itself" of fixed essence at every moment. Abe provocatively asked whether Christ\'s kenosis implies a kenosis of God the Father — an emptying at the very heart of the divine.',
      keyThinkers: ['Masao Abe', 'Nishitani', 'Cobb'],
      keyTerms: ['dynamic śūnyatā', 'kenosis', 'Kyoto School'],
    },
    analysis: 'Abe\'s proposal is one of the most daring moves in the history of Buddhist-Christian dialogue. And the Christian responses — Moltmann, Küng, Tracy, Keller — reveal both the power and the limits of the analogy. Küng rightly insisted that the Philippians hymn speaks of the kenosis of Christ, not of God the Father. Moltmann was more sympathetic, finding in Abe\'s work a genuine convergence around the theme of divine vulnerability. My own sense is that the analogy illuminates but does not identify. Christian kenosis is an act of love by a personal God who freely chooses self-giving. Buddhist śūnyatā is the nature of reality itself — there is no agent who "chooses" to be empty. The difference between love freely given and a process that simply is... that difference matters. Essentially, it is again the question of love.',
    sources: [
      'Abe, "Kenotic God and Dynamic Śūnyatā" in Cobb and Ives (eds.), The Emptying God (1990)',
      'Ives (ed.), Divine Emptiness and Historical Fullness (1995)',
      'Botz-Bornstein, "Kenosis, Dynamic Śūnyatā and Weak Thought" in Asian Philosophy 25.4 (2015)',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // D. ETHICS & COMPASSION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'self-giving-love',
    refNumber: 18,
    axis: 'ethics',
    type: 'convergence',
    title: 'Self-Giving Love as the Apex of the Moral Life',
    christianPerspective: {
      label: 'Agapē — unconditional love',
      description: 'The whole law is fulfilled in this: love your neighbour as yourself (Romans 13:8–10). Agapē is not sentiment but self-giving action — modeled on God\'s own self-giving in Christ. It is descending love: it flows from God to humanity and, through redeemed persons, outward to the world. The Bodhisattva who delays nirvāṇa for others and Christ who empties himself are, in this respect, paradigmatic figures of self-surrendering love.',
      keyThinkers: ['Paul', 'Nygren', 'Moltmann'],
      keyTerms: ['agapē', 'caritas', 'self-giving', 'Romans 13'],
    },
    buddhistPerspective: {
      label: 'Karuṇā (compassion) and mettā (loving-kindness)',
      description: 'Mahāyāna Buddhism places karuṇā — the active wish for all beings to be free from suffering — at the centre of the ethical life. The Bodhisattva relinquishes personal nirvāṇa for the sake of all sentient beings. Combined with mettā (loving-kindness), muditā (sympathetic joy), and upekkhā (equanimity), compassion forms the core of Buddhist ethical practice.',
      keyThinkers: ['Śāntideva', 'Thich Nhat Hanh', 'Makransky'],
      keyTerms: ['karuṇā', 'mettā', 'Bodhisattva vow', 'brahmavihāras'],
    },
    analysis: 'The phenomenological similarity is real and striking. Both traditions demand the relinquishing of self-centred interests. Both hold self-surrendering love as the highest ethical reality. Both produce saints and bodhisattvas whose lives are recognizably, movingly similar. And yet — the metaphysical grounding differs. Christian agapē flows from a personal God who loved first; Buddhist karuṇā arises from the realization of interdependence and the dissolution of ego-boundaries. One is participation in divine love; the other is the natural expression of seeing clearly. Both produce compassionate action. The question is whether the action can be sustained — ultimately, across generations, against systemic evil — without a ground that transcends the process itself.',
    sources: [
      'Hanayama, "Christian Love and Buddhist Compassion" in JIBS 20.1',
      'Makransky, Awakening Through Love (2007)',
      'Kreeft, "Comparing Christianity and Buddhism" (peterkreeft.com)',
    ],
  },

  {
    id: 'what-happens-to-love',
    refNumber: 20,
    axis: 'ethics',
    type: 'divergence',
    title: 'What Happens to Love?',
    christianPerspective: {
      label: 'Love as constitutive reality',
      description: 'If God is love (1 John 4:8), and God is the ground of all reality, then love is not merely a human experience but an ontological category — a participation in the eternal communion of the triune God. The mother\'s love for her child is not a dopamine-mediated survival mechanism but a genuine participation in something transcendent. Love creates personhood: the child\'s sense of self emerges through being loved before it can love in return.',
      keyThinkers: ['Augustine', 'Wojtyła', 'Valčo', 'Ratzinger'],
      keyTerms: ['love', 'Trinitarian communion', 'constitutive', 'gift'],
    },
    buddhistPerspective: {
      label: 'Love as skillful means',
      description: 'If the self is ultimately illusory — a composite of impermanent factors without permanent substrate — then love between persons is, at the deepest level, a skillful means for alleviating suffering. It is functionally real and ethically indispensable, but ontologically empty. Nguyen himself does not draw this conclusion explicitly, but his framework — taken to its logical end — implies that love is another adaptive strategy shaped by natural selection, operating within a purposeless causal process.',
      keyThinkers: ['Nguyen Hoang Hai'],
      keyTerms: ['upāya', 'conventional truth', 'functional reality'],
    },
    analysis: 'Perhaps the deepest question in the entire dialogue. If love is merely an emergent property of purposeless processes — a sophisticated adaptive strategy crafted by DNA, as Nguyen\'s framework implies — then it is, in the final analysis, an illusion with survival value. But if love is real — if the mother\'s love for her child is not merely a neurochemical event but a genuine participation in something transcendent — then reality cannot be exhausted by compositionality and impermanence. Love points to a dimension of reality that is relational but also personal, temporal but also eternal, vulnerable but also unconditional. The Christian claim is that this dimension is grounded in the love of a triune God — a God who is, in God\'s own being, an eternal fellowship of love. The Buddhist will not accept this grounding. But the phenomenon of love — its irreducibility, its capacity to create personhood — is shared human experience. And it is, perhaps, the best starting point for a conversation between two traditions that have thought deeply about what is real.',
    sources: [
      'Valčo, TNTI lecture (2026), Closing',
      'Nguyen Reading Notes, Section E and Closing Observation',
    ],
    relatedAct: 'Closing',
  },

  {
    id: 'ecological-responsibility',
    refNumber: 19,
    axis: 'ethics',
    type: 'convergence',
    title: 'The Ethics of Interdependence and Ecological Responsibility',
    christianPerspective: {
      label: 'Integral ecology',
      description: 'Catholic Social Teaching\'s concept of integral ecology (Laudato Si\') grounds ecological responsibility in the interconnectedness of all creation and the vocation of stewardship. Humans are part of creation, not its owners. Environmental destruction is a failure of love — a refusal to see the interconnectedness of the human and natural worlds.',
      keyThinkers: ['Pope Francis', 'Moltmann', 'Boff'],
      keyTerms: ['integral ecology', 'stewardship', 'Laudato Si\'', 'common home'],
    },
    buddhistPerspective: {
      label: 'Dependent origination and environmental ethics',
      description: 'Nguyen\'s application of dependent origination to ecological questions shows that environmental destruction follows necessarily from the illusion of separateness. If all things are interdependent, then harming the environment is harming oneself. Engaged Buddhism (Thich Nhat Hanh) has made this practical through mindfulness-based ecological activism.',
      keyThinkers: ['Nguyen Hoang Hai', 'Thich Nhat Hanh'],
      keyTerms: ['interdependence', 'engaged Buddhism', 'ecosystems'],
    },
    analysis: 'Of all the convergences, this may be the most immediately urgent. We are not facing an ecological crisis because our science is bad — our science is extraordinarily good. We are facing it because our metaphysics is too thin. Both traditions offer resources for a richer account: reality is not a collection of exploitable resources but a web of interdependent relationships that demand respect, care, and restraint. This, in turn, has far-reaching implications for how we approach AI-driven resource optimization, biotechnology, and the commodification of nature.',
    sources: [
      'Nguyen, The Emptiness of Everything (2025), pp. 282–284',
      'Pope Francis, Laudato Si\' (2015)',
      'D\'Arcy May, "Buddhists, Christians and Ecology" in Schmidt-Leukel (ed.) (2006)',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // E. EPISTEMOLOGY & MYSTICISM
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'apophatic-sunyata',
    refNumber: 22,
    axis: 'epistemology',
    type: 'convergence',
    title: 'The Apophatic Tradition and Śūnyatā',
    christianPerspective: {
      label: 'Knowing by not knowing',
      description: 'The apophatic tradition (Gregory of Nyssa, Pseudo-Dionysius, The Cloud of Unknowing) insists that the highest knowledge of God is a "knowing by not knowing" — an entry into luminous darkness where all concepts are left behind. This is not irrationality but trans-rationality: what overwhelms human conceptual capacity precisely because it is more than we can think.',
      keyThinkers: ['Gregory of Nyssa', 'Pseudo-Dionysius', 'Eckhart'],
      keyTerms: ['apophatic', 'via negativa', 'luminous darkness', 'trans-rational'],
    },
    buddhistPerspective: {
      label: 'Emptiness beyond concepts',
      description: 'The Heart Sutra\'s declaration — "form is emptiness, emptiness is form" — points beyond all dualistic categories. Śūnyatā is not a thing, not nothing, not both, not neither. Language is used against itself to gesture toward what cannot be captured in words. The Zen kōan tradition pushes this further: discursive reason must be broken open for awakening to occur.',
      keyThinkers: ['Nāgārjuna', 'Dōgen', 'Nishitani'],
      keyTerms: ['śūnyatā', 'Heart Sutra', 'non-dual', 'kōan'],
    },
    analysis: 'Let us not underestimate the depth of this convergence. Both traditions have developed sophisticated practices for moving beyond discursive reason — not into irrationality, but into what McGrath, drawing on Otto, calls "the trans-rational." Both recognize that the deepest reality overwhelms and saturates our conceptual capacity rather than contradicting it. The Kyoto School (Nishida, Nishitani, Abe) built an entire philosophical program on exploring these parallels, selecting Meister Eckhart as the Christian thinker who best expressed what they recognized from their own tradition. But — and I must be honest here — the convergence has limits. The Christian enters the darkness expecting to encounter a Person. The Buddhist enters expecting to dissolve the illusion of separate personhood. The darkness may look similar from outside, but what one finds inside... that differs.',
    sources: [
      'McGrath, Territories of Human Reason (2019), Ch. 7',
      'Waldenfels, Absolute Nothingness (1980)',
      'Keller, Cloud of the Impossible (2014)',
    ],
    relatedAct: 'Act V',
  },

  {
    id: 'revelation-vs-awakening',
    refNumber: 25,
    axis: 'epistemology',
    type: 'divergence',
    title: 'Revelation vs. Awakening',
    christianPerspective: {
      label: 'Truth comes to us from beyond',
      description: 'The deepest truths about God, humanity, and salvation are revealed — they come to us from beyond through Scripture, the person of Christ, and the Holy Spirit. Revelation is a gift: truth is something we receive before we master it. This epistemic direction — top-down, from God to humanity — grounds the distinctively Christian virtue of receptivity.',
      keyThinkers: ['Barth', 'Torrance', 'von Balthasar'],
      keyTerms: ['revelation', 'Scripture', 'Logos', 'gift'],
    },
    buddhistPerspective: {
      label: 'Truth is awakened to from within',
      description: 'The deepest truths are discovered through the practitioner\'s own contemplative inquiry, following the Buddha\'s example. The Buddha did not receive truth from a god; he awakened to the way things are. The Dharma is "ehipassiko" — "come and see for yourself." This epistemic direction — inside-out, through one\'s own sustained effort — grounds the distinctively Buddhist emphasis on personal verification.',
      keyThinkers: ['Siddhartha Gautama', 'Buddhaghosa'],
      keyTerms: ['bodhi', 'awakening', 'ehipassiko', 'saddhā'],
    },
    analysis: 'The epistemic direction differs: top-down gift vs. inside-out insight. But the distinction is less sharp than it first appears. The Buddhist concept of saddhā — confident trust in the Buddha, Dharma, and Saṅgha — plays a larger functional role than is often recognized: you must trust the teacher before you can verify the teaching. And the Christian emphasis on personal appropriation through prayer, contemplation, and lived experience introduces a participatory element that moves beyond mere passive reception. Augustine\'s crede ut intelligas ("believe in order to understand") has a structural analog in the Buddhist insistence that practice must precede full comprehension. Still — at the deepest level — the Christian claims that ultimate truth is personal, that it addresses us, calls us by name. The Buddhist claims that ultimate truth is impersonal, awaiting our recognition.',
    sources: [
      'Schmidt-Leukel, Religious Pluralism and Interreligious Theology (2017)',
      'McGrath, Territories of Human Reason (2019), Ch. 8',
    ],
    relatedAct: 'Act I',
  },

  {
    id: 'contemplative-practice',
    refNumber: 23,
    axis: 'epistemology',
    type: 'convergence',
    title: 'Contemplative Practice as Epistemic Pathway',
    christianPerspective: {
      label: 'Prayer, hesychasm, and contemplation',
      description: 'Christian mystical traditions (hesychasm, Ignatian contemplation, Carmelite prayer, lectio divina) affirm that certain truths are accessible not through discursive reasoning alone but through disciplined practice. Stilling the discursive mind opens access to deeper dimensions of reality. The Jesus Prayer, the Ignatian Examen, and contemplative silence are not merely devotional exercises — they are epistemic practices.',
      keyThinkers: ['Gregory Palamas', 'Ignatius of Loyola', 'John of the Cross', 'Keating'],
      keyTerms: ['hesychasm', 'contemplation', 'lectio divina', 'theosis'],
    },
    buddhistPerspective: {
      label: 'Meditation as insight practice',
      description: 'Buddhist vipassanā, śamatha, and Zen zazen are designed to train the mind to perceive reality more clearly — without the distortions of craving, aversion, and delusion. Makransky\'s Sustainable Compassion Training adapts Tibetan practices for cross-traditional accessibility, demonstrating that contemplative epistemology can translate across traditions.',
      keyThinkers: ['Makransky', 'Thich Nhat Hanh', 'Dōgen'],
      keyTerms: ['vipassanā', 'śamatha', 'zazen', 'mindfulness'],
    },
    analysis: 'Both traditions insist that some truths cannot be merely thought; they must be practiced into. This is a genuinely shared epistemological commitment — and it distinguishes both traditions from the Enlightenment assumption that reason alone suffices. Makransky\'s remarkable career at Boston College — as both a professor of comparative theology and an ordained Tibetan Buddhist Lama — embodies the possibility of rigorous contemplative practice alongside serious interreligious scholarship. His Sustainable Compassion Training model is explicitly designed to be accessible across traditions. This is not syncretism; it is the recognition that contemplative practice, like scientific observation, operates at a level that can be shared across metanarratives.',
    sources: [
      'Makransky and Condon, How Compassion Works (2025)',
      'Makransky, Awakening Through Love (2007)',
    ],
    relatedAct: 'Act IV',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // F. SCIENCE & ITS LIMITS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'anti-scientism',
    refNumber: 27,
    axis: 'science',
    type: 'convergence',
    title: 'Against Scientism: Science Is Powerful but Not Omniscient',
    christianPerspective: {
      label: 'Science within a larger horizon',
      description: 'Christian theology insists that science is magnificent at what it does — but it does not answer every kind of question. It cannot tell us whether human beings possess intrinsic dignity, why we ought to sacrifice for justice, or what knowledge is for. When science becomes a total worldview (scientism), it commits a philosophical error: making metaphysical claims that cannot themselves be verified scientifically.',
      keyThinkers: ['McGrath', 'Midgley', 'Torrance'],
      keyTerms: ['scientism', 'limits of science', 'trans-scientific questions'],
    },
    buddhistPerspective: {
      label: 'The Middle Way between extremes',
      description: 'Nguyen explicitly acknowledges the limits of reason through Gödel\'s incompleteness theorems and the irreducibility of contemplative experience. The middle way between eternalism and nihilism, between naive realism and radical scepticism, provides Buddhist philosophy with its own critique of totalizing claims — including scientistic ones.',
      keyThinkers: ['Nguyen Hoang Hai', 'Nāgārjuna'],
      keyTerms: ['middle way', 'Gödel', 'limits of reason'],
    },
    analysis: 'A microscope is a marvellous instrument. It is less helpful for reading Dostoevsky. Both traditions can agree on this — and the agreement has immediate practical consequences for AI ethics. The claim that AI can replicate human consciousness rests on tacit scientistic assumptions: that the measurable, computable, and optimizable exhaust what is real about the human person. Both Christian theology and Buddhist philosophy have resources to challenge this. McGrath\'s identification of three scientistic impulses (imperialist, salvific, absolutist) provides a shared diagnostic framework. Nguyen\'s treatment of Gödel shows that even within the formal sciences, completeness is unattainable. If this is truly so, then the project of building an artificial mind is not merely an engineering challenge — it is a philosophical problem that engineering alone cannot solve.',
    sources: [
      'McGrath, Territories of Human Reason (2019), Ch. 2',
      'Nguyen, The Emptiness of Everything (2025), pp. 157–159',
      'Valčo, TNTI lecture (2026), Act IV',
    ],
    relatedAct: 'Act IV',
  },

  {
    id: 'theology-of-nature-vs-naturalism',
    refNumber: 29,
    axis: 'science',
    type: 'divergence',
    title: 'Christian Theology of Nature vs. Buddhist Naturalism',
    christianPerspective: {
      label: 'Logos grounds intelligibility',
      description: 'The Gospel of John opens: "In the beginning was the Logos." The intelligibility of the cosmos is grounded in divine reason — the universe exhibits mathematical elegance, lawful regularity, and rational structure because it flows from a rational Creator. This is a metaphysical claim before it is a devotional one: it says that meaning is woven into the origin of things.',
      keyThinkers: ['Torrance', 'McGrath', 'Polkinghorne'],
      keyTerms: ['Logos', 'intelligibility', 'fine-tuning', 'natural theology'],
    },
    buddhistPerspective: {
      label: 'Self-organizing interdependence',
      description: 'The world is intelligible not because a Mind made it so, but because interdependent causation produces stable patterns. Nguyen demonstrates this domain by domain: physics yields reliable laws because dependent origination operates at every level. No external Logos is required — pattern and order emerge from the causal web itself.',
      keyThinkers: ['Nguyen Hoang Hai'],
      keyTerms: ['dependent origination', 'self-organization', 'naturalism'],
    },
    analysis: 'This divergence has direct implications for fine-tuning arguments and the anthropic principle. The Christian reads the "unreasonable effectiveness of mathematics" (Wigner) as evidence of Logos; the Buddhist reads the same phenomenon as evidence of dependent origination\'s universality. Both accounts are internally coherent. Neither can be compelled by publicly unassailable evidence — which is precisely McGrath\'s point about colligation being "a matter of choice." What the Christian must ask the Buddhist is: does your account explain why there is a causal web at all? And what the Buddhist must ask the Christian is: does your account of Logos do explanatory work, or merely restate the mystery in theological vocabulary?',
    sources: [
      'Valčo, TNTI lecture (2026), Act I',
      'Nguyen, The Emptiness of Everything (2025), Ch. 2–4',
      'McGrath, Territories of Human Reason (2019), Ch. 8',
    ],
    relatedAct: 'Act I',
  },

  {
    id: 'consciousness-frontier',
    refNumber: 30,
    axis: 'science',
    type: 'opportunity',
    title: 'Consciousness: The Frontier Question',
    christianPerspective: {
      label: 'Consciousness oriented toward truth and communion',
      description: 'Christian theological anthropology sees consciousness as an essential dimension of the imago Dei — oriented not merely toward survival but toward truth, beauty, goodness, and communion with God. The capacity to know, to love, and to worship marks human consciousness as qualitatively distinct from any information-processing system.',
      keyThinkers: ['Torrance', 'Pannenberg', 'Valčo'],
      keyTerms: ['imago Dei', 'truth-orientation', 'communion', 'vocation'],
    },
    buddhistPerspective: {
      label: 'Consciousness as model-building operating system',
      description: 'Nguyen treats consciousness as an "operating system" empowered by DNA — sophisticated but ultimately purposeless. The brain builds "appropriate" rather than "truthful" representations of reality. This is a powerful descriptive claim, but it raises a reflexive problem: if consciousness aims only at survival-appropriate models, is Nguyen\'s own book a truthful account of reality or merely a survival-appropriate one?',
      keyThinkers: ['Nguyen Hoang Hai', 'Evan Thompson'],
      keyTerms: ['operating system', 'model of reality', 'vijñāna'],
    },
    analysis: 'This is where the rubber meets the road for AI ethics. If consciousness is merely a purposeless operating system — extraordinarily complex, but with no inherent orientation toward truth — then there is, in principle, no barrier to building an artificial equivalent. If consciousness is oriented toward truth and communion by its very nature, then replicating its functional outputs does not replicate its essence. It is precisely because of this question that our joint research project — bringing Buddhist philosophy of mind, Christian anthropology, and natural science into conversation — exists. Neither tradition alone has the full picture. But together, they may illuminate what it means for a being to be conscious in a world that may or may not have been made for consciousness.',
    sources: [
      'Nguyen, The Emptiness of Everything (2025), Ch. 5',
      'Yong, "Pneuma and Pratītyasamutpāda" in Zygon 40.1 (2005)',
      'Thompson, Waking, Dreaming, Being (2015)',
      'Nguyen Reading Notes, Section C',
    ],
  },

  {
    id: 'ai-ethics-joint',
    refNumber: 31,
    axis: 'science',
    type: 'opportunity',
    title: 'AI Ethics from Both Traditions',
    christianPerspective: {
      label: 'Irreducible dignity cannot be programmed',
      description: 'If human persons bear the imago Dei, then their dignity is not a function of cognitive performance, social utility, or economic productivity. No machine, however sophisticated, can possess this dignity — because dignity is not a computational property but an ontological status conferred by the Creator. This provides an absolute limit on what AI can be or replace.',
      keyThinkers: ['Valčo', 'Wojtyła', 'Pope Francis'],
      keyTerms: ['imago Dei', 'dignity', 'instrumentalization'],
    },
    buddhistPerspective: {
      label: 'Dependent origination challenges functionalism',
      description: 'Buddhist philosophy\'s analysis of consciousness as dependently originated — arising from specific biological, psychological, and karmic conditions — challenges the functionalist assumption that consciousness is substrate-independent. If consciousness is inseparable from its conditions of arising, then it cannot simply be "transferred" to silicon. Additionally, Buddhist ethics asks: will AI alleviate suffering or compound it?',
      keyThinkers: ['Nguyen Hoang Hai', 'Thompson'],
      keyTerms: ['dependent origination', 'consciousness', 'functionalism'],
    },
    analysis: 'This is precisely the terrain on which our Erasmus+ partnership was built. Both traditions — from very different starting points — converge on the claim that the human person cannot be exhaustively described in computational terms. Christianity says: because the person is more than a machine (imago Dei). Buddhism says: because consciousness is dependently originated and cannot be abstracted from its conditions. Neither conclusion is available from within the AI research paradigm itself — which is exactly why interdisciplinary, intercultural, and interreligious dialogue is not a luxury but a necessity. The task before us, therefore, is to develop a joint ethical framework for AI that draws on both traditions without flattening either.',
    sources: [
      'Projektový zámer (Project Proposal, 2025)',
      'KA171 Partnership Questionnaire (VNU Hanoi)',
      'Valčo, TNTI lecture (2026)',
    ],
  },
];

// ─── Utility helpers ─────────────────────────────────────────────────────────

export function getByAxis(axis: Axis): ConvergenceDivergence[] {
  return entries.filter(e => e.axis === axis);
}

export function getByType(type: EntryType): ConvergenceDivergence[] {
  return entries.filter(e => e.type === type);
}

export function getByAxisAndType(axis: Axis, type: EntryType): ConvergenceDivergence[] {
  return entries.filter(e => e.axis === axis && e.type === type);
}

export function getSummary(): Record<Axis, Record<EntryType, number>> {
  const summary = {} as Record<Axis, Record<EntryType, number>>;
  const axes: Axis[] = ['ontology', 'person', 'soteriology', 'ethics', 'epistemology', 'science'];
  const types: EntryType[] = ['convergence', 'divergence', 'opportunity'];
  
  for (const axis of axes) {
    summary[axis] = {} as Record<EntryType, number>;
    for (const type of types) {
      summary[axis][type] = entries.filter(e => e.axis === axis && e.type === type).length;
    }
  }
  return summary;
}
