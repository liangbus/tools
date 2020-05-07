import React from 'react';
import './columns.scss';
var COLOUMN_MAX_HEIGHT = 400; // 柱子最大值
function ArrayColumns(props) {
    var _a = props.columnsArr, columnsArr = _a === void 0 ? [] : _a, _b = props.highlightIndex, highlightIndex = _b === void 0 ? -1 : _b, completedIndex = props.completedIndex;
    var standard = getMaxValue(columnsArr);
    // console.log('getMaxValue >>', standard)
    // console.log('completedIndex >>> ', completedIndex)
    var columnsElem = columnsArr.map(function (v, i) {
        var p = (v / standard) * 100;
        var innerStyle = {
            height: p + '%'
        };
        return (React.createElement("div", { className: "column-item " + ((highlightIndex === i || completedIndex ? .includes(i) : ) ? 'current' : ''), style: innerStyle, key: i }));
    });
    return (React.createElement("div", { className: "columns-container" }, columnsElem));
}
/**
 * 获取最大值
 * @param arr
 */
function getMaxValue(arr) {
    var len = arr.length;
    if (!len)
        return -1;
    var max = arr.slice(0, 1)[0] || -1;
    for (var i = 1; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
export default ArrayColumns;
//# sourceMappingURL=ArrayColumns.js.map