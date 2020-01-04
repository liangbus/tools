const path = require('path')
const PORT = 9000
/**
 * webpack-dev-server 配置项
 */
module.exports = {
  port: PORT,
  index: 'index.html',
  proxy: {
    // proxy URLs to backend development server
    '/api': 'http://localhost:1001'
  },
  contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
  compress: false, // enable gzip compression
  historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  https: false, // true for self-signed, object for cert authority
  noInfo: true, // only errors & warns on hot reload
  after(app) {
    // console.log('webpack success', app)
    console.info(`webpack server running, see http://localhost:${PORT}/ `)
  }
}
