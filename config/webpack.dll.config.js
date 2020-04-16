const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  // mode: 'development',
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].dll.js',
    libraryTarget: 'var', // （默认值）当 library 加载完成，入口起点的返回值将分配给一个变量：
    library: '_dll_[name]_[hash]' // libraryTarget 输出后赋值的变量名
  },
  plugins:[
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dist/dll', '[name].manifest.json'),
      name: '_dll_[name]_[hash]',
      context: __dirname // 必填 且与 webpack.config.js 中的 DllReferencePlugin context 保持一致
    })
  ]
}