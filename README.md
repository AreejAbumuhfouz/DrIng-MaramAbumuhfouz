# Portfolio – Dr.-Ing. Maram Abu-Muhfouz

Next.js 15 (App Router) + Tailwind CSS + Framer Motion.
German (default, `/de`) and English (`/en`), light and dark theme, bottom navigation, responsive on mobile, tablet and desktop.

## Run
```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /de
npm run build && npm start
```

## Before going live
1. **Domain**: set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (Vercel → Environment Variables). It is used for canonical URLs, hreflang, sitemap, OG image and JSON-LD.
2. **LinkedIn**: replace `person.linkedin` in `lib/content.ts`.
3. **CV**: put the PDF at `public/cv/Maram_Abu-Muhfouz_CV.pdf`.
4. **Dissertation figures**: put images in `public/research/` and fill the `figures` object in `lib/content.ts`
   (`ebsd`, `xrd`, `sem`, `crossSection`, `code`). Placeholders are shown until then.
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

## Deploy
Push to GitHub and import into Vercel (zero config).
