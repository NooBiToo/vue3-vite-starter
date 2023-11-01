import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  server: {
    port: 8000,
    host: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.sass'],
  },
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({ cache: false }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vue3 Starter',
        short_name: 'V3S',
        theme_color: '#4DBA87',
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: './img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        start_url: '.',
        display: 'standalone',
        background_color: '#000000',
      },
    }),
    Components({
      dts: false,
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  test: {
    include: ['**/src/**/*.spec.[jt]s?(x)'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "@/styles/styles.sass"
        `,
      },
    },
  },
})
