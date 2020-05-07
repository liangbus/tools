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
import './loading.scss';
var LoadingBar = /** @class */ (function (_super) {
    __extends(LoadingBar, _super);
    function LoadingBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    LoadingBar.prototype.render = function () {
        return (React.createElement("div", { className: "loading-bar " + (this.props.isActiveloading ? 'active' : '') }));
    };
    return LoadingBar;
}(Component));
export default LoadingBar;
//# sourceMappingURL=LoadingBar.js.map