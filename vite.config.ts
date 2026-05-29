import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'ReactMFE',
      fileName: 'react-mfe',
      formats: ['es', 'umd']
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
