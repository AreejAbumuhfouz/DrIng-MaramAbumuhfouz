import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getDict, isLocale, locales, person } from '@/lib/content';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = person.fullName;
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function OG({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDict(isLocale(locale) ? locale : 'de');
  const logo = await readFile(path.join(process.cwd(), 'public/logo.png'));
  const src = `data:image/png;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: 72, gap: 56,
        background: 'linear-gradient(135deg,#040D1E 0%,#0B2345 55%,#037A70 100%)', color: 'white' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={300} height={300} style={{ borderRadius: 999, background: 'white' }} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 700 }}>
          <div style={{ fontSize: 26, color: '#F7AE3D', letterSpacing: 4, textTransform: 'uppercase' }}>{t.hero.eyebrow}</div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>{person.fullName}</div>
          <div style={{ fontSize: 32, color: '#9FE7DE' }}>{t.hero.tagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
