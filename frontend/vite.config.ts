import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Raise warning limit if needed
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: "/index.html",
      output: {
        // Split node_modules into a separate vendor chunk for better caching and smaller app chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});