import React, { useState, useEffect, useRef } from 'react';
import DraggableBox from './DraggableBox';
import './draggable.scss';
function Container(props) {
    var _a = useMousePosition(0, 0), postion = _a[0], setPosition = _a[1];
    var _b = useState(false), isDragging = _b[0], setIsDragging = _b[1];
    var _c = useState({
        offsetWidth: 1000,
        offsetHeight: 600,
        offsetTop: 0,
        offsetLeft: 0
    }), containerInfo = _c[0], setContainerInfo = _c[1];
    var containerRef = useRef(null);
    /**
     * 按下鼠标
     * @param e
     */
    function onMouseDownEventHandler(e) {
        // console.log(e)
        setIsDragging(true);
    }
    /**
     * 拖动鼠标
     * @param e
     */
    function onMouseMoveEventHandler(e) {
        // console.log(e, e.pageX, e.pageY)
        if (isDragging) {
            var l = (e.pageX - containerInfo.offsetLeft) - (100 / 2);
            var t = (e.pageY - containerInfo.offsetTop) - (100 / 2);
            var maxL = containerInfo.offsetWidth - 100;
            var maxT = containerInfo.offsetHeight - 100;
            setPosition({
                left: l < 0 ? 0 : (l < maxL ? l : maxL),
                top: t < 0 ? 0 : (t < maxT ? t : maxT)
            });
        }
    }
    /**
     * 松开鼠标
     * @param e
     */
    function onMouseUpEventHandler(e) {
        // console.log('upupupupupupupupupup')
        setIsDragging(false);
    }
    useEffect(function () {
        console.log('containerRef >>> ', containerRef);
        var containerTarget = containerRef.current || {
            offsetWidth: 1000,
            offsetHeight: 600,
            offsetTop: 0,
            offsetLeft: 0
        };
        setContainerInfo({
            offsetWidth: containerTarget.offsetWidth,
            offsetHeight: containerTarget.offsetHeight,
            offsetTop: containerTarget.offsetTop,
            offsetLeft: containerTarget.offsetLeft
        });
    }, []);
    return (React.createElement("div", { className: "draggable-container", ref: containerRef, onMouseDown: onMouseDownEventHandler, onMouseMove: onMouseMoveEventHandler, onMouseUpCapture: onMouseUpEventHandler },
        React.createElement(DraggableBox, { left: postion.left, top: postion.top, isDragging: false })));
}
// 设置位置 hook
function useMousePosition(l, t) {
    var _a = useState({
        left: l,
        top: t
    }), postion = _a[0], setPosition = _a[1];
    useEffect(function () {
    }, []);
    return [postion, setPosition];
}
export default Container;
//# sourceMappingURL=Container.js.map