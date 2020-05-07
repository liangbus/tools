/**
 * 斐波那契序列，非递归式
 * @param n
 */
var fibonanceSequence = function (n) {
    var arr = [1, 1];
    if (n < 2)
        return arr[arr.length];
    for (var i = 2; i <= n; i++) {
        arr[i] = (arr[i - 2]) + arr[i - 1];
    }
    return arr[arr.length - 1];
};
/**
 * 斐波那契序列，递归式
 * @param n
 */
var fibonanceSequenceInRecursive = function (n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fibonanceSequenceInRecursive(n - 2) + fibonanceSequenceInRecursive(n - 1);
    }
};
/**
 * 斐波那契序列，递归式 + 动态规划版
 * @param n
 */
var fibonanceSequenceInRecursiveDp = function (n) {
    if (n < 1)
        return 0;
    var dpTable = [0, 1, 1];
    return fibnanceDpHelper(dpTable, n);
};
function fibnanceDpHelper(dpTable, n) {
    if (n <= 2)
        return 1;
    if (dpTable[n])
        return dpTable[n];
    dpTable[n] = fibnanceDpHelper(dpTable, n - 1) + fibnanceDpHelper(dpTable, n - 2);
    // console.log('dpTable ->', dpTable)
    return dpTable[n];
}
export { fibonanceSequence, fibonanceSequenceInRecursive, fibonanceSequenceInRecursiveDp };
//# sourceMappingURL=fibonacciSequence.js.map