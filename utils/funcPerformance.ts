const funcPerfomanceTest = (func: Function, context = window, args) => {
  const t1 = Date.now()
  func.apply(context, args)
  const t2 = Date.now()
  console.log(`${func.name} cost ${t2 - t1}ms`)
}