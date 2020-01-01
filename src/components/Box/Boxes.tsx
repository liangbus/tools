import React, { useState, useEffect } from 'react';
import ColorBox from './ColorBox'
import './box.scss'
import genSpecRadixNumber from '../../../utils/genSpecRadixNumber'

interface Props {
  amount?: number // 生成 color box 的个数
}
function Boxes(props: Props) {
  const { amount = 50 } = props
  const boxArr = []
  let i = 0
  useEffect(() => {
    console.log('Boxes useEffect.')
  }, [])
  while (i++ < amount) {
    // let rChar = '';
    let rChar = (new Array(6).fill(1)).reduce((acc, cur) => {
      return acc += genSpecRadixNumber(16)
    }, '')
    // console.log('rChar >>> ', rChar)
    // const rc = Math.floor(Math.random() * 1000000)
    boxArr.push(
      <ColorBox color={`#${rChar}`} key={i} />
    )
  }
  function generateBoxes() {

  }
  return (
    <div className="boxes-wrapper">
      {boxArr}
    </div>
  );
}

export default Boxes
