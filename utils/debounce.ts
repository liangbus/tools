/**
 * 防抖函数
 * @param fn 目标执行函数
 * @param delay 延时时间
 * @param context 执行上下文
 */
const debounce = (fn: Function, delay: number, context: Object): Object => {
  let timer = null
  return function(...args: any) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      // 使用 apply 则不需要 ...
      fn.call(context, ...args)
    }, delay)
  }
}

export default debounce