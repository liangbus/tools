/**
 * 检测对象是否为空(简易版)
 * @param value 
 */
function isObjectEmpty(value: object): boolean {
  // null 也是对象
  if (value === null) {
    return true
  }
  // 键值大于 0，则为非空
  if (Object.prototype.toString.call(value) === '[object Object]') {
    // 此处不包含不可枚举的属性，因为 keys 不会返回不可枚举的属性 key
    return !Object.keys(value).length
  }
  return true
}
export {
  isObjectEmpty
}