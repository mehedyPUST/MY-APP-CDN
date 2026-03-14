import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this if deploying to GitHub Pages
  base: '/MY-APP-CDN/', // Only needed for GitHub Pages
})