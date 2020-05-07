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
import './simpleCounting.scss';
var SimpleCounting = /** @class */ (function (_super) {
    __extends(SimpleCounting, _super);
    function SimpleCounting(props) {
        var _this = _super.call(this, props) || this;
        _this.addCountHandler = function () {
            var count = _this.state.count;
            _this.incrementCount();
            _this.incrementCount();
            _this.incrementCount();
        };
        _this.state = {
            count: 0,
            autoCount: 0
        };
        return _this;
    }
    SimpleCounting.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({
            autoCount: this.state.autoCount + 1
        });
        console.log('第 1 次 log:', this.state.autoCount);
        this.setState({
            autoCount: this.state.autoCount + 1
        });
        console.log('第 2 次 log:', this.state.autoCount);
        setTimeout(function () {
            _this.setState({ autoCount: _this.state.autoCount + 1 });
            console.log('第 3 次 log:', _this.state.autoCount);
            _this.setState({ autoCount: _this.state.autoCount + 1 });
            console.log('第 4 次 log:', _this.state.autoCount);
        }, 0);
    };
    SimpleCounting.prototype.incrementCount = function () {
        this.setState(function (prevState) {
            return {
                count: prevState.count + 1
            };
        });
    };
    SimpleCounting.prototype.render = function () {
        var count = this.state.count;
        return React.createElement("div", { className: "counting-comp" },
            React.createElement("span", { className: "counting-label" },
                "Clicked ",
                count,
                " times"),
            React.createElement("button", { onClick: this.addCountHandler, className: "simple-count-btn" }, "Click me to add COUNT"));
    };
    return SimpleCounting;
}(React.Component));
export { SimpleCounting };
//# sourceMappingURL=SimpleCounting.js.map