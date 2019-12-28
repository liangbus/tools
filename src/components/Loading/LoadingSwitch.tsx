import React, { Component } from 'react'

interface Props {
  isActiveloading: boolean,
  switchLoadingState: Function,
}
interface State {
}

export default class LoadingSwitch extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { isActiveloading, switchLoadingState } = this.props
    // console.log('loading switcher ', isActiveloading)
    return (
      <button className="loading-switch-btn" onClick={() => switchLoadingState(!isActiveloading)}>
        {isActiveloading ? 'Stop Loading' : 'Start Loading'}
      </button>
    )
  }
}
