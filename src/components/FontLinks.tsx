/*
 * Google Fonts — same URL as astro/src/layouts/Base.astro (display=swap
 * is already in the URL — SEO_AUDIT.md flags this as required for LCP).
 * Loaded from layout <head> for early fetch, matching the Astro stack.
 */
export function FontLinks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
