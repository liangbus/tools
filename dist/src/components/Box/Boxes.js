import React, { useState, useEffect, useRef } from 'react';
import ColorBox from './ColorBox';
import './box.scss';
import genSpecRadixNumber from '../../../utils/genSpecRadixNumber';
function Boxes(props) {
    var _a = props.amount, amount = _a === void 0 ? 50 : _a, _b = props.innerText, innerText = _b === void 0 ? "box" : _b, ref = props.ref;
    var boxesCmpRef = useRef(null);
    // 仅会初始货执行一次
    var _c = useState(function () {
        console.log('Boxes useState init...');
        return generateBoxes();
    }), boxArr = _c[0], setBoxArr = _c[1];
    // 测试全局未捕获的 promise 异常
    // Promise.reject('NO WAY !!!').catch(err => {
    //   console.warn('after rejection caught >> ', err)
    // }).then(
    //   () => {
    //     throw new Error('what hanppened ????')
    //   },
    //   err => {
    //     console.log('something wrong ~~~ ', err)
    //   })
    useEffect(function () {
        console.log('Boxes useEffect.');
    }, [boxArr]);
    // 生成小盒子
    function generateBoxes() {
        var boxes = [];
        var i = 0;
        while (i++ < amount) {
            // let rChar = '';
            var rChar = (new Array(6).fill(1)).reduce(function (acc, cur) {
                return acc += genSpecRadixNumber(16);
            }, '');
            // console.log('rChar >>> ', rChar)
            boxes.push(React.createElement(ColorBox, { color: "#" + rChar, key: i, innerText: innerText }));
        }
        return boxes;
    }
    return (React.createElement("div", { className: "boxes-wrapper", ref: boxesCmpRef }, boxArr));
}
export default Boxes;
//# sourceMappingURL=Boxes.js.map