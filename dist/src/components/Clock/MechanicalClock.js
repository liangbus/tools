import React, { useState, useEffect } from 'react';
import './clock.scss';
var DEGREE_UNIT = 360 / 60;
function MechanicalClock() {
    var _a = useClockPointer([]), hourPointerDeg = _a[0], minPointerDeg = _a[1], secPointerDeg = _a[2];
    var hourStyle = { transform: "translate(-50%, 0) rotate(" + hourPointerDeg + "deg)" };
    var minStyle = { transform: "translate(-50%, 0) rotate(" + minPointerDeg + "deg)" };
    var secStyle = { transform: "translate(-50%, 0) rotate(" + secPointerDeg + "deg)" };
    // console.log('inside main func >>>', hourPointerDeg, minPointerDeg, secPointerDeg)
    return (React.createElement("div", { className: "merchani-clock-container" },
        React.createElement("div", { className: "clock-border-field" },
            React.createElement("div", { className: "clock-inner-field" },
                React.createElement("div", { className: "center-dot" }),
                React.createElement("div", { className: "hour-pointer", style: hourStyle }),
                React.createElement("div", { className: "minute-pointer", style: minStyle }),
                React.createElement("div", { className: "second-pointer", style: secStyle }),
                React.createElement("div", { className: "clock-number number-twelve" }, "12"),
                React.createElement("div", { className: "clock-number number-three" }, "3"),
                React.createElement("div", { className: "clock-number number-six" }, "6"),
                React.createElement("div", { className: "clock-number number-nine" }, "9")))));
}
function useClockPointer(dependencies) {
    var _a = useState(0), hourPointerDeg = _a[0], setHourPointerDeg = _a[1];
    var _b = useState(0), minPointerDeg = _b[0], setMinPointerDeg = _b[1];
    var _c = useState(0), secPointerDeg = _c[0], setSecPointerDeg = _c[1];
    var d = new Date();
    // console.log('d -> ', d)
    var sec = d.getSeconds();
    var min = d.getMinutes();
    var h = d.getHours();
    useEffect(function () {
        // console.log('useClockPointer hook: current sec -> ', sec)
        setTimeout(function () {
            sec = sec === 60 ? -1 : sec;
            // console.log('++sec * degreeUnit -> ', (sec + 1) * degreeUnit)
            setSecPointerDeg(++sec * DEGREE_UNIT);
            setHourPointerDeg(transformHoursFormat(h) * DEGREE_UNIT * 5 + (min / 60) * 30);
            setMinPointerDeg(min * DEGREE_UNIT);
        }, 1000);
    }, [secPointerDeg, minPointerDeg, hourPointerDeg]);
    return [hourPointerDeg, minPointerDeg, secPointerDeg];
}
function transformHoursFormat(hour) {
    return hour > 12 ? hour - 12 : hour;
}
export default MechanicalClock;
//# sourceMappingURL=MechanicalClock.js.map