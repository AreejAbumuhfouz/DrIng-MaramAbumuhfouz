// All portfolio content in German (default) and English.
// Edit text here — every section on the site reads from this file.

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://maram-abumuhfouz.com').replace(/\/$/, '');

export const person = {
  name: 'Maram Abu-Muhfouz',
  title: 'Dr.-Ing.',
  fullName: 'Dr.-Ing. Maram Abu-Muhfouz',
  email: 'marammuhfouz@outlook.com',
  linkedin: 'https://www.linkedin.com/in/maram-abumuhfouz/',
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
      'Portfolio von Dr.-Ing. Maram Abu-Muhfouz: Promotion in Werkstofftechnik (RWTH Aachen, Max-Planck-Institut), β-FeSi₂-Dünnschichten, Perowskit-Solarzellen, COMSOL, EBSD, XRD, Elektronenmikroskopie und Prozessentwicklung von der Forschung bis zur Industrie.',
    keywords: [
      'Maram Abu-Muhfouz', 'Prozessingenieurin', 'Forschung und Entwicklung', 'Werkstoffwissenschaft', 'Dünnschicht',
      'β-FeSi2', 'EBSD', 'XRD', 'Elektronenmikroskopie', 'Sputtern', 'PVD', 'Photovoltaik', 'RWTH Aachen',
      'Max-Planck-Institut', 'Düsseldorf',
    ],
  },
  nav: { home: 'Start', profile: 'Profil', research: 'Promotion', projects: 'Projekte', experience: 'Erfahrung', contact: 'Kontakt' },
  ui: {
    theme: 'Design wechseln', language: 'Sprache', downloadCv: 'Lebenslauf (PDF)', contactMe: 'Kontakt aufnehmen',
    viewThesis: 'Dissertation ansehen', watchTalk: 'Vortrag ansehen (MSE 2022)', skip: 'Zum Inhalt springen',
    imagePending: 'Abbildung aus der Dissertation', present: 'heute', scroll: 'Scrollen',
  },
  hero: {
    eyebrow: 'Prozessingenieurin – Forschung & Entwicklung',
    keywords: ['Prozessentwicklung', 'Mikrostruktur-Engineering', 'Phasenumwandlung', 'Materialcharakterisierung', 'Dünnschichtherstellung'],
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
      'Promovierte Werkstoffingenieurin (RWTH Aachen) mit Forschung am Max-Planck-Institut für Nachhaltige Materialien (ehem. Max-Planck-Institut für Eisenforschung) in Düsseldorf. Mein Schwerpunkt liegt auf der Herstellung und Charakterisierung von Dünnschichten und darauf, wie Prozessparameter die Mikrostruktur und damit die Materialeigenschaften bestimmen.',
    points: [
      { t: 'Promotion in Werkstofftechnik (Materials Engineering)', d: 'RWTH Aachen – Forschung am Max-Planck-Institut, Düsseldorf' },
      { t: 'β-FeSi₂-Dünnschichten', d: 'Nachhaltiges Absorbermaterial aus häufig vorkommenden Elementen für die Photovoltaik' },
      { t: 'Prozessentwicklung', d: 'Parameteranalyse und -optimierung bei DC/RF-Sputtern (PVD)' },
      { t: 'Mikrostruktur & Phasen', d: 'EBSD, ECCI, XRD, CL, FIB, APT – korrelative Charakterisierung' },
      { t: 'Problemlösung', d: 'Analytisch, systematisch und datenbasiert' },
    ],
  },
  research: {
    kicker: 'Projekt 1 · Promotion',
    title: 'β-FeSi₂-Dünnschichten für die Photovoltaik',
    thesis:
      'A Study on the Microstructure Formation Mechanisms and Functional Properties of new β-FeSi₂-based Polycrystalline Thin Films for Photovoltaic Applications Using Correlative Electron Microscopy',
    summaryTitle: 'Zusammenfassung der Dissertation',
    summary:
      'β-FeSi₂-Dünnschichten (~800 nm) wurden durch kontrolliertes DC-Sputtern auf Edelstahl (304SS), Si (100) und Saphir Al₂O₃ (0001) hergestellt – mit dem Ziel optimaler Morphologie, Textur und räumlicher Phasenverteilung.',
    blocks: [
      { t: 'Prozessstudie', d: 'Eine Serie von DC-PVD-Experimenten zu kombinierten Sputterparametern und weiteren Faktoren, die Morphologie, Texturbildung, Phasenumwandlung und die Stabilität der β-Phase steuern – inklusive keimbildungs- und wachstumskontrollierter Mechanismen.' },
      { t: 'Korrelative Mikroskopie', d: 'EBSD, XRD und EDS zur Verfolgung der β-FeSi₂-Bildung; 2D-EBSD-Mappings an Querschnitten und Draufsichten für Mikrostruktur, Phasenverteilung und Textur; konfokale Lasermikroskopie für die Rauheit.' },
      { t: 'Gelöste Herausforderung', d: 'Die klassische Hough-Indizierung scheiterte an komplexen tetragonalen/orthorhombischen Phasen, nanoskaligen Körnern und hoher Defektdichte – deshalb wurde Spherical Indexing (SI) für eine exakte Phasenidentifikation eingesetzt.' },
    ],
    findingsTitle: 'Wichtigste Ergebnisse',
    stats: [
      { v: '90% ± 10%', l: 'Anteil der β-Phase auf 304SS' },
      { v: '45 ± 25 nm', l: 'gleichmäßige Korngröße' },
      { v: 'Ra = 32 nm', l: 'moderat glatte Oberfläche' },
      { v: '(001)/(010)', l: 'scharfe Textur – erstmals nachgewiesen' },
    ],
    optimal: 'Optimale Bedingungen: 1 h Abscheidung · 12,12 nm/min · 500 °C Substrattemperatur · 1 Pa – kontinuierliche, hochwertige Schicht mit guter Haftung auf 304SS.',
    tableHead: ['Substrat', 'Höchster β-Anteil', 'Textur'],
    table: [
      ['304SS', '90% ± 10% (1 h, 1 Pa, 500 °C)', 'schwächste; (010)-Pole am stärksten'],
      ['Si (100)', 'bei 1 h, 0,5 Pa, 500 °C', 'stärkste; (010)-Pole am stärksten'],
      ['Al₂O₃ (0001)', '98% ± 2%', '(001)-Peak am stärksten'],
    ],
    notes: [
      'Temperatur: Oberhalb von 600 °C setzt die Fe/Si-Interdiffusion an der Grenzfläche ein.',
      'Kammerposition: Proben in der Mitte zeigen eine scharfe Fasertextur, äußere Proben geneigte Fasern.',
    ],
    routeTitle: 'Optimierungsweg S1 → S4',
    route: [
      { t: 'S1 · Schichtdicke', d: 'Zeit variiert → optimal 66 min, 12,12 nm/min' },
      { t: 'S2 · Phasenverteilung', d: 'Temperatur variiert → optimal 500 °C' },
      { t: 'S3 · Phasendominanz', d: 'Druck variiert → optimal 1 Pa' },
      { t: 'S4 · Textur', d: 'Substrattyp variiert bei festem Prozess' },
    ],
    gallery: [
      { src: '/research/thickness.png', c: 'Dickenoptimierung & Korrelationsstudie (500 °C, 0,5 Pa): SEM, EDS und EBSD' },
      { src: '/research/phase.png', c: 'EBSD-Phasenkarte: β 90% ± 10%, α 10% ± 5% (1 h, 500 °C, 1 Pa)' },
      { src: '/research/ipf.png', c: 'EBSD-IPF-Karte der säulenförmigen β-FeSi₂-Körner' },
      { src: '/research/sem_full.png', c: 'REM-Draufsicht und Querschnitt sowie Rauheitsprofile bei 0,5 und 1 Pa' },
    ],
  },
  methods: {
    kicker: 'Methoden & Materialien',
    title: 'Vom Prozess zur Mikrostruktur',
    items: [
      { k: 'EBSD', t: 'Mikrostruktur & Textur', d: '2D-Mappings an Querschnitten und Draufsichten; Spherical Indexing für komplexe Phasen.', img: '/research/phase.png' },
      { k: 'EDS · XRD', t: 'Zusammensetzung & Phasen', d: 'Elementzusammensetzung und Phasenidentifikation der β-FeSi₂-Bildung.', img: '/research/eds.png' },
      { k: 'SEM', t: 'Elektronenmikroskopie', d: 'Draufsichten und Querschnitte der Schichten, Schichtdicke und Morphologie.', img: '/research/cross800.png' },
    ],
    materialsTitle: 'Materialien & Substrate',
    materials: ['β-FeSi₂-Dünnschichten (~800 nm)', 'DC-Sputtern (PVD)', 'Edelstahl 304SS', 'Si (100)', 'Saphir Al₂O₃ (0001)', 'Konfokale Lasermikroskopie', 'Spherical Indexing'],
  },
  projects: {
    kicker: 'Projekte',
    title: 'Weitere Forschungsprojekte',
    items: [
      {
        n: '02', tag: 'Masterarbeit · KIT & JUST', t: 'Upconversion-Kristalle für Perowskit-Solarzellen',
        d: 'Modeling and Characterization of the Conversion Efficiency Enhancement of Perovskite Solar Cells that Employ Upconversion Crystals for the Solar Spectrum. UC-Kristalle wandeln 976-nm-Licht in sichtbares Licht um, sodass die Zelle (ITO / SnO₂ / FAPbI₃ / Spiro-TTB / MoO₃ / Au) mehr vom Sonnenspektrum nutzt.',
        stats: [
          { v: '~50%', l: 'mehr Jsc bei maximaler Laserleistung' },
          { v: '29,17 mA/cm²', l: 'Jsc mit 50-cm-Linse (18,99 ohne)' },
          { v: '+8,3%', l: 'Jsc-Gewinn laut Modell' },
        ],
        img: '/research/setup.png', cap: 'Messaufbau: 976-nm-Laser, weiße LED und UC-Kristall',
        img2: '/research/jv.png', cap2: 'J-V-Kurven mit 100-cm- und 50-cm-Linse',
        tools: 'Bester von 12 Kristallen: BaF₂ : 15% Yb³⁺, 2% Er³⁺ · Experiment und Modellierung stimmen überein',
      },
      {
        n: '03', tag: 'Perowskit-Dünnschichten · MPIE', t: 'Bleifreie Cs₂AgBiBr₆-Schichten durch planares Heißpressen',
        d: 'Schichten aus DMSO und DMF:DMSO (2:8) wurden mit einem flachen Stempel bei 100 bar und bis zu 240 °C gepresst (PHP). Danach: größere Körner, eine dichte, ebene Oberfläche und schärfere XRD-Reflexe. EBSD zeigt, dass das Pressen die Textur bis zu 10-fach verstärkt und das Lösungsmittel die Orientierung bestimmt: DMSO → (111), DMF → (001).',
        stats: [
          { v: '2,67 → 26,5', l: 'Texturmaximum (DMSO), gepresst' },
          { v: '87,7%', l: '111 ∥ ND im gepressten DMSO-Film' },
          { v: '62,4%', l: '001 ∥ ND im gepressten DMF-Film' },
        ],
        img: '/research/php.png', cap: 'SEM und XRD vor und nach dem Heißpressen',
        img2: '/research/texture.png', cap2: 'EBSD: Polfiguren, Orientierungskarten und Volumenanteile',
        tools: 'SEM · XRD · EBSD-Polfiguren · 100 bar · 150–240 °C',
      },
      {
        n: '04', tag: 'COMSOL-Simulation', t: 'Gekoppelte optoelektronische Simulation einer Perowskit-Zelle',
        d: 'Ein Modell verknüpft Lichtabsorption, Ladungstransport und Wärme im Schichtstapel ITO / ZnO / MAPbI₃ / Spiro-OMeTAD / Au über 24 h (1D → 2D → 3D): Optik → G(x), Drift-Diffusion mit Rekombination → J-V, Wärmeleitung → T(x,t).',
        stats: [
          { v: 'Optik', l: 'Absorption → Generationsrate G(x)' },
          { v: 'Elektrik', l: 'Drift-Diffusion, Rekombination, J-V' },
          { v: 'Thermik', l: 'Joule- und Rekombinationswärme, T(x,t)' },
        ],
        img: '/research/comsol.png', cap: 'Gleichungen, Randbedingungen, Kopplung und Workflow in COMSOL',
        img2: '', cap2: '',
        tools: 'Wave Optics · Semiconductor · Heat Transfer · Referenzergebnisse nach Makableh et al., Solar Energy 202 (2020)',
      },
    ],
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
      { d: 'Promotion (Dr.-Ing.) in Werkstofftechnik', o: 'RWTH Aachen (Forschung am MPIE Düsseldorf)', y: '2020 – 2025' },
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
      { q: 'Wer ist Dr.-Ing. Maram Abu-Muhfouz?', a: 'Eine promovierte Werkstoffingenieurin (PhD in Materials Engineering, RWTH Aachen) und Prozessingenieurin für Forschung & Entwicklung mit Sitz in Düsseldorf. Sie forschte am Max-Planck-Institut zu β-FeSi₂-Dünnschichten für die Photovoltaik.' },
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
      'Portfolio of Dr.-Ing. Maram Abu-Muhfouz: PhD in Materials Engineering (RWTH Aachen, Max Planck Institute), β-FeSi₂ thin films, perovskite solar cells, COMSOL, EBSD, XRD, electron microscopy and process development from research to industry.',
    keywords: [
      'Maram Abu-Muhfouz', 'Process Engineer', 'Research and Development', 'Materials Science', 'Thin Films',
      'β-FeSi2', 'EBSD', 'XRD', 'Electron Microscopy', 'Sputtering', 'PVD', 'Photovoltaics', 'RWTH Aachen',
      'Max Planck Institute', 'Düsseldorf',
    ],
  },
  nav: { home: 'Home', profile: 'Profile', research: 'PhD', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
  ui: {
    theme: 'Toggle theme', language: 'Language', downloadCv: 'Download CV (PDF)', contactMe: 'Get in touch',
    viewThesis: 'View dissertation', watchTalk: 'Watch talk (MSE 2022)', skip: 'Skip to content',
    imagePending: 'Figure from the dissertation', present: 'present', scroll: 'Scroll',
  },
  hero: {
    eyebrow: 'Process Engineer – Research & Development',
    keywords: ['Process Development', 'Microstructure Engineering', 'Phase Transformation', 'Material Characterization', 'Thin Film Fabrication'],
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
      'Materials engineer with a PhD in Materials Engineering from RWTH Aachen and research at the Max Planck Institute for Sustainable Materials (formerly Max Planck Institute for Iron Research) in Düsseldorf. My focus is on fabricating and characterising thin films and on how process parameters define microstructure and, with it, material properties.',
    points: [
      { t: 'PhD in Materials Engineering', d: 'RWTH Aachen – research at the Max Planck Institute, Düsseldorf' },
      { t: 'β-FeSi₂ thin films', d: 'Sustainable absorber material made from earth-abundant elements for photovoltaics' },
      { t: 'Process development', d: 'Parameter analysis and optimisation for DC/RF sputtering (PVD)' },
      { t: 'Microstructure & phases', d: 'EBSD, ECCI, XRD, CL, FIB, APT – correlative characterisation' },
      { t: 'Problem-solving', d: 'Analytical, systematic and data-driven' },
    ],
  },
  research: {
    kicker: 'Project 1 · PhD Research',
    title: 'β-FeSi₂ Thin Films for Photovoltaics',
    thesis:
      'A Study on the Microstructure Formation Mechanisms and Functional Properties of new β-FeSi₂-based Polycrystalline Thin Films for Photovoltaic Applications Using Correlative Electron Microscopy',
    summaryTitle: 'Thesis summary',
    summary:
      'β-FeSi₂ thin films (~800 nm) were produced by controlled DC sputtering on stainless steel (304SS), Si (100) and sapphire Al₂O₃ (0001), to reach the best morphology, texture and spatial phase distribution.',
    blocks: [
      { t: 'Process study', d: 'A series of DC-PVD experiments on how combined sputtering parameters – and factors beyond them – drive morphology, texture formation, phase transformation and β-phase stability, including nucleation- vs. growth-controlled mechanisms.' },
      { t: 'Correlative microscopy', d: 'EBSD, XRD and EDS to monitor β-FeSi₂ formation; 2D EBSD maps on cross-sections and plan views for microstructure, phase distribution and texture; confocal laser microscopy for roughness.' },
      { t: 'Challenge solved', d: 'Classical Hough-transform indexing failed on complex tetragonal/orthorhombic phases, nano-sized grains and high defect density – so spherical indexing (SI) was used to identify the phases accurately.' },
    ],
    findingsTitle: 'Main findings',
    stats: [
      { v: '90% ± 10%', l: 'β-phase fraction on 304SS' },
      { v: '45 ± 25 nm', l: 'uniform grain size' },
      { v: 'Ra = 32 nm', l: 'moderately smooth surface' },
      { v: '(001)/(010)', l: 'sharp texture, shown for the first time' },
    ],
    optimal: 'Optimal conditions: 1 h deposition · 12.12 nm/min · 500 °C substrate · 1 Pa – a continuous, high-quality film with good adhesion to 304SS.',
    tableHead: ['Substrate', 'Highest β-phase fraction', 'Texture'],
    table: [
      ['304SS', '90% ± 10% (1 h, 1 Pa, 500 °C)', 'weakest; (010) poles strongest'],
      ['Si (100)', 'at 1 h, 0.5 Pa, 500 °C', 'strongest; (010) poles strongest'],
      ['Al₂O₃ (0001)', '98% ± 2%', '(001) peak strongest'],
    ],
    notes: [
      'Temperature: above 600 °C, Fe/Si interdiffusion at the interface sets in.',
      'Chamber position: centre samples show a sharp fibre texture; outer samples show inclined fibres.',
    ],
    routeTitle: 'Optimisation route S1 → S4',
    route: [
      { t: 'S1 · Thickness', d: 'Time varied → optimal 66 min, 12.12 nm/min' },
      { t: 'S2 · Phase distribution', d: 'Temperature varied → optimal 500 °C' },
      { t: 'S3 · Phase dominance', d: 'Pressure varied → optimal 1 Pa' },
      { t: 'S4 · Texture', d: 'Substrate type varied at a fixed process' },
    ],
    gallery: [
      { src: '/research/thickness.png', c: 'Thickness optimisation & correlation study (500 °C, 0.5 Pa): SEM, EDS and EBSD' },
      { src: '/research/phase.png', c: 'EBSD phase map: β 90% ± 10%, α 10% ± 5% (1 h, 500 °C, 1 Pa)' },
      { src: '/research/ipf.png', c: 'EBSD IPF map of columnar β-FeSi₂ grains' },
      { src: '/research/sem_full.png', c: 'SEM plan and cross-section views and roughness profiles at 0.5 and 1 Pa' },
    ],
  },
  methods: {
    kicker: 'Methods & Materials',
    title: 'From process to microstructure',
    items: [
      { k: 'EBSD', t: 'Microstructure & texture', d: '2D maps on cross-sections and plan views; spherical indexing for complex phases.', img: '/research/phase.png' },
      { k: 'EDS · XRD', t: 'Composition & phases', d: 'Elemental composition and phase identification of β-FeSi₂ formation.', img: '/research/eds.png' },
      { k: 'SEM', t: 'Electron microscopy', d: 'Plan views and cross-sections of the films, thickness and morphology.', img: '/research/cross800.png' },
    ],
    materialsTitle: 'Materials & substrates',
    materials: ['β-FeSi₂ thin films (~800 nm)', 'DC sputtering (PVD)', '304 stainless steel', 'Si (100)', 'Sapphire Al₂O₃ (0001)', 'Confocal laser microscopy', 'Spherical indexing'],
  },
  projects: {
    kicker: 'Projects',
    title: 'Further research projects',
    items: [
      {
        n: '02', tag: 'Master’s thesis · KIT & JUST', t: 'Up-conversion Crystals for Perovskite Solar Cells',
        d: 'Modeling and Characterization of the Conversion Efficiency Enhancement of Perovskite Solar Cells that Employ Upconversion Crystals for the Solar Spectrum. UC crystals turn 976 nm light into visible light, so the cell (ITO / SnO₂ / FAPbI₃ / Spiro-TTB / MoO₃ / Au) harvests more of the solar spectrum.',
        stats: [
          { v: '~50%', l: 'more Jsc at maximum laser power' },
          { v: '29.17 mA/cm²', l: 'Jsc with 50 cm lens (18.99 without)' },
          { v: '+8.3%', l: 'Jsc gain predicted by the model' },
        ],
        img: '/research/setup.png', cap: 'Measurement setup: 976 nm laser, white LED and UC crystal',
        img2: '/research/jv.png', cap2: 'J-V curves with 100 cm and 50 cm lens',
        tools: 'Best of 12 crystals: BaF₂ : 15% Yb³⁺, 2% Er³⁺ · experiment and model agree',
      },
      {
        n: '03', tag: 'Perovskite thin films · MPIE', t: 'Lead-free Cs₂AgBiBr₆ Films by Planar Hot Pressing',
        d: 'Films from DMSO and DMF:DMSO (2:8) were pressed with a flat stamp at 100 bar and up to 240 °C (PHP). Result: larger grains, a dense, flat surface and sharper XRD reflections. EBSD shows that pressing sharpens the texture up to 10× and the solvent selects the orientation: DMSO → (111), DMF → (001).',
        stats: [
          { v: '2.67 → 26.5', l: 'texture maximum (DMSO), compressed' },
          { v: '87.7%', l: '111 ∥ ND in compressed DMSO film' },
          { v: '62.4%', l: '001 ∥ ND in compressed DMF film' },
        ],
        img: '/research/php.png', cap: 'SEM and XRD before and after hot pressing',
        img2: '/research/texture.png', cap2: 'EBSD: pole figures, orientation maps and volume fractions',
        tools: 'SEM · XRD · EBSD pole figures · 100 bar · 150–240 °C',
      },
      {
        n: '04', tag: 'COMSOL simulation', t: 'Coupled Optoelectronic Simulation of a Perovskite Cell',
        d: 'One model links light absorption, charge transport and heat in an ITO / ZnO / MAPbI₃ / Spiro-OMeTAD / Au stack over 24 h (1D → 2D → 3D): optics → G(x), drift-diffusion with recombination → J-V, heat transfer → T(x,t).',
        stats: [
          { v: 'Optics', l: 'absorption → generation rate G(x)' },
          { v: 'Electrical', l: 'drift-diffusion, recombination, J-V' },
          { v: 'Thermal', l: 'Joule and recombination heat, T(x,t)' },
        ],
        img: '/research/comsol.png', cap: 'Equations, boundary conditions, coupling and workflow in COMSOL',
        img2: '', cap2: '',
        tools: 'Wave Optics · Semiconductor · Heat Transfer · reference results after Makableh et al., Solar Energy 202 (2020)',
      },
    ],
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
      { d: 'PhD in Materials Engineering (Dr.-Ing.)', o: 'RWTH Aachen (research at MPIE Düsseldorf)', y: '2020 – 2025' },
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
      { q: 'Who is Dr.-Ing. Maram Abu-Muhfouz?', a: 'A materials engineer with a PhD in Materials Engineering from RWTH Aachen and an R&D process engineer based in Düsseldorf. She researched β-FeSi₂ thin films for photovoltaics at the Max Planck Institute.' },
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
