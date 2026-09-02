/** @type {import('next').NextConfig} */
const nextConfig = {
  // Full static export: every page is rendered to complete HTML at build
  // time, so crawlers get full content in the initial response.
  output: 'export',
  // Directory-style URLs (/platform/ → platform/index.html). Keeps every
  // canonical/hreflang URL on one trailing-slash convention so hosts serve
  // and redirect to a single form — no duplicate /fr vs /fr/ indexing.
  trailingSlash: true,
  experimental: {
    // The site uses two root layouts (one per locale, for <html lang>).
    // global-not-found.tsx is the supported way to get a custom 404 page
    // in that setup — the classic app/not-found.tsx requires a single
    // root layout.
    globalNotFound: true,
  },
};

export default nextConfig;
