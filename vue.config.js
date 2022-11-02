const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/testworkwithoutVuex/dist/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map',
  }
})
