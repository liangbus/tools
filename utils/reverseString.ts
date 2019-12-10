/**
 * 翻转字符串
 * @param str 目标字符串
 */
const reverseStr = function(str: string) {
  let left = 0, right= str.length - 1
  const strArr = str.split('')
  while(left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
    left++;
    right--;
  }
  return strArr.join('')
}

export {
  reverseStr

}