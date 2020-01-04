import React, { useState, useEffect } from 'react'
import ArrayColumns from '../ArrayColumns/ArrayColumns'

interface Props {
  data: {
    columnsArr?: number[]
  }
}
interface StepObj {
  highlightIndex: number // 当前移动下标
  step: number[] // 步骤数组
  completedIndex: number[] // 已完成下标
}
const QUICK_SORT_STEPS: StepObj[] = []
let STEPS_LENGTH = 0
let CUR_STEP_INDEX = 0
/**
 * 冒泡排序算法练习
 * @param arr 目标数组
 */
const bubleSort = function(arr: number[]): Array<number> {
  const _arr = [...arr]
  const len = _arr.length
  if (!len) return []
  const completed = []
  for(let i = 0; i < len - 1; i++) {
    for(let j = 0; j < len - 1 - i; j++) {
      if (_arr[j] > _arr[j+1]) {
        [_arr[j], _arr[j+1]] = [_arr[j+1], _arr[j]];
      }
      // 传参时创建新数组
      setSortSteps([..._arr], j + 1, [...completed])
    }
    completed.push(len - 1 - i)
  }
  setSortSteps([..._arr], len - 1, [...completed, 0]) // 设置冒泡最后一次排序步骤
  return _arr
}

function BublekSortView(props: Props) {
  const { columnsArr = [] } = props.data
  // console.log('before sort >>> ', columnsArr)
  const [ highlightIndex, setHightlightIndex ] = useState(-1)
  const [ completedIndex = [], setCompletedIndex ] = useState(() => {
    let _index: number[] = []
    return _index
  })
  const [ curColums, setCurColumns ] = useState(() => {
    bubleSort(columnsArr)
    const steps = getSortSteps()
    // console.log('getQuickSortSteps >>> ', steps)
    STEPS_LENGTH = steps.length
    return columnsArr
  })
  useEffect(() => {
    const steps = getSortSteps()
    if (CUR_STEP_INDEX < STEPS_LENGTH) {
      setTimeout(() => {
        let stepObj = steps[CUR_STEP_INDEX++]
        // console.log('CUR_STEP_INDEX >>> ', CUR_STEP_INDEX)
        setCurColumns(stepObj.step)
        setHightlightIndex(stepObj.highlightIndex)
        setCompletedIndex(stepObj.completedIndex)
      }, 200)
    }
  }, [curColums])
  
  return (
    <ArrayColumns columnsArr={curColums} highlightIndex={highlightIndex} completedIndex={completedIndex} />
  )
}
/**
 * 保存快排的每一步结果
 * @param arr
 * @param highlightIndex 高亮数组下标
 * @param completedIndex 已完成的数组下标 list
 */
function setSortSteps(step: number[], highlightIndex: number, completedIndex: number[]) {
  QUICK_SORT_STEPS.push({
    highlightIndex,
    step,
    completedIndex
  })
}
/**
 * 获取快排的每一步结果
 * @param arr 
 */
function getSortSteps(): StepObj[] {
  return QUICK_SORT_STEPS
}


export default BublekSortView