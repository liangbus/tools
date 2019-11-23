const path = require('path')
/**
 * webpack-dev-server 配置项
 */
module.exports = {
  port: 9000,
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
  noInfo: true // only errors & warns on hot reload
}
