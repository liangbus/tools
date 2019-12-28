import React, { Component } from 'react'
import { setChildrenProps, funcsBindWith } from '../../../../utils/util'
interface Props {
  
}
interface State {
  isActiveloading: boolean
}

export default class StateProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isActiveloading: false
    }
  }
  /**
   * 切换 loading 状态
   */
  switchLoadingState(active: boolean) {
    console.log('switchLoadingState >> ', active)
    this.setState({
      isActiveloading: active
    })
  }
  render() {
    const children = setChildrenProps(this.props.children, {
      data: this.state,
      actions: funcsBindWith(this, ['switchLoadingState'])
    })
    console.log('children >>> ', children)
    return (
      <div>
        {children}
      </div>
    )
  }
}
