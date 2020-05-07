import React, { useState } from 'react';
import { sleep } from '../../../utils/util';
import './animation.scss';
function AnimationTest() {
    var _a = useState(false), animationSwitch = _a[0], setAnimationSwithc = _a[1];
    var _b = useState({
        state: 1,
        desc: 'Need a sleep?'
    }), buttonState = _b[0], setButtonState = _b[1];
    // throw new Error('something wrong!')
    function doSleep() {
        console.log('start to sleep~');
        if (!buttonState.state)
            return;
        setButtonState({
            state: 0,
            desc: 'Sleeping'
        });
        setTimeout(function () {
            setButtonState({
                state: 1,
                desc: 'Need a sleep?'
            });
            sleep(5);
            console.log('waked up~');
        }, 100);
    }
    return (React.createElement("div", { className: "animation-field" },
        React.createElement("div", { className: "animation-boxes-wrapper" },
            React.createElement("div", { className: 'box box1 ' + (animationSwitch ? ' anim' : ' ') }),
            React.createElement("div", { className: 'box box2 ' + (animationSwitch ? ' anim' : ' ') }),
            React.createElement("div", { className: 'box box3 ' + (animationSwitch ? ' anim' : ' ') }),
            React.createElement("div", { className: 'box box4' + (animationSwitch ? ' anim' : ' ') }),
            React.createElement("div", { className: 'box box5' + (animationSwitch ? ' anim' : ' ') }),
            React.createElement("div", { className: 'box box6' + (animationSwitch ? ' anim' : ' ') }),
            React.createElement("div", { className: 'box box7' + (animationSwitch ? ' anim' : ' ') })),
        React.createElement("div", { className: "operate-field" },
            React.createElement("button", { className: "animation-switch", onClick: function () { setAnimationSwithc(!animationSwitch); } }, "Animation switch"),
            React.createElement("button", { className: "sleep-btn", onClick: function () { doSleep(); } }, buttonState.desc))));
}
export default AnimationTest;
//# sourceMappingURL=AnimationTest.js.map