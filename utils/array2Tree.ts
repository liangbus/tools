var target = [
  ["a", "aa", "aaa", "aaaa"],
  ["b", "bb", "bbb"],
  ["a", "ab", "aba"],
  ["a", "aa", "aab"]
]
function array2Tree(targetArr) {
  const res = []
  const o = {}
  const m = new Map()
  targetArr.forEach(subArr => {
    const tmpObj = m.get(subArr[0])
    // 检测是否已存在 map 中
    if(subArr.length && !tmpObj) {
      m.set(subArr[0], {
        name: subArr[0],
        child: tranformHelper(subArr.slice(1))
      })
    } else if (tmpObj) {
      // 检测前面的 key 值是否一致
      const res = hasChild(tmpObj.child, subArr.slice(1))
      if (res.child.length) {
        res.child.push(
          ...tranformHelper(subArr.slice(res.index))
        )
      } else {
        tmpObj.child.push(
          ...tranformHelper(subArr.slice(1))
        )
      }
      m.set(subArr[0], tmpObj)
    }
  })
  return m.values()
}
function tranformHelper(arr) {
  if(!arr.length) return []
  let children = []
  // arr.forEach(item => {
  children.push({
    name: arr[0],
    child: tranformHelper(arr.slice(1))
  })
  // })
  return children
}
function hasChild(children, keyArr) {
  let lastChild = null
  let curChildren = children
  let i = 0
  for(; i < keyArr.length; i++) {
    let flag = false
    curChildren.forEach(childItem => {
      if(childItem.name === keyArr[i]) {
        flag = true
        lastChild = childItem.child
      }
    })
    if(!flag) break
  }
  return {
    child: lastChild || [],
    index: lastChild ? ++i : -1
  }
}