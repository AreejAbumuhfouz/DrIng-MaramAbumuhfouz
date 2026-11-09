// Builds the plain-text files for AI answer engines (GEO) from the same content as the site,
// so llms.txt / llms-full.txt never go out of date.
import { SITE_URL, getDict, person } from './content';

const en = getDict('en');
const de = getDict('de');

export function llmsTxt() {
  const t = en;
  return `# ${person.fullName}

> ${t.hero.eyebrow}. PhD in Materials Engineering (Dr.-Ing., RWTH Aachen University), research at the Max Planck Institute for Sustainable Materials (formerly Max Planck Institute for Iron Research, MPIE), Düsseldorf, Germany. Expertise: thin films, microstructure and phase characterisation (EBSD, XRD, SEM), process development, perovskite solar cells and COMSOL multiphysics.

${t.hero.tagline}.

## Key facts
- Name: ${person.fullName}
- Role: ${t.hero.eyebrow}
- Location: Düsseldorf, Germany
- Degree: PhD in Materials Engineering (Dr.-Ing.), RWTH Aachen University, 2020–2025
- Thesis: ${t.research.thesis}
- Languages: German C1, English C1, Arabic (native)
- Keywords: ${t.hero.keywords.join(', ')}
- Open to: process engineering, R&D engineering and materials science roles (coatings, heat treatment, semiconductors, photovoltaics)

## Projects
- Project 1 – PhD: ${t.research.title}. ${t.research.stats.map((s) => `${s.v} ${s.l}`).join('; ')}.
${t.projects.items.map((p) => `- Project ${Number(p.n)} – ${p.t}: ${p.stats.map((s) => `${s.v} ${s.l}`).join('; ')}.`).join('\n')}

## Pages
- [English portfolio (default)](${SITE_URL}/en)
- [Deutsches Portfolio](${SITE_URL}/de)
- [Full text for AI (llms-full.txt)](${SITE_URL}/llms-full.txt)
- [Dissertation record, RWTH Aachen](${person.dissertationUrl})
- [Talk, MSE Congress 2022](${person.talkUrl})

## Contact
- Email: ${person.email}
- LinkedIn: ${person.linkedin}
`;
}

export function llmsFullTxt() {
  const t = en;
  const r = t.research;
  const sec = (title: string, body: string) => `\n## ${title}\n\n${body.trim()}\n`;
  return `# ${person.fullName} – full profile

> ${t.meta.description}

Canonical: ${SITE_URL}/en · German version: ${SITE_URL}/de · Last updated: ${new Date().toISOString().slice(0, 10)}
${sec('Summary', `${t.profile.text}\n\n${t.profile.points.map((p) => `- **${p.t}** – ${p.d}`).join('\n')}`)}
${sec(`Project 1 – PhD: ${r.title}`, `**Thesis title:** ${r.thesis}\n\n${r.summary}\n\n${r.blocks.map((b) => `- **${b.t}:** ${b.d}`).join('\n')}

### ${r.findingsTitle}
${r.stats.map((s) => `- ${s.v} – ${s.l}`).join('\n')}
- ${r.optimal}

| ${r.tableHead.join(' | ')} |
| --- | --- | --- |
${r.table.map((row) => `| ${row.join(' | ')} |`).join('\n')}

${r.notes.map((n) => `- ${n}`).join('\n')}

### ${r.routeTitle}
${r.route.map((s) => `- ${s.t}: ${s.d}`).join('\n')}`)}
${sec(t.methods.title, `${t.methods.items.map((m) => `- **${m.k}** – ${m.t}: ${m.d}`).join('\n')}\n\n${t.methods.materialsTitle}: ${t.methods.materials.join(', ')}`)}
${t.projects.items.map((p) => sec(`Project ${Number(p.n)} – ${p.t} (${p.tag})`, `${p.d}\n\n${p.stats.map((s) => `- ${s.v} – ${s.l}`).join('\n')}\n- ${p.tools}`)).join('')}
${sec(t.relevance.title, `${t.relevance.items.map((i) => `- **${i.t}:** ${i.d}`).join('\n')}\n- **${t.relevance.growth.t}:** ${t.relevance.growth.d}`)}
${sec(t.experience.title, t.experience.jobs.map((j) => `### ${j.role} – ${j.org}, ${j.place} (${j.from} – ${j.to || 'present'})\n${j.bullets.map((b) => `- ${b}`).join('\n')}`).join('\n\n'))}
${sec(t.experience.educationTitle, t.experience.education.map((e) => `- ${e.d} – ${e.o} (${e.y})`).join('\n'))}
${sec(t.experience.skillsTitle, t.experience.skills.map((g) => `- **${g.g}:** ${g.s.join(', ')}`).join('\n'))}
${sec(t.activities.title, `**${t.activities.conferences.t}:** ${t.activities.conferences.items.join('; ')}\n\n**${t.activities.collaborations.t}:** ${t.activities.collaborations.items.join('; ')}\n\n**${t.activities.initiatives.t}:** ${t.activities.initiatives.items.join('; ')}`)}
${sec(t.activities.awardsTitle, t.activities.awards.map((a) => `- ${a.y}: ${a.t}`).join('\n'))}
${sec(t.activities.pubsTitle, t.activities.pubs.map((p) => `- ${p}`).join('\n'))}
${sec('FAQ', t.faq.items.map((f) => `**${f.q}**\n${f.a}`).join('\n\n'))}
${sec('Kurzprofil (Deutsch)', `${de.hero.eyebrow}. ${de.profile.text}\n\nDissertation: ${de.research.thesis}`)}
${sec('Contact', `- Email: ${person.email}\n- LinkedIn: ${person.linkedin}\n- Location: Düsseldorf, Germany\n- Dissertation: ${person.dissertationUrl}`)}
`;
}
