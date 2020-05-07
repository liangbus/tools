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
import './ReduceTesting.scss';
import { _reduce_, __reduce__ } from '../../../utils/reduce';
var ReduceTesting = /** @class */ (function (_super) {
    __extends(ReduceTesting, _super);
    function ReduceTesting(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            code: "// \u9012\u5F52\u5B9E\u73B0\nfunction __reduce__(target: any[], reducer: Function, initial: any) {\n  let _arr: any[] = target.concat()\n  if(initial) {\n    _arr.unshift(initial)\n  }\n  const startIndex = 0\n  function reduceHelper(fn: Function, acc: any, i: number, arr: any[]): any {\n    if(arr.length === 0) return acc\n    const copy = arr.concat()\n    const head = copy.shift()\n    ++i\n    return reduceHelper(fn, fn(acc, head, i, arr), i, copy)\n  }\n\nreturn reduceHelper(reducer, initial, startIndex, _arr)\n}\n// \u975E\u9012\u5F52\u5B9E\u73B0\nfunction _reduce_(target: any[], reducer: Function, initial: any) {\n  const _arr = target.concat(), len = _arr.length\n  let acc = initial\n  for(let i = 0; i < len; i++) {\n    acc = reducer(acc, _arr[i], i, _arr)\n  }\n  return acc\n}"
        };
        return _this;
    }
    ReduceTesting.prototype.componentDidMount = function () {
        var arr = [1, 2, 3, 4, 5];
        console.log('__reduce__ result >>>', __reduce__(arr, function (acc, cur) { return acc + cur; }, 0));
        console.log('_reduce_ result >>>', _reduce_(arr, function (acc, cur) { return acc + cur; }, 0));
    };
    ReduceTesting.prototype.render = function () {
        var code = this.state.code;
        return (React.createElement("div", { className: "code-analysis-section" },
            React.createElement("div", { className: "code-field-title" }, "\u624B\u52A8\u5B9E\u73B0 reduce \u51FD\u6570\uFF0Cin TypeScript"),
            React.createElement("div", { className: "code-block" },
                React.createElement("pre", { className: "code-field" },
                    React.createElement("code", null, code)))));
    };
    return ReduceTesting;
}(React.Component));
export { ReduceTesting };
//# sourceMappingURL=ReduceTesting.js.map