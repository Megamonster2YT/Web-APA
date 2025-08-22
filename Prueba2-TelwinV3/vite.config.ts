// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// cambia "nombre-repo" por el nombre real de tu repositorio en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/Web-APA/',
})


