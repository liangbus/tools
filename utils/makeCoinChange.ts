/**
====================================
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
如果没有任何一种硬币组合能组成总金额，返回 -1。

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1

输入: coins = [2], amount = 3
输出: -1

说明: 你可以认为每种硬币的数量是无限的。
====================================
*/

/**
 * 递归 + 动态规划版本
 * @param coins 
 * @param amount 
 */
const coinChangeRecursiveDp = function(coins, amount) {
    const dpTable = {}
    function dp(subAmount) {
        // console.log('subAmount: ',subAmount)
        if(dpTable[subAmount]) return dpTable[subAmount]
        if(subAmount === 0) return 0
        if(subAmount < 0) return -1
        let res = Number.MAX_SAFE_INTEGER
        for(let coin of coins){
            const subResult = dp(subAmount - coin)
            if(subResult === -1) continue
            // console.log('subResult >>> ', subResult)
            res = Math.min(res, 1 + subResult)
        }
        // console.log('res >> ', res)
        dpTable[subAmount] = res === Number.MAX_SAFE_INTEGER ? -1 : res
        // console.log('dp > ', dpTable)
        return dpTable[subAmount]
    }
    return dp(amount)
};
/**
 * 迭代 + 动态规划版本
 * @param coins 
 * @param amount 
 */
const coinChangeIterationDp = function(coins, amount) {
  // 用一个数组把之前计算好的结果存起来，起始值为 0
  const dpTable = [0]
  // 拆成一个个子问题，即求金额为 10 的前提，先求出 9，8，7，6....1的结果
  // 因为从 0 开始， 所以是自底向上 0, 1, 2, 3, 4.....10
  for(let subAmount = 1; subAmount < amount + 1; subAmount++){
      // 给予默认值，用于后续判断
      dpTable[subAmount] = amount + 1
      for(let coin of coins) {
          // 假如子金额小于当前遍历的硬币值，则跳过
          if (subAmount >= coin) {
              // console.log('cur coin > ', coin)
              dpTable[subAmount] =
                  dpTable[subAmount] < dpTable[subAmount - coin] + 1 ?
                  dpTable[subAmount] : dpTable[subAmount - coin] + 1
              // console.log('subAmount -> ', subAmount ,', coin -> ', coin, ', dpTable -> ', dpTable)
          }
      }
  }
  return dpTable[amount] > amount ? -1 : dpTable[amount]
};

export {
  coinChangeRecursiveDp,
  coinChangeIterationDp
}