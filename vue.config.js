const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    "/" : {
      target: "http://138.2.62.193:8080",
    }
  }
})