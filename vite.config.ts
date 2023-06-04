import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: { 
        main: resolve(root, 'index.html'),
        afterschool: resolve(root, 'afterschool', 'index.html'),
        "scoala-de-vara": resolve(root, 'scoala-de-vara', 'index.html'),
        galerie: resolve(root, 'galerie', 'index.html'),
        contact: resolve(root, 'contact', 'index.html')
      }
    }
  }
})
