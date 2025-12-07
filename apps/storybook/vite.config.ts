import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shaken/ui': join(__dirname, '../../packages/ui/src'),
      '@shaken/pixi': join(__dirname, '../../packages/pixi-components/src'),
    },
  },
  optimizeDeps: {
    include: ['pixi.js', '@pixi/react'],
  },
});
