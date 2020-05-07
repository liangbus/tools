import React, { useState, useEffect } from 'react';
import ArrayColumns from '../ArrayColumns/ArrayColumns';
var QUICK_SORT_STEPS = [];
var STEPS_LENGTH = 0; // 排序步骤数组长度
var CUR_STEP_INDEX = 0; // 当前步骤 index
var ANIMATION_SWITCH = false; // 是否展示排序动画
/**
 * 冒泡排序算法练习
 * @param arr 目标数组
 */
var bubleSort = function (arr) {
    var _a;
    var _arr = arr.slice();
    var len = _arr.length;
    if (!len)
        return [];
    var completed = [];
    for (var i = 0; i < len - 1; i++) {
        // let isSwap = false
        for (var j = 0; j < len - 1 - i; j++) {
            if (_arr[j] > _arr[j + 1]) {
                _a = [_arr[j + 1], _arr[j]], _arr[j] = _a[0], _arr[j + 1] = _a[1];
                // isSwap = true
            }
            // 传参时创建新数组
            setSortSteps(_arr.slice(), j + 1, completed.slice());
        }
        completed.push(len - 1 - i);
        // if(!isSwap) break
    }
    setSortSteps(_arr.slice(), len - 1, completed.concat([0])); // 设置冒泡最后一次排序步骤
    return _arr;
};
function BublekSortView(props) {
    var _a = props.data.columnsArr, columnsArr = _a === void 0 ? [] : _a;
    // console.log('before sort >>> ', columnsArr)
    var _b = useState(-1), highlightIndex = _b[0], setHightlightIndex = _b[1];
    var _c = useState(function () {
        var _index = [];
        return _index;
    }), _d = _c[0], completedIndex = _d === void 0 ? [] : _d, setCompletedIndex = _c[1];
    var _e = useState(function () {
        if (!ANIMATION_SWITCH)
            return columnsArr;
        bubleSort(columnsArr);
        var steps = getSortSteps();
        // console.log('getQuickSortSteps >>> ', steps)
        STEPS_LENGTH = steps.length;
        return columnsArr;
    }), curColums = _e[0], setCurColumns = _e[1];
    useEffect(function () {
        var steps = getSortSteps();
        if (ANIMATION_SWITCH && CUR_STEP_INDEX < STEPS_LENGTH) {
            setTimeout(function () {
                var stepObj = steps[CUR_STEP_INDEX++];
                // console.log('CUR_STEP_INDEX >>> ', CUR_STEP_INDEX)
                setCurColumns(stepObj.step);
                setHightlightIndex(stepObj.highlightIndex);
                setCompletedIndex(stepObj.completedIndex);
            }, 200);
        }
    }, [curColums]);
    return (React.createElement(ArrayColumns, { columnsArr: curColums, highlightIndex: highlightIndex, completedIndex: completedIndex }));
}
/**
 * 保存快排的每一步结果
 * @param arr
 * @param highlightIndex 高亮数组下标
 * @param completedIndex 已完成的数组下标 list
 */
function setSortSteps(step, highlightIndex, completedIndex) {
    QUICK_SORT_STEPS.push({
        highlightIndex: highlightIndex,
        step: step,
        completedIndex: completedIndex
    });
}
/**
 * 获取快排的每一步结果
 * @param arr
 */
function getSortSteps() {
    return QUICK_SORT_STEPS;
}
export default BublekSortView;
//# sourceMappingURL=BubleSortView.js.map