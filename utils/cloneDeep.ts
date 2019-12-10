/**
 * 深拷贝
 * @param target 拷贝目标
 * @param hash 存放对象的 map，防止循环引用
 */
function cloneDeep(target, hash = new WeakMap()) {
  // 基本类型或者 function 类型的直接返回值
  if (typeof target !== 'object' || hash.has(target)) return target
  // 数组类型
  if(Array.isArray(target)) {
    const res = []
    for(let item of target){
      if(typeof item === 'object') {
        res.push(cloneDeep(item))
      } else {
        res.push(item)
      }
    }
    // hash.set(target, target)
    // 此处不能直接用 concat，concat 是浅拷贝，如果元素是对象类型，只会拷贝其地址
    // return [].concat(target)
    return res

  } else if (typeof target === 'object') { // 对象类型
    // 遍历对象中包含 Symbol 类型的所有 key 值，存到一个累加器当中
    return [...Object.keys(target), ...Object.getOwnPropertySymbols(target)].reduce((res, curKey) => {
      if (typeof target[curKey] === 'object') {
        hash.set(target[curKey], target[curKey])
      }
      res[curKey] = cloneDeep(target[curKey], hash)
      return res
      // 初始化参数，假如迭代的对象非最外层级，则以当前对象的原型创建一个新的对象作为下一层递归的初始值
    }, target.constructor === Object ? {} : Object.create(target.constructor.prototype))
  }
}
export {
  cloneDeep
}
