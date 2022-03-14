import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      createVuePlugin(),
      ScriptSetup(),
      legacy({
        targets: ['chrome >= 50'],
        polyfills: ['es.promise.finally', 'es.promise.all-settled', 'es.global-this'],
        modernPolyfills: ['es.promise.finally', 'es.promise.all-settled', 'es.global-this'],
      }),
    ],
    base: mode === 'development' ? '/project_name/' : './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math";@import "@/style/common";`,
          charset: false,
        },
      },
    },
  }
})
