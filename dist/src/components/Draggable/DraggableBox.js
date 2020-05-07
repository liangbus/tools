import React from 'react';
function DraggableBox(props) {
    var left = props.left, top = props.top;
    var innerStyle = {
        left: left + 'px',
        top: top + 'px'
    };
    // console.log('udpated left and top >>', left, top)
    return (React.createElement("div", { className: "draggle-box", style: innerStyle }));
}
export default DraggableBox;
//# sourceMappingURL=DraggableBox.js.map