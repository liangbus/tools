const genRandomNumber = function(min: number, max: number): number{
  const r = Math.floor(Math.random() * (max + 1))
  return r + min > max ? max : r
}

// test random result
let r = -1 
let m = 20
while (r !== 20) {
 r = Math.floor(Math.random() * ++m)
 console.log(r)
}

export {
  genRandomNumber
}