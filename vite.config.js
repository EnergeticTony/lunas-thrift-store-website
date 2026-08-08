import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This site is deployed at the root of lunas-thrift-store.github.io.
  base: '/',
})
