import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [mdx()]
});