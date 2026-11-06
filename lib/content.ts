// All portfolio content in German (default) and English.
// Edit text here — every section on the site reads from this file.

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://maram-abumuhfouz.com').replace(/\/$/, '');

export const person = {
  name: 'Maram Abu-Muhfouz',
  title: 'Dr.-Ing.',
  fullName: 'Dr.-Ing. Maram Abu-Muhfouz',
  email: 'marammuhfouz@outlook.com',
  // TODO: replace with her real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/maram-abu-muhfouz',
  location: 'Düsseldorf, Deutschland',
  dissertationUrl: 'https://publications.rwth-aachen.de/record/1019384',
  talkUrl: 'https://dgm.inventum.de/app/medialibrary/show/eventItem/0c37c647-b066-4eb1-9fcd-f04a1cd628f3',
  // Put the CV PDF in /public/cv/ with this name
  cvUrl: '/cv/Maram_Abu-Muhfouz_CV.pdf',
};

/**
 * Research figures from the dissertation.
 * Drop image files into /public/research/ and set `src`, e.g. '/research/ebsd-map.jpg'.
 * While `src` is empty a styled placeholder is shown.
 */
export const figures = {
  ebsd: '',
  xrd: '',
  sem: '',
  crossSection: '',
  code: '',
};

const de = {
  meta: {
    title: 'Dr.-Ing. Maram Abu-Muhfouz – Prozessingenieurin F&E | Dünnschicht & Werkstoffwissenschaft',
    description:
      'Portfolio von Dr.-Ing. Maram Abu-Muhfouz: Promotion in Werkstoffwissenschaft (RWTH Aachen, Max-Planck-Institut), β-FeSi₂-Dünnschichten, EBSD, XRD, Elektronenmikroskopie und Prozessentwicklung von der Forschung bis zur Industrie.',
    keywords: [
      'Maram Abu-Muhfouz', 'Prozessingenieurin', 'Forschung und Entwicklung', 'Werkstoffwissenschaft', 'Dünnschicht',
      'β-FeSi2', 'EBSD', 'XRD', 'Elektronenmikroskopie', 'Sputtern', 'PVD', 'Photovoltaik', 'RWTH Aachen',
      'Max-Planck-Institut', 'Düsseldorf',
    ],
  },
  nav: { home: 'Start', profile: 'Profil', research: 'Promotion', methods: 'Methoden', experience: 'Erfahrung', contact: 'Kontakt' },
  ui: {
    theme: 'Design wechseln', language: 'Sprache', downloadCv: 'Lebenslauf (PDF)', contactMe: 'Kontakt aufnehmen',
    viewThesis: 'Dissertation ansehen', watchTalk: 'Vortrag ansehen (MSE 2022)', skip: 'Zum Inhalt springen',
    imagePending: 'Abbildung aus der Dissertation', present: 'heute', scroll: 'Scrollen',
  },
  hero: {
    eyebrow: 'Prozessingenieurin – Forschung & Entwicklung',
    tagline: 'Von der Werkstoffwissenschaft zur industriellen Prozessentwicklung',
    intro:
      'Ich verbinde Dünnschichttechnologie, Mikrostrukturanalyse und datenbasierte Prozessoptimierung – vom Labor des Max-Planck-Instituts bis zur skalierbaren Anwendung.',
    stats: [
      { value: '5+', label: 'Jahre Forschung am Max-Planck-Institut' },
      { value: '3', label: 'Sprachen: DE · EN · AR' },
      { value: '15+', label: 'Charakterisierungsmethoden' },
      { value: '1.', label: 'Platz CTCN Climate Innovation Award' },
    ],
  },
  profile: {
    kicker: 'Kurzprofil',
    title: 'Analytisch. Systematisch. Lösungsorientiert.',
    text:
      'Promovierte Werkstoffwissenschaftlerin (RWTH Aachen) mit Forschung am Max-Planck-Institut für Nachhaltige Materialien (ehem. Max-Planck-Institut für Eisenforschung) in Düsseldorf. Mein Schwerpunkt liegt auf der Herstellung und Charakterisierung von Dünnschichten und darauf, wie Prozessparameter die Mikrostruktur und damit die Materialeigenschaften bestimmen.',
    points: [
      { t: 'Promotion in Werkstoffwissenschaft', d: 'RWTH Aachen – Forschung am Max-Planck-Institut, Düsseldorf' },
      { t: 'β-FeSi₂-Dünnschichten', d: 'Nachhaltiges Absorbermaterial aus häufig vorkommenden Elementen für die Photovoltaik' },
      { t: 'Prozessentwicklung', d: 'Parameteranalyse und -optimierung bei DC/RF-Sputtern (PVD)' },
      { t: 'Mikrostruktur & Phasen', d: 'EBSD, ECCI, XRD, CL, FIB, APT – korrelative Charakterisierung' },
      { t: 'Problemlösung', d: 'Analytisch, systematisch und datenbasiert' },
    ],
  },
  research: {
    kicker: 'Promotion',
    title: 'β-FeSi₂-Dünnschichten für die Photovoltaik',
    subtitle: 'Bildung, Mikrostruktur und Phasenentwicklung gesputterter Schichten auf kostengünstigen Substraten',
    blocks: [
      {
        t: 'Thema & Materialsystem',
        d: 'β-FeSi₂ ist ein umweltfreundlicher Halbleiter aus häufig vorkommenden Elementen mit geringem CO₂-Fußabdruck. Sein optischer Absorptionskoeffizient (α > 10⁵ cm⁻¹ oberhalb von 1,0 eV) liegt mehr als eine Größenordnung über dem von Si und GaAs – ideal für sehr dünne Absorberschichten.',
      },
      {
        t: 'Zentrale Forschungsfragen',
        d: 'Wie steuern Prozessbedingungen die Phasenbildung? Wie entwickeln sich Mikrostruktur, Textur und Phasenverteilung über die Schichtdicke? Und lassen sich hochwertige Schichten auf preiswertem Edelstahl statt auf Silizium-Wafern herstellen?',
      },
      {
        t: 'Einfluss von Prozess & Temperatur',
        d: 'Schichten von 400 nm und 800 nm wurden auf 304-Edelstahl gesputtert. Die Abscheidung bei niedrigen Temperaturen (220–400 °C) ergab dichte, porenfreie Schichten mit guter Haftung zum Substrat.',
      },
      {
        t: 'Mikrostruktur, Textur & Phasen',
        d: 'Die Phasenumwandlung wurde mit EBSD und XRD verfolgt. EBSD-Mappings an Querschnitten zeigen Mikrostruktur, räumliche Phasenverteilung und kristallographische Textur der Schichten.',
      },
      {
        t: 'Mein Beitrag & Ergebnisse',
        d: 'Eigenständige Schichtherstellung (DC/RF-Sputtern), Optimierung der Abscheideparameter, Probenpräparation und korrelative Elektronenmikroskopie (EBSD, ECCI, CL, APT) sowie Modellierung mit COMSOL und MATLAB. Ergebnisse vorgestellt u. a. auf dem MSE-Kongress 2022 und der IEEE-NANO 2024.',
      },
    ],
    equationsTitle: 'Mathematische Grundlagen & Programmierung',
    equationsText:
      'Die Auswertung stützt sich auf physikalische Grundbeziehungen und eigene Skripte zur Datenanalyse und Simulation.',
    equations: [
      { f: 'nλ = 2d · sin θ', l: 'Bragg-Gleichung – Phasenidentifikation (XRD)' },
      { f: 'I(x) = I₀ · e^(−αx)', l: 'Lambert-Beer – optische Absorption in dünnen Schichten' },
      { f: '(αhν)² ∝ (hν − E_g)', l: 'Tauc-Beziehung – Bestimmung der Bandlücke' },
    ],
    tools: ['Python', 'MATLAB', 'COMSOL Multiphysics', 'C++', 'Datenanalyse'],
  },
  methods: {
    kicker: 'Methoden & Materialien',
    title: 'Vom Prozess zur Mikrostruktur',
    items: [
      { k: 'EBSD', t: 'Mikrostruktur & kristallographische Textur', d: 'Orientierungs-, Phasen- und Korngrößenkarten an Querschnitten der Dünnschichten.' },
      { k: 'XRD', t: 'Phasenidentifikation & Kristallstruktur', d: 'Verfolgung der Phasenumwandlung und Bestimmung der Kristallstruktur.' },
      { k: 'SEM / ECCI / CL', t: 'Elektronenmikroskopie', d: 'Beobachtung der Mikrostruktur, Defektanalyse und lokale optoelektronische Eigenschaften.' },
      { k: 'FIB / APT', t: 'Nanoskalige Analyse', d: 'Zielpräparation per FIB und Atomsondentomographie für die chemische Zusammensetzung.' },
    ],
    materialsTitle: 'Materialien & Substrate',
    materials: ['β-FeSi₂-Dünnschichten (400 nm / 800 nm)', 'Edelstahl 304 als kostengünstiges Substrat', 'DC- & RF-Magnetronsputtern (PVD)', 'Perowskit-Solarzellen (Kooperation)', 'ZnO, Ag-Nanostäbe, Graphen'],
    figures: { ebsd: 'EBSD-Phasenkarte (Querschnitt)', xrd: 'XRD-Diffraktogramm', sem: 'REM-Aufnahme der Schichtoberfläche', crossSection: 'Querschnitt Schicht/Substrat' },
  },
  relevance: {
    kicker: 'Bezug zur Position',
    title: 'Was ich in die Prozessentwicklung einbringe',
    items: [
      { t: 'Prozessparameter → Eigenschaften', d: 'Ich verstehe, wie Abscheide- und Prozessparameter die Materialeigenschaften gezielt beeinflussen.' },
      { t: 'Temperatur → Mikrostruktur', d: 'Erfahrung damit, wie die Temperatur Mikrostruktur und Phasenentwicklung steuert.' },
      { t: 'Versuchsplanung & Analyse', d: 'Systematische Planung von Experimenten und strukturierte Auswertung großer Messdatensätze.' },
      { t: 'Fehleranalyse mit Daten', d: 'Troubleshooting auf Basis von Messdaten und Evidenz statt Vermutungen.' },
    ],
    growth: {
      t: 'Mein nächster Entwicklungsschritt',
      d: 'Industrielle Ofen- und Wärmebehandlungsprozesse: Ich möchte mein Wissen über temperaturabhängige Phasenbildung gezielt auf den industriellen Maßstab übertragen und hier weiter wachsen.',
    },
  },
  experience: {
    kicker: 'Berufserfahrung',
    title: 'Stationen',
    jobs: [
      {
        role: 'Wissenschaftlerin', org: 'Max-Planck-Institut für Eisenforschung (MPIE) GmbH', place: 'Düsseldorf', from: '07/2020', to: '',
        bullets: [
          'Mikrostruktur-Eigenschafts-Beziehungen und Bildungsmechanismen polykristalliner β-FeSi₂-Dünnschichten mittels korrelativer Elektronenmikroskopie.',
          'Herstellung per DC/RF-Sputtern; Optimierung der Parameter für Schichthomogenität und Haftung mit Blick auf industrielle Relevanz.',
          'Charakterisierung mit EBSD, ECCI, Kathodolumineszenz und Atomsondentomographie.',
          'Modellierung optoelektronischer Eigenschaften mit COMSOL und MATLAB; vorausschauende Wartungskonzepte für Laborgeräte.',
          'Charakterisierung von Perowskit-Solarzellen für die Universität Wuppertal.',
        ],
      },
      {
        role: 'Laboringenieurin', org: 'Karlsruher Institut für Technologie (KIT)', place: 'Karlsruhe', from: '01/2020', to: '06/2020',
        bullets: ['Herstellung von Perowskit-Solarzellen in Reinraum und Glovebox.', 'Effizienzsteigerung durch Upconversion-Quantenpunkte; Charakterisierung mit Laserspektroskopie, XRD und Raman.'],
      },
      {
        role: 'Wissenschaftliche Mitarbeiterin', org: 'Al Hussein Technical University (HTU)', place: 'Amman', from: '06/2019', to: '12/2019',
        bullets: ['Forschung zu intelligenten Energiesystemen und nachhaltigen Materialien; Koordination hochschulübergreifender Kooperationen.'],
      },
      {
        role: 'Forschungspraktikantin', org: 'LMU München & TUM Open Research Lab', place: 'München', from: '07/2018', to: '09/2018',
        bullets: ['Entwicklung der OSWD-Methode zur Integration organischer Halbleiter mit Graphen; Analyse mit STM/STS.', 'Vorstellung der Laborforschung bei TEDxTUM.'],
      },
      {
        role: 'Leiterin Planung & Entwicklung', org: 'Power Guide for Energy Systems', place: 'Amman', from: '01/2017', to: '10/2017',
        bullets: ['Auslegung von Freiflächen- und Dach-PV-Anlagen für Industrie, Wohnbau und Landwirtschaft; technische Angebote und Kundenverhandlungen.'],
      },
    ],
    educationTitle: 'Ausbildung',
    education: [
      { d: 'Dr.-Ing. Werkstoffwissenschaft', o: 'RWTH Aachen (Forschung am MPIE Düsseldorf)', y: '2020 – 2025' },
      { d: 'M.Sc. Nanoengineering & Nanoscience – mit Auszeichnung', o: 'KIT Karlsruhe & JUST', y: '2018 – 2020' },
      { d: 'B.Sc. Elektrische Energietechnik', o: 'Al-Balqa’ Applied University', y: '2011 – 2015' },
    ],
    skillsTitle: 'Kernkompetenzen',
    skills: [
      { g: 'Werkstoffe & Prozesse', s: ['PVD / DC- & RF-Sputtern', 'Prozessoptimierung', 'Mikrostruktur–Eigenschaft', 'Sol-Gel', 'Reinraum & Glovebox'] },
      { g: 'Charakterisierung', s: ['SEM', 'EBSD', 'ECCI', 'CL', 'FIB', 'STEM', 'APT', 'AFM', 'STM/STS', 'XRD', 'Raman', 'UV-VIS'] },
      { g: 'Simulation & Programmierung', s: ['COMSOL', 'MATLAB', 'Python', 'C++', 'AutoCAD'] },
      { g: 'Energie & Photovoltaik', s: ['Perowskit-Solarzellen', 'β-FeSi₂', 'PV-Anlagenplanung', 'PVsyst', 'HelioScope'] },
    ],
  },
  activities: {
    kicker: 'Aktivitäten',
    title: 'Konferenzen, Kooperationen & Initiativen',
    conferences: {
      t: 'Konferenzen & Vorträge',
      items: ['IEEE-NANO 2024 – Gijón, Spanien', 'MSE-Kongress 2022 – Vortrag zu β-FeSi₂-Dünnschichten', 'Solar Solutions Düsseldorf & Bremen (2023–2024)', 'TEDxTUM – Laborvertreterin (2018)', 'ICCNA (2018)', 'High Voltage Conference – Referentin, University of Jordan (2014)'],
    },
    collaborations: {
      t: 'Workshops & Kooperationen',
      items: ['Perowskit-Charakterisierung mit der Universität Wuppertal', 'Dünnschicht-Training (DC-/RF-PVD), RWTH Aachen', 'Charakterisierungstraining FIB, 3D-SEM, SEM-CL am MPIE', 'Graphen- und STM-Forschung mit LMU & TUM'],
    },
    initiatives: {
      t: 'Initiativen & Engagement',
      items: ['IEEE / IEEE Women in Engineering', 'Association of Energy Engineers (AEE)', 'Jordan Engineers Association (JEA)', 'Wissenschaftskommunikation für ein breites Publikum'],
    },
    learned: {
      t: 'Was ich mitnehme',
      d: 'Komplexe Ergebnisse verständlich präsentieren, interdisziplinär zwischen Forschung und Industrie arbeiten und internationale Teams koordinieren.',
    },
    awardsTitle: 'Auszeichnungen',
    awards: [
      { y: '2025', t: 'CTCN MENA Youth Climate Innovation Award – 1. Platz' },
      { y: '2022', t: 'CTCN MENA Youth Climate Innovation Academy Award – 1. Platz' },
      { y: '2018', t: 'LMU München International Award – Finalistin, 1. Platz' },
      { y: '2018', t: 'TUM Open Lab Research Award' },
    ],
    pubsTitle: 'Publikationen',
    pubs: [
      'Greiner, A., Abu-Muhfouz, M., Guadarrama, A., Heckl, W. M., Trixler, F. – „Conducting Experiments with Organic Semiconductors: A Simple Sample Preparation for STM Courses“, J. Chem. Educ. (in Vorbereitung).',
      'Rabady, R., Abu-Muhfouz, M. – „Modeling and Testing Efficiency Enhancement of Solar Cells Using Quantum Dots as Down-Converters“, Solar Energy (in Vorbereitung).',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Kurz gefragt',
    items: [
      { q: 'Wer ist Dr.-Ing. Maram Abu-Muhfouz?', a: 'Eine promovierte Werkstoffwissenschaftlerin (RWTH Aachen) und Prozessingenieurin für Forschung & Entwicklung mit Sitz in Düsseldorf. Sie forschte am Max-Planck-Institut zu β-FeSi₂-Dünnschichten für die Photovoltaik.' },
      { q: 'Welche Methoden beherrscht sie?', a: 'Dünnschichtabscheidung (DC/RF-Sputtern, PVD) sowie Charakterisierung mit EBSD, XRD, SEM, ECCI, Kathodolumineszenz, FIB und Atomsondentomographie; Simulation mit COMSOL, MATLAB und Python.' },
      { q: 'Für welche Positionen ist sie offen?', a: 'Prozessingenieurin, F&E-Ingenieurin und Werkstoffwissenschaftlerin in Industrie und angewandter Forschung – insbesondere Beschichtung, Wärmebehandlung, Halbleiter und Photovoltaik.' },
      { q: 'Welche Sprachen spricht sie?', a: 'Deutsch (C1), Englisch (C1) und Arabisch (Muttersprache).' },
    ],
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Lassen Sie uns sprechen',
    text: 'Offen für Positionen in Prozessentwicklung sowie Forschung & Entwicklung. Ich freue mich über Ihre Nachricht.',
    languages: 'Deutsch C1 · Englisch C1 · Arabisch Muttersprache',
  },
  footer: { rights: 'Alle Rechte vorbehalten.', imprint: 'Impressum', privacy: 'Datenschutz' },
};

export type Dict = typeof de;

const en: Dict = {
  meta: {
    title: 'Dr.-Ing. Maram Abu-Muhfouz – R&D Process Engineer | Thin Films & Materials Science',
    description:
      'Portfolio of Dr.-Ing. Maram Abu-Muhfouz: PhD in Materials Science (RWTH Aachen, Max Planck Institute), β-FeSi₂ thin films, EBSD, XRD, electron microscopy and process development from research to industry.',
    keywords: [
      'Maram Abu-Muhfouz', 'Process Engineer', 'Research and Development', 'Materials Science', 'Thin Films',
      'β-FeSi2', 'EBSD', 'XRD', 'Electron Microscopy', 'Sputtering', 'PVD', 'Photovoltaics', 'RWTH Aachen',
      'Max Planck Institute', 'Düsseldorf',
    ],
  },
  nav: { home: 'Home', profile: 'Profile', research: 'PhD', methods: 'Methods', experience: 'Experience', contact: 'Contact' },
  ui: {
    theme: 'Toggle theme', language: 'Language', downloadCv: 'Download CV (PDF)', contactMe: 'Get in touch',
    viewThesis: 'View dissertation', watchTalk: 'Watch talk (MSE 2022)', skip: 'Skip to content',
    imagePending: 'Figure from the dissertation', present: 'present', scroll: 'Scroll',
  },
  hero: {
    eyebrow: 'Process Engineer – Research & Development',
    tagline: 'From Materials Science to Industrial Process Development',
    intro:
      'I connect thin-film technology, microstructure analysis and data-driven process optimisation – from the Max Planck Institute lab to scalable application.',
    stats: [
      { value: '5+', label: 'years of research at the Max Planck Institute' },
      { value: '3', label: 'languages: DE · EN · AR' },
      { value: '15+', label: 'characterisation techniques' },
      { value: '1st', label: 'place CTCN Climate Innovation Award' },
    ],
  },
  profile: {
    kicker: 'Professional Profile',
    title: 'Analytical. Systematic. Solution-driven.',
    text:
      'Materials scientist with a doctorate from RWTH Aachen and research at the Max Planck Institute for Sustainable Materials (formerly Max Planck Institute for Iron Research) in Düsseldorf. My focus is on fabricating and characterising thin films and on how process parameters define microstructure and, with it, material properties.',
    points: [
      { t: 'PhD in Materials Science', d: 'RWTH Aachen – research at the Max Planck Institute, Düsseldorf' },
      { t: 'β-FeSi₂ thin films', d: 'Sustainable absorber material made from earth-abundant elements for photovoltaics' },
      { t: 'Process development', d: 'Parameter analysis and optimisation for DC/RF sputtering (PVD)' },
      { t: 'Microstructure & phases', d: 'EBSD, ECCI, XRD, CL, FIB, APT – correlative characterisation' },
      { t: 'Problem-solving', d: 'Analytical, systematic and data-driven' },
    ],
  },
  research: {
    kicker: 'PhD Research',
    title: 'β-FeSi₂ Thin Films for Photovoltaics',
    subtitle: 'Formation, microstructure and phase evolution of sputtered films on low-cost substrates',
    blocks: [
      {
        t: 'Research topic & material system',
        d: 'β-FeSi₂ is an eco-friendly semiconductor made from abundant elements with a low carbon footprint. Its optical absorption coefficient (α > 10⁵ cm⁻¹ above 1.0 eV) is more than an order of magnitude higher than that of Si and GaAs – ideal for very thin absorber layers.',
      },
      {
        t: 'Main research questions',
        d: 'How do process conditions control phase formation? How do microstructure, texture and phase distribution evolve through the film thickness? And can high-quality films be grown on inexpensive stainless steel instead of silicon wafers?',
      },
      {
        t: 'Influence of process & temperature',
        d: '400 nm and 800 nm films were sputtered onto 304 stainless steel. Deposition at low temperatures (220–400 °C) produced dense, pore-free films with good adhesion to the substrate.',
      },
      {
        t: 'Microstructure, texture & phases',
        d: 'Phase transformation was tracked with EBSD and XRD. EBSD mapping on cross-sections reveals the microstructure, spatial phase distribution and crystallographic texture of the films.',
      },
      {
        t: 'My contribution & findings',
        d: 'Independent film fabrication (DC/RF sputtering), deposition-parameter optimisation, sample preparation and correlative electron microscopy (EBSD, ECCI, CL, APT), plus modelling in COMSOL and MATLAB. Results presented at the MSE Congress 2022 and IEEE-NANO 2024, among others.',
      },
    ],
    equationsTitle: 'Mathematical foundations & programming',
    equationsText: 'The analysis builds on core physical relations and my own scripts for data analysis and simulation.',
    equations: [
      { f: 'nλ = 2d · sin θ', l: 'Bragg’s law – phase identification (XRD)' },
      { f: 'I(x) = I₀ · e^(−αx)', l: 'Beer–Lambert – optical absorption in thin films' },
      { f: '(αhν)² ∝ (hν − E_g)', l: 'Tauc relation – band-gap determination' },
    ],
    tools: ['Python', 'MATLAB', 'COMSOL Multiphysics', 'C++', 'Data analysis'],
  },
  methods: {
    kicker: 'Methods & Materials',
    title: 'From process to microstructure',
    items: [
      { k: 'EBSD', t: 'Microstructure & crystallographic texture', d: 'Orientation, phase and grain-size maps on thin-film cross-sections.' },
      { k: 'XRD', t: 'Phase identification & crystal structure', d: 'Tracking phase transformation and determining crystal structure.' },
      { k: 'SEM / ECCI / CL', t: 'Electron microscopy', d: 'Microstructure observation, defect analysis and local optoelectronic properties.' },
      { k: 'FIB / APT', t: 'Nanoscale analysis', d: 'Site-specific FIB preparation and atom probe tomography for chemical composition.' },
    ],
    materialsTitle: 'Materials & substrates',
    materials: ['β-FeSi₂ thin films (400 nm / 800 nm)', '304 stainless steel as low-cost substrate', 'DC & RF magnetron sputtering (PVD)', 'Perovskite solar cells (collaboration)', 'ZnO, Ag nanorods, graphene'],
    figures: { ebsd: 'EBSD phase map (cross-section)', xrd: 'XRD diffractogram', sem: 'SEM image of the film surface', crossSection: 'Film/substrate cross-section' },
  },
  relevance: {
    kicker: 'Relevance to the Role',
    title: 'What I bring to process development',
    items: [
      { t: 'Process parameters → properties', d: 'I understand how deposition and process parameters shape material properties.' },
      { t: 'Temperature → microstructure', d: 'Hands-on experience of how temperature drives microstructure and phase evolution.' },
      { t: 'Experimental planning & analysis', d: 'Systematic design of experiments and structured analysis of large measurement data sets.' },
      { t: 'Data-driven troubleshooting', d: 'Troubleshooting based on data and evidence rather than assumptions.' },
    ],
    growth: {
      t: 'My next development step',
      d: 'Industrial furnace and heat-treatment processes: I want to transfer my knowledge of temperature-dependent phase formation to industrial scale and keep growing in this area.',
    },
  },
  experience: {
    kicker: 'Experience',
    title: 'Career path',
    jobs: [
      {
        role: 'Scientist', org: 'Max Planck Institute for Iron Research (MPIE) GmbH', place: 'Düsseldorf', from: '07/2020', to: '',
        bullets: [
          'Microstructure–property correlations and formation mechanisms of polycrystalline β-FeSi₂ thin films using correlative electron microscopy.',
          'Fabrication via DC/RF sputtering; parameter optimisation for layer uniformity and adhesion with industrial relevance in mind.',
          'Characterisation with EBSD, ECCI, cathodoluminescence and atom probe tomography.',
          'Modelling of optoelectronic properties in COMSOL and MATLAB; predictive maintenance protocols for lab instruments.',
          'Characterisation of perovskite solar cells for the University of Wuppertal.',
        ],
      },
      {
        role: 'Laboratory Engineer', org: 'Karlsruhe Institute of Technology (KIT)', place: 'Karlsruhe', from: '01/2020', to: '06/2020',
        bullets: ['Fabricated perovskite solar cells in cleanroom and glovebox.', 'Boosted efficiency with up-conversion quantum dots; characterised with laser spectroscopy, XRD and Raman.'],
      },
      {
        role: 'Research Assistant', org: 'Al Hussein Technical University (HTU)', place: 'Amman', from: '06/2019', to: '12/2019',
        bullets: ['Research on smart energy systems and sustainable materials; coordinated inter-university collaborations.'],
      },
      {
        role: 'Research Intern', org: 'LMU Munich & TUM Open Research Lab', place: 'Munich', from: '07/2018', to: '09/2018',
        bullets: ['Developed the OSWD method to integrate organic semiconductors with graphene; analysis by STM/STS.', 'Presented the lab’s research at TEDxTUM.'],
      },
      {
        role: 'Head of Planning & Development', org: 'Power Guide for Energy Systems', place: 'Amman', from: '01/2017', to: '10/2017',
        bullets: ['Designed ground-mounted and rooftop PV systems for industrial, residential and agricultural clients; technical proposals and client negotiations.'],
      },
    ],
    educationTitle: 'Education',
    education: [
      { d: 'Dr.-Ing. Materials Science', o: 'RWTH Aachen (research at MPIE Düsseldorf)', y: '2020 – 2025' },
      { d: 'M.Sc. Nanoengineering & Nanoscience – with distinction', o: 'KIT Karlsruhe & JUST', y: '2018 – 2020' },
      { d: 'B.Sc. Electrical Power Engineering', o: 'Al-Balqa’ Applied University', y: '2011 – 2015' },
    ],
    skillsTitle: 'Core competencies',
    skills: [
      { g: 'Materials & processes', s: ['PVD / DC & RF sputtering', 'Process optimisation', 'Microstructure–property', 'Sol-gel', 'Cleanroom & glovebox'] },
      { g: 'Characterisation', s: ['SEM', 'EBSD', 'ECCI', 'CL', 'FIB', 'STEM', 'APT', 'AFM', 'STM/STS', 'XRD', 'Raman', 'UV-VIS'] },
      { g: 'Simulation & programming', s: ['COMSOL', 'MATLAB', 'Python', 'C++', 'AutoCAD'] },
      { g: 'Energy & photovoltaics', s: ['Perovskite solar cells', 'β-FeSi₂', 'PV system design', 'PVsyst', 'HelioScope'] },
    ],
  },
  activities: {
    kicker: 'Selected Activities',
    title: 'Conferences, collaborations & initiatives',
    conferences: {
      t: 'Conferences & presentations',
      items: ['IEEE-NANO 2024 – Gijón, Spain', 'MSE Congress 2022 – talk on β-FeSi₂ thin films', 'Solar Solutions Düsseldorf & Bremen (2023–2024)', 'TEDxTUM – lab representative (2018)', 'ICCNA (2018)', 'High Voltage Conference – speaker, University of Jordan (2014)'],
    },
    collaborations: {
      t: 'Workshops & collaborations',
      items: ['Perovskite characterisation with the University of Wuppertal', 'Thin-film training (DC/RF PVD), RWTH Aachen', 'FIB, 3D-SEM and SEM-CL training at MPIE', 'Graphene and STM research with LMU & TUM'],
    },
    initiatives: {
      t: 'Initiatives & engagement',
      items: ['IEEE / IEEE Women in Engineering', 'Association of Energy Engineers (AEE)', 'Jordan Engineers Association (JEA)', 'Science communication for broad audiences'],
    },
    learned: {
      t: 'What I took away',
      d: 'Presenting complex results clearly, working across research and industry, and coordinating international teams.',
    },
    awardsTitle: 'Awards',
    awards: [
      { y: '2025', t: 'CTCN MENA Youth Climate Innovation Award – 1st place' },
      { y: '2022', t: 'CTCN MENA Youth Climate Innovation Academy Award – 1st place' },
      { y: '2018', t: 'LMU Munich International Award – 1st place finalist' },
      { y: '2018', t: 'TUM Open Lab Research Award' },
    ],
    pubsTitle: 'Publications',
    pubs: [
      'Greiner, A., Abu-Muhfouz, M., Guadarrama, A., Heckl, W. M., Trixler, F. – “Conducting Experiments with Organic Semiconductors: A Simple Sample Preparation for STM Courses”, J. Chem. Educ. (in preparation).',
      'Rabady, R., Abu-Muhfouz, M. – “Modeling and Testing Efficiency Enhancement of Solar Cells Using Quantum Dots as Down-Converters”, Solar Energy (in preparation).',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Quick answers',
    items: [
      { q: 'Who is Dr.-Ing. Maram Abu-Muhfouz?', a: 'A materials scientist with a doctorate from RWTH Aachen and an R&D process engineer based in Düsseldorf. She researched β-FeSi₂ thin films for photovoltaics at the Max Planck Institute.' },
      { q: 'Which techniques does she master?', a: 'Thin-film deposition (DC/RF sputtering, PVD) and characterisation with EBSD, XRD, SEM, ECCI, cathodoluminescence, FIB and atom probe tomography; simulation in COMSOL, MATLAB and Python.' },
      { q: 'Which roles is she open to?', a: 'Process engineer, R&D engineer and materials scientist roles in industry and applied research – especially coatings, heat treatment, semiconductors and photovoltaics.' },
      { q: 'Which languages does she speak?', a: 'German (C1), English (C1) and Arabic (native).' },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    text: 'Open to roles in process development and research & development. I look forward to hearing from you.',
    languages: 'German C1 · English C1 · Arabic native',
  },
  footer: { rights: 'All rights reserved.', imprint: 'Imprint', privacy: 'Privacy' },
};

export const dictionaries: Record<Locale, Dict> = { de, en };
export const getDict = (l: Locale) => dictionaries[l] ?? dictionaries[defaultLocale];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
