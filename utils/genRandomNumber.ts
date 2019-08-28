const genRandomNumber = function(min: number, max: number): number{
  return Number(Math.floor(Math.random() * ++max) + min)
}

export {
  genRandomNumber
}