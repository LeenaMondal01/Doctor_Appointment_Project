// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import react from "@vitejs/plugin-react"
// export default defineConfig({
//   plugins: [
//     tailwindcss(),react(),
//   ],
// })



import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {port:5173},
  theme:{
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})