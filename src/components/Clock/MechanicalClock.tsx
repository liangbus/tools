import React, { useState, useEffect } from 'react'
import './clock.scss'

interface Props { }
interface State { }

const DEGREE_UNIT = 360/60

function MechanicalClock(){
  const [hourPointerDeg, minPointerDeg, secPointerDeg] = useClockPointer([])
  const hourStyle = { transform: `translate(-50%, 0) rotate(${hourPointerDeg}deg)`}
  const minStyle = { transform: `translate(-50%, 0) rotate(${minPointerDeg}deg)` }
  const secStyle = { transform: `translate(-50%, 0) rotate(${secPointerDeg}deg)` }
  // console.log('inside main func >>>', hourPointerDeg, minPointerDeg, secPointerDeg)
  return (
    <div className="merchani-clock-container">
      <div className="clock-border-field">
        <div className="clock-inner-field">
          <div className="center-dot"></div>
          <div className="hour-pointer" style={hourStyle}></div>
          <div className="minute-pointer" style={minStyle}></div>
          <div className="second-pointer" style={secStyle}></div>
          <div className="clock-number number-twelve">12</div>
          <div className="clock-number number-three">3</div>
          <div className="clock-number number-six">6</div>
          <div className="clock-number number-nine">9</div>
        </div>
      </div>
    </div>
  )
}

function useClockPointer(dependencies: []) {
  const [hourPointerDeg, setHourPointerDeg] = useState(0)
  const [minPointerDeg, setMinPointerDeg] = useState(0)
  const [secPointerDeg, setSecPointerDeg] = useState(0)
  const d = new Date()
  // console.log('d -> ', d)
  let sec = d.getSeconds()
  let min = d.getMinutes()
  let h = d.getHours()
  useEffect(() => {
    // console.log('useClockPointer hook: current sec -> ', sec)
    setTimeout(() => {
    sec = sec === 60 ? -1 : sec

    // console.log('++sec * degreeUnit -> ', (sec + 1) * degreeUnit)
    setSecPointerDeg(++sec * DEGREE_UNIT)
    setHourPointerDeg(transformHoursFormat(h) * DEGREE_UNIT * 5 + (min/60) * 30)
    setMinPointerDeg(min * DEGREE_UNIT)
  }, 1000)
  }, [secPointerDeg, minPointerDeg, hourPointerDeg])
  return [hourPointerDeg, minPointerDeg, secPointerDeg]
}

function transformHoursFormat(hour: number): number {
  return hour > 12 ? hour - 12 : hour
}

export default MechanicalClock