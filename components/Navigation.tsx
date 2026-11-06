'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Briefcase, FlaskConical, Home, Layers, Mail, Moon, Sun, User } from 'lucide-react';
import type { Locale } from '@/lib/content';

const icons = { home: Home, profile: User, research: FlaskConical, projects: Layers, experience: Briefcase, contact: Mail };
type Key = keyof typeof icons;
const keys = Object.keys(icons) as Key[];

/**
 * Desktop (lg and up): top navigation bar.
 * Mobile & tablet: compact header (logo, language, theme) + bottom tab bar.
 */
export function Navigation({ locale, labels, ui }: { locale: Locale; labels: Record<Key, string>; ui: { theme: string; language: string } }) {
  const [active, setActive] = useState<Key>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const els = keys.map((k) => document.getElementById(k)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id as Key)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const other: Locale = locale === 'de' ? 'en' : 'de';
  const setCookie = () => { document.cookie = `NEXT_LOCALE=${other};path=/;max-age=31536000;samesite=lax`; };

  const controls = (
    <div className="flex items-center gap-1 rounded-full border border-navy/10 bg-white/70 p-1 dark:border-white/10 dark:bg-navy-900/70">
      <nav aria-label={ui.language} className="flex">
        {(['en', 'de'] as Locale[]).map((l) => (
          <Link key={l} href={`/${l}`} hrefLang={l} onClick={l === other ? setCookie : undefined} aria-current={l === locale ? 'true' : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition ${l === locale ? 'bg-navy-800 text-white dark:bg-teal-400 dark:text-navy-950' : 'text-navy-700 hover:text-teal-600 dark:text-slate-300'}`}>
            {l}
          </Link>
        ))}
      </nav>
      <button type="button" aria-label={ui.theme} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="grid h-8 w-8 place-items-center rounded-full text-navy-700 transition hover:bg-navy/5 hover:text-amber-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-amber-300">
        {mounted && resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );

  return (
    <>
      {/* Top header – full navigation on desktop */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container-x">
          <div className={`flex items-center justify-between gap-4 rounded-full border px-2 py-1.5 backdrop-blur-xl transition-all ${scrolled ? 'border-navy/10 bg-white/80 shadow-lg shadow-navy/10 dark:border-white/10 dark:bg-navy-900/80' : 'border-transparent bg-transparent'}`}>
            <Link href={`/${locale}#home`} className="flex items-center gap-2 rounded-full py-0.5 pl-0.5 pr-3" aria-label="Maram Abu-Muhfouz">
              <Image src="/logo.png" alt="" width={34} height={34} className="rounded-full bg-white" priority />
              <span className="font-display text-sm font-semibold">M. Abu-Muhfouz</span>
            </Link>
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {keys.map((k) => {
                  const on = active === k;
                  return (
                    <li key={k} className="relative">
                      <a href={`#${k}`} aria-current={on ? 'true' : undefined}
                        className={`relative z-10 block rounded-full px-4 py-2 text-sm font-semibold transition ${on ? 'text-white dark:text-navy-950' : 'text-navy-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300'}`}>
                        {labels[k]}
                      </a>
                      {on && <motion.span layoutId="top-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} className="absolute inset-0 rounded-full bg-gradient-to-r from-navy-800 to-teal-600 dark:from-teal-400 dark:to-amber-400" />}
                    </li>
                  );
                })}
              </ul>
            </nav>
            {controls}
          </div>
        </div>
      </header>

      {/* Bottom tab bar – mobile & tablet only */}
      <nav aria-label="Navigation" className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-safe sm:bottom-3 lg:hidden">
        <ul className="flex w-full max-w-2xl items-stretch justify-between gap-1 rounded-[1.6rem] border border-navy/10 bg-white/85 p-1.5 shadow-2xl shadow-navy/20 backdrop-blur-2xl dark:border-white/10 dark:bg-navy-900/85 dark:shadow-black/40">
          {keys.map((k) => {
            const Icon = icons[k];
            const on = active === k;
            return (
              <li key={k} className="relative flex-1">
                <a href={`#${k}`} aria-current={on ? 'true' : undefined}
                  className={`relative z-10 flex flex-col items-center gap-0.5 rounded-2xl px-1 py-2 text-[10px] font-semibold transition sm:text-xs ${on ? 'text-white dark:text-navy-950' : 'text-navy-700/80 dark:text-slate-300'}`}>
                  <Icon size={19} strokeWidth={2.2} aria-hidden />
                  <span>{labels[k]}</span>
                </a>
                {on && <motion.span layoutId="bottom-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-800 to-teal-600 dark:from-teal-400 dark:to-amber-400" />}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
