var target = [
  ["a", "aa", "aaa", "aaaa"],
  ["b", "bb", "bbb"],
  ["a", "ab", "aba"],
  ["a", "aa", "aab"]
]
// [
//   {
//       "name" : "a",
//       "child" : [
//           {
//               "name" : "aa",
//               "child" : [
//                   {
//                       "name" : "aaa",
//                       "child" : [
//                           {
//                               "name" : "aaaa",
//                               "child" : []
//                           }
//                       ]
//                   },
//                   {
//                       "name" : "aab",
//                       "child" : []
//                   }
//               ]

//           },
//           {
//               "name" : "ab",
//               "child" : [
//                   {
//                       "name": "aba",
//                       "child" : []
//                   }
//               ]

//           }
//       ]
//   },
//   {
//       "name": "b",
//       "child" : [
//           {
//               "name" : "bb",
//               "child" : [
//                   {
//                       "name" : "bbb",
//                       "child" : []
//                   }
//               ]
//           }
//       ]
//   }
// ]
// 思路跟上面之前的差不多，先把二维数组转换成对象，同时记录它的 parentId 
function convertArray2Tree(list: any) {
  const map = {}
  const res = []
  for(let i = 0; i < list.length; i++) {
    let row = list[i]
    for(let j = 0; j < row.length; j++) {
      let item = row[j]
      // 在 map 上创建该节点的对象
      if(!map[item]) {
        map[item] = {
          name: item,
          children: []
        }
      }
      // 非第一位，则记录其父节点
      if(j > 0) {
        map[item].parentId = row[j - 1]
      }
      if(!map[item].parentId) {
        !res.some(root => root.name === map[item].name) && res.push(map[item])
      } else {
        map[map[item].parentId].children.push(item)
      }
    }
  }
  // for(let k in map) {
  //   let item = map[k]
  //   if(!item.parentId) {
  //     res.push(item)
  //   } else if(map[item.parentId]) {
  //     map[item.parentId].children.push(item)
  //   }
  // }
  console.log(map)
  return res
}