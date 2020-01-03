/**
 * 二分搜索
 * @param arr 目标搜索数组【有序】
 * @param target 目标值
 */
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1
  while(left <= right) {
    let pivot = Math.floor((left + right) / 2)
    if(target === arr[pivot]) {
      return pivot
    } else if (target > arr[pivot]) {
      left = pivot + 1
    } else {
      right = pivot - 1
    }
  }
  return -1
}
export default binarySearch
