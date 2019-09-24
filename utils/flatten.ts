/**
 * 递归的方式实现数组扁平化
 * @param arr source array
 */
const recursiveFlattening = (arr: any[]): any => {
  return arr.reduce((acc, curVal) => Array.isArray(curVal) ? acc.concat(recursiveFlattening(curVal)) : acc.concat(curVal), []);
}

/**
 * 用非递归的方式实现数组扁平化
 * @param arr source
 */
const arrayFlattening = (arr: any[]): any[] => {
  const stack = [...arr];
  const res = [];
  while(stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

export {
  recursiveFlattening,
  arrayFlattening
}