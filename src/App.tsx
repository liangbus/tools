import * as React from 'react'
import { SimpleCounting } from './components/Button/SimpleCounting'
import { Clock } from './components/Clock/Clock'
import './sass/App.scss'
export class App extends React.Component {
  render() {
    return (
      <div className="app-comp">
        <Clock name="clockComponent" />
        <SimpleCounting name="countingComponent" />
      </div>
    )
  }
}