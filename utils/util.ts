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
