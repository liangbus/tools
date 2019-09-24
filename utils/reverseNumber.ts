const reverseNumber = function (num: any) {
  num = num.toString()
  if(num.length === 1) {
    return num
  }
  return `${num.substr(-1)}${reverseNumber(num.substr(0, num.length - 1))}`
}

export {
  reverseNumber
}
