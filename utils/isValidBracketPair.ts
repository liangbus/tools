/**
 * [leetcode] 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。注意空字符串可被认为是有效字符串。
 * @param {string} s
 * @return {boolean}
 */
function isValidBracketPair(s: string): boolean {
  if(!s) return true
  const stack = [], len = s.length
  if(len % 2 !== 0) return false // 长度为非偶数，直接返回 false
  // 括号映射
  const bracketsMap = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  let i = 0, curChar = '';
  while(i < len) {
    // 逐个字符查询
    curChar = s.charAt(i)
    // 是左括号，入栈
    if (curChar in bracketsMap) {
      stack.push(curChar)
    } else {
      // 右括号，把前面的出栈，作对比
      // 不匹配，直接返回
      if(bracketsMap[stack.pop()] !== curChar) return false
    }
    i++
  }
  return stack.length === 0
};

export {
  isValidBracketPair
}