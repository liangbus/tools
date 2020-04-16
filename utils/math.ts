/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * @param x 
 * @param n 
 */
const myPow = function(x: number, n: number): number {
  if (n < 0) return 1 / powHelper(x, -n)
  return powHelper(x, n)
};
function powHelper(x: number, n: number): number{
  if (n === 0) return 1
  return n % 2 !== 0 ? powHelper(x*x, (n - 1) / 2) * x : powHelper(x*x, n/2)
}

/**
 * 求两数的最大公约数
 * @param a num1
 * @param b num2
 */
 function gcd(a: number, b: number): number {
  if (b === 0) return a
  return gcd(b, a % b)
}

export {
  myPow,
  gcd
}
