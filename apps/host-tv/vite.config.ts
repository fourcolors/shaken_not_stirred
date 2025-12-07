import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Resolve to source for CSS modules to work in dev
      '@shaken/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
