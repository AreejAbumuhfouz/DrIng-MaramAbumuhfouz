import { person, SITE_URL } from '@/lib/content';

export const dynamic = 'force-static';

export function GET() {
  const body = `/* TEAM */
Portfolio owner: ${person.fullName}
Contact: ${person.email}
LinkedIn: ${person.linkedin}
From: Düsseldorf, Germany

/* SITE */
Site: ${SITE_URL}
Languages: English, Deutsch
Standards: HTML5, CSS3, schema.org JSON-LD, llms.txt
Components: Next.js, React, Tailwind CSS, Framer Motion
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
