import * as React from 'react'
import './clock.scss'
interface ClockProps {
  name?: string
}
interface ClockState {
  hour: string,
  min: string,
  sec: string
}
class Clock extends React.Component<ClockProps, ClockState> {
  constructor(props: {}){
    super(props)
    this.state = {
      hour: '00',
      min: '00',
      sec: '00'
    }
    
  }
  // Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.
  componentWillMount() {
    console.info('componentWillMount Life Cycle')
  }
  componentDidMount() {
    console.info('componentDidMount Life Cycle')
    setInterval(() => {
      let d = new Date()
      this.setState({
        hour: d.getHours() >= 10 ? d.getHours().toString() : '0' + d.getHours().toString(),
        min: d.getMinutes() >= 10 ? d.getMinutes().toString() : '0' + d.getMinutes().toString(),
        sec: d.getSeconds() >= 10 ? d.getSeconds().toString() : '0' + d.getSeconds().toString()
      })
    }, 1000)
  }
  shouldComponentUpdate() {
    const { hour, min, sec } = this.state
    // console.log('shouComponentUpdate Life Cycle')
    // console.log('life cycle options: ', options)
    // console.log(`hour = ${hour}, min = ${min}, sec = ${sec}`)
    return true
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps Life cycle.')
  }
  render() {
    const { hour, min, sec } = this.state
    return (
      <div className="clock-comp">
        <div className="time-sect hour-sect">
          <span className="">{hour}</span>
        </div>
        <div className="time-symbol">:</div>
        <div className="time-sect min-sect">
          <span className="">{min}</span>
        </div>
        <div className="time-symbol">:</div>        
        <div className="time-sect sec-sect">
          <span className="">{sec}</span>
        </div>
      </div>
    )
  }
}

export {
  Clock
}