/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums: number[]): void {
  const zeros = []
  const len = nums.length
  for(let i = 0; i < len; i++) {
    if(!nums[i]) {
      nums.splice(i, 1)
      zeros.push(0)
    }
  }
  nums.push(...zeros)
}

export {
  moveZeroes
}
