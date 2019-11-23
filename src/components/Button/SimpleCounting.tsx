import * as React from 'react'
import './simpleCounting.scss'
interface SimpleCountingProps {
  name: string
}
interface SimpleCountingState {
  count: number,
  autoCount: number
}
class SimpleCounting extends React.Component<SimpleCountingProps, SimpleCountingState> {
  constructor(props: SimpleCountingProps) {
    super(props)
    this.state = {
      count: 0,
      autoCount: 0
    }
  }
  componentDidMount() {
    this.setState({
      autoCount: this.state.autoCount + 1
    });
    console.log('第 1 次 log:', this.state.autoCount);
    this.setState({
      autoCount: this.state.autoCount + 1
    });
    console.log('第 2 次 log:', this.state.autoCount);
    setTimeout(() => {
      this.setState({autoCount: this.state.autoCount + 1});
      console.log('第 3 次 log:', this.state.autoCount);   
      this.setState({autoCount: this.state.autoCount + 1});
      console.log('第 4 次 log:', this.state.autoCount); 
     }, 0);
  }
  incrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  addCountHandler = () => {
    let { count } = this.state
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }
  render() {
    const { count } = this.state
    return <div className="counting-comp">
      <span className="counting-label">Clicked {count} times</span>
      <button onClick={ this.addCountHandler } className="simple-count-btn">Click me to add COUNT</button>
    </div>
  }
}

export {
  SimpleCounting
}
