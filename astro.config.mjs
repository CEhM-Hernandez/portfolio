// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compression from 'vite-plugin-compression';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  vite: {
    build: {
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    plugins: [
      compression({
        algorithm: 'brotliCompress',
        threshold: 1024,
      }),
    ],
  },

  adapter: vercel(),
});