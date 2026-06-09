'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, File, ChevronDown, ChevronRight, X } from 'lucide-react';
import { useParams } from 'next/navigation';

// Project data mapping
const projectData = {
  'algorithmic-ear': {
    name: 'Algorithmic Ear',
    subtitle: 'How Machines Listen',
    category: 'Algorithms',
    description: 'Experimental tool exploring algorithmic perception',
    imageFolder: 'Algo Ear',
    abstract: 'A prototype that visualizes recommendation algorithms. Spotify converts audio into numerical features—danceability, energy, valence—and this tool uses a greedy algorithm to show how feature engineering shapes what we hear and how we discover music.',
    objective: 'What happens when recommendation algorithms are visible? How do users interact with algorithmic logic when they can see features driving song selection? What does this reveal about computational efficiency versus musical discovery?',
    hypothesis: 'When users manipulate which features drive recommendations, they discover that simple algorithms create loops—locally optimal but globally suboptimal. The greedy algorithm shows how feature-based optimization prioritizes immediate similarity over diverse discovery.',
    visualSystem: 'ALGORITHMIC EAR — DESIGN RATIONALE: The interface is designed to feel like a scientific experiment in perception—a sterile lab console that visualizes how recommendation systems listen through data rather than sound. The minimal, neutral aesthetic isn\'t an aesthetic choice but an epistemological one: to expose algorithmic logic, the design must feel simultaneously neutral and too clean, betraying human emotion in its precision. This makes seeing feel like listening—translating musical feeling into quantifiable parameters. The palette (black, gray, cyan) evokes lab instrumentation, while pairing humanist sans-serif with monospace typography creates tension between emotion and computation. Every interaction is designed for contemplation over productivity, making computational processes visible and measurable.',
    methodology: [
      { step: '01. Input Data', description: 'Features from Spotify API (danceability, energy, valence, tempo, loudness, acousticness) — numerical representations of musical characteristics extracted from audio signals. Each feature quantifies a different aspect of musical experience.' },
      { step: '02. Algorithm Design', description: 'A greedy algorithm iteratively selects songs based on immediate similarity scores for the selected musical dimension. It prioritizes local optimization (immediate similarity) over global search—fast and explainable, but prone to loops.' },
      { step: '03. Interface Design', description: 'Users select a musical dimension (feature) from Spotify\'s API to explore how the algorithm recommends songs. This reveals the product strategy behind recommendation systems: feature engineering as user behavior optimization. When selecting a feature, users choose how the algorithm quantifies taste.' },
      { step: '04. Observation', description: 'Analysis of user behavior and algorithmic outcomes revealed that while the greedy algorithm was fast and explainable, it led to recommendation loops and limited long-term discovery. Users saw how immediate similarity optimization sacrificed diverse discovery.' }
    ],
    outcomes: 'The prototype shows that greedy algorithms are locally optimal but globally suboptimal—they create recommendation loops and prioritize immediate similarity over diverse discovery. This reveals the tension between computational efficiency and cultural knowledge.',
    analysis: 'By making the algorithm visible, Algorithmic Ear reveals how recommendation systems work. The greedy algorithm shows why modern platforms use ensemble methods and collaborative filtering—simple algorithms are fast and explainable but limited. The project exposes how taste is quantified and how feature engineering functions as product strategy.',
    conclusion: 'Taste cannot be fully quantified, but algorithms can approximate it through feature engineering. The greedy algorithm reveals foundational algorithmic thinking and its limitations. The future of algorithmic curation lies in designing systems that honor both computational efficiency and human experience.',
    futureWork: [
      'Explore ensemble methods and collaborative filtering approaches beyond simple greedy algorithms.',
      'Investigate how contextual awareness and user behavior patterns can be integrated into recommendation systems.',
      'Examine how recommendation systems can balance algorithmic efficiency with human curatorial knowledge.',
      'Extend the framework to fan-engagement systems in sports and entertainment, testing how collective preference can be visualized and understood.'
    ],
    technologies: [
      'React',
      'Next.js',
      'Spotify Web API',
      'JavaScript Greedy Algorithm Implementation',
      'Audio Feature Extraction (Spotify API)',
      'Feature Engineering for Musical Dimensions'
    ],
    images: [
      { filename: 'top.png', description: 'Interface overview — The Listening Module. Establishes environment.' },
      { filename: 'picker.png', description: 'Picker interface — Selection tool. Shows decision mechanism.' },
      { filename: 'greedy algo.png', description: 'Algorithmic trace — Greedy optimization path visualization. Shows how logic operates.' },
      { filename: 'slider.png', description: 'Slider interaction — Emotional weighting system. Shows user control.' },
      { filename: 'features.png', description: 'Features — Key capabilities of the algorithmic perception system. Supplemental explanation.' },
      { filename: 'how it works.png', description: 'How it works — Explanation of the tool\'s functionality. Supplemental explanation.' },
      { filename: 'next song.png', description: 'Next song — Algorithm recommendation result. Outcome view.' },
      { filename: 'the future.png', description: 'The future — Forward-looking vision for algorithmic perception. Closing visual.' }
    ]
  },
  '4th-kit': {
    name: '4TH KIT',
    subtitle: 'AI-Powered Fan-Driven Kit Design',
    category: 'Extended Reality',
    description: 'AI-powered platform enabling sports fans to generate custom jersey patterns through natural language prompts',
    imageFolder: '4th kit',
    abstract: 'An AI-powered 3D jersey design platform where sports fans generate custom kit patterns through natural language. The product integrates GPT models, Stable Diffusion, and reasoning engines to democratize professional design while honoring team identity and fan culture.',
    objective: 'Can natural language prompts produce professional-grade jersey designs? How do fans describe design intent without design vocabulary? How do reasoning engines balance fan creativity with design constraints?',
    hypothesis: 'When fans describe designs conversationally, GPT extracts parameters that Stable Diffusion synthesizes into visual patterns. However, unconstrained AI generation violates jersey requirements—sponsor placement, color standards, visual hierarchy. Reasoning engines optimize AI outputs while preserving fan intent.',
    visualSystem: '4TH KIT — DESIGN RATIONALE: Where Algorithmic Ear focused on invisible logic, 4TH KIT centers on participation, creativity, and culture. The design uses Space Grotesk for headlines to echo sports branding and 3D modeling UIs, while blue represents tech precision and magenta represents creative energy. The interface prioritizes fan-AI dialogue through input prompts, feedback loops, and side-by-side results. Every control reads like a conversation rather than software, with constraints (sponsor areas, club palettes) driving better outcomes. The system balances technical precision with creative energy, maintaining scientific portfolio consistency while enabling cultural participation.',
    methodology: [
      { step: '01. Language Processing Layer', description: 'GPT models process natural language fan inputs—team preferences, style descriptions, cultural references—and extract semantic meaning. The language model translates conversational prompts into structured design parameters: color palettes, pattern styles, visual motifs, and aesthetic preferences. This layer transforms fan intent into machine-readable design specifications.' },
      { step: '02. Visual Synthesis Layer', description: 'Stable Diffusion receives GPT-generated design parameters and generates visual pattern variations. The diffusion model synthesizes jersey patterns that incorporate fan-specified aesthetic elements while maintaining design coherence. Multiple pattern variations are generated per prompt, allowing fans to explore different visual interpretations.' },
      { step: '03. Design Optimization Layer', description: 'Reasoning engines evaluate AI-generated patterns against jersey design constraints: team color requirements, sponsor placement rules, visual hierarchy standards, and brand identity guidelines. The system optimizes pattern placement, color relationships, and visual balance to ensure outputs meet professional design standards while honoring fan preferences.' },
      { step: '04. 3D Visualization & Iteration', description: 'Generated patterns are mapped onto a 3D jersey model in real-time, providing immediate visual feedback. Fans iterate through AI-generated variations, refine prompts, and see how patterns appear on a spatial jersey surface. The interface transforms AI outputs into tangible design concepts.' }
    ],
    outcomes: 'Fans successfully generated custom jersey patterns using natural language prompts. GPT enabled conversational design input, Stable Diffusion generated diverse pattern variations, and reasoning engines ensured outputs met jersey constraints. The platform achieved strong fan engagement with users iterating through multiple design variations.',
    analysis: '4TH KIT demonstrates how integrated AI models can democratize sports product design. GPT proves natural language can serve as a design interface, Stable Diffusion generates diverse variations while maintaining coherence, and reasoning optimizes outputs for real-world constraints. The multi-model pipeline amplifies fan creativity while respecting professional standards.',
    conclusion: 'Integrated AI models enable sports fans to generate professional-grade jersey patterns through conversational prompts. The multi-model architecture shows how different AI capabilities work together: language understanding translates intent, visual generation creates variations, and reasoning optimizes for constraints. The future of AI-powered sports products lies in architectures that translate fan preferences while preserving team identity and brand integrity.',
    futureWork: [
      'Fine-tune Stable Diffusion on team-specific design archives to generate patterns that better reflect brand identity and historical aesthetics.',
      'Integrate advanced reasoning models that optimize patterns based on team history, fan sentiment analysis, and cultural context, ensuring designs resonate with fan communities.',
      'Develop collaborative AI features that enable fan communities to collectively generate kit designs through voting, iteration, and community-driven refinement.',
      'Build recommendation systems that learn from fan design preferences and interaction patterns to suggest personalized pattern variations and design improvements.',
      'Extend the multi-model architecture to other sports products (apparel, merchandise, stadium graphics), testing how AI can scale fan-driven design across sports categories while maintaining brand consistency.'
    ],
    technologies: [
      'GPT Models (Natural Language Processing & Design Parameter Extraction)',
      'Stable Diffusion (Visual Pattern Synthesis & Generation)',
      'Reasoning Engines (Design Optimization & Constraint Satisfaction)',
      'Multi-Model AI Architecture Integration',
      'React',
      'Three.js',
      'WebGL',
      'Real-time 3D Rendering & Visualization',
      'Sports Product Design Systems',
      'Audience Engagement Analytics'
    ],
    images: [
      { filename: 'kit.png', description: 'Home page - 4TH KIT main interface. Establishes environment.' },
      { filename: 'thinking.png', description: 'Design thinking - conceptual exploration phase. Shows decision mechanism.' },
      { filename: 'start edit.png', description: 'Start editing - initial design entry point. Shows how logic operates.' },
      { filename: 'editor.png', description: 'Editor interface - 3D jersey design workspace. Shows user control.' },
      { filename: '4th-kit-Barca.png', description: 'Barcelona kit example - completed design showcase. Outcome view.' }
    ]
  },
  'sneaker-builder-ar': {
    name: 'Sneaker Builder AR',
    subtitle: 'Gamified Design Challenge for Sports-Adjacent Products',
    category: 'Extended Reality',
    description: 'Gamified sneaker design platform that transforms creative work into play through time-based challenges and AR visualization',
    imageFolder: 'sneaker ',
    abstract: 'A gamified sneaker design platform that tests whether design tools can build fandom through creation rather than purchase. The platform uses AR visualization to enable fans to design custom sneakers in real-time, exploring whether designing sneakers—a core ritual of sneaker culture—deepens fan connection. The project tests whether gamification features (time-based constraints) enhance or hinder fan engagement through design.',
    objective: 'In sneaker culture, where customization is central, can enabling fans to design sneakers build fandom more effectively than purchasing? Does creation itself deepen connection to sneaker culture, or does it need gamification to sustain engagement? Do time-based constraints make design feel playful or create pressure that diminishes creative expression?',
    hypothesis: 'When fans design sneakers through AR tools, they feel more connected to sneaker culture because creation builds ownership. However, design tools alone may not sustain engagement. Time-based constraints test whether framing design as a game increases engagement, but may sacrifice design quality for speed.',
    visualSystem: 'SNEAKER BUILDER AR — DESIGN RATIONALE: Where 4TH KIT is about collective creativity, Sneaker Builder AR centers on embodied play—the intersection of design, fandom, and game logic. The visual system creates a research arcade aesthetic: equal parts lab notebook and sneaker drop. Hot pink serves as the main accent, representing energy and play, while the interface treats design as a game where interactions function as challenges. Fans become co-designers through prominent stats panels and persistent user state. Timed constraints push improvisation rather than limitation, and backgrounds reference street materials to situate sneakers as cultural narrative. The aesthetic balances arcade energy with research-lab precision—one hot accent on a clinical surface—letting sneaker imagery pop while maintaining the portfolio\'s scientific-design-theory through-line.',
    methodology: [
      { step: '01. Gamification Architecture', description: 'A time-based challenge structure creates urgency without anxiety, framing design work as a game rather than a task. Players design sneakers within limited timeframes, with scoring systems that reward experimentation, iteration, and creative risk-taking.' },
      { step: '02. AR Visualization System', description: 'Augmented reality overlays the sneaker design onto the user\'s physical environment, making spatial relationships perceptible and enabling real-time visualization of design choices. Users rotate, zoom, and interact with 3D sneaker models to evaluate design decisions within the game context. The AR system transforms abstract design concepts into tangible visual experiences.' },
      { step: '03. Feedback & Scoring System', description: 'The "Boss" chat interface (Sneaker Design Manager character) provides gamified feedback that guides creative decision-making through character-driven dialogue. Scoring systems track performance, rewarding creative experimentation, design coherence, and iteration quality. The feedback structure transforms critique into game mechanics, making design feedback engaging rather than intimidating.' },
      { step: '04. User Engagement Metrics', description: 'Analysis of how gamification affects design behavior: time-to-decision, iteration frequency, creative risk-taking, and user satisfaction. The system reveals how play mechanics structure creative processes while maintaining design quality and user agency. Metrics track engagement patterns, design outcomes, and user experience within the gamified context.' }
    ],
    outcomes: 'Fans successfully created sneaker designs using AR tools, demonstrating that design tools can build fandom through creation. However, engagement patterns revealed tensions: fans enjoyed designing when it felt playful, but lost interest when design felt like work. Time-based constraints created urgency that increased initial engagement, but some fans felt pressured to rush designs. Fans who engaged showed deeper connection to sneaker culture, suggesting creation builds fandom more effectively than purchase alone.',
    analysis: 'Sneaker Builder AR demonstrates that design tools can build fandom through creation, but engagement depends on whether design feels like play or work. Fans showed deeper connection to sneaker culture because creation builds ownership—participating in the creative process that defines sneaker culture. Time-based constraints created playful urgency but also pressure that limited creative exploration. The key insight: fan engagement depends less on technical capabilities and more on whether design feels like play.',
    conclusion: 'Gamification enhances creative decision-making when designed as creative constraints rather than punitive measures. AR visualization enables rapid iteration within constrained timeframes. The future of gamified design tools lies in balancing structure with freedom, using play mechanics to enhance rather than replace creative expression. In sneaker culture, enabling fans to participate in the design process builds deeper connection to the culture itself.',
    futureWork: [
      'Integrate social gaming features that allow users to compete, share designs, and receive community feedback within the gamified context.',
      'Explore adaptive difficulty systems that adjust time constraints and challenge complexity based on user skill level and design experience.',
      'Investigate how character-driven feedback can be personalized based on user design preferences and creative style.',
      'Extend the gamification framework to other sports-adjacent product categories (apparel, equipment, accessories), testing how play mechanics can structure design work across product types.',
      'Develop advanced scoring systems that evaluate design quality, creativity, and market potential to provide more nuanced feedback and challenge progression.'
    ],
    technologies: [
      'React',
      'React Three Fiber',
      'WebXR',
      'AR Visualization',
      'Game Design Systems',
      'Character-Driven Feedback Architecture',
      'Real-time 3D Rendering',
      'Time-based Challenge Mechanics',
      'Scoring & Progression Systems'
    ],
    images: [
      { filename: 'shoe .png', description: 'Shoe design - AR sneaker customization view. Establishes environment.' },
      { filename: 'game.png', description: 'Game interface - main sneaker builder challenge. Shows decision mechanism.' },
      { filename: 'boss chat.png', description: 'Boss chat - gamified interaction and feedback system. Shows how logic operates.' }
    ]
  },
  'soma-ar': {
    name: 'Soma AR',
    subtitle: 'Immersive AR Meditation Experience',
    category: 'Extended Reality',
    description: 'Immersive AR meditation experience that visualizes breath as flower growth, creating moments of pause through guided breathing',
    imageFolder: 'soma',
    abstract: 'An immersive AR meditation experience that creates moments of pause through guided breathing. Users stand in front of a screen, and AR tracks their breath through a webcam. As they breathe—following a four-box count (inhale, hold, exhale, pause)—a flower grows on one side of the screen, then slowly dissolves. The experience requires no interaction: AR puts users into the environment automatically.',
    objective: 'Can AR experiences create meaningful moments of pause? When users are guided through a breathing exercise using AR visualization, does it create connection or distraction?',
    hypothesis: 'When users are guided through a breathing exercise using AR visualization, they stop and engage because visual feedback makes the process tangible. The four-box count creates rhythm, while the flower growing and dissolving provides visual feedback. AR puts users into the environment without requiring interaction—they just stand there. However, AR may distract from the breathing itself—users may focus on the visualization rather than the breath.',
    visualSystem: 'SOMA AR — DESIGN RATIONALE: The visual design creates a calm, meditative aesthetic that supports the breathing experience. Soft pink-to-blue gradient overlays follow hand movement and breathing rhythm, while the AR visualization renders flowers that grow during inhale and dissolve during exhale. The design philosophy centers on creating moments of pause—using minimal visual feedback to support the breathing exercise without competing with it. The AR system makes imperceptible processes (breathing, growth) visible, creating a tangible feedback loop, while the minimal interface ensures the experience remains accessible and focused.',
    methodology: [
      { step: '01. Experience Design', description: 'An immersive AR experience that creates a moment of pause through guided breathing. Users stand in front of a screen, and AR tracks their breath through a webcam. The experience uses a four-box count (inhale, hold, exhale, pause) to guide breathing rhythm, creating a structured moment of stillness.' },
      { step: '02. AR Visualization', description: 'As users breathe, a flower grows on one side of the screen, then slowly dissolves. The flower growth and dissolution are synchronized with the breathing cycle—inhale grows the flower, exhale dissolves it. This visualization makes imperceptible processes (breathing, growth) visible, creating a tangible feedback loop.' },
      { step: '03. Environment Design', description: 'The experience requires no interaction—AR automatically detects presence via webcam and begins visualization. This creates accessibility that traditional meditation tools lack: users don\'t need to download apps, use devices, or learn interfaces. The zero-interaction design removes barriers to entry.' },
      { step: '04. Engagement Metrics', description: 'Analysis of how AR breathing visualization affects user engagement. The system measures engagement patterns: how many users stop and engage, how long they stay, whether they follow the breathing rhythm, and whether the experience creates a moment of connection or distraction. Metrics track individual engagement and moments of pause.' }
    ],
    outcomes: 'Users successfully engaged with the AR breathing experience, demonstrating that AR can create meaningful moments of pause. The flower growing and dissolving in sync with breath created a visual rhythm that guided users through the four-box breathing cycle. The experience required no interaction except standing there—AR put users into the environment automatically—creating accessibility that traditional meditation tools lack. However, engagement patterns revealed tensions: some users were captivated by the breathing exercise and found the moment grounding, while others found the AR visualization distracting from the breathing itself. The experience successfully created moments of pause, but effectiveness depended on whether users focused on breathing or the visualization.',
    analysis: 'Soma AR reveals how AR experiences can create meaningful moments of pause, but success depends on whether AR enhances or competes with the breathing exercise itself. The flower growing and dissolving created a visual rhythm that guided users through the four-box breathing cycle, making imperceptible processes (breathing, growth) visible. The "just stand there" interaction created accessibility—users didn\'t need to download apps or learn interfaces—but some users focused on the AR visualization rather than the breathing itself. The project exposes how AR can be used strategically—creating moments of connection when integrated thoughtfully, but creating distraction when AR becomes the focus rather than an enhancement. The key insight: AR experiences work best when they amplify rather than replace the core experience—in this case, the breathing exercise.',
    conclusion: 'AR experiences can create meaningful moments of pause when designed to enhance rather than compete with the core experience. The breath visualization demonstrated that making imperceptible processes visible through AR can guide users through breathing exercises, but AR must be integrated thoughtfully to avoid distracting from the breathing itself. The "just stand there" interaction created accessibility that traditional meditation tools lack, but effectiveness depended on whether users focused on breathing or the visualization. The future of AR in immersive experiences lies in creating experiences that amplify the moment rather than becoming the moment—using AR strategically to deepen connection rather than replace it. This approach should be done again: creating moments of stillness through accessible, guided breathing exercises.',
    futureWork: [
      'Explore how different AR visualization styles affect user engagement.',
      'Investigate how AR experiences can be extended to collaborative interactions.',
      'Examine how AR interfaces can be integrated with different contexts to create cohesive experiences.',
      'Extend the framework to other immersive contexts, testing how AR can enhance different types of experiences and engagement patterns.',
      'Develop AR experiences that respond to context and user behavior, creating adaptive experiences that enhance rather than compete with the core experience.'
    ],
    technologies: [
      'React',
      'AR.js',
      'WebXR',
      'Webcam-based Breath Tracking',
      'Computer Vision',
      'Real-time AR Visualization',
      'Event Experience Design',
      'Audience Engagement Analytics'
    ],
    images: [
      { filename: 'enter.png', description: 'Entry point - initial welcome screen. Establishes environment.' },
      { filename: 'webcam.png', description: 'Webcam activation - AR experience setup. Shows decision mechanism.' },
      { filename: 'breath screen.png', description: 'Breathing interface - mindful breathing and flower growth visualization. Shows how logic operates.' }
    ]
  },
  'field-node-v1': {
    name: 'Field Node v1',
    subtitle: 'A Prototype for Care-Based Knowledge',
    category: 'Knowledge Infrastructure',
    description: 'First attempt at a care-centered knowledge system using relational nodes',
    imageFolder: 'FN V1',
    abstract: 'A first attempt at a care-centered knowledge system: a lightweight app to capture ideas, sources, and reflections as modular "nodes," then relate them without the heaviness of a full wiki or the performance of social media. The system organizes information as interconnected nodes—each piece of knowledge relates to others rather than existing in fixed categories.',
    objective: 'What happens when knowledge has no hierarchy? I needed a place to read, think, and keep context—not just store links. Existing tools optimized for speed, shareability, or hierarchy. I wanted a space that prioritized care, slowness, and relation: what a thought is for, who it touches, and how it changes.',
    hypothesis: 'When knowledge is structured relationally (as nodes with connections), users can capture thoughts with care and context—showing what a thought is for, who it touches, and how it changes. However, this lack of structure may create navigation challenges—users may struggle to find information or understand how nodes relate. The outcome depends on whether relational freedom enhances care-centered knowledge creation or creates confusion without hierarchy.',
    visualSystem: 'FIELD NODE v1 — DESIGN RATIONALE: A terminal UI structure was chosen not as a retro aesthetic, but as a structural metaphor—a design language that encodes slowness, intentionality, and intimacy within a technical space. The terminal form invites command, response, and reflection—a conversational rhythm rather than a scroll. Pink and magenta accents provide warmth inside the machine, creating a paradoxical mood of precision with tenderness. Working with these colors revealed a critical realization: there is no equivalent to pink/magenta that doesn\'t exist. These colors carry specific cultural and emotional associations that cannot be replaced—they are not neutral, and that non-neutrality is essential to the design\'s argument about care within technical systems.',
    methodology: [
      { step: '01. Core Concept', description: 'Nodes are small, honest units of knowledge: Raw Node (a quote, note, excerpt), Context Node (why it matters to me), Support Node (citations, links, media), Reflection Node (how it changed my thinking). Instead of a tree of folders, v1 pushed a relational model: each node can reference others to show lineage and influence.' },
      { step: '02. Interaction Model', description: 'A write-first flow captures a node before account creation, then attaches identity (minimal friction). Light metadata includes tags, source, author, concepts, plus optional intimacy flag (how "close" this is to me). Relation over ranking: add "is related to / extends / contradicts" rather than likes or scores.' },
      { step: '03. Data Model', description: 'Unique Node IDs (e.g., FN-RN.001) for human legibility. Simple tables: nodes, relations, tags, attachments. Text is first-class (markdown), links are supportive. Version history on edit to honor how thought evolves.' }
    ],
    outcomes: 'The node types (Raw/Context/Support/Reflection) made writing feel purposeful. The write-first capture lowered friction; thinking happened in place. The dark + pink interface created a cohesive identity and felt calm. However, no ingestion pipeline (manual copy-paste only) slowed momentum. Relations were visible but under-leveraged—few analytics, no map. Metadata discipline drifted without templates.',
    analysis: 'Field Node v1 reveals how relational knowledge structures can support care-centered knowledge creation, but the system needed more structure to be effective. The node types made writing purposeful, and the write-first flow lowered friction, but the lack of templates and relation views limited the system\'s potential. The project demonstrates that care needs structure: templates, prompts, and gentle constraints help people reflect. Relation needs surfaces: maps, timelines, and "because you referenced X..." make links meaningful.',
    conclusion: 'Relational knowledge structures can support care-centered knowledge creation, but they need structure to be effective. Care needs templates and gentle constraints. Relation needs surfaces to make links meaningful. Reading and writing must co-exist: excerpt capture and annotation should be native. This led to v2: stronger templates, better relation views, and improved capture, while keeping the ethos that systems of knowledge should feel as much as they function.',
    futureWork: [
      'Develop stronger templates and prompts to maintain metadata discipline and help people reflect.',
      'Build better relation views: maps, timelines, and "because you referenced X..." to make links meaningful.',
      'Integrate native excerpt capture and annotation so reading and writing co-exist naturally.',
      'Explore how algorithmic intelligence (Hugging Face) and human intelligence (Are.na curation) can work together without algorithms overshadowing human judgment.'
    ],
    technologies: [
      'React',
      'Node-based Knowledge Architecture',
      'Relational Database Design',
      'Open-source Learning Systems',
      'Distributed Knowledge Infrastructure'
    ],
    images: [
      { filename: 'Field node landing v1.png', description: 'Landing page - Field Node v1 main interface. Establishes environment.' },
      { filename: 'v1 orientation.png', description: 'Orientation - user onboarding and system introduction. Shows decision mechanism.' },
      { filename: 'v1 help.png', description: 'Help interface - user guidance and documentation. Shows how logic operates.' }
    ]
  },
  'field-node-v2': {
    name: 'Field Node v2',
    subtitle: 'The Explorer as System of Relation',
    category: 'Knowledge Infrastructure',
    description: 'Reimagined knowledge infrastructure as an ecology of blocks and relations, with the Explorer Page as a living interface for performing care through interaction',
    imageFolder: 'FN V2',
    abstract: 'Field Node v2 is a knowledge infrastructure system that organizes information as blocks (imported ideas) and nodes (personal reflections) connected through relations. The Explorer Page enables visual, relational exploration of theory and ideas without traditional search or hierarchy.',
    objective: 'Can algorithmic surfacing enhance relational discovery without replacing human curatorial judgment? Specifically, can algorithms be designed to listen for resonance—shared emotional tone, conceptual proximity, overlapping contexts—rather than predict behavior or prioritize computational efficiency?',
    hypothesis: 'When algorithms surface connections based on relational proximity (shared contexts, emotional resonance, conceptual overlap) rather than keyword matching or behavioral prediction, users will discover more meaningful connections and exploration will feel more like intimacy than extraction. However, if algorithms prioritize efficiency over relational care, they will group ideas by surface similarity rather than deeper resonance, reducing the system\'s capacity for meaningful discovery.',
    visualSystem: 'FIELD NODE v2 — DESIGN RATIONALE: Field Node v2 moves from the pink-on-black intimacy of the terminal (version 1) to a calm, relational system built on warmth and depth. The interface is no longer expressive through color—it is expressive through tone, temperature, and texture. Earth tones replace emotional color: Espresso Brown, Clay Tan, Soft Beige, Taupe Gray, and Neutral Gray create a muted palette where care becomes a temperature rather than a hue. The design behaves like an instrument for tending: muted, grounded, and quietly alive. It encodes care through hierarchy, spacing, and time rather than color or animation. The design is slow, neutral, and relational—like a darkroom for thought. Each surface operates like a field—quiet, relational, and warm, designed to hold thought instead of perform it.',
    methodology: [
      { step: '01. Block + Node Language', description: 'Field Nodes v2 introduced a Block + Node language—a vocabulary that could hold both structure and feeling. Blocks are imported ideas (excerpts, quotes, images, or theories) collected from Are.na, PDFs, or Hugging Face datasets. They\'re public touchpoints: references that circulate across the web. Nodes are personal reflections attached to those blocks. Each node describes how the block relates to the user\'s world: through care, emotion, relevance, or insight. The goal was to make theory relational—not consumed, but tended to. The act of linking became an act of care. The act of reflecting became an interface gesture.' },
      { step: '02. The Explorer Page', description: 'An interactive research environment inspired by cartography, zine culture, and system aesthetics. Instead of search bars, users scroll through curated "fields" where blocks dynamically load as modular tiles. When users reflect on a block, nodes are generated underneath—tagged, linked, and timestamped—creating a conversation between external text and internal reflection. The algorithm suggests related blocks by relational proximity (shared emotional tone, recurring concepts, overlapping metadata) rather than keyword matching, creating a knowledge garden where discovery feels intuitive and relational.' },
      { step: '03. Technical Architecture', description: 'Frontend: React + Next.js for modular composition and page rendering. Database: Supabase for relational data (tables for blocks, nodes, relations, tags, users). APIs: Are.na API pulls in public channel content and displays them as dynamic blocks on the Explorer Page. Hugging Face API provides text summarization and sentiment extraction, and tests natural language tagging of nodes. OpenAI Embeddings are used for relational surfacing—calculating semantic similarity between blocks and user reflections. Local cache stores session-level context to allow flow between reading and reflection. Visualization: D3.js and Framer Motion render relational graphs and soft hover transitions—emphasizing relation over data.' },
      { step: '04. The Language of Care', description: 'Every part of v2\'s interface language was rewritten around care verbs—actions that imply attention, not ownership. Instead of Save, Delete, Edit, the interface used: "Tend"—open a node for reflection. "Link"—connect a node to another idea. "Extend"—pull a reflection outward into a new thread. "Trace"—follow a relation backward in time. This subtle linguistic reframe transformed the UX logic into a kind of feminist pedagogy: you don\'t manage data, you care for it. The language of care changed how users behaved—less skimming, more reflection.' }
    ],
    outcomes: 'The Explorer Page made theory accessible: users could move through abstract ideas visually and relationally. Hugging Face integrations helped surface thematic similarities, building an intuitive "map of thought." The language of care changed how users behaved—less skimming, more reflection. The system felt alive—relationships evolving with every new node. However, Are.na API limits made real-time sync unreliable; occasional 401 errors on private channels. Embedding similarity sometimes overfit—grouping by phrasing rather than conceptual meaning. Explorer performance lagged under large data sets; graph rendering expensive on load. No multi-user mode yet—collective relation still theoretical.',
    analysis: 'Field Nodes v2 became the seedbed for Critical Intimacy, the next stage of the system. It taught me that exploration itself is a form of intimacy—that discovery can feel relational, not extractive. The Explorer Page showed what happens when algorithms are trained not to predict behavior, but to listen for resonance. The system revealed that computational efficiency and relational care can coexist when algorithms enhance relational discovery rather than replace human curatorial judgment. The Block + Node language demonstrated that theory can be made relational—not consumed, but tended to. The care verbs transformed system operations into acts of care, creating a feminist pedagogy where you don\'t manage data, you care for it.',
    conclusion: 'Version 2 made visible a simple truth: systems of care begin where we decide to slow down, look closely, and relate with feeling. The Explorer Page demonstrated that knowledge infrastructure can be an ecology of blocks and relations—a living map of context that evolves with every new node. The shift from archiving care to performing it through interaction revealed that exploration itself is a form of intimacy. In the next version, AI will not only surface connections but sense tempo—noticing when users linger or move quickly. Relations will become dialogic—systems that ask, "Are you still thinking about this?" The design will shift from mapping knowledge to mirroring attention. Field Nodes v2 is where the system began to think about itself as something that listens, learns, and extends care across both human and machine boundaries.',
    futureWork: [
      'Develop AI that senses tempo—noticing when users linger or move quickly, and adjusting relational surfacing accordingly.',
      'Create dialogic relations—systems that ask "Are you still thinking about this?" and adapt to user attention patterns.',
      'Shift design from mapping knowledge to mirroring attention—using algorithmic empathy to enhance rather than replace human curatorial judgment.',
      'Build collective relation features—multi-user modes that enable shared exploration and relational knowledge creation.',
      'Extend the Block + Node language to other knowledge domains, testing how care verbs can transform system operations across different contexts.',
      'Develop Critical Intimacy (v3)—where the project begins to merge interface, emotion, and algorithmic empathy, creating a system that listens, learns, and extends care across human and machine boundaries.'
    ],
    technologies: [
      'React',
      'Next.js',
      'Supabase',
      'Are.na API',
      'Hugging Face API',
      'OpenAI Embeddings',
      'D3.js',
      'Framer Motion',
      'Relational Database Design',
      'Block + Node Architecture',
      'Relational Surfacing Algorithms',
      'Knowledge Graph Visualization',
      'Local Cache & Session Management'
    ],
    images: [
      { filename: 'v2 landing.png', description: 'Landing page - Field Node v2 main entry point. Establishes environment.' },
      { filename: 'v2 login.png', description: 'Login interface - user authentication. Shows decision mechanism.' },
      { filename: 'v2 home page.png', description: 'Home page - user dashboard and main workspace. Shows how logic operates.' },
      { filename: 'v2 Orientation.png', description: 'Orientation - system introduction and user onboarding. Shows user control.' },
      { filename: 'v2 nodes.png', description: 'Nodes view - knowledge graph visualization. Supplemental explanation.' },
      { filename: 'Nodes.png', description: 'Nodes interface - alternative nodes display. Supplemental explanation.' },
      { filename: 'v2 explorer.png', description: 'Explorer - knowledge navigation and discovery. Outcome view.' },
      { filename: 'v2 drop down.png', description: 'Dropdown menu - navigation and feature access. Supplemental explanation.' },
      { filename: 'Tend to nodes.png', description: 'Tend to nodes - interaction and care interface for knowledge nodes. Closing visual.' }
    ]
  },
  'form-wnba': {
    name: 'FORM',
    subtitle: 'Sports As Art, Picks As Social Infrastructure',
    category: 'Culture, Data & Transformation',
    description: 'A data-visualized pick-em for WNBA matchups that replaces standard list-based selection with a more interpretive visual field.',
    imageFolder: 'FORM',
    abstract: 'FORM is not just a weekly pick-em. It is an attempt to turn sports selection into an art form. Instead of presenting WNBA matchups as a flat list of binary choices, the system uses watercolor logic, blending, and generative mark-making to let picks accumulate into a shareable visual composition. The goal is to make choosing feel slower, more expressive, and more meaningful — a feminist systems question as much as a product one: how do we design sports interactions that matter, hold feeling, and become part of community rather than disappearing as a quick tap?',
    objective: 'How can a pick-em become more than a transactional sports interface? Could a weekly rhythm of selection, memory, and sharing be designed as something artistic and communal? Could women’s basketball picks be transformed into a living visual system — one that treats participation not as disposable input, but as something worth rendering, keeping, and circulating?',
    hypothesis: 'When the act of picking creates a piece of art, the relationship to the system changes. The user is no longer just submitting a choice; they are making a composition. That shift creates a different kind of attachment: more reflective, more social, and more likely to turn prediction into ritual, identity, and community memory.',
    visualSystem: 'The visual system is the core idea. FORM uses a watercolor effect that lets matchups bleed into one another, so the week behaves like one field instead of a stack of isolated rows. Team colors blur, overlap, and settle into a compositional surface that can be shared as a social artifact. That blending matters conceptually: it resists the coldness of standard sports UI and makes room for mood, interpretation, and relation. The product language pulls from painting, paper, and archive aesthetics so the interface can feel like something to live with, not just pass through.',
    methodology: [
      { step: '01. Reject The Default Pick-Em', description: 'The project began by refusing the usual sports-interface template. Instead of checkboxes, betting cues, or bracket logic, the question was: what if choosing winners felt like making something?' },
      { step: '02. Build The Watercolor Field', description: 'The watercolor effect was designed to let selections blend into each other and form a larger visual piece. The week becomes a continuous painted surface, not a set of isolated decisions. That is where the project becomes art, not just interface.' },
      { step: '03. Design For Sharing And Community', description: 'The visual output was built to travel. A pick becomes a shareable artifact on social media, while supporting surfaces like the wall, atlas, and personal form history turn the system into a community object rather than a private utility.' },
      { step: '04. Support The Poetics With Infrastructure', description: 'Underneath the visual system is a practical product stack: scoreboard data, persistent state, share generation, and a PWA architecture. The goal was to make an expressive interface that still behaves like a real system people can return to.' }
    ],
    outcomes: 'FORM shows that a sports product can function as interface, artwork, and social artifact at the same time. The system produces weekly picks, but it also produces images, memory, and a sense of form that people can keep, compare, and share. That makes it larger than a game mechanic. It becomes a way of participating in women’s basketball culture through design.',
    analysis: 'The strongest part of the project is that it changes what counts as the output. In a normal pick-em, the output is a correct or incorrect choice. In FORM, the output is also a visual record, a shareable composition, and a communal object. That is where the feminist systems thinking matters: the interaction is not optimized for speed alone. It is designed to hold more meaning, more care, and more social visibility. The system asks whether a sports interface can be something people dwell in rather than something they simply complete.',
    conclusion: 'FORM is a design argument about what sports systems can be when they are treated as cultural and artistic forms rather than just utility products. It uses women’s basketball as the site for that experiment, but the larger claim is broader: selection, memory, and community can all be redesigned through more expressive visual systems.',
    futureWork: [
      'Refine the watercolor logic so different matchup conditions can generate different intensities, blends, or visual moods without losing clarity.',
      'Build stronger public storytelling around the weekly art objects, so the output feels even more collectible and discussable across social platforms.',
      'Expand the archive and personal history views so users can see not just what they picked, but how their visual language and habits evolve over time.',
      'Test how this kind of slower, more expressive sports interaction could scale into other community-based systems without losing the intimacy of the current form.'
    ],
    technologies: [
      'Vanilla JavaScript (ES modules)',
      'Progressive Web App architecture',
      'Service worker and web manifest',
      'Supabase',
      'ESPN scoreboard API',
      'Static multi-page deployment',
      'localStorage fallback state',
      'Generative artwork system',
      'Data visualization-driven interaction design',
      'Share-card composition pipeline'
    ],
    projectLinks: [
      { label: 'GitHub repo', href: 'https://github.com/candiikay/FORM' },
      { label: 'Live project', href: 'https://form-sigma-rosy.vercel.app/' }
    ],
    images: [
      { filename: 'form-watercolor-field.png', description: 'Selected matchup field — the watercolor system after picks are made, where choices blend into a single painted composition.' },
      { filename: 'form-product-system.png', description: 'Product system study — mobile flows showing how today’s picks, your form, set completion, archive, and settings all extend the same visual language.' },
      { filename: 'form-entry-screen.png', description: 'Entry screen — the quiet invitation into FORM, framing the product as something you enter and stay in, not just a game to rush through.' },
      { filename: 'form-wall.png', description: 'Wall view — the communal layer where weekly form becomes social, visible, and shareable across a broader group.' }
    ]
  },
  'beyond-the-waterline': {
    name: 'Beyond the Waterline',
    subtitle: 'Women’s Basketball, 1972–2026',
    category: 'Culture, Data & Transformation',
    description: 'An interactive timeline about women’s basketball, pairing years, metrics, and narrative context in one scrollytelling system.',
    imageFolder: 'Waterline',
    abstract: 'Beyond the Waterline is an editorial timeline that tracks women’s basketball from 1972 to 2026 — the games, the money, the pushback, and what finally broke the surface. It treats sports history as interface: scroll the rail, drag the year, and watch the metrics and narrative move together.',
    objective: 'How do you design a sports history interface that is not just archival, but legible and felt? Can a timeline hold both numbers and context — the box score and the social conditions around it — without flattening either one?',
    hypothesis: 'When sports history is structured as a synchronized interface rather than a static essay, users can move through time with better orientation. Pairing year, headline metrics, and narrative context lets the audience understand not just what happened in women’s basketball, but why it mattered when it did.',
    visualSystem: 'The project uses an editorial sports-language rather than a dashboard language. The timeline rail, vertical year track, and narrative detail panel move together to create a sense of depth and temporal motion. Typography and spacing do most of the work: the interface feels like a newspaper feature crossed with a museum display, giving women’s basketball the seriousness and care often denied to it.',
    methodology: [
      { step: '01. Timeline Architecture', description: 'Structured the experience around a scrollable rail and draggable year track so navigation itself would communicate time. The system needed to orient the user quickly while allowing deeper exploration.' },
      { step: '02. Narrative + Metrics Pairing', description: 'Each year needed both a headline metric layer and a contextual story layer. The interface was designed so those two modes stayed synchronized instead of competing.' },
      { step: '03. Editorial Framing', description: 'Wrote and arranged the experience as a mediated argument: women’s basketball history is not just a chronology of wins, but a record of labor, visibility, money, and public reception.' },
      { step: '04. Lightweight Delivery', description: 'Built the experience as a single-page web narrative with careful front-end choreography so it could remain accessible, quick, and easy to share.' }
    ],
    outcomes: 'The result is a strong research and storytelling artifact that translates sports history into an explorable system. It demonstrates visual hierarchy, pacing, and the ability to work with historical narrative and quantitative signals at the same time.',
    analysis: 'This project matters because it shows I can design for interpretation, not just interaction. Beyond the Waterline does not present women’s basketball as a data set to be mined. It frames the archive as a public story with stakes. That combination of editorial research and interface design is one of the clearest through-lines in my work this year.',
    conclusion: 'Beyond the Waterline expands my portfolio beyond product flows into temporal storytelling systems. It is a sports media project, but also a method: using interface as a way to make culture, history, and structural context easier to understand.',
    futureWork: [
      'Add richer source views and citation layers so readers can dive further into specific years and claims.',
      'Extend the timeline into player, league, and media sub-stories without losing the coherence of the central rail.',
      'Test how this format could support exhibitions, classroom use, or editorial publishing around women’s sports.',
      'Develop stronger responsive behavior for smaller screens while preserving the synchronized timeline logic.'
    ],
    technologies: [
      'HTML/CSS/JavaScript',
      'Scrollytelling interaction design',
      'Editorial interface systems',
      'Responsive front-end layout',
      'Historical research synthesis'
    ],
    projectLinks: [
      { label: 'GitHub repo', href: 'https://github.com/candiikay/WNBADATA' }
    ],
    images: [
      { filename: 'waterline-logo.png', description: 'Project identity for Beyond the Waterline, an interactive women’s basketball timeline.' }
    ]
  },
  'machine-tries-to-see-caitlin-clark': {
    name: 'The Machine Tries to See Caitlin Clark',
    subtitle: 'A Computational Media Field Notebook',
    category: 'Algorithms',
    description: 'An editorial experiment about trying to make a computer vision system reliably recognize Caitlin Clark in broadcast footage.',
    imageFolder: 'Machine',
    abstract: 'This project is a field notebook on machine perception, built around a focused question: why is it so hard for a computer vision system to consistently recognize Caitlin Clark in the final seconds of an ESPN broadcast? It turns a technical attempt into an editorial critique of what machine vision misses when context, pressure, motion, and identity get compressed into footage.',
    objective: 'Can a compact creative-coding project reveal the limits of computer vision more clearly than a purely technical demo? What does sports footage expose about tracking systems, and how can design turn those failures into a readable public argument?',
    hypothesis: 'When the process of failure is made visible — ball tracking, silhouette matching, jersey color heuristics, manual pointing, broadcast limitations — audiences understand computer vision more deeply. The value is not just in “making it work,” but in showing why perception systems misread the world.',
    visualSystem: 'The page is staged as a field notebook rather than a polished AI demo. Stills, tracked frames, failed attempts, and cinematic crops create an editorial rhythm that matches the project’s argument: machine vision is always partial. The design language is sparse and documentary, giving the footage and annotations room to expose what the machine can and cannot hold onto.',
    methodology: [
      { step: '01. Narrow the Scene', description: 'Constrained the project to a specific broadcast moment so the experiment could stay sharp: the final seconds of an ESPN segment where recognition should feel possible, but does not reliably resolve.' },
      { step: '02. Run Multiple Recognition Attempts', description: 'Tried different approaches — ball tracking, silhouette, jersey cues, persistent overlays, and manual intervention — to see what kinds of visual logic break down first.' },
      { step: '03. Capture Failure As Material', description: 'Saved stills, screenshots, and intermediate outputs so the misses themselves could become part of the narrative instead of being hidden as failed technical tests.' },
      { step: '04. Build The Editorial Argument', description: 'Turned the experiment into a computational media notebook with sections like The Attempt, The Footage & the Cut, Six Ways to Miss One Player, and Why It’s So Hard.' }
    ],
    outcomes: 'The result is a strong hybrid of technical inquiry and public storytelling. It demonstrates computer-vision experimentation, but more importantly it shows how I translate a technical problem into a cultural and design question that non-specialists can still understand.',
    analysis: 'This is one of the most important additions to the site because it shows range. It is not only a prototype or a design tool. It is an authored argument about machine seeing, sports media, and legibility. That matters for studios, labs, and creative technology teams because it proves I can investigate a system and also explain its stakes.',
    conclusion: 'The project reinforces a larger direction in my work: building and critiquing systems at the same time. Rather than treating AI as magic or doom, it asks what machine perception actually looks like when put under pressure. That is the kind of work I want more of — technically informed, culturally aware, and formally clear.',
    futureWork: [
      'Push the recognition experiments further with additional sports clips, annotations, and tracking methods.',
      'Connect the notebook to broader questions of broadcast framing, visibility, and who gets made legible by sports media systems.',
      'Explore companion versions for gallery, lecture, or classroom settings where the experiment can be experienced spatially.',
      'Develop follow-on studies around other forms of machine misrecognition in sports and cultural footage.'
    ],
    technologies: [
      'Computer vision experimentation',
      'Creative coding',
      'Editorial front-end design',
      'Video analysis workflows',
      'Computational media research'
    ],
    projectLinks: [
      { label: 'GitHub repo', href: 'https://github.com/candiikay/CVWNBA' }
    ],
    images: [
      { filename: 'hero-still.jpg', description: 'Hero still from the notebook — the broadcast moment that anchors the recognition experiment.' },
      { filename: 'caitlin-tracked.jpg', description: 'Tracked frame showing one attempt to lock onto Caitlin Clark within the broadcast image.' },
      { filename: 'court-context.jpg', description: 'Context frame emphasizing how much spatial and visual information the system has to sort through.' },
      { filename: 'exp-overlay.jpg', description: 'One experimental overlay used to test whether additional guidance would help the system hold on to the player.' },
      { filename: 'screenshot-3592.png', description: 'Notebook screenshot showing the editorial layout that turns the experiment into a readable public argument.' }
    ]
  },
  'systems-are-never-neutral': {
    name: 'Systems Are Never Neutral',
    subtitle: 'Feminist Systems Theory Through Book, Zine, and Structure',
    category: 'Culture, Data & Transformation',
    description: 'A self-directed feminist systems theory project built as a digital book, field-guide zine, and process deck on how structures become familiar enough to look neutral.',
    imageFolder: 'SDL',
    abstract: 'This project investigates how everyday systems encode values, construct legibility, and pass themselves off as neutral. Grounded in feminist systems thinking — Haraway, Star, Puig de la Bellacasa, Mattern — it produced two linked artifacts: a long-form digital book on lived experience as data, and a zine cataloging inherited structural forms. The core argument is simple: commonness is not neutrality.',
    objective: 'How do systems quietly shape people while presenting themselves as objective? What happens when you stop reading interfaces and institutions as “just how things are” and instead trace the structures, repetitions, and classifications underneath them?',
    hypothesis: 'When structural forms are named, pictured, and historically situated, they stop feeling inevitable. The familiar dropdown, file, classification card, or motion study can be recognized as authored. That recognition is a precondition for redesign.',
    visualSystem: 'The project uses a document-like, thesis-adjacent visual language because it needed to feel rigorous without losing authorship. The showcase site, book, and zine all treat design as argument. Typography, navigation, and the sequence of artifacts do not just present the research — they embody it, moving from lived experience and datafication toward lineage, form, and structural inheritance.',
    methodology: [
      { step: '01. The Question', description: 'The inquiry began with a systems question rather than a formal thesis: how do systems quietly shape behavior while presenting themselves as neutral?' },
      { step: '02. Feminist Research Base', description: 'Built the conceptual foundation through feminist systems thinking — especially Haraway, Star, Puig de la Bellacasa, and Mattern — to understand legibility, care, classification, and infrastructural power.' },
      { step: '03. Project One: The Book', description: 'Created They Did Not Make This For You, a long-form digital book examining datasets, classification, and the conditions under which people become legible to systems.' },
      { step: '04. The Shift', description: 'The work pivoted from lived experience toward lineage: from what systems do to people, to where the forms inside those systems came from, who repeated them, and when they became ordinary.' },
      { step: '05. Project Two: The Zine', description: 'Created Unknown Origin, a field-guide zine cataloging inherited structural forms and making visible the designs that become invisible through repetition.' }
    ],
    outcomes: 'The finished project became a mini-thesis in public form: one part research argument, one part design artifact, one part self-authored curriculum. It demonstrates writing, interface design, editorial structure, and the ability to translate theory into accessible public-facing forms.',
    analysis: 'This project matters because it makes the intellectual side of my practice legible without turning it into a plain reading list. It shows that I do not only build tools — I also investigate the structures beneath them. For the site, it belongs alongside culture, data, and transformation because it is about how structures become normal and how design can denaturalize them.',
    conclusion: 'Systems Are Never Neutral is a strong anchor project because it ties together theory, interface, and visual argument. It clarifies a major through-line in my work: naming structure, tracing authorship, and redesigning what has been allowed to disappear into common sense.',
    futureWork: [
      'Expand the catalog of inherited forms into a larger public-facing archive or teaching tool.',
      'Develop the book and zine into a stronger exhibition or publishing format beyond the class context.',
      'Connect the project more explicitly to current product systems, platform defaults, and AI classification tools.',
      'Keep using design artifacts as a way to make theory legible without flattening it into summary.'
    ],
    technologies: [
      'Editorial web design',
      'Practice-based research',
      'Digital publishing',
      'Interactive document structure',
      'Feminist systems theory',
      'Design-as-argument'
    ],
    projectLinks: [
      { label: 'Open the book', href: '/SDL/book/index.html' },
      { label: 'Open the zine', href: '/SDL/zine/index.html' },
      { label: 'Process deck PDF', href: '/SDL/journey.pdf' }
    ],
    images: [
      { filename: 'motion-study.jpg', description: 'One of the project’s key visual references — motion study as a historical structure for legibility and control.' },
      { filename: 'JoyBuolamwini.jpg', description: 'Image used in the book to discuss algorithmic bias, recognition, and the politics of classification.' },
      { filename: 'consumer-file.png', description: 'Consumer file image from the research set — one example of how people are turned into structured records.' },
      { filename: 'credit.png', description: 'Credit and scoring imagery used to examine how systems sort, rank, and pre-decide access.' },
      { filename: 'Phone.png', description: 'Phone-based interface imagery showing how structural forms move into everyday digital experience.' }
    ]
  },
  'creator-partnerships': {
    name: 'UGC for Tech Brands',
    subtitle: 'Where product fluency meets the feed',
    category: 'Creator Partnerships',
    description: 'Short-form creator content for tech, AI, and product-led brands built by someone who also designs and ships products.',
    imageFolder: 'UGC',
    abstract: 'Most creator content makes tech look cool. I make it make sense — because I also design and ship the products I talk about. Hooks with teeth, demos that are real, and nothing that sounds like it came from a brand deck.',
    objective: 'How can creator partnerships for tech brands feel clearer, more native, and more conversion-aware when the creator also understands the product? The goal is to make technical products easier to understand in-feed without flattening them into generic lifestyle content.',
    hypothesis: 'When creator content is shaped by product thinking, it usually performs better. Hooks get sharper because they connect to real user pain, demos get cleaner because the product logic is understood, and trust improves because the value is translated more clearly.',
    visualSystem: 'CREATOR PARTNERSHIPS — DESIGN RATIONALE: This page stays inside the same portfolio system because I treat creator work as part of my broader product practice. The visual language remains document-like and restrained, but the proof shifts toward public-facing performance: creator imagery, post thumbnails, and clear account signals. The goal is not to make UGC feel separate from design. It is to show that creator work can be another way of explaining products clearly.',
    methodology: [
      { step: '01. Product Reading', description: 'Before scripting, I map the product the same way I would in a design or strategy review: what it does, who it is for, what friction it removes, and what a user would actually care about in the first three seconds.' },
      { step: '02. Hook + Angle Development', description: 'I build multiple opening angles around the same product or offer. That can mean pain-first hooks, speed/result hooks, contrarian hooks, founder-style framing, or simpler product-demo opens depending on what the brand needs to test.' },
      { step: '03. Native-Fit Production', description: 'The content is then shaped to feel legible on platform: talking-head delivery, on-screen text, demo flow, or creator voiceover. The goal is not polished ad language. The goal is content that feels watchable, understandable, and native to the feed.' },
      { step: '04. Performance + Iteration', description: 'Because the work is short-form, iteration matters. I treat posts as signals: which hooks increased curiosity, which explanations were too slow, and which demos made the product feel instantly useful. That feedback loop informs the next script batch.' }
    ],
    outcomes: 'Current public proof is led by a 330.6K-view advice hook with 3,212 shares, plus a 273.3K-view POV post, a 91.2K-view creator-economy post, and utility-first consumer content. Together they show range across high-reach hooks, share-driven POV, educational angles, and practical service-style framing.',
    analysis: 'The moat here is not simply that I can make content. It is that I can read a product, simplify the story, and turn it into short-form communication without losing what makes it useful. For tech brands, that matters. Many products fail in short-form because the creator does not actually understand the interface, the use case, or the user.',
    conclusion: 'Creator partnerships fit naturally inside my portfolio because they are part of the same larger practice: building products, explaining systems, and shaping how people encounter technology. For the right brand, UGC is not separate from product design. It is another layer of product communication.',
    futureWork: [
      'Build more direct case studies for AI, SaaS, and consumer-tech products where hook variants, script choices, and outcomes can be compared side by side.',
      'Expand creator partnerships into a tighter offer for product-led brands: concepting, scripting, hook testing, and native demos.',
      'Integrate short-form content thinking earlier into product launch planning so messaging and creator execution are shaped together rather than separately.',
      'Develop a clearer proof stack on-site that connects public-performing posts, brand angles, and product categories in one place.'
    ],
    technologies: [
      'Short-form scripting',
      'Product storytelling',
      'Hook testing',
      'Creator-led demos',
      'TikTok and Instagram content strategy',
      'AI-assisted content workflows',
      'Product positioning',
      'Audience-aware messaging'
    ],
    images: [
      { filename: 'profile.png', description: 'Creator portrait — the person behind the work and the product-facing content practice.' },
      { filename: 'candiikay-reach.jpg', description: 'Featured @candiikay post — 330.6K views and 3,212 shares. High-reach advice hook with a direct, legible opening.' },
      { filename: 'candiikay-featured.jpg', description: '@candiikay POV post — 273.3K views and 816 shares. Share-driven debate content built on personal experience.' },
      { filename: 'candii-creates-top.jpg', description: 'Top public post from @candii.creates — 91.2K views. Creator-economy and income-angle framing with platform-native delivery.' },
      { filename: 'candiisaves-top.jpg', description: 'Top public post from @candiisaves — 6.9K views. Consumer-facing informational content with direct utility framing.' }
    ],
    quickStats: [
      { label: 'Top reach', value: '330.6K' },
      { label: 'Highest shares', value: '3,212' },
      { label: 'Best fit', value: 'AI / apps / SaaS' }
    ],
    brandPlaybook: [
      {
        title: 'High-reach advice hooks',
        description: 'Direct, legible openings that stop the scroll before anyone knows the brand name. Built to travel — high shares mean people send it, not just watch it.',
        bestFor: 'Top-of-funnel awareness, founder-led brands, launches that need a human voice fast.'
      },
      {
        title: 'Share-driven POV',
        description: 'Personal stories framed as debate. People send these to someone specific — a friend, a coworker, a group chat. High shares mean the message travels without paid distribution.',
        bestFor: 'Thought leadership, employer brand, any product tied to career, money, or lifestyle tension.'
      },
      {
        title: 'Product-native demos',
        description: 'Short-form explainers where the creator actually understands the interface, workflow, and user. Fewer generic lines, cleaner proof.',
        bestFor: 'AI tools, apps, SaaS — anything that needs to be understood in-feed, not just admired.'
      }
    ],
    accountProof: [
      {
        label: '@candiikay',
        angle: 'High-reach advice hook',
        views: '330.6K',
        likes: '37.3K',
        shares: '3,212',
        title: 'Someone\'s going to take the job — here\'s my advice',
        url: 'https://www.tiktok.com/@candiikay/video/7543040049680600333',
        image: '/UGC/candiikay-reach.jpg',
        insight: '330.6K views and 3,212 shares. The hook is immediate, personal, and legible — people didn\'t just watch it, they sent it.',
        brandUse: 'Use this for top-of-funnel awareness — a recognizable human voice delivering a clear POV before anyone knows your product name. This is the format I lead with for brands.',
        note: 'Best-performing post on the account. Proof that the opening line alone can carry both reach and distribution.'
      },
      {
        label: '@candiikay',
        angle: 'Share-driven POV',
        views: '273.3K',
        likes: '9.5K',
        shares: '816',
        title: 'I took the $55K NYC job — here\'s what it actually taught me',
        url: 'https://www.tiktok.com/@candiikay/video/7543030087147343117',
        image: '/UGC/candiikay-featured.jpg',
        insight: 'A personal experience turned into a debate people want to pass along. 816 shares means the message traveled — not because of a trend, but because it named a tension everyone recognizes.',
        brandUse: 'Use this when you need organic distribution, not just impressions. I take a niche story and translate it into a universal hook — so the content spreads without the audience needing insider context.',
        note: 'Second-highest reach on the account. Strong share velocity on a contrarian POV.'
      },
      {
        label: '@candii.creates',
        angle: 'AI and creator-economy content',
        views: '91.2K',
        likes: '3.9K',
        shares: '681',
        title: 'You can quit your 9-5',
        url: 'https://www.tiktok.com/@candii.creates/video/7646481213829516557',
        image: '/UGC/candii-creates-top.jpg',
        insight: 'Income-angle framing tied to platform-native delivery — the kind of hook AI and creator tools need when the audience is skeptical.',
        brandUse: 'Use this when the product promise is ambitious and the audience needs to believe it\'s possible before they\'ll click.',
        note: 'Income-angle framing tied to platform-native delivery.'
      },
      {
        label: '@candiisaves',
        angle: 'Utility-first consumer information',
        views: '6.9K',
        likes: '324',
        shares: '57',
        title: 'Instacart is getting sued',
        url: 'https://www.tiktok.com/@candiisaves/video/7634953594227264781',
        image: '/UGC/candiisaves-top.jpg',
        insight: 'Useful, specific, immediately relevant — the format consumer apps and fintech brands need when explaining why something matters right now.',
        brandUse: 'Use this for product education that feels like news, not an ad. Clear utility framing that earns trust fast.',
        note: 'Useful, specific consumer framing with clear relevance.'
      }
    ],
    offerItems: [
      {
        title: 'Creator-led demos',
        description: 'Short-form videos that explain the product fast without sounding scripted.'
      },
      {
        title: 'Hook testing',
        description: 'Multiple opening angles built around pain points, outcomes, or curiosity.'
      },
      {
        title: 'Scriptwriting',
        description: 'Messaging shaped by product understanding, not just trend-chasing.'
      },
      {
        title: 'Native-feeling UGC',
        description: 'Content that feels legible in-feed while still making the product clear.'
      }
    ]
  },
  'cyborg-manifesto': {
    name: 'Cyborg Manifesto',
    subtitle: 'A Reading Process & Guide',
    category: 'Design Theory',
    description: 'My process of understanding Donna Haraway\'s "A Cyborg Manifesto" through reading, reflection, and exploration',
    imageFolder: null,
    format: 'reading-based',
    
    // Reading Thoughts
    // Edition: Manifestly Haraway (U. Minnesota Press, 2016) — Warwick PDF
    readingSessions: [
      {
        id: 'reading-1',
        title: 'First Reading',
        date: 'Reading thoughts',
        summary: 'My initial reading of the opening sections of "A Cyborg Manifesto." This covers Haraway\'s introduction of the cyborg as ironic political myth, the leaky distinctions between human/machine, and the examples of cyborgs in science fiction, medicine, production, and war.',
        passages: [
          {
            id: 'intro',
            title: 'Introduction: Ironic Political Myth',
            originalText: 'This essay is an effort to build an ironic political myth faithful to feminism, socialism, and materialism. Perhaps more faithful as blasphemy is faithful, than as reverent worship and identification. Blasphemy has always seemed to require taking things very seriously. I know no better stance to adopt from within the secular-religious, evangelical traditions of United States politics, including the politics of socialist-feminism. Blasphemy protects one from the moral majority within, while still insisting on the need for community. Blasphemy is not apostasy. Irony is about contradictions that do not resolve into larger wholes, even dialectically, about the tension of holding incompatible things together because both or all are necessary and true. Irony is about humor and serious play. It is also a rhetorical strategy and a political method, one I would like to see more honored within socialist-feminism. At the center of my ironic faith, my blasphemy, is the image of the cyborg.',
            myUnderstanding: 'Haraway breaks conventional academic form. She uses irony, myth, and blasphemy as political tools—not stylistic choices, but methodological commitments. Being faithful to feminism and socialism through disobedience: irony holds incompatible truths together because both are necessary. The cyborg is her blasphemous icon.',
            keyConcepts: ['irony', 'blasphemy', 'political myth', 'cyborg', 'contradiction'],
            references: ['Marxism', 'Feminism', 'Socialism', 'United States politics'],
            myQuestions: [
              'What does "faithful as blasphemy is faithful" mean?',
              'How is irony a political method?',
              'What is the difference between blasphemy and apostasy?'
            ],
            connections: [
              'Links to feminist syntax—breaking traditional academic form',
              'Reacts against second-wave feminism\'s unified "woman"',
              'Sets up the cyborg as a framework for reading the world'
            ]
          },
          {
            id: 'cyborg-definition',
            title: 'The Cyborg Defined: Fiction and Reality',
            originalText: 'A cyborg is a cybernetic organism, a hybrid of machine and organism, a creature of social reality as well as a creature of fiction. Social reality is lived social relations, our most important political construction, a world-changing fiction. The international women\'s movements have constructed "women\'s experience," as well as uncovered or discovered this crucial collective object. This experience is a fiction and fact of the most crucial, political kind. Liberation rests on the construction of the consciousness, the imaginative apprehension, of oppression, and so of possibility. The cyborg is a matter of fiction and lived experience that changes what counts as women\'s experience in the late twentieth century. This is a struggle over life and death, but the boundary between science fiction and social reality is an optical illusion.',
            myUnderstanding: 'The cyborg is a hybrid of machine and organism, simultaneously a creature of social reality and fiction. "Women\'s experience" isn\'t just reported—it\'s constructed collectively. It exists as both fiction and fact. The boundary between science fiction and social reality is an optical illusion: every technology began as sci-fi, every identity is partly imagined. The cyborg operates in this space where categories collapse.',
            keyConcepts: ['cyborg', 'social reality', 'fiction as fact', 'consciousness', 'science fiction', 'boundary collapse'],
            references: ['International women\'s movements', 'Feminist theory', 'Science fiction'],
            myQuestions: [
              'How is "women\'s experience" both fiction and fact?',
              'What does "consciousness construction" mean?',
              'How is the boundary between sci-fi and reality an "optical illusion"?'
            ],
            connections: [
              'Relates to loss of innocence—everything is constructed/mediated',
              'Connects to feminist syntax through "fiction mapping reality"',
              'Links to technological agency—machines are part of social reality'
            ]
          },
          {
            id: 'leaky-distinctions',
            title: 'The Second Leaky Distinction: Animal-Human-Machine',
            note: 'Includes "cycle of marriage exchange" (Lévi-Strauss allusion, not named). Descartes and Gilbert Ryle are not explicitly named but their ideas are referenced through "ghost in the machine."',
            originalText: 'The second leaky distinction is between animal–human (organism) and machine. Pre-cybernetic machines could be haunted; there was always the specter of the ghost in the machine. This dualism structured the dialogue between materialism and idealism that was settled by a dialectical progeny, called spirit or history, according to taste. But basically machines were not self-moving, self-designing, autonomous. They could not achieve man\'s dream, only mock it. They were not man, an author to himself, but only a caricature of that masculinist reproductive dream. To think they were otherwise was paranoid. Now we are not so sure. Late twentieth-century machines have made thoroughly ambiguous the difference between natural and artificial, mind and body, self-developing and externally designed, and many other distinctions that used to apply to organisms and machines. Our machines are disturbingly lively, and we ourselves frighteningly inert.',
            myUnderstanding: 'The "leaky distinction" between human and machine: pre-cybernetic machines were tools—dead things. Late twentieth-century machines think, evolve, design other machines. Meanwhile we become dependent, programmable. "Our machines are disturbingly lively, and we ourselves frighteningly inert" reverses the hierarchy: machines have agency, we follow scripts. Technology has its own agency; we live in the in-between, not utopia or doom.',
            keyConcepts: ['boundary collapse', 'ghost in the machine', 'technological agency', 'lively machines', 'inert humans', 'cybernetic revolution'],
            references: ['Descartes', 'Gilbert Ryle', 'Cybernetics', 'Cold War technology', 'Marxism (materialism vs idealism)'],
            myQuestions: [
              'What does "technological determination" mean?',
              'How do machines have agency?',
              'What are examples of "lively machines" vs "inert humans"?',
              'What is "textualization"?'
            ],
            connections: [
              'Relates to loss of innocence—we\'ve lost pure nature',
              'Connects to feminist syntax through hybridity',
              'Links to cyborg sex—bodies are already merged with machines'
            ]
          },
          {
            id: 'loss-of-innocence',
            title: 'The Loss of Innocence: Nature Undermined & Textualization',
            originalText: 'In short, the certainty of what counts as nature—a source of insight and promise of innocence—is undermined, probably fatally. The transcendent authorization of interpretation is lost, and with it the ontology grounding "Western" epistemology. But the alternative is not cynicism or faithlessness, that is, some version of abstract existence, like the accounts of technological determinism destroying "man" by the "machine" or "meaningful political action" by the "text." Who cyborgs will be is a radical question; the answers are a matter of survival. Textualization of everything in poststructuralist, postmodernist theory has been damned by Marxists and socialist-feminists for its utopian disregard for the lived relations of domination that ground the "play" of arbitrary reading.',
            myUnderstanding: 'The "loss of innocence": no pure nature anymore—everything is mediated by technology and systems. The transcendent authorization of interpretation is lost. This isn\'t despair, it\'s opportunity. The textualization debate: Marxists accuse postmodernists of being too abstract, turning politics into wordplay. Haraway defends her method—seeing the world as text is still political, not escapist.',
            keyConcepts: ['loss of innocence', 'nature', 'ontology', 'epistemology', 'transcendent authorization', 'cyborg futures', 'textualization', 'postmodernism'],
            references: ['Western epistemology', 'Postmodernism', 'Technological determinism', 'Marxism', 'Poststructuralism'],
            myQuestions: [
              'What does "transcendent authorization" mean?',
              'How is the loss of innocence both scary and freeing?',
              'What does "who cyborgs will be is a radical question" mean?'
            ],
            connections: [
              'Core concept—everything is mediated',
              'Relates to technological agency',
              'Links to living in-between (not utopia, not doom)'
            ]
          },
          {
            id: 'cyborg-sex',
            title: 'Cyborg Sex and Replication',
            originalText: 'Contemporary science fiction is full of cyborgs—creatures simultaneously animal and machine, who populate worlds ambiguously natural and crafted. Modern medicine is also full of cyborgs, of couplings between organism and machine, each conceived as coded devices, in an intimacy and with a power that were not generated in the history of sexuality. Cyborg "sex" restores some of the lovely replicative baroque of ferns and invertebrates (such nice organic prophylactics against heterosexism). Cyborg replication is uncoupled from organic reproduction. Modern production seems like a dream of cyborg colonization work, a dream that makes the nightmare of Taylorism seem idyllic. And modern war is a cyborg orgy, coded by C3I, command-control-communication-intelligence, an $84 billion item in 1984\'s U.S. defense budget.',
            myUnderstanding: 'Cyborgs are everywhere—not just in sci-fi, but real life. Medicine (pacemakers, IVF, hormones), production (screens, metrics), war (digital warfare). "Cyborg sex" restores the replicative baroque of ferns and invertebrates—intimacy that isn\'t bound to biology. Reproduction doesn\'t require organic coupling; it\'s a prophylactic against heterosexism. Modern production is an updated Taylorism—we\'re still being measured, but through data, not stopwatches.',
            keyConcepts: ['cyborg sex', 'replication', 'baroque', 'heterosexism', 'organic reproduction', 'Taylorism', 'C3I', 'cyborg orgy'],
            references: ['Science fiction', 'Modern medicine', 'Reproductive technology', 'IVF', 'Birth control', 'Taylorism', 'Military-industrial complex', 'C3I'],
            myQuestions: [
              'What does "baroque" mean here?',
              'How does cyborg sex relate to feminism?',
              'What is C3I?',
              'How is modern production like Taylorism?'
            ],
            connections: [
              'Relates to loss of innocence—reproduction is mediated',
              'Connects to technological agency—machines in war',
              'Links to Marxism—production as exploitation'
            ]
          },
          {
            id: 'foucault-cyborg',
            title: 'Foucault\'s Biopolitics vs Cyborg Politics',
            originalText: 'I am making an argument for the cyborg as a fiction mapping our social and bodily reality and as an imaginative resource suggesting some very fruitful couplings. Michel Foucault\'s biopolitics is a flaccid premonition of cyborg politics, a very open field.',
            myUnderstanding: 'Foucault\'s biopolitics is "flaccid"—too organic, doesn\'t include machines as agents. Cyborg politics adds circuits and codes. The cyborg is a tool for mapping reality, navigating between machines, medicine, war, sex, identity, politics. Everything is cyborg: the framework applies to all systems where boundaries leak.',
            keyConcepts: ['cyborg politics', 'biopolitics', 'fiction mapping reality', 'fruitful couplings'],
            references: ['Michel Foucault', 'Biopolitics', 'Poststructuralism'],
            myQuestions: [
              'Why is Foucault\'s biopolitics "flaccid"?',
              'What does "fiction mapping reality" mean?',
              'What are "fruitful couplings"?'
            ],
            connections: [
              'Links to loss of innocence—power works through information',
              'Connects to technological agency—machines are agents',
              'Relates to feminist syntax—using fiction as methodology'
            ]
          },
          {
            id: 'chimeras',
            title: '"By the late twentieth century... we are all chimeras"',
            originalText: 'By the late twentieth century, our time, a mythic time, we are all chimeras, theorized and fabricated hybrids of machine and organism; in short, we are cyborgs. The cyborg is our ontology; it gives us our politics.',
            myUnderstanding: 'We\'re already cyborgs—not in the future, but now. We are chimeras, hybrids. The cyborg is our ontology; it gives us our politics. We can\'t pretend to be pure or natural anymore. We must live in-between—not techno-utopia or doom narrative, but staying with the trouble.',
            keyConcepts: ['cyborg', 'chimeras', 'ontology', 'politics'],
            references: ['Cyborg', 'Ontology'],
            myQuestions: [
              'What does "mythic time" mean?',
              'How is the cyborg our ontology?',
              'How does this "give us our politics"?'
            ],
            connections: [
              'Core statement—we are already cyborgs',
              'Links to loss of innocence',
              'Relates to living in-between'
            ]
          },
          {
            id: 'microelectronics',
            title: 'Microelectronics / "Best machines are made of sunshine"',
            originalText: 'The new machines are so clean and light. They are nothing but signals, electromagnetic waves, a section of a spectrum, and these machines are eminently portable, mobile—a matter of immense human pain in Detroit and Singapore. People are nowhere near so fluid, being both material and opaque. Cyborgs are ether, quintessence. The ubiquity and invisibility of cyborgs is precisely why these sunshine-belt machines are so deadly. They are as hard to see politically as materially. They are about consciousness—or its simulation.',
            myUnderstanding: 'Microelectronics: machines that are "clean and light," just signals and waves. "The best machines are made of sunshine" but that hides pain—factory workers in Detroit and Singapore. The machines are invisible and ubiquitous, which makes them dangerous. They\'re about consciousness or its simulation. These machines are hard to see politically because they\'re so light and invisible.',
            keyConcepts: ['microelectronics', 'sunshine machines', 'invisibility', 'consciousness', 'simulation'],
            references: ['Microelectronics', 'Globalization', 'Labor'],
            myQuestions: [
              'What does "best machines are made of sunshine" mean?',
              'Why are sunshine-belt machines "deadly"?',
              'What does "consciousness or its simulation" mean?'
            ],
            connections: [
              'Relates to technological agency',
              'Links to loss of innocence',
              'Connects to globalization and labor'
            ]
          },
          {
            id: 'c3i-second',
            title: 'C3I Referenced Again',
            originalText: 'Pure number, pure spirit, C3I, command-control-communication-intelligence, the star wars apocalypse of the "West\'s" escalating dominations of abstract individuation, an ultimate self untied at last from all dependency, a man in space.',
            myUnderstanding: 'C3I again—"pure number, pure spirit." Connected to the "star wars apocalypse" and the fantasy of an "ultimate self untied at last from all dependency, a man in space." This is the militaristic dream that cyborg politics critiques: the fantasy of pure individuation, abstracted from all dependencies.',
            keyConcepts: ['C3I', 'pure number', 'abstract individuation', 'star wars', 'apocalypse'],
            references: ['C3I', 'Military-industrial complex', 'Cold War'],
            myQuestions: [
              'What does "pure number, pure spirit" mean?',
              'How does C3I relate to "abstract individuation"?',
              'What is the "man in space" fantasy?'
            ],
            connections: [
              'Relates to cyborg sex/war section',
              'Links to technological agency',
              'Connects to militarism and masculinity'
            ]
          }
        ],
        myNotes: [
          {
            date: 'Reading thought 1',
            note: 'Haraway\'s writing breaks conventional academic form. She uses irony, myth, and blasphemy as political tools—not as stylistic choices, but as methodological commitments. The references require context I\'m building, but the structure itself is the teaching: theory operates as its own language game.',
            realization: 'The initial confusion is the entry point of theory—not failure, but the mind beginning to re-code itself. The disorientation is part of the lesson. Haraway deliberately breaks the normal way theory is supposed to sound, making the form perform the politics.'
          },
          {
            date: 'Reading thought 2',
            note: 'Haraway operates at the intersection of three fields: feminism (how power and identity are structured), post-structuralism (how old social orders fell apart), and cybernetics (how systems and feedback create new orders). She\'s not choosing between these frameworks—she\'s building something that requires all three.',
            realization: 'These three fields are exactly what Haraway is working inside. She\'s bridging them: Feminism (how power/identity are structured) + Post-reconstruction (how old social orders fell apart) + Cybernetics (how systems and feedback create new orders). The in-between is the cyborg\'s native habitat.'
          },
          {
            date: 'Reading thought 3',
            note: 'Feminist syntax isn\'t just writing by women—it\'s a political act of redesigning language itself. The form performs the politics: non-linear, polyvocal, embodied, ironic, hybrid. Theory isn\'t like normal essays; it\'s its own language game where the form is part of the teaching.',
            realization: 'The conventions of this kind of writing aren\'t taught in standard academic contexts. Theory operates as its own language game where form and content are inseparable. The disorientation is the correct reaction—it signals the system working as designed.'
          }
        ]
      }
    ],
    
    // Comprehensive References
    references: {
      'Marxism': {
        definition: 'A way of analyzing power through labor and production—factories, wages, ownership, inequality. Haraway pulls from this but says the new factory is digital, informational, algorithmic. We don\'t just work with our hands anymore; our data, our bodies, our attention are the new labor.',
        timePeriod: '19th-20th century',
        context: 'Haraway uses Marxist analysis but refuses its purity. She keeps the politics (power through labor) but rejects essentialism—there\'s no unified "worker" to liberate, just like there\'s no unified "woman." She references "materialism" in the introduction and discusses production as "cyborg colonization work." The textualization debate (Marxists vs. postmodernists) appears in the text.',
        relatedConcepts: ['Taylorism', 'Capitalism', 'Labor', 'Production', 'Class struggle'],
        examples: [
          'Haraway references Marxism when discussing "materialism" in the introduction',
          'When discussing production as "cyborg colonization work"',
          'In the textualization debate: "damned by Marxists and socialist-feminists"'
        ],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Taylorism': {

        definition: 'Early 1900s "scientific management" by Frederick Taylor—timing workers, measuring motions, making every action efficient. Turning people into machine parts. The stopwatch becomes the tool of control.',
        timePeriod: 'Early 1900s',
        context: 'Haraway says modern work (screens, metrics, surveillance, apps) has become an updated Taylorism—we\'re still being measured, just through data, not stopwatches. The factory is now digital. She writes: "Modern production seems like a dream of cyborg colonization work, a dream that makes the nightmare of Taylorism seem idyllic." (Essay p. 6, PDF p. 3)',
        relatedConcepts: ['Labor', 'Capitalism', 'Surveillance', 'Scientific management', 'Efficiency', 'Marxism'],
        examples: ['Haraway references Taylorism : "Modern production seems like a dream of cyborg colonization work, a dream that makes the nightmare of Taylorism seem idyllic."'],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Cybernetics': {

        definition: 'The study of systems, feedback loops, and control—a language for describing everything (bodies, machines, economies, DNA) as networks. It\'s about how information flows through systems and how systems adapt.',
        timePeriod: 'Mid-20th century (1940s-1950s)',
        context: 'Haraway merges feminism, poststructuralism, and cybernetics. The world is a system of codes, and we are both authors and products of those codes. Cybernetics provides the language for describing hybridity. She references "pre-cybernetic machines" versus "late twentieth-century machines" .',
        relatedConcepts: ['Systems', 'Feedback', 'Control', 'Information', 'Networks', 'Adaptation'],
        examples: ['Haraway discusses how cybernetic machines (computers, AI) differ from pre-cybernetic machines : "Pre-cybernetic machines could be haunted; there was always the specter of the ghost in the machine... Now we are not so sure. Late twentieth-century machines have made thoroughly ambiguous the difference between natural and artificial..."'],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Feminist Syntax': {

        definition: 'A way of structuring thought, rhythm, and argument that resists traditional, patriarchal, "objective" voice. Features include: non-linear movement (collage/feedback loop), polyvocal (multiple voices), embodied language (sensual, emotional), reflexive irony (aware of contradictions), hybrid genres (manifesto + poem + myth), disobedient rhythm (long, tangled sentences).',
        timePeriod: '1970s-1980s (Cixous, Irigaray, Kristeva, Haraway)',
        context: 'Haraway doesn\'t use this exact phrase, but her writing performs feminist syntax. She breaks the old grammar of thought—linear, rational prose coded as "male" (controlled, external, confident). Feminist syntax reclaims emotion, contradiction, intuition as valid ways of knowing. Her introduction  demonstrates this with its mix of irony, myth, and political analysis.',
        relatedConcepts: ['écriture féminine', 'Feminist theory', 'Language', 'Writing as politics', 'Non-linear thinking'],
        examples: [
          'Haraway\'s writing style throughout—mixing registers, holding contradictions, using myth and irony (Essay pp. 5-6, PDF pp. 2-3)',
          'The textualization section demonstrates feminist syntax through hybrid language (Essay pp. 11-12, PDF pp. 8-9)'
        ],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016-12. (Warwick PDF pp. 2-3, 8-9).'
      },
      'Postmodernism': {

        definition: 'A movement that questions grand narratives, universal truths, and fixed categories. It emphasizes that meaning is constructed, contextual, and always partial. "The textualization of everything" means seeing the world as text that can be read and rewritten.',
        timePeriod: '1970s-1980s',
        context: 'Haraway is a postmodern feminist. She agrees that meaning is constructed, but warns against turning politics into wordplay. Marxists accused postmodernists of being too abstract—Haraway defends her method (myth, metaphor, cyborg) as political, not escapist. She discusses "textualization" .',
        relatedConcepts: ['Poststructuralism', 'Deconstruction', 'Textualization', 'Constructivism', 'Relativism'],
        examples: [
          'Haraway discusses "textualization of everything in poststructuralist, postmodernist theory" ',
          'She defends postmodernist strategies against Marxist critiques: "It is certainly true that postmodernist strategies, like my cyborg myth, subvert myriad organic wholes..."'
        ],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Second-Wave Feminism': {

        definition: '1960s-1980s feminism that fought for legal equality, reproductive rights, and workplace equality. It often emphasized a unified "woman" identity and "sisterhood."',
        timePeriod: '1960s-1980s',
        context: 'Haraway critiques second-wave feminism\'s idea of a unified "woman." She says there is no single "woman" to liberate—identity itself is a system of codes. The cyborg is her alternative to essentialist feminism. She references "socialist-feminism" in the introduction  and discusses how "international women\'s movements have constructed \'women\'s experience\'" .',
        relatedConcepts: ['Essentialism', 'Identity politics', 'Sisterhood', 'Unified woman', 'Haraway\'s critique'],
        examples: [
          'Haraway references "socialist-feminism" in the introduction (Essay pp. 5-6, PDF pp. 2-3)',
          'She critiques unified identity: "The international women\'s movements have constructed \'women\'s experience,\' as well as uncovered or discovered this crucial collective object" (Essay p. 5, PDF p. 2)'
        ],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Descartes': {

        definition: '17th-century philosopher who proposed mind-body dualism—the idea that mind and body are separate substances. The "ghost in the machine" idea comes from this.',
        timePeriod: '17th century (1596-1650)',
        context: 'Haraway references Descartes\'s dualism to show how the old boundary (mind/body, human/machine) has collapsed. The "ghost in the machine" was the idea that humans have a soul animating their mechanical bodies—but machines didn\'t have that. She discusses this  when talking about "pre-cybernetic machines." Note: Descartes is not explicitly named in the text, but the concept is referenced.',
        relatedConcepts: ['Dualism', 'Mind-body problem', 'Ghost in the machine', 'Philosophy of mind'],
        examples: ['Haraway references "ghost in the machine" : "Pre-cybernetic machines could be haunted; there was always the specter of the ghost in the machine" (reference context—Descartes not named explicitly)'],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Gilbert Ryle': {

        definition: '20th-century philosopher who mocked Descartes\'s "ghost in the machine" idea, calling it a category mistake.',
        timePeriod: '20th century (1900-1976)',
        context: 'Ryle critiqued the idea that there\'s a "ghost" (soul) separate from the body. Haraway references this to show how the old philosophical categories no longer hold. She implicitly references Ryle\'s critique when discussing "ghost in the machine" . Note: Ryle is not explicitly named in the text, but his critique is implicit in the passage.',
        relatedConcepts: ['Category mistake', 'Ghost in the machine', 'Philosophy of mind', 'Descartes'],
        examples: ['Haraway implicitly references Ryle\'s critique when discussing "ghost in the machine"  (reference context—Ryle not named explicitly)'],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Michel Foucault': {

        definition: 'French philosopher who analyzed power, knowledge, and discourse. His concept of "biopolitics" describes how power manages life—birth, health, sexuality, death.',
        timePeriod: '20th century (1926-1984)',
        context: 'Haraway says Foucault\'s biopolitics is "flaccid" because it\'s too organic—it doesn\'t imagine machines as agents within the system. Cyborg politics extends biopolitics to include circuits, codes, and global scale. She explicitly mentions Foucault .',
        relatedConcepts: ['Biopolitics', 'Power', 'Discourse', 'Knowledge', 'Poststructuralism'],
        examples: ['Haraway directly references Foucault\'s biopolitics : "Michel Foucault\'s biopolitics is a flaccid premonition of cyborg politics, a very open field."'],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'C3I': {

        definition: 'Command, Control, Communication, Intelligence—the Pentagon\'s acronym for integrated digital warfare. It represents the merging of battlefield and computer interface.',
        timePeriod: '1980s (Cold War)',
        context: 'Haraway uses C3I as an example of cyborg war—$84 billion in 1984\'s U.S. defense budget. War becomes information management, not heroism. The battlefield and computer interface merge. She writes: "modern war is a cyborg orgy, coded by C3I" , and references it again  as "pure number, pure spirit, C3I."',
        relatedConcepts: ['Military-industrial complex', 'Digital warfare', 'Cold War', 'Information technology', 'Cyborg war'],
        examples: [
          'Haraway explicitly mentions C3I : "modern war is a cyborg orgy, coded by C3I, command-control-communication-intelligence, an $84 billion item in 1984\'s U.S. defense budget"',
          'C3I referenced again : "Pure number, pure spirit, C3I, command-control-communication-intelligence, the star wars apocalypse..."'
        ],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      },
      'Lévi-Strauss': {

        definition: '20th-century anthropologist who analyzed kinship and social structure through systems of exchange, including "marriage exchange" where women are exchanged between men to form alliances.',
        timePeriod: '20th century (1908-2009)',
        context: 'Haraway references "cycle of marriage exchange"  as part of discussing "leaky distinctions." This is an implicit allusion to Lévi-Strauss\'s structuralist anthropology, though he is not explicitly named. She uses this to show how even kinship—something once considered "natural"—is a system of coded exchange.',
        relatedConcepts: ['Structuralism', 'Kinship', 'Exchange', 'Anthropology'],
        examples: ['Haraway references "cycle of marriage exchange"  (Lévi-Strauss allusion, not named explicitly)'],
        citation: 'Haraway, Donna J. "A Cyborg Manifesto." In Manifestly Haraway. Minneapolis: University of Minnesota Press, 2016.'
      }
    },
    
    // Key Concepts
    keyConcepts: {
      'Cyborg': {

        definition: 'A metaphor for modern identity—we are already hybrids of nature and machine, biology and tech, feminism and science fiction. Not just a robot, but a framework for reading the world. Every interface between biology, code, and meaning is a cyborg zone.',
        examples: [
          'Your phone extends your memory, your voice, your presence',
          'A Zoom classroom merges mind, screen, and network',
          'Medicine merges cells and software (IVF, hormones, prosthetics)',
          'Even emotions move through interfaces—typing, scrolling, sending hearts'
        ],
        implications: 'There\'s no pure "nature" anymore—everything human is hybrid. This is both scary (we\'ve lost innocence) and freeing (we can redesign meanings). The cyborg isn\'t a fixed identity; it\'s an invitation to imagine new hybrids, new feminist futures.',
        firstMention: '"At the center of my ironic faith, my blasphemy, is the image of the cyborg."'
      },
      'Loss of Innocence': {

        definition: 'The certainty of what counts as nature is "fatally undermined." There is no pure outside anymore—everything (gender, biology, even life itself) is mediated by technology and politics. But this isn\'t despair—it\'s opportunity. We can\'t return to the Garden, but we can compose new, hybrid forms of care and meaning.',
        examples: [
          'IVF and genetic editing mean birth itself is coded, designed, optimized',
          'Instagram filters alter what "beauty" or "self" means—it\'s algorithmic selfhood',
          'Climate systems are geo-engineered; "nature" is no longer untouched',
          'Memory lives in iCloud backups; "death" and "presence" blur'
        ],
        implications: 'We\'ve lost innocence, but maybe we\'ve gained agency. The cyborg isn\'t about despair ("the machine destroyed us") or utopia ("the machine will save us")—it\'s about living in between, "staying with the trouble."',
        firstMention: '"the certainty of what counts as nature—a source of insight and promise of innocence—is undermined, probably fatally."'
      },
      'Technological Agency': {

        definition: 'Machines don\'t just serve us—they shape us. Technology has its own agency, acting back on us. This is Haraway\'s radical move: machines aren\'t neutral tools; they co-produce behavior, attention, and meaning. We live in mutual loops of influence—cyborg relations where boundaries leak.',
        examples: [
          'Your phone: It anticipates your wants, completes your sentences, tracks your steps—it rewires how you think and move',
          'Algorithms: TikTok\'s feed learns your emotions and trains your attention. That\'s not just passive; it\'s active feedback',
          'AI companions: They can comfort, seduce, teach, or manipulate. They have no consciousness, yet they act—they co-produce behavior',
          'Prosthetics / implants / hormones: Bodies become modular, rewritten through biotech. Who decides what\'s "natural"?'
        ],
        implications: 'These are all cyborg relations—mutual loops of influence. The hierarchy flips: "Our machines are disturbingly lively, and we ourselves frighteningly inert." We need to design ethics, politics, and care within these mixed systems.',
        firstMention: '"Our machines are disturbingly lively, and we ourselves frighteningly inert."'
      },
      'Living In-Between': {

        definition: 'Haraway rejects both extremes: techno-utopia ("machines will save us") and doom narrative ("machines destroyed humanity"). Instead, she calls for "staying with the trouble"—living inside the entanglement, learning to build ethics, politics, and care within mixed systems. The cyborg isn\'t a prophecy; it\'s a practice.',
        examples: [
          'Using technology while critiquing it',
          'Being both faithful and ironic',
          'Holding contradictions (e.g., "I believe in technology and I fear it")',
          'Designing systems that honor both computational efficiency and human experience'
        ],
        implications: 'The cyborg is a practice: how do we design, love, and resist in a world where boundaries leak? How do we build care within hybrid systems? This is the work of feminist techno-politics.',
        firstMention: '"But the alternative is not cynicism or faithlessness... Who cyborgs will be is a radical question; the answers are a matter of survival."'
      },
      'Feminist Syntax': {

        definition: 'A way of structuring thought, rhythm, and argument that resists traditional, patriarchal, "objective" voice. It\'s not just writing by women—it\'s a political act of redesigning language itself. The form performs the politics: non-linear, polyvocal, embodied, ironic, hybrid. Haraway\'s writing is feminist syntax in action.',
        examples: [
          'Haraway jumps between Marxism → science fiction → genetics → humor',
          'She uses long, tangled sentences that resist closure',
          'She mixes registers: technical + poetic + mythic',
          'She holds contradictions: "I am both faithful and ironic"'
        ],
        implications: 'If the problem is systems of control, maybe the first system we need to redesign is language itself. Feminist syntax reclaims emotion, contradiction, intuition as valid ways of knowing. It\'s theory as performance, not just argument.',
        firstMention: 'The entire introduction demonstrates feminist syntax through its structure and tone.'
      },
      'Ironic Faith / Blasphemy': {

        definition: 'Haraway\'s method: loving feminism/socialism through disobedience. "Blasphemy" means speaking the sacred name sideways—taking something seriously enough to risk offending it. "Ironic faith" means holding incompatible truths at once (e.g., "I believe in technology and I fear it"). It\'s a political method, not just a style.',
        examples: [
          'Mocking her own manifesto while writing it',
          'Using Marxist analysis but refusing its purity',
          'Critiquing feminism from within feminism',
          'Reclaiming military-industrial cyborg for feminist mythmaking'
        ],
        implications: 'You can honor something by breaking it. Irony isn\'t escape—it\'s a way of surviving multiplicity. The cyborg is her blasphemous icon—a creature from military science reclaimed for feminist politics.',
        firstMention: '"Perhaps more faithful as blasphemy is faithful, than as reverent worship and identification."'
      }
    },
    
    // Timeline/context
    timeline: [
      {
        period: 'Early 1900s',
        events: ['Taylorism—scientific management of workers', 'Frederick Taylor creates time-motion studies'],
        relevance: 'Foundation for understanding modern workplace surveillance. The factory as machine, workers as parts. Haraway references this in the text.'
      },
      {
        period: '1940s-1950s',
        events: ['Cybernetics emerges', 'Norbert Wiener coins term "cybernetics"', 'Early computing and feedback systems'],
        relevance: 'Provides language for describing hybridity—systems, feedback, control. Bodies and machines as networks. Haraway references this in the text.'
      },
      {
        period: '1960s-1980s',
        events: ['Second-wave feminism', 'Postmodernism', 'Poststructuralism', 'Cold War technology', 'Rise of computing', 'Genetics research'],
        relevance: 'Haraway is responding to and remixing these movements. The context for cyborg politics—computers, genetics, global media. Referenced throughout the text.'
      },
      {
        period: '1970s-1980s',
        events: ['Feminist theory expands (Cixous, Irigaray, Kristeva)', 'écriture féminine (feminine writing)', 'Feminist syntax emerges'],
        relevance: 'Haraway writes in this lineage—mixing registers, undoing binaries, parodying academic voice. Feminist syntax as political method. Demonstrated in the text.'
      },
      {
        period: '1985',
        events: ['"A Cyborg Manifesto" published', 'Reagan era', 'Cold War peak', '$84 billion in C3I defense spending'],
        relevance: 'Written during rise of computing, genetics, global media. Haraway responds to militarism, techno-science, and essentialist feminism. C3I example in the text.'
      }
    ],
    
    // Connections map
    connections: [
      {
        from: 'Cyborg',
        to: 'Feminist Syntax',

        relationship: 'Both represent hybridity—the cyborg is hybrid identity, feminist syntax is hybrid writing form. Haraway\'s writing performs what she describes—the form is the content.'
      },
      {
        from: 'Loss of Innocence',
        to: 'Technological Agency',

        relationship: 'We\'ve lost pure nature because technology mediates everything—and technology has agency, acting back on us. The boundary collapse means we can\'t pretend separation exists.'
      },
      {
        from: 'Marxism',
        to: 'Cybernetics',

        relationship: 'Haraway uses Marxist analysis but applies it to digital/informational systems—the new factory is algorithmic. Cybernetics provides the language for describing how power works through information.'
      },
      {
        from: 'Taylorism',
        to: 'Modern Production',

        relationship: 'Haraway says modern work (screens, metrics, surveillance) is an updated Taylorism—measured through data, not stopwatches. The factory is now digital.'
      },
      {
        from: 'Feminist Syntax',
        to: 'Ironic Faith',

        relationship: 'Feminist syntax is the form; ironic faith is the method. Both are about holding contradictions, refusing purity, redesigning systems from within.'
      },
      {
        from: 'Cyborg Sex',
        to: 'Loss of Innocence',

        relationship: 'Reproduction is mediated by technology (IVF, hormones, birth control). There\'s no "natural" sexuality anymore—everything is hybrid. This is part of the loss of innocence.'
      },
      {
        from: 'Living In-Between',
        to: 'Technological Agency',

        relationship: 'We can\'t escape technology (doom narrative) or embrace it uncritically (utopia). We must live in-between, designing ethics and care within mixed systems where machines have agency.'
      }
    ],
    
    // Reflections and learnings from reading
    reflections: {
      title: 'What am I taking away from this reading?',
      content: `Reading "A Cyborg Manifesto" was difficult. I'm really struggling with Donna's writing. Getting the texture, understanding what she's talking about. I don't even know the references. But I think she's saying she's not writing "theory" the normal way—she's using irony, myth, and blasphemy as political tools. Like, she's being faithful to feminism and socialism but through disobedience. Irony isn't sarcasm—it's holding incompatible things together because both are necessary and true. The cyborg is her blasphemous icon.

The most important thing I'm getting from these first pages is that we're already cyborgs—not in the future, but now. We are chimeras, hybrids. The cyborg is our ontology, it gives us our politics. I think she means we can't pretend to be pure or natural anymore. We have to figure out how to live in-between—not techno-utopia or doom narrative, but staying with the trouble.

Another key realization: the boundary between science fiction and social reality is an optical illusion. Every technology started as sci-fi, and every identity is partly imagined. "Women's experience" isn't just something we report—we're building it together. It's fiction AND fact.

I'm still trying to understand how technology has its own agency, and how we have to live in an in-between to figure something out. Machines are disturbingly lively, and we ourselves frighteningly inert. That line is so weird and funny and scary. I think she's saying machines have agency now, and we're the ones following scripts.

The cyborg is a tool for navigating between machines, medicine, war, sex, identity, politics. But honestly I'm still trying to understand how everything is cyborg. Like, basically everything is cyborg? How do you convince everybody in the world this?

Most importantly from these first pages, I learned that feminist syntax matters. The form is the content. Haraway's writing performs what she describes—using irony, contradiction, intuition as valid ways of knowing. It's theory as performance, not just argument. If the problem is systems of control, maybe the first system we need to redesign is language itself.

This is helping me discover connections to theory and the design/technology space. The cyborg as a framework for understanding hybridity—machines and organisms, fiction and reality—feels directly relevant to how we design technology today. The loss of innocence, the collapse of boundaries, living in-between—these are all concepts I'm starting to see in design systems, AI, and how we think about technology's agency. I'm taking these first pages as a starting point to explore more theory and see how these ideas map onto the design and technology work I'm doing.`
    }
  }
};

// Visual System Guide Component - Scientific apparatus format with explicit reasoning
function VisualSystemGuide({ visualSystem, projectSlug, projectData }) {
  const [isDesignRationaleOpen, setIsDesignRationaleOpen] = React.useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = React.useState(false);

  // Color extraction patterns
  const colorPatterns = [
    { name: 'Hot Pink', keywords: ['hot pink', '#ec4899'], hex: '#EC4899' },
    { name: 'pink', keywords: ['pink'], hex: '#ec4899' },
    { name: 'Electric Blue', keywords: ['electric blue', '#007bff'], hex: '#007BFF' },
    { name: 'Electric Lime', keywords: ['electric lime', '#b6ff3b'], hex: '#B6FF3B' },
    { name: 'Magenta Accent', keywords: ['magenta accent', '#e6007a'], hex: '#E6007A' },
    { name: 'magenta', keywords: ['magenta'], hex: '#d946ef' },
    { name: 'Lilac Tint', keywords: ['lilac tint', '#ede9fe'], hex: '#EDE9FE' },
    { name: 'lilac', keywords: ['lilac'], hex: '#c084fc' },
    { name: 'off-white', keywords: ['off-white', 'off white'], hex: '#FAF9F6' },
    { name: 'Graphite Gray', keywords: ['graphite gray', 'graphite grey'], hex: '#4B5563' },
    { name: 'graphite', keywords: ['graphite'], hex: '#4b5563' },
    { name: 'Jet Black', keywords: ['jet black'], hex: '#0F0F0F' },
    { name: 'Pitch Black', keywords: ['pitch black'], hex: '#0D0D0D' },
    { name: 'Signal White', keywords: ['signal white'], hex: '#FAFAFA' },
    { name: 'Signal Black', keywords: ['signal black'], hex: '#0D0D0D' },
    { name: 'Electric Cyan', keywords: ['electric cyan', '#22d3ee'], hex: '#22D3EE' },
    { name: 'Amber Pulse', keywords: ['amber pulse', '#fcd34d'], hex: '#FCD34D' },
    { name: 'Algorithmic Gray', keywords: ['algorithmic gray', 'algorithmic grey'], hex: '#6B7280' },
    { name: 'Soft White', keywords: ['soft white', '#f9fafb'], hex: '#F9FAFB' },
    { name: 'Charcoal Brown-Black', keywords: ['charcoal brown-black', 'charcoal brown black', '#141313'], hex: '#141313' },
    { name: 'Espresso Brown', keywords: ['espresso brown', '#1e1c1a'], hex: '#1E1C1A' },
    { name: 'Clay Tan', keywords: ['clay tan', '#cbbba0'], hex: '#CBBBA0' },
    { name: 'Soft Beige', keywords: ['soft beige', '#dad3ca'], hex: '#DAD3CA' },
    { name: 'Taupe Gray', keywords: ['taupe gray', 'taupe grey', '#8a837b'], hex: '#8A837B' },
    { name: 'Neutral Gray', keywords: ['neutral gray', 'neutral grey', '#2a2826'], hex: '#2A2826' },
    { name: 'Light Beige', keywords: ['light beige', '#e6d9c7'], hex: '#E6D9C7' },
    { name: 'black', keywords: ['black'], hex: '#000000' },
    { name: 'Slate Gray', keywords: ['slate gray', 'slate grey', '#9ca3af'], hex: '#9CA3AF' },
    { name: 'slate', keywords: ['slate'], hex: '#475569' },
    { name: 'Soft Gray', keywords: ['soft gray', 'soft grey'], hex: '#6B7280' },
    { name: 'gold', keywords: ['gold', 'golden'], hex: '#d4af37' },
    { name: 'gray', keywords: ['gray', 'grey', 'grays', 'greys', 'neutral gray', 'neutral grey'], hex: '#6b7280' },
    { name: 'white', keywords: ['white'], hex: '#ffffff' },
  ];

  // Typography extraction patterns (order matters - more specific first)
  const typographyPatterns = [
    { name: 'Space Grotesk', keywords: ['Space Grotesk', 'space grotesk'], family: 'sans-serif' },
    { name: 'Satoshi', keywords: ['Satoshi', 'satoshi'], family: 'sans-serif' },
    { name: 'Archivo Expanded', keywords: ['Archivo Expanded', 'archivo expanded'], family: 'sans-serif' },
    { name: 'Georgia', keywords: ['Georgia', 'georgia'], family: 'serif' },
    { name: 'IBM Plex Serif', keywords: ['IBM Plex Serif', 'ibm plex serif'], family: 'serif' },
    { name: 'JetBrains Mono', keywords: ['JetBrains Mono', 'JetBrains', 'jetbrains mono', 'jetbrains'], family: 'monospace' },
    { name: 'IBM Plex Mono', keywords: ['IBM Plex Mono', 'IBM Plex', 'ibm plex mono', 'ibm plex'], family: 'monospace' },
    { name: 'Inter', keywords: ['Inter', 'inter'], family: 'sans-serif' },
    { name: 'Monospace', keywords: ['monospace'], family: 'monospace' },
    { name: 'Sans-serif', keywords: ['sans-serif'], family: 'sans-serif' },
    { name: 'Serif', keywords: ['serif', 'light serif'], family: 'serif' },
  ];

  // Extract colors mentioned in text
  const extractColors = () => {
    const found = [];
    const lowerText = visualSystem.toLowerCase();
    
    const sortedPatterns = [...colorPatterns].sort((a, b) => {
      const aMaxLen = Math.max(...a.keywords.map(k => k.length));
      const bMaxLen = Math.max(...b.keywords.map(k => k.length));
      return bMaxLen - aMaxLen;
    });
    
    sortedPatterns.forEach(color => {
      color.keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase();
        const escapedKeyword = keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKeyword}(?:s|es)?\\b`, 'i');
        if (regex.test(lowerText)) {
          if (!found.find(c => c.name === color.name)) {
            found.push({ name: color.name, hex: color.hex });
          }
        }
      });
    });
    
    return found;
  };

  // Extract typography mentioned in text
  const extractTypography = () => {
    const found = [];
    const lowerText = visualSystem.toLowerCase();
    
    typographyPatterns.forEach(font => {
      font.keywords.forEach(keyword => {
        if (lowerText.includes(keyword.toLowerCase())) {
          if (!found.find(f => f.name === font.name)) {
            found.push({ name: font.name, family: font.family });
          }
        }
      });
    });
    
    return found;
  };

  // Extract design principles
  const extractPrinciples = () => {
    const principles = [];
    const lower = visualSystem.toLowerCase();
    
    if (lower.includes('co-creation') || lower.includes('co creation')) principles.push({ name: 'Co-Creation', desc: 'Design emerges through fan-AI dialogue' });
    if (lower.includes('cultural fidelity') || (lower.includes('cultural') && lower.includes('fidelity'))) principles.push({ name: 'Cultural Fidelity', desc: 'AI respects team identity and fan language' });
    if (lower.includes('constraint as creativity') || (lower.includes('constraint') && lower.includes('creativity'))) principles.push({ name: 'Constraint as Creativity', desc: 'Limits drive better outcomes' });
    if (lower.includes('play as method') || (lower.includes('play') && lower.includes('method'))) principles.push({ name: 'Play as Method', desc: 'Design equals game; interactions as challenges' });
    if (lower.includes('ownership through creation') || (lower.includes('ownership') && lower.includes('creation'))) principles.push({ name: 'Ownership through Creation', desc: 'Fans become co-designers' });
    if ((lower.includes('constraint') && lower.includes('limitation')) || lower.includes('constraint does not equal')) principles.push({ name: 'Constraint ≠ Limitation', desc: 'Timed design pushes improvisation' });
    if (lower.includes('transparency')) principles.push({ name: 'Transparency', desc: 'Making processes visible' });
    if (lower.includes('clarity')) principles.push({ name: 'Clarity', desc: 'Clear communication, visual hierarchy' });
    if (lower.includes('care')) principles.push({ name: 'Care', desc: 'Thoughtful, intentional, relational' });
    if (lower.includes('relation') && !lower.includes('cultural')) principles.push({ name: 'Relation', desc: 'Connected, contextual, evolving' });
    if (lower.includes('context') && !lower.includes('cultural')) principles.push({ name: 'Context', desc: 'Element placement signals relational role' });
    if (lower.includes('minimal')) principles.push({ name: 'Minimalism', desc: 'Clean, restrained, purposeful' });
    if (lower.includes('perceptibility')) principles.push({ name: 'Perceptibility', desc: 'Visuals move at human-perceptible tempo' });
    if (lower.includes('non-neutral') || (lower.includes('non') && lower.includes('neutral'))) principles.push({ name: 'Non-neutral Neutrality', desc: 'Lab aesthetic hides emotion, yet reveals it in data motion' });
    if (lower.includes('warm neutrality') || (lower.includes('warm') && lower.includes('neutrality'))) principles.push({ name: 'Warm Neutrality', desc: 'Earth tones replace emotional color; care is a temperature' });
    
    return principles;
  };

  const colors = extractColors();
  const typography = extractTypography();
  const principles = extractPrinciples();

  // Build table rows
  const tableRows = [];

  if (colors.length > 0) {
    const colorNames = colors.map(c => c.name).join(', ');
    const colorHexes = colors.map(c => c.hex).join(', ');
    tableRows.push({
      element: 'Color Palette',
      purpose: `${colorNames} (${colorHexes})`
    });
  }

  if (typography.length > 0) {
    const fontNames = typography.map(f => f.name).join(', ');
    tableRows.push({
      element: 'Typography',
      purpose: fontNames
    });
  }

  if (principles.length > 0) {
    const principleNames = principles.map(p => p.name).join(' • ');
    tableRows.push({
      element: 'Design Principles',
      purpose: principleNames
    });
  }

  // Check if this is Field Node v2 for comparison (only show comparison on v2, since v2 can compare to v1)
  const isFieldNodeV2 = projectSlug === 'field-node-v2';
  const v1Data = projectData?.['field-node-v1'];
  const v2Data = projectData?.['field-node-v2'];

  return (
    <div className="space-y-6">
      {/* Design Rationale - Collapsible */}
      <div className="border border-gray-300 rounded-sm overflow-hidden bg-white">
        <button
          onClick={() => setIsDesignRationaleOpen(!isDesignRationaleOpen)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors group touch-manipulation"
        >
          <div className="flex items-center gap-3">
            {isDesignRationaleOpen ? (
              <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700 flex-shrink-0" />
            )}
            <div>
              <h3 className="text-xs font-mono text-gray-600 uppercase tracking-wider">Design Rationale</h3>
              <p className="text-xs text-gray-500 mt-1 italic">
                The explicit reasoning behind each visual system choice—why this approach over alternatives, and how design values are encoded.
              </p>
            </div>
          </div>
        </button>
        {isDesignRationaleOpen && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-200">
            <div className="text-sm text-gray-800 leading-relaxed space-y-4 pt-4">
              <p className="whitespace-pre-line">{visualSystem}</p>
            </div>
          </div>
        )}
      </div>

      {/* Comparison View for Field Node v2 - NOW COLLAPSIBLE */}
      {isFieldNodeV2 && v1Data && v2Data && (
        <div className="border border-gray-300 rounded-sm overflow-hidden bg-white">
          <button
            onClick={() => setIsComparisonOpen(!isComparisonOpen)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors group touch-manipulation"
          >
            <div className="flex items-center gap-3">
              {isComparisonOpen ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-xs font-mono text-gray-600 uppercase tracking-wider">Design Decision Comparison</h3>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Explicit reasoning for visual system choices
                </p>
              </div>
            </div>
          </button>
          {isComparisonOpen && (
            <>
              <div className="grid grid-cols-2 divide-x divide-gray-300 border-t border-gray-200">
                <div className="p-6 bg-white">
                  <div className="mb-4 border-b border-gray-200 pb-3">
                    <h4 className="text-xs font-mono text-gray-600 uppercase mb-1">Version 1</h4>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Terminal UI</p>
                    <p className="text-xs text-gray-600 italic">Why this choice?</p>
                  </div>
                  <div className="text-xs text-gray-700 space-y-3 leading-relaxed">
                    {v1Data.visualSystem && (
                      <>
                        <p className="font-medium text-gray-800">Why Terminal UI?</p>
                        <p className="leading-relaxed italic">
                          A terminal UI structure was chosen not as an aesthetic nod to retro computing, but as a structural metaphor—a design language that encodes values of slowness, intentionality, and intimacy within a technical space.
                        </p>
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Key Design Values</p>
                          <ul className="space-y-1 text-xs text-gray-600">
                            <li>• Slowness and intentionality</li>
                            <li>• Call and response rhythm</li>
                            <li>• Emotional warmth (pink/magenta) within structure</li>
                            <li>• Non-neutrality as essential to care</li>
                          </ul>
                        </div>
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Critical Realization</p>
                          <p className="text-xs text-gray-600 italic">
                            There is no equivalent to pink/magenta that doesn't exist. These colors carry specific cultural and emotional associations that cannot be replaced—they are not neutral, and that non-neutrality is essential to the design's argument about care.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="mb-4 border-b border-gray-200 pb-3">
                    <h4 className="text-xs font-mono text-gray-600 uppercase mb-1">Version 2</h4>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Editorial Surface</p>
                    <p className="text-xs text-gray-600 italic">Why this shift?</p>
                  </div>
                  <div className="text-xs text-gray-700 space-y-3 leading-relaxed">
                    {v2Data.visualSystem && (
                      <>
                        <p className="font-medium text-gray-800">Why Editorial Surface?</p>
                        <p className="leading-relaxed italic">
                          Version 2 moved away from the pink-on-black terminal aesthetic of v1 toward an editorial surface that feels open and relational. The design philosophy shifted from "pink as warmth inside the machine" to "colors as feelings that make relations perceptible."
                        </p>
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Key Design Values</p>
                          <ul className="space-y-1 text-xs text-gray-600">
                            <li>• Open and relational surfaces</li>
                            <li>• Making emotional states visible</li>
                            <li>• Colors as feelings that make relations perceptible</li>
                            <li>• From personal writing to relational exploration</li>
                          </ul>
                        </div>
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Design Philosophy Shift</p>
                          <p className="text-xs text-gray-600 italic">
                            Designing with care requires making emotional and relational states visible, not just implied. The shift acknowledges that interfaces can be emotional landscapes—places to feel thinking happen.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border-t border-gray-300 px-4 sm:px-6 py-3 sm:py-4">
                <p className="text-xs font-mono text-gray-600 uppercase mb-2">Design Evolution</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  The shift from terminal UI to editorial surface reflects a fundamental change in purpose: from a quiet space for personal writing and reflection (v1) to an open system for relational exploration (v2). This evolution demonstrates how visual systems encode values—the terminal's intimacy versus the editorial's relationality—and how design choices make these values tangible.
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Technical Specifications Table */}
      {tableRows.length > 0 && (
        <div className="border border-gray-300 rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-mono text-xs text-gray-600 uppercase">Element</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-mono text-xs text-gray-600 uppercase">Purpose / Specification</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 last:border-b-0 bg-white">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-mono text-xs text-gray-600 bg-gray-50 break-words">{row.element}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 break-words">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <p className="text-xs font-mono text-gray-500">Fig. 0  Visual system schematic with design rationale.</p>
    </div>
  );
}

// Reading Guide Component for Cyborg Manifesto
function ReadingGuide({ project }) {
  const [openSections, setOpenSections] = React.useState({});
  const [openReferences, setOpenReferences] = React.useState({});
  const [openConcepts, setOpenConcepts] = React.useState({});
  const [openConnections, setOpenConnections] = React.useState(false);
  const [openReflections, setOpenReflections] = React.useState(false);
  const [openFirstReading, setOpenFirstReading] = React.useState(true);
  const [openHowToRead, setOpenHowToRead] = React.useState(false);
  const [hoveredRef, setHoveredRef] = React.useState(null);
  const [hoveredConcept, setHoveredConcept] = React.useState(null);
  const [hoveredPassageConcept, setHoveredPassageConcept] = React.useState(null);
  const [expandedPassageConcepts, setExpandedPassageConcepts] = React.useState({});
  const [selectedPassage, setSelectedPassage] = React.useState(null);
  
  const togglePassageConcept = (conceptKey) => {
    setExpandedPassageConcepts(prev => ({
      ...prev,
      [conceptKey]: !prev[conceptKey]
    }));
  };
  
  // Helper function to find concept definition (case-insensitive match)
  const getConceptDefinition = (conceptName) => {
    if (!project.keyConcepts) return null;
    // Try exact match first
    if (project.keyConcepts[conceptName]) {
      return project.keyConcepts[conceptName].definition;
    }
    // Try case-insensitive match
    const conceptKey = Object.keys(project.keyConcepts).find(
      key => key.toLowerCase() === conceptName.toLowerCase()
    );
    return conceptKey ? project.keyConcepts[conceptKey].definition : null;
  };
  
  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const toggleReference = (ref) => {
    setOpenReferences(prev => ({ ...prev, [ref]: !prev[ref] }));
  };
  
  const toggleConcept = (concept) => {
    setOpenConcepts(prev => ({ ...prev, [concept]: !prev[concept] }));
  };

  // Get all unique references and concepts for the tag cloud
  const allReferences = project.references ? Object.keys(project.references) : [];
  const allConcepts = project.keyConcepts ? Object.keys(project.keyConcepts) : [];
  
  return (
    <div className="space-y-8 sm:space-y-12" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="border-b border-black pb-6 sm:pb-8 md:pb-12">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div>
            <span className="text-xs text-black uppercase tracking-wider mb-2 block break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem' }}>01. ABSTRACT</span>
            <h1 className="text-black mb-2 break-words" style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', fontWeight: 600 }}>CYBORG MANIFESTO</h1>
            <p className="text-black break-words" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 400 }}>A reading experiment in feminist syntax and machine logic</p>
          </div>
          
          <div className="border-l-2 border-black pl-3 sm:pl-4 py-2">
            <p className="text-black italic leading-relaxed mb-2 break-words" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              "The cyborg is a creature in a post-gender world — a condensed image of both imagination and material reality."
            </p>
            <p className="text-xs text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>— Donna Haraway</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 break-words">
            <span className="text-xs text-black" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Reading along:</span>
            <a
              href="https://warwick.ac.uk/fac/arts/english/currentstudents/undergraduates/modules/fictionnownarrativemediaandtheoryinthe21stcentury/manifestly_haraway_----_a_cyborg_manifesto_science_technology_and_socialist-feminism_in_the_....pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-black underline underline-offset-2 touch-manipulation break-words" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}
            >
              Manifestly Haraway (2016)
            </a>
          </div>
        </div>
      </section>

      {/* How to Read This */}
      <section className="pb-6 sm:pb-8">
        <div className="mb-3 sm:mb-4">
          <button
            onClick={() => setOpenHowToRead(!openHowToRead)}
            className="flex items-center gap-2 sm:gap-3 group w-full text-left px-2 sm:px-3 py-2 -mx-2 sm:-mx-3 -my-2 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-black active:bg-gray-800 active:translate-y-0.5 touch-manipulation"
            style={{ transition: 'background 0.2s ease, color 0.2s ease, transform 0.1s ease' }}
          >
            {openHowToRead ? (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-black group-hover:text-white transition-colors" />
            ) : (
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-black group-hover:text-white transition-colors" />
            )}
            <div className="flex-1 min-w-0">
              <span className="text-xs text-black uppercase tracking-wider block mb-1 break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>02. READING PROCESS</span>
              <h2 className="text-sm sm:text-base font-semibold text-black group-hover:text-white transition-colors break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontWeight: 500 }}>How to Read This</h2>
              {!openHowToRead && (
                <p className="text-xs opacity-70 mt-1 text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Click to expand</p>
              )}
            </div>
          </button>
        </div>
        
        {openHowToRead && (
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-black leading-relaxed break-words">
            <p>This is my process of understanding Donna Haraway's "A Cyborg Manifesto." I'm documenting my reading, reflections, and questions as I work through the text.</p>
            <p className="font-medium">The text is broken up into different sections I read and reflect on. This could be scattered, this could be organized. I might not finish the text, I might finish the text. That's how the process is—flexible and exploratory.</p>
            <p>Each reading section covers a specific range of pages. My reflections are grounded in "what am I getting from these pages?"—helping me discover connections to theory and the design/technology space.</p>
            <p>Each reading section is organized as follows:</p>
            <ul className="list-none space-y-1.5 sm:space-y-1.5 pl-0">
              <li className="flex items-start gap-2">
                <span className="text-black flex-shrink-0" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>01.</span>
                <span className="text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}><strong>READING THOUGHTS</strong> — My initial reading with passages where I compare Haraway's original text to my understanding: "What am I getting from this?"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black flex-shrink-0" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>02.</span>
                <span className="text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}><strong>KEY CONCEPTS</strong> — Important terms and ideas with definitions, examples, and implications for theory and design/technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black flex-shrink-0" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>03.</span>
                <span className="text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}><strong>REFERENCE GLOSSARY</strong> — Historical and theoretical references Haraway makes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black flex-shrink-0" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>04.</span>
                <span className="text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}><strong>TIMELINE</strong> — Historical context for understanding when and why the manifesto was written</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black flex-shrink-0" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>05.</span>
                <span className="text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}><strong>CONNECTIONS MAP</strong> — Relationships between concepts, showing how ideas connect to theory and design/technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black flex-shrink-0" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>06.</span>
                <span className="text-black break-words" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}><strong>MY REFLECTIONS</strong> — What I'm taking away and how it's helping me discover more theory and connections to design/technology</span>
              </li>
            </ul>
            <p className="text-xs italic mt-3 sm:mt-4 break-words">You can read this linearly or jump around. Each reading section can be collapsed. Click on concepts to expand them, follow connections between ideas, and explore the timeline for context.</p>
          </div>
        )}
      </section><section className="-mt-12">
        <div className="mb-4">
          <button
            onClick={() => setOpenFirstReading(!openFirstReading)}
            className="flex items-center gap-2 sm:gap-3 group w-full text-left px-2 sm:px-3 py-2 -mx-2 sm:-mx-3 -my-2 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-black active:bg-gray-800 active:translate-y-0.5 touch-manipulation"
            style={{ transition: 'background 0.2s ease, color 0.2s ease, transform 0.1s ease' }}
          >
            {openFirstReading ? (
              <ChevronDown className="w-5 h-5 flex-shrink-0 text-black group-hover:text-white transition-colors" />
            ) : (
              <ChevronRight className="w-5 h-5 flex-shrink-0 text-black group-hover:text-white transition-colors" />
            )}
            <div className="flex-1">
              <span className="text-xs text-black uppercase tracking-wider block mb-1" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8rem' }}>03. REFLECTIONS</span>
              <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.95rem', fontWeight: 500 }}>First Reading </h2>
              <p className="text-xs italic mt-1 text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>What am I getting from this reading?</p>
              {!openFirstReading && (
                <p className="text-xs opacity-70 mt-1 text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Click to expand</p>
              )}
            </div>
          </button>
        </div>

        {openFirstReading && (
          <div className="space-y-12">
            {/* 01. Reading Thoughts */}
            {project.readingSessions && project.readingSessions.length > 0 && (
              <section>
                <div className="mb-12">
                  <h2 className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8rem' }}>01. READING THOUGHTS</h2>
                </div>
          
          <div className="space-y-8">
            {project.readingSessions.map((session) => (
              <div key={session.id} className="border border-black">
                {/* Session Header */}
                <button
                  onClick={() => toggleSection(session.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between text-left hover:bg-black cursor-pointer group transition-all duration-200 ease-in-out active:translate-y-0.5 touch-manipulation"
                  style={{ transition: 'background 0.2s ease, color 0.2s ease, transform 0.1s ease' }}
                >
                  <div className="flex-1 pr-6">
                    <div className="mb-3">
                      <h3 className="text-base font-semibold text-black group-hover:text-white transition-colors mb-1">{session.title}</h3>
                      <p className="text-xs text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace' }}></p>
                    </div>
                    {session.summary && !openSections[session.id] && (
                      <p className="text-sm text-black group-hover:text-white transition-colors leading-relaxed">{session.summary}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0 pt-1">
                    {openSections[session.id] ? (
                      <ChevronDown className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                    )}
                  </div>
                </button>
                
                {/* Expanded Content */}
                {openSections[session.id] && (
                  <div className="border-t border-black">
                    <div className="p-6 space-y-8">
                      {/* Summary (shown when expanded) */}
                      {session.summary && (
                        <div>
                          <p className="text-sm text-black leading-relaxed">{session.summary}</p>
                        </div>
                      )}
                      
                      {/* Passages - Stacked Layout */}
                      {session.passages && session.passages.length > 0 && (
                        <div className="space-y-8">
                          <div className="border-t border-black pt-4">
                            <h4 className="text-xs text-black uppercase tracking-wider mb-6" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Passages</h4>
                          </div>
                          {session.passages.map((passage) => (
                            <div key={passage.id} className="space-y-4">
                              {/* Passage Title (if exists) */}
                              {passage.title && (
                                <div className="mb-2">
                                  <h5 className="text-sm font-medium text-black">{passage.title}</h5>
                                </div>
                              )}
                              
                              {/* Original Text - Direct Quote */}
                              <div className="border-l-2 border-black pl-3 sm:pl-4 py-2 sm:py-3">
                                <div className="mb-2">
                                  <span className="text-xs text-black uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8rem' }}>DIRECT TEXT FROM PASSAGE</span>
                                </div>
                                <p className="text-sm text-black italic leading-relaxed">{passage.originalText}</p>
                              </div>
                              
                              {/* My Understanding */}
                              <div className="mt-4">
                                <div className="mb-2">
                                  <span className="text-xs text-black uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8rem' }}>WHAT AM I GETTING FROM THIS?</span>
                                </div>
                                <p className="text-sm text-black leading-relaxed">{passage.myUnderstanding}</p>
                                
                                {/* Key Concepts Tags */}
                                {passage.keyConcepts && passage.keyConcepts.length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-black">
                                    <div className="mb-2">
                                      <span className="text-xs text-black uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Key concepts:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {passage.keyConcepts.map((concept, idx) => {
                                        const conceptDefinition = getConceptDefinition(concept);
                                        const conceptKey = Object.keys(project.keyConcepts || {}).find(
                                          key => key.toLowerCase() === concept.toLowerCase()
                                        ) || concept;
                                        const expandedKey = `${passage.id}-${concept}-${idx}`;
                                        const isExpanded = expandedPassageConcepts[expandedKey];
                                        
                                        return (
                                          <div key={idx} className="relative">
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                if (conceptDefinition) {
                                                  togglePassageConcept(expandedKey);
                                                } else {
                                                  // If no definition found, scroll to main concept section
                                                  const conceptElement = document.getElementById(`concept-${conceptKey}`);
                                                  if (conceptElement) {
                                                    conceptElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                  }
                                                }
                                              }}
                                              className="px-3 py-1 border border-black text-xs text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                                              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                                              title={conceptDefinition ? "Click to see definition" : "Click to jump to concept"}
                                            >
                                              {concept}
                                            </button>
                                            
                                            {/* Inline Expanded Definition */}
                                            {isExpanded && conceptDefinition && (
                                              <div className="mt-2 p-3 bg-white border border-black">
                                                <p className="text-xs font-medium text-black mb-1 uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Definition</p>
                                                <p className="text-xs text-black leading-relaxed mb-2">{conceptDefinition}</p>
                                                <button
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    const conceptElement = document.getElementById(`concept-${conceptKey}`);
                                                    if (conceptElement) {
                                                      conceptElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                    }
                                                  }}
                                                  className="text-xs text-black underline underline-offset-2"
                                                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                                                >
                                                  View full details →
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Session Notes */}
                      {session.myNotes && session.myNotes.length > 0 && (
                        <div className="border-t border-black pt-6">
                          <h4 className="text-xs text-black uppercase tracking-wider mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Reading Notes</h4>
                          <div className="space-y-4">
                            {session.myNotes.map((note, idx) => (
                              <div key={idx} className="border border-black p-4">
                                <p className="text-xs text-black mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{note.date}</p>
                                <p className="text-sm text-black italic leading-relaxed mb-2">{note.note}</p>
                                {note.realization && (
                                  <p className="text-sm text-black leading-relaxed">{note.realization}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* 02. Key Concepts */}
      {project.keyConcepts && Object.keys(project.keyConcepts).length > 0 && (
        <section className="pt-12 border-t border-black">
          <div className="mb-8">
            <h2 className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>02. Key Concepts </h2>
            <p className="text-xs text-black italic mt-2 mb-3">Important terms and ideas from these first pages, connecting to theory and design/technology</p>
            <p className="text-xs text-black mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Click a concept below to expand details</p>
          </div>
          
          {/* Concept Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(project.keyConcepts).map(([concept, data]) => (
              <div key={concept} className="relative group">
                <button
                  id={`concept-${concept}`}
                  onClick={() => toggleConcept(concept)}
                  onMouseEnter={() => setHoveredConcept(concept)}
                  onMouseLeave={() => setHoveredConcept(null)}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 border-2 border-black text-xs text-black transition-all cursor-pointer relative touch-manipulation ${openConcepts[concept] ? 'bg-black text-white' : 'hover:bg-black hover:text-white hover:underline'} active:scale-95`}
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  aria-label={`Click to ${openConcepts[concept] ? 'collapse' : 'expand'} ${concept}`}
                >
                  {concept}
                  {openConcepts[concept] && (
                    <span className="ml-1">▼</span>
                  )}
                  {hoveredConcept === concept && !openConcepts[concept] && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  )}
                </button>
                
                {/* Hover Card */}
                {hoveredConcept === concept && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 w-72 p-3 bg-white border-2 border-black shadow-lg pointer-events-none animate-in fade-in duration-200">
                    <p className="text-xs font-medium text-black mb-1 uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Definition</p>
                    <p className="text-xs text-black leading-relaxed">{data.definition}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Expanded Concept Details */}
          {Object.entries(project.keyConcepts).map(([concept, data]) => (
            openConcepts[concept] && (
              <div key={concept} className="mb-6 border border-black overflow-hidden">
                <button
                  onClick={() => toggleConcept(concept)}
                  className="w-full px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left group border-b border-black hover:bg-black active:bg-gray-800 transition-colors cursor-pointer touch-manipulation"
                >
                  <span className="font-semibold text-black group-hover:text-white transition-colors">{concept}</span>
                  <ChevronDown className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                </button>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Definition</p>
                    <p className="text-sm text-black leading-relaxed">{data.definition}</p>
                  </div>
                  {data.examples && data.examples.length > 0 && (
                    <div>
                      <p className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Examples</p>
                      <ul className="space-y-1 text-sm text-black">
                        {data.examples.map((ex, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-black mr-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>•</span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {data.implications && (
                    <div>
                      <p className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Implications</p>
                      <p className="text-sm text-black leading-relaxed">{data.implications}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          ))}
        </section>
      )}
      
      {/* 03. Reference Glossary */}
      {project.references && Object.keys(project.references).length > 0 && (
        <section className="pt-12 border-t border-black">
          <div className="mb-8">
            <h2 className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>03. Reference Glossary </h2>
            <p className="text-xs text-black italic mt-2 mb-3">Historical and theoretical references from these first pages</p>
            <p className="text-xs text-black mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Click a reference below to expand details</p>
          </div>
          
          {/* Reference Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(project.references).map(([term, data]) => (
              <div key={term} className="relative group">
                <button
                  id={`ref-${term}`}
                  onClick={() => toggleReference(term)}
                  onMouseEnter={() => setHoveredRef(term)}
                  onMouseLeave={() => setHoveredRef(null)}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 border-2 border-black text-xs text-black transition-all cursor-pointer relative touch-manipulation ${openReferences[term] ? 'bg-black text-white' : 'hover:bg-black hover:text-white hover:underline'} active:scale-95`}
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  aria-label={`Click to ${openReferences[term] ? 'collapse' : 'expand'} ${term}`}
                >
                  {term}
                  {openReferences[term] && (
                    <span className="ml-1">▼</span>
                  )}
                  {hoveredRef === term && !openReferences[term] && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  )}
                </button>
                
                {/* Hover Card */}
                {hoveredRef === term && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 w-80 p-3 bg-white border-2 border-black shadow-lg pointer-events-none animate-in fade-in duration-200">
                    <p className="text-xs font-medium text-black mb-1 uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{data.timePeriod}</p>
                    <p className="text-xs text-black leading-relaxed">{data.definition}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Expanded Reference Details */}
          {Object.entries(project.references).map(([term, data]) => (
            openReferences[term] && (
              <div key={term} className="mb-6 border border-black overflow-hidden">
                <button
                  onClick={() => toggleReference(term)}
                  className="w-full px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left group border-b border-black hover:bg-black active:bg-gray-800 transition-colors cursor-pointer touch-manipulation"
                >
                  <span className="font-semibold text-black group-hover:text-white transition-colors">{term}</span>
                  <ChevronDown className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                </button>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider mb-1" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Time Period</p>
                    <p className="text-sm text-black">{data.timePeriod}</p>
                  </div>
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Definition</p>
                    <p className="text-sm text-black leading-relaxed">{data.definition}</p>
                  </div>
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Context</p>
                    <p className="text-sm text-black leading-relaxed">{data.context}</p>
                  </div>
                  {data.relatedConcepts && data.relatedConcepts.length > 0 && (
                    <div>
                      <p className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Related</p>
                      <div className="flex flex-wrap gap-1.5">
                        {data.relatedConcepts.map((concept, idx) => (
                          <span key={idx} className="px-2 py-1 border border-black text-xs text-black" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          ))}
        </section>
      )}
      
      {/* 04. Timeline */}
      {project.timeline && project.timeline.length > 0 && (
        <section className="pt-12 border-t border-black">
          <div className="mb-8">
            <h2 className="text-xs text-black uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>04. Timeline</h2>
            <p className="text-xs text-black italic mt-2">Historical context for understanding the text</p>
          </div>
          
          {/* Horizontal Scroll Timeline */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {project.timeline.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-64 border border-black p-4">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-black" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{item.period}</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-black leading-relaxed mb-2">{item.events.join(' • ')}</p>
                  </div>
                  <div className="border-t border-black pt-2">
                    <p className="text-xs text-black italic leading-relaxed">{item.relevance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 05. Connections Map */}
      {project.connections && project.connections.length > 0 && (
        <section className="pt-12 border-t border-black">
          <div className="mb-8">
            <button
              onClick={() => setOpenConnections(!openConnections)}
              className="flex items-center gap-3 group px-3 py-2 -mx-3 -my-2 rounded hover:bg-black transition-colors cursor-pointer w-full text-left"
            >
              {openConnections ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0 text-black group-hover:text-white transition-colors" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0 text-black group-hover:text-white transition-colors" />
              )}
              <div className="flex-1">
                <h2 className="text-xs uppercase tracking-wider text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>05. Connections Map </h2>
                <p className="text-xs italic mt-1 text-black group-hover:text-white transition-colors">How ideas from these first pages connect to theory and design/technology</p>
                {!openConnections && (
                  <p className="text-xs opacity-70 mt-1 text-black group-hover:text-white transition-colors">Click to expand</p>
                )}
              </div>
            </button>
          </div>
          
          {openConnections && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.connections.map((conn, idx) => (
                <div key={idx} className="border border-black p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm text-black">{conn.from}</span>
                    <span className="text-black" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>→</span>
                    <span className="font-semibold text-sm text-black">{conn.to}</span>
                  </div>
                  <p className="text-xs text-black leading-relaxed">{conn.relationship}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
      
      {/* 06. My Reflections */}
      {project.reflections && (
        <section className="pt-12 border-t border-black">
          <div className="mb-8">
            <button
              onClick={() => setOpenReflections(!openReflections)}
              className="flex items-center gap-3 group px-3 py-2 -mx-3 -my-2 rounded hover:bg-black transition-colors cursor-pointer w-full text-left"
            >
              {openReflections ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0 text-black group-hover:text-white transition-colors" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0 text-black group-hover:text-white transition-colors" />
              )}
              <div className="flex-1">
                <h2 className="text-xs uppercase tracking-wider text-black group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>06. My Reflections </h2>
                <p className="text-xs italic mt-1 text-black group-hover:text-white transition-colors">What am I taking away from these first pages?</p>
                {!openReflections && (
                  <p className="text-xs opacity-70 mt-1 text-black group-hover:text-white transition-colors">Click to expand</p>
                )}
              </div>
            </button>
          </div>
          
          {openReflections && (
            <div className="border border-black p-6">
              <h3 className="font-semibold text-sm text-black mb-4">{project.reflections.title}</h3>
              <div className="text-sm text-black leading-relaxed whitespace-pre-line space-y-4">
                {project.reflections.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
          </div>
        )}
      </section>

      {/* Second Reading (Pages X-Y) - To be added */}
      
      {/* Footer */}
      <footer className="pt-12 mt-12 border-t border-black">
        <div className="text-center">
          <p className="text-xs text-black" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            © 2026 Candace Stewart — Built with care
          </p>
        </div>
      </footer>
    </div>
  );
}

function TikTokFrame({ src, alt, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-[140px] sm:w-[160px]',
    md: 'w-[180px] sm:w-[200px]',
    lg: 'w-[200px] sm:w-[240px]',
  };

  return (
    <div className={`${sizeClasses[size]} flex-shrink-0`}>
      <div className="rounded-[1.35rem] border-2 border-black bg-black p-1.5 shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
        <div className="aspect-[9/16] overflow-hidden rounded-[1rem] bg-gray-900">
          <Image
            src={src}
            alt={alt}
            width={420}
            height={746}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ProofStat({ value, label }) {
  return (
    <div className="border border-gray-300 px-2.5 py-1.5 bg-white text-xs">
      <strong className="text-black">{value}</strong>{' '}
      <span className="text-gray-500">{label}</span>
    </div>
  );
}

function CreatorPartnershipsPage({ project }) {
  const featured = project.accountProof[0];
  const secondary = project.accountProof.slice(1);
  const bestFitBrands = [
    'AI tools and startups',
    'Apps and consumer tech products',
    'Founder-led products that need clearer short-form storytelling',
    'Brands that want UGC that feels native but still explains the product clearly',
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <div className="border-b border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-black mb-6 sm:mb-8 touch-manipulation hover:text-pink-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Back to portfolio
          </Link>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src="/UGC/profile.png"
                alt="Candace Stewart"
                width={150}
                height={150}
                className="rounded-full object-cover border-2 border-black w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                priority
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</p>
              <p className="text-lg sm:text-xl font-bold mt-1">Candace Stewart</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight break-words mt-1">{project.name}</h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 break-words">{project.subtitle}</p>
              <p className="text-sm sm:text-base text-gray-800 mt-4 max-w-2xl leading-relaxed break-words sm:mx-0 mx-auto">
                {project.abstract}
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5 max-w-md sm:max-w-none mx-auto sm:mx-0">
                {project.quickStats.map((item, idx) => (
                  <div key={idx} className="border border-black px-2 sm:px-3 py-2 bg-pink-50">
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm sm:text-base font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-center sm:justify-start">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Work with me</span>
                <a
                  href="mailto:candace.keenya@gmail.com?subject=Creator%20Partnership%20Inquiry"
                  className="text-sm font-semibold text-pink-700 hover:text-pink-800 break-all"
                >
                  candace.keenya@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 space-y-10 sm:space-y-14">
        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 items-start">
          <div>
            <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-4">Brand Proof</h2>
            <div className="border border-black bg-white hover:bg-pink-50/30 transition-colors">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-4 sm:p-6">
                <div className="flex justify-center sm:justify-start">
                  <TikTokFrame src={featured.image} alt={featured.title} size="lg" />
                </div>

                <div className="flex-1 space-y-4 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{featured.label}</div>
                      <div className="text-base sm:text-lg font-semibold mt-1">{featured.angle}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <ProofStat value={featured.views} label="views" />
                      <ProofStat value={featured.likes} label="likes" />
                      <ProofStat value={featured.shares} label="shares" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-900 leading-snug">{featured.title}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{featured.insight}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2">How a brand uses this</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{featured.brandUse}</p>
                  </div>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-pink-700 hover:text-pink-800"
                  >
                    View featured post <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-black p-5 sm:p-6 bg-white">
              <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-4">About</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-800 leading-relaxed">
                <p>I make content for brands that need to explain something real.</p>
                <p>Because I work in product, design, and technology innovation, I know how to turn a feature, workflow, or product story into something legible in-feed.</p>
                <p>That usually means sharper hooks, cleaner demos, and fewer generic creator lines.</p>
              </div>
            </div>

            <div className="border border-black p-5 sm:p-6 bg-pink-50/60">
              <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-4">Best Fit Brands</h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-800">
                {bestFitBrands.map((brand) => (
                  <li key={brand} className="flex items-start gap-2.5">
                    <span className="text-pink-600 mt-1.5 flex-shrink-0">•</span>
                    <span>{brand}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-2">How Brands Use This</h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mb-5">
            Each proof post maps to a content lane brands actually buy — not just views, but the outcome behind them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {project.brandPlaybook.map((item, idx) => (
              <div key={idx} className="border border-black p-4 sm:p-5 bg-white">
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.description}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="uppercase tracking-wider">Best for:</span> {item.bestFor}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-2">More Proof</h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mb-5">
            Different lanes, same skill: making information feel watchable, understandable, and worth acting on.
          </p>

          <div className="space-y-4">
            {secondary.map((item, idx) => (
              <article
                key={idx}
                className="border border-black bg-white hover:bg-pink-50/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5">
                  <div className="flex justify-center sm:justify-start">
                    <TikTokFrame src={item.image} alt={item.title} size="md" />
                  </div>
                  <div className="flex-1 space-y-3 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                        <div className="text-sm sm:text-base font-semibold mt-1">{item.angle}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <ProofStat value={item.views} label="views" />
                        <ProofStat value={item.likes} label="likes" />
                        <ProofStat value={item.shares} label="shares" />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-900 leading-relaxed">{item.title}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.insight}</p>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1.5">How a brand uses this</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.brandUse}</p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-pink-700 hover:text-pink-800"
                    >
                      View post <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-5">What I Create</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.offerItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-black p-4 sm:p-5 bg-white hover:bg-pink-50/40 transition-colors"
              >
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-black bg-pink-50 p-5 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
            <div>
              <h2 className="text-xs text-gray-600 uppercase tracking-wider mb-3">Work With Me</h2>
              <p className="text-sm sm:text-base text-gray-800 max-w-2xl leading-relaxed">
                If you need creator content that explains a product clearly, feels native on-platform, and still sounds like a real person, this is the lane I work in.
              </p>
            </div>
            <a
              href="mailto:candace.keenya@gmail.com?subject=Creator%20Partnership%20Inquiry"
              className="inline-flex items-center justify-center border border-black px-5 py-3 text-sm font-semibold bg-white hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              candace.keenya@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  // Use useParams hook for client components in Next.js 14
  const params = useParams();
  const slug = (params?.slug || '');
  const project = projectData[slug];

  const [openSections, setOpenSections] = React.useState({
    visualSystem: true,
    methodology: false,
    results: false,
    analysis: false,
    conclusion: false,
    futureWork: false,
    appendix: false
  });

  const [selectedImage, setSelectedImage] = React.useState(null);
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [maxScroll, setMaxScroll] = React.useState(0);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      checkScrollability();
      carousel.addEventListener('scroll', checkScrollability);
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(carousel);
      return () => {
        carousel.removeEventListener('scroll', checkScrollability);
        resizeObserver.disconnect();
      };
    }
  }, [project?.images]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 280;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = value;
    }
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black font-mono flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/" className="text-pink-600 hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  if (slug === 'creator-partnerships') {
    return <CreatorPartnershipsPage project={project} />;
  }

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description || project.abstract,
    creator: {
      '@type': 'Person',
      name: 'Candace Stewart',
      email: 'candace.keenya@gmail.com',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://candace.dev',
    },
    about: {
      '@type': 'Thing',
      name: project.category,
    },
    keywords: project.technologies?.join(', ') || project.category,
    datePublished: new Date().toISOString(),
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="border-b border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-black mb-4 touch-manipulation"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Back to portfolio
          </Link>

          {project.format !== 'page-based' && (
            <div className="mb-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <File className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">{project.name}</h1>
              </div>

              {project.subtitle && (
                <p className="text-xs sm:text-sm font-mono text-gray-500 ml-6 sm:ml-8 mb-2 break-words">{project.subtitle}</p>
              )}
            </div>
          )}

          <p className="text-xs font-mono text-gray-500 mb-1">{project.category}</p>

          {project.description && (
            <p className="text-sm sm:text-base text-gray-700 mt-4 max-w-2xl break-words">
              {project.description}
            </p>
          )}

          {project.projectLinks && project.projectLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.projectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-black px-3 py-1.5 text-xs sm:text-sm hover:bg-black hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        {project.format === 'reading-based' ? (
          <ReadingGuide project={project} />
        ) : (
          <div className="space-y-12">
            {project.images && project.images.length > 0 && (
              <section className="mb-8 sm:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">01. Figures</h2>
                  </div>
                  <div></div>
                </div>

                <div>
                  <div 
                    ref={carouselRef}
                    className="overflow-x-auto pb-4 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 scrollbar-hide touch-pan-x"
                  >
                    <div className="flex gap-3 sm:gap-4 min-w-max">
                      {project.images.map((imageItem, idx) => {
                        const imageSrc = typeof imageItem === 'string' 
                          ? `/${project.imageFolder}/${imageItem}` 
                          : `/${project.imageFolder}/${imageItem.filename}`;
                        const imageDescription = typeof imageItem === 'string' 
                          ? `${project.name} - Image ${idx + 1}` 
                          : imageItem.description;
                        const imageAlt = typeof imageItem === 'string' 
                          ? imageItem 
                          : imageItem.filename;

                        return (
                          <figure
                            key={idx}
                            className="relative flex-shrink-0 w-[280px] sm:w-64 border border-gray-300 rounded-sm overflow-hidden bg-white cursor-pointer group hover:border-gray-400 active:border-gray-500 transition-colors touch-manipulation"
                            onClick={() => setSelectedImage(idx)}
                          >
                            <div className="aspect-video bg-gray-50 flex items-center justify-center p-2">
                              <Image
                                src={imageSrc}
                                alt={imageDescription || `${project.name} - ${imageAlt}`}
                                width={400}
                                height={225}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <figcaption className="px-2 sm:px-3 py-2 border-t border-gray-300 bg-white">
                              <p className="text-xs font-mono text-gray-600 mb-1 uppercase tracking-wider">Fig. {idx + 1}</p>
                              <p className="text-xs text-gray-800 leading-tight line-clamp-2 break-words">
                                {imageDescription}
                              </p>
                            </figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  </div>

                  {maxScroll > 0 && (
                    <div className="mt-4 px-4 sm:px-6 md:px-8">
                      <input
                        type="range"
                        min="0"
                        max={maxScroll}
                        value={scrollPosition}
                        onChange={handleSliderChange}
                        className="w-full h-2 sm:h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
                        style={{
                          background: `linear-gradient(to right, #4b5563 0%, #4b5563 ${(scrollPosition / maxScroll) * 100}%, #e5e7eb ${(scrollPosition / maxScroll) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                    </div>
                  )}
                </div>

                {selectedImage !== null && (
                  <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 md:p-8"
                    onClick={() => setSelectedImage(null)}
                  >
                    <div 
                      className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-sm border border-gray-300 overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white border border-gray-300 rounded-sm p-2 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-sm touch-manipulation"
                        aria-label="Close image"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      </button>

                      <div className="aspect-video bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                        <Image
                          src={typeof project.images[selectedImage] === 'string' 
                            ? `/${project.imageFolder}/${project.images[selectedImage]}` 
                            : `/${project.imageFolder}/${project.images[selectedImage].filename}`}
                          alt={typeof project.images[selectedImage] === 'string' 
                            ? `${project.name} - ${project.images[selectedImage]}` 
                            : project.images[selectedImage].description || `${project.name} - ${project.images[selectedImage].filename}`}
                          width={1200}
                          height={675}
                          className="w-full h-full object-contain max-h-[70vh]"
                        />
                      </div>
                      <figcaption className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-white">
                        <p className="text-xs font-mono text-gray-600 mb-2 uppercase tracking-wider">Fig. {selectedImage + 1}</p>
                        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed break-words">
                          {typeof project.images[selectedImage] === 'string' 
                            ? `${project.name} - Image ${selectedImage + 1}` 
                            : project.images[selectedImage].description}
                        </p>
                      </figcaption>
                    </div>
                  </div>
                )}
              </section>
            )}

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="border border-gray-300 rounded-sm p-4 sm:p-6 md:p-8 bg-white hover:border-gray-400 transition-colors">
                <h2 className="text-xs font-mono text-gray-600 mb-3 sm:mb-4 uppercase tracking-wider">02. Abstract</h2>
                <div className="text-xs sm:text-sm text-gray-800 leading-relaxed break-words">
                  {project.abstract || <span className="text-gray-400 italic">Documentation in progress...</span>}
                </div>
              </div>

              <div className="border border-gray-300 rounded-sm p-4 sm:p-6 md:p-8 bg-white hover:border-gray-400 transition-colors">
                <h2 className="text-xs font-mono text-gray-600 mb-3 sm:mb-4 uppercase tracking-wider">03. Research Question</h2>
                <div className="text-xs sm:text-sm text-gray-800 leading-relaxed break-words">
                  {project.objective || <span className="text-gray-400 italic">Documentation in progress...</span>}
                </div>
              </div>

              <div className="border border-gray-300 rounded-sm p-4 sm:p-6 md:p-8 bg-white hover:border-gray-400 transition-colors">
                <h2 className="text-xs font-mono text-gray-600 mb-3 sm:mb-4 uppercase tracking-wider">04. Hypothesis</h2>
                <div className="text-xs sm:text-sm text-gray-800 leading-relaxed break-words">
                  {project.hypothesis || <span className="text-gray-400 italic">Documentation in progress...</span>}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('visualSystem')}
                    className="flex items-center gap-2 group hover:text-gray-900 active:text-gray-700 transition-colors touch-manipulation"
                  >
                    {openSections.visualSystem ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">05. Apparatus / Visual System</h2>
                  </button>
                </div>
                <div>
                  {openSections.visualSystem && (
                    <div>
                      {project.visualSystem ? (
                        <VisualSystemGuide 
                          visualSystem={project.visualSystem} 
                          projectSlug={slug}
                          projectData={projectData}
                        />
                      ) : (
                        <span className="text-gray-400 italic">Documentation in progress...</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('methodology')}
                    className="flex items-center gap-2 w-full text-left group touch-manipulation"
                  >
                    {openSections.methodology ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">06. Methodology</h2>
                  </button>
                </div>
                <div>
                  {openSections.methodology && (
                    <div className="space-y-4">
                      {project.methodology ? (
                        Array.isArray(project.methodology) ? (
                          <div className="border border-gray-300 rounded-sm overflow-hidden">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-50 border-b border-gray-300">
                                <tr>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-mono text-xs text-gray-600 uppercase">Step</th>
                                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-mono text-xs text-gray-600 uppercase">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {project.methodology.map((step, idx) => (
                                  <tr key={idx} className="border-b border-gray-200 last:border-b-0 bg-white">
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-mono text-xs text-gray-600 bg-gray-50 break-words">{step.step || step[0]}</td>
                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 break-words">{step.description || step[1]}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="text-sm sm:text-base text-gray-800 leading-relaxed break-words">
                            {project.methodology}
                          </div>
                        )
                      ) : (
                        <span className="text-gray-400 italic">Documentation in progress...</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('results')}
                    className="flex items-center gap-2 w-full text-left group touch-manipulation"
                  >
                    {openSections.results ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">07. Results</h2>
                  </button>
                </div>
                <div>
                  {openSections.results && (
                    <div className="text-sm sm:text-base text-gray-800 leading-relaxed break-words">
                      {project.outcomes || <span className="text-gray-400 italic">Documentation in progress...</span>}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('analysis')}
                    className="flex items-center gap-2 w-full text-left group touch-manipulation"
                  >
                    {openSections.analysis ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">08. Analysis / Discussion</h2>
                  </button>
                </div>
                <div>
                  {openSections.analysis && (
                    <div className="text-sm sm:text-base text-gray-800 leading-relaxed break-words">
                      {project.analysis || <span className="text-gray-400 italic">Documentation in progress...</span>}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('conclusion')}
                    className="flex items-center gap-2 w-full text-left group touch-manipulation"
                  >
                    {openSections.conclusion ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">09. Conclusion</h2>
                  </button>
                </div>
                <div>
                  {openSections.conclusion && (
                    <div className="text-sm sm:text-base text-gray-800 leading-relaxed break-words">
                      {project.conclusion || <span className="text-gray-400 italic">Documentation in progress...</span>}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('futureWork')}
                    className="flex items-center gap-2 w-full text-left group touch-manipulation"
                  >
                    {openSections.futureWork ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">10. Future Work</h2>
                  </button>
                </div>
                <div>
                  {openSections.futureWork && (
                    <div>
                      {project.futureWork ? (
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 leading-relaxed space-y-2 break-words">
                          {Array.isArray(project.futureWork) ? (
                            project.futureWork.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))
                          ) : (
                            <li>{project.futureWork}</li>
                          )}
                        </ul>
                      ) : (
                        <span className="text-gray-400 italic">Documentation in progress...</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('appendix')}
                    className="flex items-center gap-2 w-full text-left group touch-manipulation"
                  >
                    {openSections.appendix ? (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                    )}
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-wider">11. Appendix / Technologies</h2>
                  </button>
                </div>
                <div>
                  {openSections.appendix && (
                    <div>
                      {project.technologies ? (
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 leading-relaxed space-y-2 break-words">
                          {Array.isArray(project.technologies) ? (
                            project.technologies.map((tech, idx) => (
                              <li key={idx}>{tech}</li>
                            ))
                          ) : (
                            <li>{project.technologies}</li>
                          )}
                        </ul>
                      ) : (
                        <span className="text-gray-400 italic">Documentation in progress...</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
