/**
 * 简单的递归实现
 * @param arr
 */
var normalFlatten = function (arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (Array.isArray(item)) {
            res.push.apply(res, normalFlatten(item));
        }
        else {
            res.push(item);
        }
    }
    return res;
};
/**
 * 递归的方式实现数组扁平化
 * @param arr source array
 */
var recursiveFlattening = function (arr) {
    return arr.reduce(function (acc, curVal) {
        return Array.isArray(curVal) ? acc.concat(recursiveFlattening(curVal)) : acc.concat(curVal);
    }, []);
};
/**
 * 用非递归的方式实现数组扁平化
 * @param arr source
 */
var arrayFlattening = function (arr) {
    var stack = arr.slice();
    var res = [];
    while (stack.length) {
        var head = stack.shift();
        if (Array.isArray(head)) {
            stack.unshift.apply(stack, head);
        }
        else {
            res.push(head);
        }
    }
    return res.reverse();
};
/**
 * 通过 ES6 的解构方法可以实现
 * 每次解构都可以把一层数组解开
 * some 方法：只要有一个满足，就返回 true
 * @param arr
 */
var awesomeFlatten = function (arr) {
    while (arr.some(function (item) { return Array.isArray(item); })) {
        console.log(arr);
        arr = [].concat.apply([], arr);
    }
    return arr;
};
/**
 * 针对数字类型数组，可以通过 join 和 split 方法即可完成
 * @param arr
 */
var numbersFlattening = function (arr) {
    return arr.join(',').split(',').map(function (num) { return Number(num); });
};
export { recursiveFlattening, arrayFlattening, awesomeFlatten, numbersFlattening };
//# sourceMappingURL=flatten.js.map