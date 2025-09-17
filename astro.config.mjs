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
          manualChunks: undefined,
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.names.split('.').at(1)
            if (/css/.test(extType)) {
              return 'assets/css/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          }
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
