/**
 * 函数节流
 * @param fn 节流执行的目标 Function
 * @param delay 节流时间
 * @param context 执行上下文
 */
const throttle = (fn: Function, delay: number, context: Object): any => {
  let lastTime = 0
  return function(...args: any) {
    const now = new Date().getTime()
    if(now - lastTime > delay) {
      fn.call(context, ...args)
      lastTime = now
    }
  }
}

// 定时器版本
export const throttleV2 = (fn: Function, delay: number, context: Object): Function => {
  let timer:any = null
  return function() {
    if(timer) return false
    const args = [].slice.call(arguments)
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    }, delay)
  }
}

export default throttle