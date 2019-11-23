// 一个 JavaScript 命名函数。
function mySimpleWebpackPlugin(pluginOptions) {
  this.options = pluginOptions
  console.log(`simple plugin options >> `, pluginOptions);
}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
mySimpleWebpackPlugin.prototype.apply = function(compiler) {
  console.log('================= complier ================== >>> ', compiler);
  compiler.plugin('beforeRun', function(compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
    // console.log(`this is my simple webpack plugin!!!`, compilation);
    callback && callback()
  });
  compiler.plugin('failed', function(err) {
    console.error('compile fail >>> ', err)
  })
}

module.exports = mySimpleWebpackPlugin;
