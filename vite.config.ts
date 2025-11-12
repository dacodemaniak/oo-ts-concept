import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'TypescriptOOPStarter',
      fileName: 'main',
      formats: ['es']
    },
    rollupOptions: {
      external: ['@inquirer/input', '@inquirer/select', '@inquirer/confirm']
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
});