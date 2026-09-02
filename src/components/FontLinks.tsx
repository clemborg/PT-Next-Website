/*
 * Google Fonts, exactly as the design references load them (display=swap
 * is already in the URL — SEO_AUDIT.md flags this as required for LCP).
 * React 19 hoists these <link> elements into <head>.
 */
export function FontLinks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
