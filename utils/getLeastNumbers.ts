
/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 *
 * Example
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 * @param arr 
 * @param k 
 */
const getLeastNumbers = function(arr: number[], k: number): number[] {
  if(!k) return [];
  // k 大于数组长度，则返回整个数组
  if(k >= arr.length) return arr
  let left = 0, right = arr.length - 1
  // 先对整个数组进行拆解
  let index = partition(arr, left, right)
  while (index !== k) {
    console.log('before arr >>> ', arr, ', index >> ', index)
    if(index > k) {
      right = index - 1
      index = partition(arr, left, right)
    } else {
      left = index + 1
      index = partition(arr, left, right)
    }
    console.log('after arr >>> ', arr, ', index >> ', index)
  }
  console.log('res > ', arr)
  return arr.slice(0, k)
}
/**
 * 对数组局部位置进行排序
 * @param arr 数组
 * @param start 起始位置
 * @param end 结束位置
 */
function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[start]
  let left = start + 1, right = end
  while(true) {
    while(arr[left] <= pivot && left <= end) ++left;
    while(arr[right] >= pivot && right >= start + 1) --right;

    if(left >= right) break;

    [arr[left], arr[right]] = [arr[right], arr[left]]
    ++left;
    --right;
  }
  // console.log('done ! > ', arr, ',  right ->', right, ',  start -> ', start);
  [arr[right], arr[start]] = [arr[start], arr[right]]
  return right
}
export {
  getLeastNumbers
}