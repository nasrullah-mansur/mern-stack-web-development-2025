import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),        // your main HTML file
        popup: path.resolve(__dirname, 'popup.html'),        // optional additional HTML
        cart: path.resolve(__dirname, 'cart.html'),        // optional additional HTML
      }
    }
  }
})