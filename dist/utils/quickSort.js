/**
 * 快速排序
 * @param arr
 */
var quickSort = function (arr) {
    if (!arr.length)
        return [];
    var pivotKey = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotKey, 1)[0];
    var leftArr = [], rightArr = [];
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        if (tmp < pivot) {
            leftArr.push(tmp);
        }
        else {
            rightArr.push(tmp);
        }
    }
    return quickSort(leftArr).concat([pivot], quickSort(rightArr));
};
export { quickSort };
//# sourceMappingURL=quickSort.js.map