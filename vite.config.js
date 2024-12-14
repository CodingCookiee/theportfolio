import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.fbx'],
  build: {
    rollupOptions: {
      external: ['**/*.glb', '**/*.fbx']
    }
  }
})
