import { defineConfig } from 'astro/config'
import compression from 'vite-plugin-compression'

import vercel from '@astrojs/vercel'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [],

  vite: {
    build: {
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      },
      cssCodeSplit: false
    },
    plugins: [
      compression({
        algorithm: 'brotliCompress',
        threshold: 1024
      }),
      tailwindcss()
    ]
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
})
