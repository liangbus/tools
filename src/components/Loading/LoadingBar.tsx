import React, { Component } from 'react'
import './loading.scss'

interface Props {
  isActiveloading: boolean
}
interface State {
  
}

export default class LoadingBar extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={`loading-bar ${this.props.isActiveloading ? 'active' : ''}`}></div>
    )
  }
}
