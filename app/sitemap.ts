import type { MetadataRoute } from 'next';
import { SITE_URL, locales } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${SITE_URL}/${l}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: l === 'de' ? 1 : 0.9,
    alternates: { languages: { de: `${SITE_URL}/de`, en: `${SITE_URL}/en`, 'x-default': `${SITE_URL}/de` } },
  }));
}
