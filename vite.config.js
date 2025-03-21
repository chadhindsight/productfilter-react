import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // support `describe`, `test` etc. globally
    globals: true,
    environment: "jsdom",
    // global test setup
    setupFiles: "./tests/setup.js"
  }
})
