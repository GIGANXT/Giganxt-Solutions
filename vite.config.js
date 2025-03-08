import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    target: ['es2015', 'edge16', 'firefox60', 'chrome61', 'safari11'],
    cssTarget: ['chrome61', 'safari11', 'firefox60', 'edge16'],
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  }
});
