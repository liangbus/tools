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
import { setChildrenProps, funcsBindWith } from '../../../../utils/util';
import { generateRandomArray } from '../../../../utils/util';
var StateProvider = /** @class */ (function (_super) {
    __extends(StateProvider, _super);
    function StateProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isActiveloading: false,
            columnsArr: generateRandomArray(15)
        };
        return _this;
    }
    /**
     * 切换 loading 状态
     */
    StateProvider.prototype.switchLoadingState = function (active) {
        console.log('switchLoadingState >> ', active);
        this.setState({
            isActiveloading: active
        });
    };
    StateProvider.prototype.render = function () {
        var children = setChildrenProps(this.props.children, {
            data: this.state,
            actions: funcsBindWith(this, ['switchLoadingState'])
        });
        console.log('children >>> ', children);
        return (React.createElement("div", null, children));
    };
    return StateProvider;
}(Component));
export default StateProvider;
//# sourceMappingURL=StateProvider.js.map