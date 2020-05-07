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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import LoadingBar from './LoadingBar';
import LoadingSwitch from './LoadingSwitch';
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
        // actived: props.actived
        };
        return _this;
    }
    Loading.prototype.render = function () {
        var _a = this.props, _b = _a.actions, actions = _b === void 0 ? {} : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        var isActiveloading = data.isActiveloading;
        var switchLoadingState = actions.switchLoadingState;
        return (React.createElement("div", { className: "loading-comp" },
            React.createElement(LoadingBar, __assign({}, { isActiveloading: isActiveloading })),
            React.createElement(LoadingSwitch, __assign({}, { isActiveloading: isActiveloading, switchLoadingState: switchLoadingState }))));
    };
    return Loading;
}(Component));
export default Loading;
//# sourceMappingURL=Loading.js.map