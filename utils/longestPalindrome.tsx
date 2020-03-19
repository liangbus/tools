/**
 * [leetcode]
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 中心扩展算法，时间复杂度 O(n2)
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s: string): string {
  let max = s.charAt(0);
  let i = 1,
    len = s.length;
  let left = -1,
    right = -1;
  if (!s || len <= 1) return s;
  let prev = "",
    cur = "",
    next = "";
  // 单点为对称中心，如： cqbgbdfg -> bgb
  while (i < len && max.length < (len - 1 - i) * 2 + 1) {
    prev = s.charAt(i - 1);
    cur = s.charAt(i);
    next = s.charAt(i + 1);
    if (prev === next) {
      let tmpMax = prev + cur + next;
      left = i - 2;
      right = i + 2;
      while (left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
        tmpMax = s.charAt(left) + tmpMax + s.charAt(right);
        left--;
        right++;
      }

      if (tmpMax.length > max.length) {
        max = tmpMax;
      }
    }
    i++;
  }
  if (max.length === s.length) return max;
  // 双字符为对称中心, 如： ccabbaad -> abba
  i = 1;
  while (i < len && max.length <= (len - 1 - i) * 2 + 2) {
    prev = s.charAt(i - 1);
    cur = s.charAt(i);
    if (cur === prev) {
      let tmpMax = cur + prev;
      left = i - 2;
      right = i + 1;
      while (left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
        tmpMax = s.charAt(left) + tmpMax + s.charAt(right);
        left--;
        right++;
      }

      if (tmpMax.length > max.length) {
        max = tmpMax;
      }
    }
    i++;
  }
  return max;
};

/**
 * [leetcode]
 * 409. 最长回文串
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母【构造】成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1:
 * 
 * 输入:
 * "abccccdd"
 * 输出:
 * 7
 * 
 * 解释: 
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * @param s 
 */
const genLongestPalindromeLength = function(s) {
  const map = {}
  let max = 0
  // 保存每个字符出现的次数
  for(let c of s) {
      // let tmp = s.charAt(i)
      if(map[c]){
          map[c] = ++map[c]
          max += map[c] % 2 === 0 ? 2 : 0
      } else {
          map[c] = 1
      }
  }
  // console.log(map)
  // for(let k in map) {
  //     if(map[k] % 2 === 0) {
  //         max += map[k]
  //     } else if(map[k] > 2) {
  //         max += map[k] - 1
  //     }
  // }
  return max < s.length ? max + 1 : max
};

export {
  longestPalindrome,
  genLongestPalindromeLength
};
