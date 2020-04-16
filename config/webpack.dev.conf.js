const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const devServerConfig = require('./webpack.dev.server.config');

console.log('===== Envirement ====== ', process.env.NODE_ENV)
// console.log('~~~~~~~~~~~~~\n', baseConfig)
const webpackDevConfig = {
  ...baseConfig,
  ...{
    mode: 'development',
    optimization: {
      // 打包压缩配置
      minimize: false
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // 模板插件
      new HtmlWebpackPlugin({
        // 指定入口模板
        template: './src/index.html',
        hash: true,
        minify: {
          removeComments: false, // 改为false
          collapseWhitespace: false, // 改为false
          removeAttributeQuotes: false // 改为false
        }
      }),
      // 清空编译构建目录
      // 最新版本不需要传目标目录，自动读取 output 下的 path
      // new CleanWebpackPlugin(),
    ],
    devServer: devServerConfig
  }
}
module.exports = webpackDevConfig;
