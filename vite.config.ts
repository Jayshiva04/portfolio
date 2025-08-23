// vite.config.ts

import path from "path" // 👈 Add this import
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 Add this 'resolve' block
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})