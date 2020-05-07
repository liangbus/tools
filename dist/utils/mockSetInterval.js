var mockSetInterval = function (func, milliSec) {
    function interval() {
        setTimeout(interval, milliSec);
        func();
    }
    setTimeout(interval, milliSec);
};
export { mockSetInterval };
//# sourceMappingURL=mockSetInterval.js.map