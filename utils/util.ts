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