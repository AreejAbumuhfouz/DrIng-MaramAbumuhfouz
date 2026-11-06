import { notFound } from 'next/navigation';
import {
  ArrowRight, Award, BookOpen, CheckCircle2, Download, ExternalLink, GraduationCap, Mail, MapPin,
  Mic, PlayCircle, Sparkles, TrendingUp, Users, Layers, Thermometer, LineChart, SearchCheck,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';
import { Figure } from '@/components/Figure';
import { HeroVisual } from '@/components/HeroVisual';
import { Reveal } from '@/components/Reveal';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SITE_URL, getDict, isLocale, person, type Locale } from '@/lib/content';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDict(locale);
  const url = `${SITE_URL}/${locale}`;

  // Structured data for search engines and AI answer engines (SEO + GEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: person.name,
        honorificPrefix: person.title,
        jobTitle: t.hero.eyebrow,
        description: t.meta.description,
        url,
        image: `${SITE_URL}/logo.png`,
        email: `mailto:${person.email}`,
        sameAs: [person.linkedin, person.dissertationUrl],
        address: { '@type': 'PostalAddress', addressLocality: 'Düsseldorf', addressCountry: 'DE' },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'RWTH Aachen University' },
          { '@type': 'CollegeOrUniversity', name: 'Karlsruhe Institute of Technology (KIT)' },
          { '@type': 'CollegeOrUniversity', name: 'Jordan University of Science and Technology' },
          { '@type': 'CollegeOrUniversity', name: "Al-Balqa' Applied University" },
        ],
        worksFor: { '@type': 'ResearchOrganization', name: 'Max-Planck-Institut für Nachhaltige Materialien GmbH' },
        knowsAbout: ['Materials engineering', 'Perovskite solar cells', 'Up-conversion', 'Spherical indexing', 'Thin films', 'β-FeSi2', 'EBSD', 'XRD', 'Electron microscopy', 'Sputtering', 'PVD', 'Photovoltaics', 'Process development', 'COMSOL', 'MATLAB', 'Python'],
        knowsLanguage: ['de', 'en', 'ar'],
        award: t.activities.awards.map((a) => `${a.t} (${a.y})`),
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#page`,
        url,
        name: t.meta.title,
        inLanguage: locale,
        mainEntity: { '@id': `${SITE_URL}/#person` },
        dateModified: new Date().toISOString(),
      },
      {
        '@type': 'Thesis',
        name: t.research.thesis,
        inSupportOf: 'Dr.-Ing.',
        author: { '@id': `${SITE_URL}/#person` },
        sourceOrganization: 'RWTH Aachen University',
        url: person.dissertationUrl,
        about: ['β-FeSi2', 'thin films', 'photovoltaics', 'EBSD', 'XRD'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  const relIcons = [Layers, Thermometer, LineChart, SearchCheck];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#profile" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-navy-900">
        {t.ui.skip}
      </a>
      <ScrollProgress />
      <Navigation locale={locale} labels={t.nav} ui={{ theme: t.ui.theme, language: t.ui.language }} />

      <main className="pb-32 lg:pb-12">
        {/* HERO */}
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-dvh lg:pt-36">
          <div aria-hidden className="grid-bg absolute inset-0" />
          <div aria-hidden className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
          <div aria-hidden className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-amber/15 blur-3xl" />
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div className="order-2 lg:order-1">
              <Reveal><p className="kicker">{t.hero.eyebrow}</p></Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                  <span className="block text-lg font-semibold text-teal-600 sm:text-2xl dark:text-teal-300">{person.title}</span>
                  <span className="text-gradient">Maram <span className="whitespace-nowrap">Abu&#8209;Muhfouz</span></span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 font-display text-xl font-medium text-navy-700 sm:text-2xl dark:text-slate-200">{locale === 'de' ? `„${t.hero.tagline}“` : `“${t.hero.tagline}”`}</p>
              </Reveal>
              <Reveal delay={0.24}><p className="mt-4 max-w-xl text-base leading-relaxed text-navy-700/80 sm:text-lg dark:text-slate-400">{t.hero.intro}</p></Reveal>
              <Reveal delay={0.28}>
                <ul className="mt-6 flex flex-wrap gap-2">{t.hero.keywords.map((k) => <li key={k} className="chip !text-xs sm:!text-sm">{k}</li>)}</ul>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn-primary">{t.ui.contactMe} <ArrowRight size={16} /></a>
                  <a href={person.cvUrl} className="btn-ghost" download><Download size={16} /> {t.ui.downloadCv}</a>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-6 flex items-center gap-2 text-sm text-navy-700/70 dark:text-slate-400"><MapPin size={15} className="text-amber" /> {locale === 'de' ? person.location : 'Düsseldorf, Germany'}</p>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2"><HeroVisual /></div>
          </div>
          <div className="container-x relative mt-14 grid grid-cols-2 gap-3 pb-8 sm:gap-4 lg:grid-cols-4">
            {t.hero.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i} className="card p-5 transition hover:-translate-y-1">
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-navy-700/80 dark:text-slate-400">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROFILE */}
        <section id="profile" className="container-x py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="kicker">{t.profile.kicker}</p>
              <h2 className="h2">{t.profile.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-700/80 dark:text-slate-400">{t.profile.text}</p>
            </Reveal>
            <ul className="grid gap-3">
              {t.profile.points.map((p, i) => (
                <Reveal as="li" key={p.t} delay={0.07 * i} className="card group flex gap-4 p-5 transition hover:border-teal/40">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal to-navy-800 text-white transition group-hover:rotate-6">
                    <CheckCircle2 size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-800 dark:text-white">{p.t}</h3>
                    <p className="text-sm text-navy-700/75 dark:text-slate-400">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PHD RESEARCH */}
        <section id="research" className="relative py-20 sm:py-28">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-50 to-transparent dark:via-navy-900/60" />
          <div className="container-x">
            <Reveal>
              <p className="kicker">{t.research.kicker}</p>
              <h2 className="h2 max-w-3xl">{t.research.title}</h2>
              <p className="mt-5 max-w-4xl border-l-4 border-amber pl-4 font-display text-lg font-medium italic leading-relaxed text-navy-700 sm:text-xl dark:text-slate-200">{t.research.thesis}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={person.dissertationUrl} target="_blank" rel="noopener" className="btn-primary"><BookOpen size={16} /> {t.ui.viewThesis} <ExternalLink size={14} /></a>
                <a href={person.talkUrl} target="_blank" rel="noopener" className="btn-ghost"><PlayCircle size={16} /> {t.ui.watchTalk}</a>
              </div>
            </Reveal>

            {/* Summary */}
            <Reveal className="mt-12">
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-300">{t.research.summaryTitle}</h3>
              <p className="mt-3 max-w-4xl text-lg leading-relaxed text-navy-700/90 dark:text-slate-300">{t.research.summary}</p>
            </Reveal>
            <ol className="mt-6 grid gap-4 md:grid-cols-3">
              {t.research.blocks.map((b, i) => (
                <Reveal as="li" key={b.t} delay={0.06 * i} className={`card relative overflow-hidden p-6 ${i === 2 ? 'bg-navy-800 text-white dark:bg-navy-900' : ''}`}>
                  <span aria-hidden className="absolute -right-2 -top-4 font-display text-8xl font-bold text-navy/[0.05] dark:text-white/[0.05]">0{i + 1}</span>
                  <span className="inline-block h-1 w-10 rounded-full bg-gradient-to-r from-amber to-teal" />
                  <h4 className={`mt-4 text-lg font-semibold ${i === 2 ? 'text-amber-300' : 'text-navy-800 dark:text-white'}`}>{b.t}</h4>
                  <p className={`mt-2 text-sm leading-relaxed ${i === 2 ? 'text-slate-200' : 'text-navy-700/80 dark:text-slate-400'}`}>{b.d}</p>
                </Reveal>
              ))}
            </ol>

            {/* Findings */}
            <Reveal className="mt-16"><h3 className="font-display text-2xl font-bold text-navy-800 sm:text-3xl dark:text-white">{t.research.findingsTitle}</h3></Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {t.research.stats.map((s, i) => (
                <Reveal key={s.l} delay={0.06 * i} className="card p-5">
                  <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.v}</p>
                  <p className="mt-1 text-sm text-navy-700/80 dark:text-slate-400">{s.l}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-4 rounded-3xl bg-gradient-to-r from-navy-800 to-teal-600 p-5 text-white sm:p-6">
              <p className="text-sm leading-relaxed sm:text-base">{t.research.optimal}</p>
            </Reveal>
            <Reveal className="card mt-4 overflow-x-auto p-2">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead><tr className="text-teal-600 dark:text-teal-300">{t.research.tableHead.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
                <tbody>
                  {t.research.table.map((r) => (
                    <tr key={r[0]} className="border-t border-navy/10 dark:border-white/10">
                      {r.map((c, j) => <td key={c} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-navy-800 dark:text-white' : 'text-navy-700/80 dark:text-slate-400'}`}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {t.research.notes.map((n) => <Reveal key={n} className="card p-5 text-sm text-navy-700/80 dark:text-slate-400">{n}</Reveal>)}
            </div>

            {/* Route */}
            <Reveal className="mt-16"><h3 className="font-display text-2xl font-bold text-navy-800 sm:text-3xl dark:text-white">{t.research.routeTitle}</h3></Reveal>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <Reveal><Figure src="/research/route.png" caption={t.research.routeTitle} pending={t.ui.imagePending} contain /></Reveal>
              <ol className="grid gap-3">
                {t.research.route.map((r, i) => (
                  <Reveal as="li" key={r.t} delay={0.06 * i} className="card flex gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal to-navy-800 text-sm font-bold text-white">S{i + 1}</span>
                    <div><p className="font-semibold text-navy-800 dark:text-white">{r.t}</p><p className="text-sm text-navy-700/80 dark:text-slate-400">{r.d}</p></div>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Gallery */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.research.gallery.map((g, i) => (
                <Reveal key={g.src} delay={0.06 * i}><Figure src={g.src} caption={g.c} pending={t.ui.imagePending} contain /></Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* METHODS */}
        <section id="methods" className="container-x py-20 sm:py-28">
          <Reveal>
            <p className="kicker">{t.methods.kicker}</p>
            <h2 className="h2">{t.methods.title}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.methods.items.map((m, i) => (
              <Reveal key={m.k} delay={0.07 * i} className="card group overflow-hidden p-2 transition hover:-translate-y-1 hover:border-amber/50">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white">
                  <Image src={m.img} alt={`${m.k} – ${m.t}`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-contain transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="font-display text-2xl font-bold text-gradient">{m.k}</span>
                  <h3 className="mt-2 font-semibold text-navy-800 dark:text-white">{m.t}</h3>
                  <p className="mt-1 text-sm text-navy-700/75 dark:text-slate-400">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="card mt-6 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-navy-800 dark:text-white">{t.methods.materialsTitle}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{t.methods.materials.map((m) => <span key={m} className="chip">{m}</span>)}</div>
          </Reveal>
        </section>

        {/* PROJECTS 2–4 */}
        <section id="projects" className="relative py-20 sm:py-28">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-50 to-transparent dark:via-navy-900/60" />
          <div className="container-x">
            <Reveal>
              <p className="kicker">{t.projects.kicker}</p>
              <h2 className="h2">{t.projects.title}</h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {t.projects.items.map((p) => (
                <Reveal key={p.n} as="article" className="card overflow-hidden p-6 sm:p-8">
                  <div className={`grid gap-8 ${p.img ? 'lg:grid-cols-[1fr_1.15fr]' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-4xl font-bold text-gradient">{p.n}</span>
                        <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-300">{p.tag}</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold text-navy-800 sm:text-3xl dark:text-white">{p.t}</h3>
                      <p className="mt-3 leading-relaxed text-navy-700/85 dark:text-slate-400">{p.d}</p>
                      {p.stats.length > 0 && (
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                          {p.stats.map((s) => (
                            <div key={s.l} className="rounded-2xl bg-navy-800 p-4 text-white dark:bg-navy-950">
                              <p className="font-display text-xl font-bold text-amber-300">{s.v}</p>
                              <p className="mt-1 text-xs text-slate-300">{s.l}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="mt-6 rounded-2xl bg-amber/15 px-4 py-3 text-sm font-medium text-navy-800 dark:text-amber-200">{p.tools}</p>
                    </div>
                    {p.img && (
                      <div className="grid gap-4">
                        <Figure src={p.img} caption={p.t} pending={t.ui.imagePending} contain tall={!('img2' in p)} />
                        {'img2' in p && p.img2 && <Figure src={p.img2} caption={locale === 'de' ? 'J-V-Kurven mit 100-cm- und 50-cm-Linse' : 'J-V curves with 100 cm and 50 cm lens'} pending={t.ui.imagePending} contain />}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RELEVANCE */}
        <section aria-labelledby="relevance-title" className="relative py-20 sm:py-28">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-800 via-navy-900 to-teal-600 dark:from-navy-900 dark:via-navy-950 dark:to-teal-600/60" />
          <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-30" />
          <div className="container-x text-white">
            <Reveal>
              <p className="kicker !text-amber-300">{t.relevance.kicker}</p>
              <h2 id="relevance-title" className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{t.relevance.title}</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.relevance.items.map((r, i) => {
                const Icon = relIcons[i];
                return (
                  <Reveal key={r.t} delay={0.07 * i} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                    <Icon className="text-amber-300" />
                    <h3 className="mt-4 font-semibold">{r.t}</h3>
                    <p className="mt-2 text-sm text-slate-300">{r.d}</p>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="mt-6 flex flex-col gap-4 rounded-3xl border border-amber/40 bg-amber/10 p-6 sm:flex-row sm:items-center sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber text-navy-900"><TrendingUp /></span>
              <div>
                <h3 className="font-semibold text-amber-300">{t.relevance.growth.t}</h3>
                <p className="mt-1 text-slate-200">{t.relevance.growth.d}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="container-x py-20 sm:py-28">
          <Reveal>
            <p className="kicker">{t.experience.kicker}</p>
            <h2 className="h2">{t.experience.title}</h2>
          </Reveal>
          <ol className="relative mt-12 space-y-6 border-l-2 border-dashed border-teal/30 pl-6 sm:pl-10">
            {t.experience.jobs.map((j, i) => (
              <Reveal as="li" key={j.org + j.from} delay={0.05 * i} className="relative">
                <span aria-hidden className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-slate-50 bg-gradient-to-br from-amber to-teal dark:border-navy-950 sm:-left-[49px]" />
                <article className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-navy-800 dark:text-white">{j.role}</h3>
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-300">{j.from} – {j.to || t.ui.present}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-navy-700/80 dark:text-slate-300">{j.org} · {j.place}</p>
                  <ul className="mt-4 space-y-2">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-navy-700/80 dark:text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />{b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="card p-6 sm:p-8">
              <div className="flex items-center gap-3"><GraduationCap className="text-teal" /><h3 className="text-xl font-semibold text-navy-800 dark:text-white">{t.experience.educationTitle}</h3></div>
              <ul className="mt-6 space-y-5">
                {t.experience.education.map((e) => (
                  <li key={e.d}>
                    <p className="text-xs font-bold tracking-wider text-amber-600 dark:text-amber-300">{e.y}</p>
                    <p className="font-semibold text-navy-800 dark:text-white">{e.d}</p>
                    <p className="text-sm text-navy-700/75 dark:text-slate-400">{e.o}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-navy-800 dark:text-white">{t.experience.skillsTitle}</h3>
              <div className="mt-6 space-y-5">
                {t.experience.skills.map((g) => (
                  <div key={g.g}>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-300">{g.g}</p>
                    <div className="mt-2 flex flex-wrap gap-2">{g.s.map((s) => <span key={s} className="chip !text-xs">{s}</span>)}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ACTIVITIES */}
        <section aria-labelledby="activities-title" className="relative py-20 sm:py-28">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-50 to-transparent dark:via-navy-900/60" />
          <div className="container-x">
            <Reveal>
              <p className="kicker">{t.activities.kicker}</p>
              <h2 id="activities-title" className="h2">{t.activities.title}</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[{ ...t.activities.conferences, I: Mic }, { ...t.activities.collaborations, I: Users }, { ...t.activities.initiatives, I: Sparkles }].map((c, i) => (
                <Reveal key={c.t} delay={0.07 * i} className="card p-6">
                  <c.I className="text-teal" />
                  <h3 className="mt-4 font-semibold text-navy-800 dark:text-white">{c.t}</h3>
                  <ul className="mt-3 space-y-2">
                    {c.items.map((x) => <li key={x} className="flex gap-2 text-sm text-navy-700/80 dark:text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />{x}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
              <Reveal className="card overflow-hidden p-0">
                <a href={person.talkUrl} target="_blank" rel="noopener" className="group relative block aspect-video bg-gradient-to-br from-navy-800 to-teal-600">
                  <div className="grid-bg absolute inset-0 opacity-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-navy-800 shadow-xl transition group-hover:scale-110"><PlayCircle size={30} /></span>
                  </div>
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">MSE 2022 · Formation and characterization of β-FeSi₂ thin films for solar cell applications</p>
                </a>
                <div className="p-6">
                  <h3 className="font-semibold text-navy-800 dark:text-white">{t.activities.learned.t}</h3>
                  <p className="mt-2 text-sm text-navy-700/80 dark:text-slate-400">{t.activities.learned.d}</p>
                </div>
              </Reveal>
              <div className="grid gap-4">
                <Reveal delay={0.08} className="card p-6">
                  <div className="flex items-center gap-3"><Award className="text-amber" /><h3 className="font-semibold text-navy-800 dark:text-white">{t.activities.awardsTitle}</h3></div>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {t.activities.awards.map((a) => (
                      <li key={a.t} className="rounded-2xl border border-amber/30 bg-amber/5 p-4">
                        <p className="text-xs font-bold text-amber-600 dark:text-amber-300">{a.y}</p>
                        <p className="mt-1 text-sm font-medium text-navy-800 dark:text-slate-200">{a.t}</p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.14} className="card p-6">
                  <div className="flex items-center gap-3"><BookOpen className="text-teal" /><h3 className="font-semibold text-navy-800 dark:text-white">{t.activities.pubsTitle}</h3></div>
                  <ul className="mt-4 space-y-3">{t.activities.pubs.map((p) => <li key={p} className="text-sm text-navy-700/80 dark:text-slate-400">{p}</li>)}</ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ (GEO) */}
        <section aria-labelledby="faq-title" className="container-x py-20 sm:py-24">
          <Reveal>
            <p className="kicker">{t.faq.kicker}</p>
            <h2 id="faq-title" className="h2">{t.faq.title}</h2>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {t.faq.items.map((f, i) => (
              <Reveal key={f.q} delay={0.05 * i}>
                <details className="card group p-5 open:border-teal/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-800 dark:text-white">
                    {f.q}<span className="text-xl text-teal transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700/80 dark:text-slate-400">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container-x py-20 sm:py-24">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800 via-navy-900 to-teal-600 p-8 text-white sm:p-14">
            <div aria-hidden className="grid-bg absolute inset-0 opacity-30" />
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber/30 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="kicker !text-amber-300">{t.contact.kicker}</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{t.contact.title}</h2>
                <p className="mt-4 max-w-lg text-slate-200">{t.contact.text}</p>
                <p className="mt-3 text-sm text-teal-300">{t.contact.languages}</p>
              </div>
              <div className="grid gap-3">
                <a href={`mailto:${person.email}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"><Mail className="text-amber-300" /> <span className="break-all text-sm sm:text-base">{person.email}</span></a>
                <a href={person.linkedin} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"><LinkedinIcon className="h-6 w-6 text-amber-300" /> LinkedIn</a>
                <a href={person.cvUrl} download className="flex items-center gap-3 rounded-2xl bg-amber p-4 font-semibold text-navy-900 transition hover:bg-amber-300"><Download /> {t.ui.downloadCv}</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="container-x pb-32 lg:pb-10 text-center text-xs text-navy-700/60 dark:text-slate-500">
        © {new Date().getFullYear()} {person.fullName}. {t.footer.rights}
      </footer>

    </>
  );
}
