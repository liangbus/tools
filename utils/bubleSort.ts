/**
 * 冒泡排序算法练习
 * @param arr 目标数组
 */
const bubleSort = function(arr: number[]) {
  if (!arr.length) return []
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      let target = arr[j];
      let compare = arr[j+1]
      if (target > compare) {
        let swap = compare;
        arr[j] = swap;
        arr[j+1] = target;
        // compare = target;
        // target = swap;
      }
    }
  }
  return arr
}
export {
  bubleSort
}