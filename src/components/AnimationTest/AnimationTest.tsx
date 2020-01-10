import React, { useState } from 'react'
import { sleep } from '../../../utils/util'
import './animation.scss'

function AnimationTest() {
  const [animationSwitch, setAnimationSwithc] = useState(false)
  const [buttonState, setButtonState] = useState({
    state: 1,
    desc: 'Need a sleep?'
  })
  function doSleep() {
    console.log('start to sleep~')
    if(!buttonState.state) return
    setButtonState({
      state: 0,
      desc: 'Sleeping'
    })
    setTimeout(() => {
      sleep(5)
      setButtonState({
        state: 1,
        desc: 'Need a sleep?'
      })
      console.log('waked up~')
    }, 0)
    
  }
  return (
    <div className="animation-field">
      <div className="animation-boxes-wrapper">
        <div className={'box box1 ' + (animationSwitch ? ' anim' : ' ')}></div>
        <div className={'box box2 ' + (animationSwitch ? ' anim' : ' ')}></div>
        <div className={'box box3 ' + (animationSwitch ? ' anim' : ' ')}></div>
        <div className={'box box4' + (animationSwitch ? ' anim' : ' ')}></div>
      </div>
      <div className="operate-field">
        <button className="animation-switch" onClick={() => {setAnimationSwithc(!animationSwitch)}}>Animation switch</button>
        <button className="sleep-btn" onClick={() => {doSleep()}}>{buttonState.desc}</button>
      </div>
    </div>
  )
}

export default AnimationTest