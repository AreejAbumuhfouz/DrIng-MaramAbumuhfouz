import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '../globals.css';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Providers } from '@/components/Providers';
import { SITE_URL, getDict, isLocale, locales, person, type Locale } from '@/lib/content';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#040D1E' },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: `%s | ${person.fullName}` },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: person.fullName, url: SITE_URL }],
    creator: person.fullName,
    applicationName: person.fullName,
    category: 'science',
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', de: '/de', 'x-default': '/en' },
      types: { 'text/plain': [{ url: '/llms.txt', title: 'llms.txt' }, { url: '/llms-full.txt', title: 'llms-full.txt' }] },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
    },
    other: {
      'geo.region': 'DE-NW',
      'geo.placename': 'Düsseldorf',
      'geo.position': '51.2277;6.7735',
      ICBM: '51.2277, 6.7735',
    },
    openGraph: {
      type: 'profile',
      firstName: 'Maram',
      lastName: 'Abu-Muhfouz',
      url: `/${locale}`,
      siteName: person.fullName,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? ['en_US'] : ['de_DE'],
    },
    twitter: { card: 'summary_large_image', title: t.meta.title, description: t.meta.description },
    referrer: 'strict-origin-when-cross-origin',
    publisher: person.fullName,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    formatDetection: { telephone: false },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale as Locale} suppressHydrationWarning>
      <body className="min-h-dvh overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
