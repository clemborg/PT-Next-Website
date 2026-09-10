// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ptnext.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  redirects: {
    '/how-it-works/': '/#event-pilot',
    '/fr/fonctionnement/': '/fr/#event-pilot',
    '/use-cases/': '/deployments/',
    '/fr/cas-dusage/': '/fr/deploiements/',
  },
});
