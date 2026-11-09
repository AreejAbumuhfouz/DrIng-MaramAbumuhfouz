import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/content';

// Search engines and AI crawlers are explicitly welcome (SEO + GEO): the profile is meant to be found and cited.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot',
  'Meta-ExternalAgent', 'cohere-ai', 'MistralAI-User', 'YouBot', 'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/_next/', '/api/'] },
      { userAgent: aiBots, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
