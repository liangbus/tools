/**
 * 检查是否为数组
 * @param target
 */
export function checkArray(target: any): boolean {
  return Object.prototype.toString.call(target) === '[object Array]'
}

/**
 * 
 * @param target 验证对象
 */
export function checkObject(target: any): boolean {
  return Object.prototype.toString.call(target) === '[object Object]'
}

/**
 * 
 * @param target 验证对象
 */
 export function checkString(target: any): boolean {
  return Object.prototype.toString.call(target) === '[object String]'
}
