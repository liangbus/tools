import React from 'react'
import './columns.scss'
interface Props {
  columnsArr?: number[];
  highlightIndex?: number;
}
interface State {
  
}
const COLOUMN_MAX_HEIGHT = 400 // 柱子最大值
function ArrayColumns(props: Props) {
  const { columnsArr = [], highlightIndex = -1 } = props
  const standard = getMaxValue(columnsArr)
  // console.log('getMaxValue >>', standard)
  const columnsElem = columnsArr.map((v, i) => {
    const p = (v / standard) * 100
    const innerStyle = {
      height: p + '%'
    }
    return (
      <div className={"column-item " + (highlightIndex === i ? 'current' : '')} style={innerStyle} key={i}></div>
    )
  })
  return (
    <div className="columns-container">
      {columnsElem}
    </div>
  )
}
/**
 * 获取最大值
 * @param arr
 */
function getMaxValue(arr: number[]): number {
  const len = arr.length
  if(!len) return -1
  let max = arr.slice(0, 1)[0] || -1
  for(let i = 1; i < len; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

export default ArrayColumns