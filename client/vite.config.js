import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 12000,
    allowedHosts: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})