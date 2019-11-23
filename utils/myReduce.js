Array.prototype._reduce = function(reducer, initial) {
  const _arr = this
  for(let i = 0; i < _arr.length; i++) {
    initial = reducer(initial, _arr[i], i, this)
  }
  return initial
}