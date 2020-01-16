/**
 * 归并排序（递归）
 * 时间复杂度：O(nLogn)
 * 稳定性：稳定
 * 归并的思想就是分治的思想，把问题拆成最小单位，最小单位即已排好了序
 * 然后再对比两个排好了序的数组，双下标，把比较结果放入新的数组中，直到其中一个数组全部移出
 * 则把剩下的另一组数据，全部插入新数组的末尾，此时新数组为已排好序的数组
 * 如此递归
 * @param arr 
 */
export default function mergeSort(arr: number[]) {
  const len = arr.length
  if(!len || len < 2) return arr
  const m = Math.floor(len / 2)
  const leftSide = arr.slice(0, m)
  const rightSide = arr.slice(m)
  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(left: number[], right: number[]) {
  const merged = []
  while(left.length && right.length) { // 这里须实时获取 left, right 长度
    if(left[0] > right[0]) { // 总是比较最前面的元素值，因为后面会 shift()
      merged.push(right.shift())
    } else {
      merged.push(left.shift())
    }
  }

  while(left.length) merged.push(left.shift())

  while(right.length) merged.push(right.shift())

  return merged
}