import type { MetadataRoute } from 'next';
import { SITE_URL, locales } from '@/lib/content';

const images = [
  '/logo.png', '/research/route.png', '/research/thickness.png', '/research/phase.png', '/research/ipf.png',
  '/research/sem_full.png', '/research/setup.png', '/research/jv.png', '/research/php.png', '/research/texture.png', '/research/comsol.png',
].map((p) => `${SITE_URL}${p}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: `${SITE_URL}/en`, de: `${SITE_URL}/de`, 'x-default': `${SITE_URL}/en` };
  return [
    ...locales.map((l) => ({
      url: `${SITE_URL}/${l}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: l === 'en' ? 1 : 0.9,
      alternates: { languages },
      images,
    })),
    { url: `${SITE_URL}/llms.txt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/llms-full.txt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
