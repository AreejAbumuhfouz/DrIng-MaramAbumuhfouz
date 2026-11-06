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
1. **Domain**: set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (Vercel → Environment Variables). It is used for canonical URLs, hreflang, sitemap, OG image and JSON-LD.
2. **LinkedIn**: replace `person.linkedin` in `lib/content.ts`.
3. **CV**: put the PDF at `public/cv/Maram_Abu-Muhfouz_CV.pdf`.
4. **Research images** live in `public/research/` (PhD, perovskite and COMSOL projects). Replace a file with the same name to update it.
5. **Impressum / Datenschutz**: a public site in Germany needs an Impressum and a privacy notice.

## Where to edit things
- All text (DE + EN): `lib/content.ts`
- Colours (from the logo): `tailwind.config.ts` → navy `#0B2345`, teal `#039185`, amber `#F29B18`
- Sections: `app/[locale]/page.tsx`

## SEO / GEO included
- Per-language metadata, canonical + hreflang (`de`, `en`, `x-default`)
- Open Graph image generated per language (`/de/opengraph-image`)
- `sitemap.xml`, `robots.txt` (AI crawlers allowed), `manifest.webmanifest`, favicons
- JSON-LD: `Person`, `ProfilePage`, `Thesis`, `FAQPage`
- FAQ section and `public/llms.txt` so AI answer engines can cite the profile accurately
- Semantic HTML, skip link, `prefers-reduced-motion` support

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
