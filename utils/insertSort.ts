/**
 * 插入排序
 * 每一轮，取出一个数用作比较
 * 拿取出值与前面排序后的每一个值比较，比当前数小的，则比较值往后挪一位，遍历下标前移
 * 直至前面的数值比取出值小，则插入
 * @param arr 目标数组
 */
export default function insertSort(arr: number[]) {
  const len = arr.length
  if(!len) return arr;
  for(let i = 1; i < len; i++) {
    let preIndex = i - 1
    let current = arr[i]
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    // insert （此处 preIndex+1 即最本轮对比数插入的位置，因为最后减减了，所以要加 1）
    arr[preIndex + 1] = current
  }
}