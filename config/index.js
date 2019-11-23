var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html')
  },
  dev: {
    env: require('./dev.env'),
    port: 9000,
    assetsSubDirectory: 'static'
  }
}