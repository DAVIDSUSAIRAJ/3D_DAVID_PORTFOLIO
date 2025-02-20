import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],  // ✅ Ensure .glb files are included
  base: './',  // ✅ Ensures correct base URL in production
  build: {
    outDir: 'dist', // ✅ Vite will output files to dist/
  },
  server: {
    historyApiFallback: true, // ✅ Fix refresh issue in local development
  }
});
