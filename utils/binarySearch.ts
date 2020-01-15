/**
 * 二分搜索
 * @param arr 目标搜索数组【有序】
 * @param target 目标值
 */
function binarySearch(arr: number[], target: number) {
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

/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const searchRange = function(nums: number[], target: number) {
  if(!nums || !nums.length) return [-1, -1]
  let key = -1
  let left = 0, right = nums.length
  const res = []
  // 首次遍历，找到区间左边界
  while (left < right) { // 跳出循环的条件是 left == right
      key = Math.floor((left + right)/ 2)
      if(nums[key] === target) {
        right = key // 当找到目标值，暂时将其认为是右边界
      } else if(target > nums[key]) {
        left = key + 1
      } else if(target < nums[key]) {
        right = key
      }
  }
  // 此处相当于 left, right 都没有找到 target 值
  if(nums[left] !== target){
      return [-1, -1]
  }
  res[0] = left // 取左值
  
  right = nums.length
  // 再次遍历，找到区间右边界
  while(left < right) {
      key = Math.floor((left + right)/ 2)
      if(nums[key] === target) {
        left = key + 1 // 目标是右边界，因此当匹配到的时候，临时作为左边界(left, right] 再去匹配右边的区间
      } else if(nums[key] < target) {
        left = key + 1
      } else if(nums[key] > target) {
        right = key
      }
  }
  res[1] = left - 1 // 因为最后一次匹配目标值之后加1保存在 left 里，此处需要 - 1
  return res
};

export {
  binarySearch,
  searchRange
}
