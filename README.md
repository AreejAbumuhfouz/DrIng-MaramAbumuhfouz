# Portfolio – Dr.-Ing. Maram Abu-Muhfouz

Next.js 15 (App Router) + Tailwind CSS + Framer Motion.
English (default, `/en`) and German (`/de`), light and dark theme, top navigation on desktop and bottom tab bar on mobile/tablet, fully responsive.

## Run
```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en
npm run build && npm start
```

## Before going live
1. **Domain**: set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (Vercel → Environment Variables, see `.env.example`). It is used for canonical URLs, hreflang, sitemap, OG image and JSON-LD.
2. **LinkedIn**: set in `lib/content.ts` (`person.linkedin`).
3. **CV**: put the PDF at `public/cv/Maram_Abu-Muhfouz_CV.pdf`.
4. **Research images** live in `public/research/` (PhD, perovskite and COMSOL projects). Replace a file with the same name to update it.
5. **Impressum / Datenschutz**: a public site in Germany needs an Impressum and a privacy notice.

## Where to edit things
- All text (DE + EN): `lib/content.ts`
- Colours (from the logo): `tailwind.config.ts` → navy `#0B2345`, teal `#039185`, amber `#F29B18`
- Sections: `app/[locale]/page.tsx`

## SEO / GEO included
**Files generated automatically from `lib/content.ts`** (always in sync with the site):

| URL | Purpose |
| --- | --- |
| `/sitemap.xml` | Both languages with hreflang + all research images |
| `/robots.txt` | Search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended …) allowed |
| `/llms.txt` | Short profile for AI answer engines (llmstxt.org format) |
| `/llms-full.txt` | Full profile: thesis, findings, all projects, experience, FAQ |
| `/ai.txt` | Usage / citation statement for AI systems |
| `/humans.txt` | Credits |
| `/.well-known/security.txt` | Security contact |
| `/manifest.webmanifest` | PWA manifest + icons |
| `/en/opengraph-image`, `/de/opengraph-image` | Social preview images |

**In every page:** title, description, keywords, canonical, hreflang (`en`, `de`, `x-default`), Open Graph (profile), Twitter card,
geo meta tags (Düsseldorf), `<link rel="alternate" type="text/plain">` to llms.txt, and JSON-LD:
`Person` (occupation, credential, alumni, awards), `WebSite`, `ProfilePage`, `BreadcrumbList`, `Thesis`,
`ItemList` of 4 `ResearchProject`s and `FAQPage`. Semantic HTML, alt texts, skip link, reduced-motion support.

**After going live:** add the site in Google Search Console and Bing Webmaster Tools, paste the verification codes into the
environment variables (see `.env.example`) and submit `/sitemap.xml`.

## Upload to GitHub
```bash
cd maram-portfolio
git remote add origin https://github.com/<your-user>/maram-portfolio.git
git branch -M main
git push -u origin main
```
(The project is already a Git repository with a first commit.) Or create an empty repo on github.com and use **Add file → Upload files** with the contents of this folder (not `node_modules`).

## Deploy
Import the GitHub repo into **Vercel** (free, zero config) – the language redirect `/` → `/en` and the OG images need a Node host such as Vercel or Netlify.
