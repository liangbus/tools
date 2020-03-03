/**
 * ES5 规范 9.2 节中定义了抽象操作 ToBoolean，列举了布尔强制类型转换所有可能出现的结果
 * 假值列表如下
 * 假值的布尔强制类型转换结果为 false
 */
const falsyValueArr = [
  undefined,
  null,
  false,
  +0,
  -0,
  NaN,
  ""
]