/**
 * 选择排序
 * 算法复杂度: O(n^2)
 * 稳定性: 不稳定
 * 每次遍历，都要找到这一轮最小（大）的数，然后将其与本轮最开始的下标值交换位置
 * @param arr 目标数组
 */
export default function selectionSort(arr: number[]) {
  const len = arr.length
  if(!len) return arr;
  for(let i = 0; i < len; i++) {
    // 假定本轮最小的值为最开始的值
    let min = i
    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    // 若后面有更小的数，则交换位置，否则这个数为本轮最小值
    if(arr[min] < arr[i]) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}
