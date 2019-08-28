/**
 * 无 loop 生成指定长度数组
 * @param len 数组长度
 */
const noLoopArray = (len: number): number[] =>  {
  return [...new Array(len).keys()]
}

/**
 * 数组去重
 * @param arr 目标数组
 */
const uniqueArray = (arr: number[]): number[] => {
  return [...(new Set([...arr]).keys())]
}

export {
  noLoopArray,
  uniqueArray
}