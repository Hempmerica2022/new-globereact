// =============================================================================
//  vite.config.ts
//  Adds ?raw support for GLSL shader files (imported as strings at build time)
// =============================================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/global-vision/',

  // Treat .glsl files as raw strings when imported with ?raw
  assetsInclude: ['**/*.glsl'],

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f:   ['@react-three/fiber', '@react-three/drei'],
        }
      }
    }
  },

  server: {
    port: 3000,
    host: true,
  }
})
