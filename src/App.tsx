import * as React from 'react'
import { SimpleCounting } from './components/Button/SimpleCounting'
import StateProvider from './components/serviceProvider/StateProvider/StateProvider'
import Loading from './components/Loading/Loading'
import { Clock } from './components/Clock/Clock'
import Boxes from './components/Box/Boxes'
import Container from './components/Draggable/Container'
import BublekSortView from './components/SortView/BubleSortView'
import AnimationTest from './components/AnimationTest/AnimationTest'
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
    return (
      <StateProvider>
        <Clock name="clockComponent" />
        <Loading />
        <Boxes amount={100} innerText="A" />
        {/* 
          <SimpleCounting name="countingComponent" /> 
        */}
        {/* 
          <ReduceTesting /> 
        */}
        
          {/* // 冒泡排序展示 */}
          <BublekSortView data={ {columnsArr: []} } />
       
        {/*
          拖动 box
          <Container />
        */}
        <AnimationTest />
      </StateProvider>
    )
  }
}
window.onerror = function(error) {
  console.log('=========window.onerror=========', error)
}
// 监听页面滚动
document.onscroll = throttle(() => {
  console.log(`scroll 事件执行 -> ${new Date().getTime()}`)
}, 800, this)
document.addEventListener('DOMContentLoaded', function() {
  console.log('on document DOMContentLoaded !!')
})
window.addEventListener('load', function() {
  console.log('on window load event !!')
})