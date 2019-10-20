/**
 * 防抖函数
 * @param fn 目标执行函数
 * @param delay 延时时间
 * @param context 执行上下文
 */
const debounce = (fn: Function, delay: number, context: Object): Object => {
  let timer = null
  return function() {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(context)
    }, delay)
  }
}

export default debounce