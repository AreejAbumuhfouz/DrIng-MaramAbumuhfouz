'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FlaskConical, Microscope, Briefcase, Mail } from 'lucide-react';

const icons = { home: Home, profile: User, research: FlaskConical, methods: Microscope, experience: Briefcase, contact: Mail };
type Key = keyof typeof icons;

export function BottomNav({ labels }: { labels: Record<Key, string> }) {
  const keys = Object.keys(icons) as Key[];
  const [active, setActive] = useState<Key>('home');

  useEffect(() => {
    const els = keys.map((k) => document.getElementById(k)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id as Key)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav aria-label="Navigation" className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-safe sm:bottom-4">
      <ul className="flex w-full max-w-xl items-stretch sm:max-w-none justify-between gap-1 rounded-[1.6rem] border border-navy/10 bg-white/80 p-1.5 shadow-2xl shadow-navy/20 backdrop-blur-2xl dark:border-white/10 dark:bg-navy-900/80 dark:shadow-black/40 sm:w-auto sm:gap-1.5">
        {keys.map((k) => {
          const Icon = icons[k];
          const on = active === k;
          return (
            <li key={k} className="relative flex-1 sm:flex-none">
              <a href={`#${k}`} aria-current={on ? 'true' : undefined}
                className={`relative z-10 flex flex-col items-center gap-0.5 rounded-2xl px-2 py-2 text-[10px] font-semibold transition sm:flex-row sm:gap-2 sm:px-4 sm:text-sm ${on ? 'text-white dark:text-navy-950' : 'text-navy-700/80 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300'}`}>
                <Icon size={18} strokeWidth={2.2} aria-hidden />
                <span className={on ? '' : 'sm:hidden lg:inline'}>{labels[k]}</span>
              </a>
              {on && (
                <motion.span layoutId="nav-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-800 to-teal-600 dark:from-teal-400 dark:to-amber-400" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
