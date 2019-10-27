const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 模板插件
    new HtmlWebpackPlugin({
      // 指定入口模板
      template: './src/index.html',
      hash: true
    }),
    // 最新版本不需要传目标目录，自动读取 output 下的 path
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 9000,
    index: 'index.html',
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:1001'
    },
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
  }
};