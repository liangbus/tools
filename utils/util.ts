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