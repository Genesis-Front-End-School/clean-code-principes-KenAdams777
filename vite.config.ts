import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      name: 'reactComponentsLib',
      entry: path.resolve(__dirname, 'index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          useLocation: 'react-router-dom',
        },
      },
    },
    minify: false,
    sourcemap: true,
    emptyOutDir: true,
  },
});
