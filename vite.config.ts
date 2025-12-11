import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['e696d3864077.ngrok-free.app'],
  },
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      sass: {
        // Use this option to disable Sass deprecation warnings
        additionalData: '@import "@/styles/global.scss";',
        // This suppresses the deprecation warnings by telling Sass to use a more compatible syntax
        sassOptions: {
          quietDeps: true, // This will suppress deprecation warnings and other non-fatal messages
        },
      },
    },
  },
})
