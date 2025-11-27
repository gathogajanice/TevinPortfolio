const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig({
  server: {
    open: '/page.html'
  },
  preview: {
    open: '/page.html'
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'page.html')
      }
    }
  }
});
