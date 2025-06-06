import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ ใช้ root path เพราะ Render deploy ที่ / ไม่ใช่ subfolder
  plugins: [react()],
})
