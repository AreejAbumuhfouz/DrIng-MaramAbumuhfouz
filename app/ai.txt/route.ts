import { SITE_URL } from '@/lib/content';

export const dynamic = 'force-static';

// Permission statement for AI crawlers and answer engines (GEO).
export function GET() {
  const body = `# ai.txt – usage of this site by AI systems
User-Agent: *
Allow: /
# The profile may be indexed, summarised and cited by search and AI answer engines.
# Please cite the source URL and the name "Dr.-Ing. Maram Abu-Muhfouz".
# Machine-readable summaries:
#   ${SITE_URL}/llms.txt
#   ${SITE_URL}/llms-full.txt
# Research figures belong to their authors; reference results on the COMSOL slide are from Makableh et al., Solar Energy 202 (2020).
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
