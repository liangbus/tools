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
import './clock.scss';
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock(props) {
        var _this = _super.call(this, props) || this;
        // console.log('this.props >>> ', this.props) // super 中要传入 props 才可以使用 this.props
        // console.log('props >>> ', props)
        _this.state = {
            hour: '00',
            min: '00',
            sec: '00'
        };
        return _this;
    }
    // Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.
    // componentWillMount() {
    //   // console.info('componentWillMount Life Cycle')
    // }
    Clock.prototype.componentDidMount = function () {
        var _this = this;
        // console.info('componentDidMount Life Cycle')
        setInterval(function () {
            var d = new Date();
            _this.setState({
                hour: d.getHours() >= 10 ? d.getHours().toString() : '0' + d.getHours().toString(),
                min: d.getMinutes() >= 10 ? d.getMinutes().toString() : '0' + d.getMinutes().toString(),
                sec: d.getSeconds() >= 10 ? d.getSeconds().toString() : '0' + d.getSeconds().toString()
            });
        }, 1000);
    };
    Clock.prototype.shouldComponentUpdate = function () {
        var _a = this.state, hour = _a.hour, min = _a.min, sec = _a.sec;
        // console.log('shouComponentUpdate Life Cycle')
        // console.log('life cycle options: ', options)
        // console.log(`hour = ${hour}, min = ${min}, sec = ${sec}`)
        return true;
    };
    // Warning: componentWillReceiveProps has been renamed
    // componentWillReceiveProps() {
    //   console.log('componentWillReceiveProps Life cycle.')
    // }
    Clock.prototype.render = function () {
        var _a = this.state, hour = _a.hour, min = _a.min, sec = _a.sec;
        return (React.createElement("div", { className: "clock-comp" },
            React.createElement("div", { className: "time-sect hour-sect" },
                React.createElement("span", { className: "" }, hour)),
            React.createElement("div", { className: "time-symbol" }, ":"),
            React.createElement("div", { className: "time-sect min-sect" },
                React.createElement("span", { className: "" }, min)),
            React.createElement("div", { className: "time-symbol" }, ":"),
            React.createElement("div", { className: "time-sect sec-sect" },
                React.createElement("span", { className: "" }, sec))));
    };
    return Clock;
}(React.Component));
export { Clock };
//# sourceMappingURL=Clock.js.map