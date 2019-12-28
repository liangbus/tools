import React, { Component } from 'react'
import LoadingBar from './LoadingBar'
import LoadingSwitch from './LoadingSwitch'

interface Props {
  actions?: any
  data?: any
}
interface State {
  // actived: boolean
}

export default class Loading extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      // actived: props.actived
    }
  }

  render() {
    const { actions = {}, data = {} } = this.props
    const { isActiveloading } = data
    const { switchLoadingState } = actions
    
    return (
      <div className="loading-comp">
        <LoadingBar { ...{ isActiveloading } } />
        <LoadingSwitch { ...{ isActiveloading, switchLoadingState } } />
      </div>
    )
  }
}
