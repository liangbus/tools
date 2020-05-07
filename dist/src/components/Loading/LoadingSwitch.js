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
import React, { Component } from 'react';
var LoadingSwitch = /** @class */ (function (_super) {
    __extends(LoadingSwitch, _super);
    function LoadingSwitch(props) {
        return _super.call(this, props) || this;
    }
    LoadingSwitch.prototype.render = function () {
        var _a = this.props, isActiveloading = _a.isActiveloading, switchLoadingState = _a.switchLoadingState;
        // console.log('loading switcher ', isActiveloading)
        return (React.createElement("button", { className: "loading-switch-btn", onClick: function () { return switchLoadingState(!isActiveloading); } }, isActiveloading ? 'Stop Loading' : 'Start Loading'));
    };
    return LoadingSwitch;
}(Component));
export default LoadingSwitch;
//# sourceMappingURL=LoadingSwitch.js.map