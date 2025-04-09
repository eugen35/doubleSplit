import { defineConfig } from 'vite'

const config = defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'doubleSplit',
      fileName: (format) => `doubleSplit.${format}.js`
    }
  }
})

export default config
