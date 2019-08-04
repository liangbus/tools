function longestCommonPrefix(strArr: string[]): string {
  if(!strArr.length) return ''
  const firstStr = strArr[0].split('')
  let result = ''
  for (let i = 0; i < firstStr.length; i++) {
    let curChar = firstStr[i]
    for (let j = 1; j < strArr.length; j++) {
      let restEleChar = strArr[j].charAt(i)
      if (restEleChar === curChar) {
        if(j === strArr.length - 1) {
          result += restEleChar
        }
        continue
      } else {
        return result
      }
    }
  }
  return result
}
export {
  longestCommonPrefix
}