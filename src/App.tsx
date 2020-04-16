import * as React from 'react'
import { SimpleCounting } from './components/Button/SimpleCounting'
import StateProvider from './components/serviceProvider/StateProvider/StateProvider'
import Loading from './components/Loading/Loading'
import { Clock } from './components/Clock/Clock'
import MechanicalClock from './components/Clock/MechanicalClock'
import Boxes from './components/Box/Boxes'
import Container from './components/Draggable/Container'
import BublekSortView from './components/SortView/BubleSortView'
import AnimationTest from './components/AnimationTest/AnimationTest'
import './sass/reset.scss';
import './sass/App.scss'
import throttle from '../utils/throttle'
import { ReduceTesting } from './components/ReduceTesting/ReduceTesting'
import { funcPerfomanceTest } from '../utils/util'
import { fibonanceSequence, fibonanceSequenceInRecursive, fibonanceSequenceInRecursiveDp } from '../utils/fibonacciSequence'
import { ReactEventHandler } from 'react'

// fibonanceSequence test
// funcPerfomanceTest(fibonanceSequence, window, [30])
// funcPerfomanceTest(fibonanceSequenceInRecursiveDp, window, [45])
// funcPerfomanceTest(fibonanceSequenceInRecursive, window, [45])


export class App extends React.Component {
  componentDidMount() {
    document.addEventListener('onLoad', function(e) {
      console.log('on document load event !!')
    });
  }
  // xss-test
  // imgError(): void {
  //   alert(1111)
  // }
  render() {
    // setTimeout(() => {
    //   throw new Error('wrong!')
    // }, 2000)
    return (
      <StateProvider>
        <Clock name="clockComponent" />
        <MechanicalClock />
        <Loading />
        <div className="xss-test">
          <a href="JaVaScript:alert('xss')">奖品送不停</a>
        </div>
        <Boxes amount={100} innerText="A" />
        
        <SimpleCounting name="countingComponent" /> 
       
        
        <ReduceTesting /> 
       
        
        {/* // 冒泡排序展示 */}
        <BublekSortView data={ {columnsArr: []} } />
       
        
        {/* 拖动 box */}
        {/* <Container /> */}
       
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
  console.log('on window LOAD EVENT !!')
})
// 全局捕获 error 事件
// window.addEventListener('error', err => {
//   console.error('caught ERROR in eventListener > ', err)
// }, true)
// // 全局捕获【未捕获】的 Promise 异常/拒绝事件
// window.addEventListener('unhandledrejection', err => {
//   console.error('caught unhandledrejection >>> ', err)
// })