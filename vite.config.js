import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }],
        ],
      },
    }),
  ],
  build: {
    target: 'es2018',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'react-dom';
          if (id.includes('node_modules/react/')) return 'react-core';
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) return 'framer';
          if (id.includes('node_modules/gsap')) return 'gsap';
          if (id.includes('node_modules/lenis')) return 'lenis';
          if (id.includes('node_modules/react-icons')) return 'icons';
          if (id.includes('node_modules/')) return 'vendor';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['framer-motion', 'gsap', 'lenis'],
  },
});
