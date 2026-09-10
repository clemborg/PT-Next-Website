/*
 * Serialize a style object to a CSS string, mirroring React/JSX behavior:
 * camelCase -> kebab-case, and unitless numbers get `px` appended (except
 * for genuinely unitless CSS properties like line-height / font-weight).
 *
 * Astro's native object-style support converts camelCase but does NOT add
 * `px` to numbers, so this shim lets the page markup carry the exact same
 * style objects the Next.js components use — keeping the two ports faithful.
 */
const UNITLESS = new Set([
  'lineHeight', 'fontWeight', 'opacity', 'zIndex', 'flex', 'flexGrow',
  'flexShrink', 'order', 'aspectRatio',
]);

type StyleObj = Record<string, string | number>;

export function css(obj: StyleObj): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      const prop = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
      const val = typeof value === 'number' && !UNITLESS.has(key) ? `${value}px` : value;
      return `${prop}:${val}`;
    })
    .join(';');
}
