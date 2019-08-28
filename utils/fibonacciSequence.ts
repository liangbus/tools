const fibonanceSequence = (n: number): number[] => {
  const arr = [1, 1]
  if(n < 2) return arr
  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 2]) + arr[i - 1]
  }
  return arr
}

const fibonanceSequenceInRecursive = (n: number): number => {
  if(n <= 2){ return 1 }
  else {
    return fibonanceSequenceInRecursive(n - 2) + fibonanceSequenceInRecursive(n -1)
  }
}

export {
  fibonanceSequence,
  fibonanceSequenceInRecursive
}