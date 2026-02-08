import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://fpsjago.github.io',
  base: '/cybersecurity-pro-v2',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    }
  }
});
