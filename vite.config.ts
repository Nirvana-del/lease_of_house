import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  base: './',	//不加打包后白屏
  resolve:{
    alias:[
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
