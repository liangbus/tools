function createObject(o: object) {
  // 声明一个匿名函数
  function F() {}
  // 改写该匿名函数的 prototype 指向
  F.prototype = o
  // 通过 new 方法创建一个新的对象
  return new F()
}
export {
  createObject
}