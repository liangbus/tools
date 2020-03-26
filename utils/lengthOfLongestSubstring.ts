/**
 * 无重复字符的最长子串
 * @param str
 */
function lengthOfLongestSubstring(str: string = ''): number {
  // console.log('I am lengthOfLongestSubstring func!')
  let longestLen = 0
  if (!str) return longestLen
  let strArr = str.split('')
  let tmpStr = ''
  let curChar = ''
  for (let i = 0; i < strArr.length; i++) {
    tmpStr = strArr[i]
    for(let j = i + 1; j < strArr.length; j++) {
      curChar = strArr[j]
      if(tmpStr.indexOf(curChar) === -1) {
        tmpStr += strArr[j]
      } else {
        longestLen = tmpStr.length > longestLen ? tmpStr.length : longestLen
        tmpStr = ''
        break
      }
    }
    longestLen = tmpStr.length > longestLen ? tmpStr.length : longestLen
  }
  return longestLen
}
export {
  lengthOfLongestSubstring
}