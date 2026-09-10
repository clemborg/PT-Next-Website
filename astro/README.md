# PT Next — Astro 5 static site

September 2026 marketing site ported from the Next.js stack at `../src/`.
Architecture follows `../../delivery/astro-version/`: thin route pages, shared
`Base.astro` layout, page bodies, and the `css()` style helper.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # → dist/ (deployable static folder)
npm run preview   # serve dist/
```

Set `PUBLIC_GA_ID` (see `.env.example`) to enable GA4 with cookie consent.
Leave unset for local/preview builds — no analytics scripts load.

## How it is organized

| Path | Role |
|------|------|
| `src/lib/translations.ts` | EN→FR dictionary + `t()` / `tr()` (verbatim from Next.js) |
| `src/lib/routes.ts` | Page paths, SEO titles/descriptions, `href()` |
| `src/lib/style.ts` | `css()` helper — serializes React-style objects to inline CSS |
| `src/layouts/Base.astro` | `<head>` SEO, hreflang, OG/Twitter, favicons, fonts, ThemeInit, GA |
| `src/components/*.astro` | Nav, Footer, ContactForm, Analytics, etc. |
| `src/page-bodies/*.astro` | One component per page; Nav → sections → ContactForm → Footer |
| `src/pages/**` | Thin routes: EN at root, FR under `src/pages/fr/` |

## Static output

- `trailingSlash: 'always'` + `build.format: 'directory'` → URLs like `/platform/`
- Legacy redirects in `astro.config.mjs` and `vercel.json` (301 on Vercel):
  - `/how-it-works/` → `/#event-pilot`
  - `/fr/fonctionnement/` → `/fr/#event-pilot`
  - `/use-cases/` → `/deployments/`
  - `/fr/cas-dusage/` → `/fr/deploiements/`

## Assets

Copy raster images and favicons from `../public/images/` into `public/images/`
(only three SVG logos ship in git; PNG hero/platform/proof assets are required
for a full visual match). Symlink or copy from the Next.js `public/` tree before
deploy.

## JavaScript shipped to the browser

Minimal by design:

1. **ThemeInit** — inline in `Base.astro` head (prevents flash)
2. **Theme toggle** — vanilla script in `ThemeToggle.astro`
3. **Contact form** — Formspree POST + redirect in `ContactForm.astro`
4. **Analytics** — consent banner + conditional GA4 load in `Analytics.astro`

No React, no hydration, no client router.

## Deploy

Build `dist/` and upload to any static host, or connect the `astro/` folder to
Vercel. Use `vercel.json` for production 301 redirects alongside Astro's build-time redirects.
