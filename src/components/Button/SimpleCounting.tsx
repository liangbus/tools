import * as React from 'react'
import './simpleCounting.scss'
interface SimpleCountingProps {
  name: string
}
interface SimpleCountingState {
  count: number
}
class SimpleCounting extends React.Component<SimpleCountingProps, SimpleCountingState> {
  constructor(props: SimpleCountingProps) {
    super(props)
    this.state = {
      count: 0
    }
  }
  addCount = () => {
    let { count } = this.state
    this.setState({
      count: ++count
    })
  }
  render() {
    const { count } = this.state
    return <div className="counting-comp">
      <span className="counting-label">Clicked {count} times</span>
      <button onClick={ this.addCount } className="simple-count-btn">Click me to add COUNT</button>
    </div>
  }
}

export {
  SimpleCounting
}
