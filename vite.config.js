import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Perseverus-Page/', // Ajusta esto según el nombre de tu repositorio
  plugins: [
    react(),
    tailwindcss(),
  ],
});