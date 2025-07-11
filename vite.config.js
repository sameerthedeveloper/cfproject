import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cfproject/',
  build: {
    chunkSizeWarningLimit: 1000, // optional: silence 500kb warning
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          react: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/auth'],
        }
      }
    }
  }
})
