/* Inline script to apply saved theme before paint (prevents flash). */
export function ThemeInit() {
  const script = `(function(){try{if(localStorage.getItem('ptnext-theme')==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
