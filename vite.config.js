import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' faz os caminhos dos arquivos serem relativos,
// funcionando tanto em https://usuario.github.io/ quanto em https://usuario.github.io/repositorio/
export default defineConfig({
  base: './',
  plugins: [vue()],
})
