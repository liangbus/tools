const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devServerConfig = require('./webpack.dev.server.config');
const mySimpleWebpackPlugin = require('../plugins/simplePlugin');

console.log('===== Envirement ====== ', process.env.NODE_ENV)
// console.log('---------devServerConfig--------\n', devServerConfig)

/**
 * webpack 只认得 webpack.config.js 文件，但是在 package.json 里面可以通过参数来指定 webpack 的配置文件
 * 所以就会有诸如 webpack.base.conf.js, webpack.dev.conf.js, webpack.prod.conf.js 这类文件，这些文件名字都是自定义的
 */
module.exports = {
  entry: './src/index.tsx',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        // 避免页面混入过多样式文件
        // 不使用 MiniCssExtractPlugin，样式会直接以 style 标签形式插入到 header 中去
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // style-loader conflict with MiniCssExtractPlugin https://github.com/webpack-contrib/mini-css-extract-plugin/issues/173
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ],
        // Since webpack v4 the extract-text-webpack-plugin should not be used for css
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: ["css-loader", "sass-loader"]
        // })
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
    path: path.resolve('.', 'dist') // . 是指当前的工作目录，__dirname 是当前的文件路径
  },
  optimization: {
    // 打包压缩配置
    minimize: false
  },
  plugins: [
    // 将脚本中引入的样式抽象出独立的样式文件
    // new ExtractTextPlugin("styles.css"),
    new MiniCssExtractPlugin({
  　　filename: "[name].[chunkhash:8].css",
  　　 chunkFilename: "[id].css"
　　 }),
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
    new CleanWebpackPlugin(),
    // 个人 webpack 插件练习
    // new mySimpleWebpackPlugin({
    //   context: this,
    //   that: 'That s String'
    // })
  ],
  devServer: devServerConfig
};

console.info(`webpack server running, see http://localhost:${devServerConfig.port}/ `)