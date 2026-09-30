import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: 'es2018',
    minify: 'esbuild',
    // rollupOptions removed to fix build hanging issue
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    // Used by scripts/prerender.js to preload each page's CSS/JS chunk
    manifest: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['framer-motion', 'gsap', 'lenis'],
  },
});
