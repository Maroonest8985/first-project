const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      'login' : {
        target: 'http://138.2.62.193:9091',
        changeOrigin: true,
      }
    }
  }
})