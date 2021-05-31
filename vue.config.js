module.exports = {
    productionSourceMap: false,
    devServer: {
      proxy: 'http://localhost:3003'
    },
    outputDir:'../client-build'
  }