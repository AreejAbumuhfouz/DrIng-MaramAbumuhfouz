import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/content';

export default function robots(): MetadataRoute.Robots {
  // AI crawlers are explicitly welcome (GEO): the content is meant to be cited.
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'], allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
