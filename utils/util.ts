import React, { ReactNode, ReactElement } from 'react';

// 设置子元素的 props，数据至上而下流动
export function setChildrenProps(children: ReactNode, props: {}) {
  return React.Children.map(children, (child: any) => React.cloneElement(child, props))
}
// 将指定对象下面的函数绑定其执行环境
export function funcsBindWith(context: any, funcs: Array<string>) {
  const o: any = {}
  funcs.forEach((func: string) => {
    o[func] = context[func].bind(context)
  });
  return o
}

// 检查对象类型
export function isObject(target: any) {
  const t = typeof target
  return target !== null && (t === 'object' || t === 'function')
}

// 随机不重复数组（排序后是连续的）
export function generateRandomArray (len: number): Array<number>{
  let i = 0;
	const arr = []
	while(i++ < len) {
		arr.push(i)
	}
	return arr.sort(() => 0.5 - Math.random())
}

/**
 * 打乱数组顺序
 * @param arr
 */
export function shuffleArray(arr: number[]): number[] {
  let i = arr.length;
  while(i) {
    let r = Math.floor(Math.random() * i);
    [arr[i - 1], arr[r]] = [arr[r], arr[i - 1]]
    i--
  }
  return arr
}

/**
 * 阻塞线程
 * @param t 时间，单位：秒
 */
export function sleep(t: number): void {
  const start = new Date().getTime()
  let now = new Date().getTime()
  while(now - start < t * 1000) {
    now = new Date().getTime()
  }
}

/**
 * 检查是否支持 link 标签预加载机制
 * @returns boolean
 */
export function isPreloadSupported(): Boolean {
  const linkTag = document.createElement('link')
  const relList = linkTag.relList

  if(!relList || !relList.supports) {
    return false
  }

  return relList.supports('preload')
}

/**
 * 
 * @param ip 检查是否为 ip 地址
 */
export function checkIsIpAddr(ip: string): boolean {
  const pattern = /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/gm
  return pattern.test(ip)
}

/**
 * 检测是否为 NaN
 * 利用 NaN 唯一的不等于自身的特性
 * @param n
 */
export function checkIsNaN(n: any) {
  return n !== n
}

/**
 * Date.now polyfill
 */
export function getNowStamp() {
  if(!Date.now) {
    Date.now = () => +new Date()
  }
  return Date.now()
}

/**
 * 强制异步执行指定函数
 * @param fn 目标执行函数
 */
export function asyncify(fn: any) {
  const originalFn = fn
  let timer: any = setTimeout(() => {
    timer = null
    fn && fn()
  }, 0)
  fn = null
  return function(this: void) {
    if (timer) {
      fn = originalFn.bind.apply(
        originalFn,
        [this].concat([].slice.call(arguments))
        )
    } else {
      originalFn.apply(this, arguments)
    }
  }
}
// export function promisory(fn: Function) {
//   return function() {
//     const args = [].slice.call(arguments)
//     return new Promise((resolve, reject) => {
//       fn.apply(null,
//         args.concat(
//           function (err:any, res: any) {
//             if(err) reject(err)
//             else resolve(res)
//           }
//         )  
//       )
//     })
//   }
// }
/**
 * 函数执行时间测试
 * @param func 
 * @param context 
 * @param args 
 */
export function funcPerfomanceTest(func: Function, context = window, args: any[]) {
  const t1 = Date.now()
  const res = func.apply(context, args)
  const t2 = Date.now()
  console.log(`funcPerfomanceTest: ${func.name} cost ${t2 - t1}ms, and result is `, res)
}

export function generateRandomString(len: number): string {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_$%#@^'
  const charsCount = chars.length
  let str = ''
  let i = 0;
  while(i++ < len) {
    const r = Math.floor(Math.random() * charsCount)
    str += chars.charAt(r)
  }
  return str
}

/**
 * 数字金额转换成千分制（不带小数）
 * @param n 
 */
export function tranferMoneyFormat(n: number) {
  let num = n.toString()
  const len = num.length
  if(len <= 3) return num
  let i = len - 3
  let res = ''
  while(i >= 0) {
    res = ',' + num.substring(i, i + 3) + res
    i = i - 3
  }
  res = num.substring(0, i + 3) + res
  return res.startsWith(',') ? res.substring(1) : res
}

/**
 * 数字和字母映射表，通过数字生成字母
 * 0 -> A
 * 1 -> B 
 * ...
 * 25 -> Z
 */
export function generateLetter(number: number = 0): string {
  return String.fromCharCode(number + 65)
}
