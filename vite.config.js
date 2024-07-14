import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = '/currency-converter-application/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: '/index.html', 
    },
  },
});
