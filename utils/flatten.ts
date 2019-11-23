/**
 * 简单的递归实现
 * @param arr 
 */
const normalFlatten = (arr: any[]): any[] => {
  var res = []
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    if(Array.isArray(item)) {
      res.push(...normalFlatten(item))
    } else {
      res.push(item)
    }
  }
  return res
}

/**
 * 递归的方式实现数组扁平化
 * @param arr source array
 */
const recursiveFlattening = (arr: any[]): any => {
  return arr.reduce(
    (acc, curVal) => {
      return Array.isArray(curVal) ? acc.concat(recursiveFlattening(curVal)) : acc.concat(curVal)
    },
    []
  );
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

/**
 * 通过 ES6 的解构方法可以实现
 * 每次解构都可以把一层数组解开
 * some 方法：只要有一个满足，就返回 true
 * @param arr 
 */
const awesomeFlatten = (arr: any[]) => {
  while(arr.some(item => Array.isArray(item))){
    console.log(arr)
    arr = [].concat(...arr)
  }
  return arr
}

export {
  recursiveFlattening,
  arrayFlattening,
  awesomeFlatten
}