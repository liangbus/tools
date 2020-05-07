/**
 * 函数节流
 * @param fn 节流执行的目标 Function
 * @param delay 节流时间
 * @param context 执行上下文
 */
var throttle = function (fn, delay, context) {
    var lastTime = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = new Date().getTime();
        if (now - lastTime > delay) {
            fn.call.apply(fn, [context].concat(args));
            lastTime = now;
        }
    };
};
export default throttle;
//# sourceMappingURL=throttle.js.map