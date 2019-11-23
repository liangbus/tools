// interface Object {
//   _reduce_(fn: Function, initial?: any): any;
//   __reduce__(fn: Function, initial?: any): any;
// }

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

function _reduce_(target: any[], reducer: Function, initial: any) {
  const _arr = target.concat(), len = _arr.length
  let acc = initial
  for(let i = 0; i < len; i++) {
    acc = reducer(acc, _arr[i], i, _arr)
  }
  return acc
}

// 普通遍历实现
// Array.prototype._reduce_ = function(reducer, initial) {
//   const _arr = this, len = _arr.length
//   let acc = null
//   for(let i = 0; i < len; i++) {
//     acc = reducer(initial, _arr[i], i, _arr)
//   }
//   return acc
// }
// 递归实现
// Array.prototype.__reduce__ = function(reducer, initial) {
//   const _arr = this.concat()
//   if(initial) {
//     _arr.unshift(initial)
//   }
//   const [head, ...tail] = _arr
//   const startIndex = 0
//   function reduceHelper(fn: Function, acc: any, i: number, arr: any) {
//     if(arr.length === 0) return acc
//     const copy = arr.concat()
//     const head = copy.shift()
//     ++i
//     return reduceHelper(fn, fn(acc, head, i, arr), i, copy)
//   }

//   return reduceHelper(reducer, head, startIndex, _arr)
// }

export {
  _reduce_,
  __reduce__
}