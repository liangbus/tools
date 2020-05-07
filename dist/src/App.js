var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { SimpleCounting } from './components/Button/SimpleCounting';
import StateProvider from './components/serviceProvider/StateProvider/StateProvider';
import Loading from './components/Loading/Loading';
import { Clock } from './components/Clock/Clock';
import MechanicalClock from './components/Clock/MechanicalClock';
import Boxes from './components/Box/Boxes';
import BublekSortView from './components/SortView/BubleSortView';
import AnimationTest from './components/AnimationTest/AnimationTest';
import './sass/reset.scss';
import './sass/App.scss';
import throttle from '../utils/throttle';
import { ReduceTesting } from './components/ReduceTesting/ReduceTesting';
// fibonanceSequence test
// funcPerfomanceTest(fibonanceSequence, window, [30])
// funcPerfomanceTest(fibonanceSequenceInRecursiveDp, window, [45])
// funcPerfomanceTest(fibonanceSequenceInRecursive, window, [45])
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        document.addEventListener('onLoad', function (e) {
            console.log('on document load event !!');
        });
    };
    // xss-test
    // imgError(): void {
    //   alert(1111)
    // }
    App.prototype.render = function () {
        // setTimeout(() => {
        //   throw new Error('wrong!')
        // }, 2000)
        return (React.createElement(StateProvider, null,
            React.createElement(Clock, { name: "clockComponent" }),
            React.createElement(MechanicalClock, null),
            React.createElement(Loading, null),
            React.createElement("div", { className: "xss-test" },
                React.createElement("a", { href: "JaVaScript:alert('xss')" }, "\u5956\u54C1\u9001\u4E0D\u505C")),
            React.createElement(Boxes, { amount: 100, innerText: "A" }),
            React.createElement(SimpleCounting, { name: "countingComponent" }),
            React.createElement(ReduceTesting, null),
            React.createElement(BublekSortView, { data: { columnsArr: [] } }),
            React.createElement(AnimationTest, null)));
    };
    return App;
}(React.Component));
export { App };
window.onerror = function (error) {
    console.log('=========window.onerror=========', error);
};
// 监听页面滚动
document.onscroll = throttle(function () {
    console.log("scroll \u4E8B\u4EF6\u6267\u884C -> " + new Date().getTime());
}, 800, this);
document.addEventListener('DOMContentLoaded', function () {
    console.log('on document DOMContentLoaded !!');
});
window.addEventListener('load', function () {
    console.log('on window LOAD EVENT !!');
});
// 全局捕获 error 事件
// window.addEventListener('error', err => {
//   console.error('caught ERROR in eventListener > ', err)
// }, true)
// // 全局捕获【未捕获】的 Promise 异常/拒绝事件
// window.addEventListener('unhandledrejection', err => {
//   console.error('caught unhandledrejection >>> ', err)
// })
//# sourceMappingURL=App.js.map