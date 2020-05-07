/**
 * 冒泡排序算法练习
 * @param arr 目标数组
 */
var bubleSort = function (arr) {
    var _a;
    if (!arr.length)
        return [];
    for (var i = 0; i < arr.length - 1; i++) {
        var isSwap = false;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // let target = arr[j];
            // let compare = arr[j+1]
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                isSwap = true;
                // let swap = compare;
                // arr[j] = swap;
                // arr[j+1] = target;
                // compare = target;
                // target = swap;
            }
        }
        // 冒泡优化点：假如本轮没有交换元素，则认为全部都排好了
        if (!isSwap)
            break;
    }
    return arr;
};
export { bubleSort };
//# sourceMappingURL=bubleSort.js.map