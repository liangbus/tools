import React, { useEffect } from 'react';
function ColorBox(props) {
    // const [] = useState()
    var _a = props.width, width = _a === void 0 ? 50 : _a, _b = props.height, height = _b === void 0 ? 50 : _b, color = props.color, innerText = props.innerText;
    var innerStyle = {
        width: width + 'px',
        height: height + 'px',
        backgroundColor: color
    };
    useEffect(function () {
        console.log("in useEffect");
    }, [props.color]);
    // console.log('in color box func');
    return (React.createElement("div", { className: "color-box", style: innerStyle }, innerText));
}
export default ColorBox;
//# sourceMappingURL=ColorBox.js.map