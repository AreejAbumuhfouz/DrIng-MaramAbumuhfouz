'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import type { Locale } from '@/lib/content';

export function Controls({ locale, labels }: { locale: Locale; labels: { theme: string; language: string } }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const other: Locale = locale === 'de' ? 'en' : 'de';
  const setCookie = () => { document.cookie = `NEXT_LOCALE=${other};path=/;max-age=31536000;samesite=lax`; };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container-x flex items-center justify-between pt-4">
        <Link href={`/${locale}#home`} className="flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 py-1 pl-1 pr-3 backdrop-blur-xl dark:border-white/10 dark:bg-navy-900/70" aria-label="Maram Abu-Muhfouz">
          <Image src="/logo.png" alt="" width={32} height={32} className="rounded-full bg-white" priority />
          <span className="font-display text-sm font-semibold">M. Abu-Muhfouz</span>
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-navy/10 bg-white/70 p-1 backdrop-blur-xl dark:border-white/10 dark:bg-navy-900/70">
          <nav aria-label={labels.language} className="flex">
            {(['de', 'en'] as Locale[]).map((l) => (
              <Link key={l} href={`/${l}`} hrefLang={l} onClick={l === other ? setCookie : undefined} aria-current={l === locale ? 'true' : undefined}
                className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition ${l === locale ? 'bg-navy-800 text-white dark:bg-teal-400 dark:text-navy-950' : 'text-navy-700 hover:text-teal-600 dark:text-slate-300'}`}>
                {l}
              </Link>
            ))}
          </nav>
          <button type="button" aria-label={labels.theme} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="grid h-8 w-8 place-items-center rounded-full text-navy-700 transition hover:bg-navy/5 hover:text-amber-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-amber-300">
            {mounted && resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
