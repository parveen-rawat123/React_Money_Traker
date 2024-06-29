import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server : {
    proxy :{
      'BASE_URL' : 'http://localhost:3000/api/v1/'
    },
  },
  plugins: [react()],
})
