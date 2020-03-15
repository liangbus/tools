import React, { useState, useEffect, useRef } from 'react';
import ColorBox from './ColorBox'
import './box.scss'
import genSpecRadixNumber from '../../../utils/genSpecRadixNumber'

interface Props {
  amount?: number // 生成 color box 的个数
  innerText?: string
  ref?: any
}
interface ElementArray {
  
}
function Boxes(props: Props) {
  const { amount = 50, innerText = "box", ref } = props
  const boxesCmpRef = useRef(null);
  // 仅会初始货执行一次
  const [boxArr, setBoxArr] = useState<React.ReactElement[]>(() => {
    console.log('Boxes useState init...')
    return generateBoxes()
  })
  // 测试全局未捕获的 promise 异常
  // Promise.reject('NO WAY !!!').catch(err => {
  //   console.warn('after rejection caught >> ', err)
  // }).then(
  //   () => {
  //     throw new Error('what hanppened ????')
  //   },
  //   err => {
  //     console.log('something wrong ~~~ ', err)
  //   })
  useEffect(() => {
    console.log('Boxes useEffect.')
  }, [boxArr])
  
  // 生成小盒子
  function generateBoxes() {
    const boxes = []
    let i = 0
    while (i++ < amount) {
      // let rChar = '';
      let rChar = (new Array(6).fill(1)).reduce((acc, cur) => {
        return acc += genSpecRadixNumber(16)
      }, '')
      // console.log('rChar >>> ', rChar)
      boxes.push(
        <ColorBox color={`#${rChar}`} key={i} innerText={innerText} />
      )
    }
    return boxes
  }
  return (
    <div className="boxes-wrapper" ref={boxesCmpRef} >
      {boxArr}
    </div>
  );
}

export default Boxes
