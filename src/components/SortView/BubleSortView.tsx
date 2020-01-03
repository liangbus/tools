import React, { useState, useEffect } from 'react'
import ArrayColumns from '../ArrayColumns/ArrayColumns'

interface Props {
  data: {
    columnsArr?: number[]
  }
}
const QUICK_SORT_STEPS: Array<number>[] = []
let STEPS_LENGTH = 0
let CUR_STEP_INDEX = -1
/**
 * 冒泡排序算法练习
 * @param arr 目标数组
 */
const bubleSort = function(arr: number[]): Array<number> {
  const _arr = [...arr]
  if (!_arr.length) return []
  for(let i = 0; i < _arr.length - 1; i++) {
    for(let j = 0; j < _arr.length - 1 - i; j++) {
      if (_arr[j] > _arr[j+1]) {
        [_arr[j], _arr[j+1]] = [_arr[j+1], _arr[j]];
      }
      setSortSteps([..._arr])
    }
  }
  return _arr
}

function BublekSortView(props: Props) {
  const { columnsArr = [] } = props.data
  console.log('before sort >>> ', columnsArr)
  const [ curColums, setCurColumns ] = useState(() => {
    bubleSort(columnsArr)
    const steps = getSortSteps()
    console.log('getQuickSortSteps >>> ', steps)
    STEPS_LENGTH = steps.length
    return columnsArr
  })
  useEffect(() => {
    const steps = getSortSteps()
    if (CUR_STEP_INDEX < STEPS_LENGTH) {
      setTimeout(() => {
        setCurColumns(steps[CUR_STEP_INDEX++])
      }, 1000)
    }
  })
  
  return (
    <ArrayColumns columnsArr={curColums} />
  )
}
/**
 * 保存快排的每一步结果
 * @param arr 
 */
function setSortSteps(step: number[]) {
  QUICK_SORT_STEPS.push(step)
}
/**
 * 获取快排的每一步结果
 * @param arr 
 */
function getSortSteps(): Array<number>[] {
  return QUICK_SORT_STEPS
}


export default BublekSortView