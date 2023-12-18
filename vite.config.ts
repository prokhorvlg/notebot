import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
    },
    plugins: [react()],
  };
});
