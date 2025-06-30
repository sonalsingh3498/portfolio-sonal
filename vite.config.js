// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-sonal/', // 👈 Required for GitHub Pages
  plugins: [react()],
});
