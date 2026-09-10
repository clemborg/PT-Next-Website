# PT Next — Marketing Site

Production rebuild of the PT Next / Argos marketing site (September 2026
redesign). Two stack implementations live in this repo — pick the one your
team prefers:

| Stack | Folder | Build output | JS shipped |
|-------|--------|--------------|------------|
| **Next.js 15** | repo root | `out/` | ~103 KB (React runtime) |
| **Astro 5** | `astro/` | `astro/dist/` | ~0 (vanilla scripts only) |

Both produce the same site: 6 pages × 2 locales, same SEO, same Formspree
form, same September nav (Platform, Use Cases, Proof, Company, FAQ).

## Next.js (repo root)

Next.js 15 (App Router), **full static export** — every page ships complete
HTML at build time. No server required; deploy `out/` to any static host.

```
npm install
npm run build     # → out/
npm run dev       # local dev server
```

## Astro (`astro/`)

Recommended for teams that want shared components without a React runtime.
See [astro/README.md](astro/README.md) for full details.

```
cd astro
npm install
npm run build     # → dist/
npm run dev       # local dev server
```

## Architecture

- **Bilingual routing** — real routes per locale, statically pre-rendered:
  `/`, `/platform`, … (EN) and `/fr/`, `/fr/plateforme`, `/fr/deploiements`,
  `/fr/cas-dusage`, `/fr/fonctionnement`, `/fr/preuves`, `/fr/societe` (FR).
  Two root layouts (route groups `(en)` / `(fr)`) give each locale its own
  `<html lang>`. The nav's EN | FR pill links to the sibling route.
- **Copy** — components author the exact English strings from the designs;
  [src/lib/translations.ts](src/lib/translations.ts) (ported verbatim from the
  handoff `translations.js`) resolves French at build time via `t()/tr()`.
- **Page registry** — [src/lib/routes.ts](src/lib/routes.ts) holds per-page
  paths + SEO titles/descriptions (from `SEO_METADATA.md`);
  [src/lib/seo.ts](src/lib/seo.ts) builds canonical + hreflang + OG metadata.
- **Contact form** — [src/components/ContactForm.tsx](src/components/ContactForm.tsx)
  POSTs to Formspree (`https://formspree.io/f/xojooqbl`) with a `_gotcha`
  honeypot, loading/error states, and redirects to `/thank-you` (`/fr/merci`)
  on success. Thank-you pages are `noindex` and excluded from the sitemap.
- **404** — `src/app/global-not-found.tsx` (experimental `globalNotFound`
  flag in `next.config.mjs`, required because of the two root layouts).
  Exports to `out/404.html`; the host must serve it with HTTP 404.
- **Structured data** — Organization + SoftwareApplication JSON-LD on Home
  and Platform (both locales), from the package's `structured-data.jsonld`.
- The print-export artifact `PT Next Company-print-14oso1v.dc.html` is
  **excluded from the site entirely** (SEO_AUDIT.md option 1). No noindex
  fallback is needed because the page does not exist in the build.
- **Analytics** — GA4 via [src/components/Analytics.tsx](src/components/Analytics.tsx)
  (`@next/third-parties/google`), gated on the `NEXT_PUBLIC_GA_ID` env var —
  see `.env.example`. Renders nothing if unset, so dev/preview builds never
  send data into the real property. Set the var at build time on the host
  (or in `.env.local` for local testing) with the real GA4 Measurement ID.

## Open items before launch

1. ~~**Real images**~~ — **Done.** The client's `missing items.zip`
   (2026-07-08) supplied all 14 real images; they're in `public/images/`
   under the filenames the designs reference.
2. ~~**French copy review**~~ — **Done.** The client supplied authoritative
   French for the 404 page, Thank You page, and form status messages
   (`translations.js`, 2026-07-08), now merged into
   [src/lib/translations.ts](src/lib/translations.ts). Note: the served
   `404.html` renders in English (x-default) since static hosting serves a
   single 404 document; the FR 404 strings are wired and will render if the
   host is configured to serve a French 404 for `/fr/*` paths.
3. **JSON-LD TODOs** — logo currently points at `/favicon-512.png`
   (swap for a proper square logo asset); `founder` was omitted pending
   confirmation that Eric Zuckerman is the founder (package TODO).
4. ~~**OG share image**~~ — **Done.** `public/og-image.png` (1200×630,
   Cormorant Garamond wordmark on the dark brand background) is wired into
   Open Graph + Twitter card metadata for every page via
   [src/lib/seo.ts](src/lib/seo.ts). One shared image for now; per-page
   variants can come later. Source: `scripts`-free — rendered from an HTML
   template with headless Chrome; regenerate by re-running that step if the
   wordmark/tagline changes.
5. ~~**Analytics**~~ — **Done.** GA4 confirmed as the choice; wired via
   `NEXT_PUBLIC_GA_ID` (see above). Still needed: the real GA4 Measurement
   ID from the property, set as a build-time env var on the host.
   **Search Console** verification tag/DNS TXT record still needed at launch.
6. Host config: serve the emitted `out/404.html` with HTTP status 404.
   URLs are directory-style with a trailing slash (`/platform/`), matching
   every canonical/hreflang and the sitemap; `trailingSlash: true` makes
   Vercel/Netlify/Cloudflare Pages 301 the non-slash form to the canonical
   one automatically. Deploy the contents of `out/`.

Launch-day validation checklist: see `SEO_AUDIT.md` in the handoff package.
