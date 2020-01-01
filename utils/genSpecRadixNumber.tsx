/**
 * 生成指定进制的数字
 * @param radix 进制
 */
const genSpecRadixNumber = function(radix:number = 16): number|string {
  return (Math.floor(Math.random() * radix)).toString(radix)
}

export default genSpecRadixNumber
