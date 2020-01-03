import * as React from 'react'
import { SimpleCounting } from './components/Button/SimpleCounting'
import StateProvider from './components/serviceProvider/StateProvider/StateProvider'
import Loading from './components/Loading/Loading'
import { Clock } from './components/Clock/Clock'
import Boxes from './components/Box/Boxes'
import BublekSortView from './components/SortView/BubleSortView'
import './sass/reset.scss';
import './sass/App.scss'
import throttle from '../utils/throttle'
import { ReduceTesting } from './components/ReduceTesting/ReduceTesting'

export class App extends React.Component {
  componentDidMount() {
    document.addEventListener('onLoad', function(e) {
      console.log('on document load event !!')
    });
  }
  render() {
    const columnsArrData = {
      columnsArr: []
    }
    return (
      <StateProvider>
        <Clock name="clockComponent" />
        <Loading />
        <Boxes amount={100} innerText="A" />
        {/* <SimpleCounting name="countingComponent" /> */}
        {/* <ReduceTesting /> */}
        {/* <ArrayColumns data={ {columnsArr: []} } /> */}
        <BublekSortView data={ {columnsArr: []} } />
      </StateProvider>
    )
  }
}
// 监听页面滚动
document.onscroll = throttle(() => {
  console.log(`scroll 事件执行 -> ${new Date().getTime()}`)
}, 800, this)
document.addEventListener('DOMContentLoaded', function() {
  console.log('on document domContentLoaded event !!')
})
window.addEventListener('load', function() {
  console.log('on window load event !!')
})