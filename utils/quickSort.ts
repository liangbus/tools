/**
 * 快速排序
 * @param arr 
 */
const quickSort = function(arr: number[]): number[]{
  if (!arr.length) return [];
  const pivotKey = Math.floor(arr.length/2);
  const pivot = arr.splice(pivotKey, 1)[0]
  const leftArr = [], rightArr = []
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    if (tmp < pivot) {
      leftArr.push(tmp)
    } else {
      rightArr.push(tmp)
    }
  }
  return quickSort(leftArr).concat([pivot], quickSort(rightArr));
}

export {
  quickSort
}