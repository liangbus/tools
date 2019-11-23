import * as React from 'react'
import './ReduceTesting.scss'
import { _reduce_, __reduce__ } from '../../../utils/reduce'
interface ReduceTestingState {
  code: string
}
class ReduceTesting extends React.Component<{}, ReduceTestingState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      code: `// 递归实现
function __reduce__(target: any[], reducer: Function, initial: any) {
  let _arr: any[] = target.concat()
  if(initial) {
    _arr.unshift(initial)
  }
  const startIndex = 0
  function reduceHelper(fn: Function, acc: any, i: number, arr: any[]): any {
    if(arr.length === 0) return acc
    const copy = arr.concat()
    const head = copy.shift()
    ++i
    return reduceHelper(fn, fn(acc, head, i, arr), i, copy)
  }

return reduceHelper(reducer, initial, startIndex, _arr)
}
// 非递归实现
function _reduce_(target: any[], reducer: Function, initial: any) {
  const _arr = target.concat(), len = _arr.length
  let acc = initial
  for(let i = 0; i < len; i++) {
    acc = reducer(acc, _arr[i], i, _arr)
  }
  return acc
}`
    }
  }
  componentDidMount() {
    const arr = [1,2,3,4,5]
    console.log('__reduce__ result >>>', __reduce__(arr , (acc: number, cur: number) => { return acc + cur }, 0));
    console.log('_reduce_ result >>>', _reduce_(arr , (acc: number, cur: number) => { return acc + cur }, 0));
    
  }
  render () {
    const { code } = this.state
    return (
      <div className="code-analysis-section">
        <div className="code-field-title">
          手动实现 reduce 函数，in TypeScript 
        </div>
        <div className="code-block">
          <pre className="code-field">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    )
  }
}

export {
  ReduceTesting
}