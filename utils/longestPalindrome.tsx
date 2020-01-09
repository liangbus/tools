/**
 * [leetcode]
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 中心扩展算法，时间复杂度 O(n2)
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s: string): string {
  let max = s.charAt(0);
  let i = 1, len = s.length
  let left = -1, right = -1;
  if(!s || len <= 1) return s;
  let prev = '', cur = '', next = '';
  // 单点为对称中心，如： cqbgbdfg -> bgb
  while(i < len && max.length < ((len - 1 - i) * 2 + 1)) {
      prev = s.charAt(i - 1);
      cur = s.charAt(i);
      next = s.charAt(i + 1)
      if(prev === next) {
          let tmpMax = (prev + cur + next)
          left =  i - 2;
          right = i + 2;
          while (left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
              tmpMax = s.charAt(left) + tmpMax + s.charAt(right)
              left--
              right++
          }
          
          if(tmpMax.length > max.length) {
              max = tmpMax
          }
      }
      i++
  }
  if(max.length === s.length) return max
  // 双字符为对称中心, 如： ccabbaad -> abba
  i = 1
  while(i < len && max.length <= ((len - 1 - i) * 2) + 2) {
    prev = s.charAt(i - 1);
    cur = s.charAt(i);
    if(cur === prev) {
        let tmpMax = cur + prev
        left = i - 2;
        right = i + 1;
        while (left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
            tmpMax = s.charAt(left) + tmpMax + s.charAt(right)
            left--
            right++
        }
        
        if(tmpMax.length > max.length) {
            max = tmpMax
        }
    }
    i++
}
  return max
};

export default longestPalindrome
