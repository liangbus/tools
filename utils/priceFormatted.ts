const priceFormatted = function(price: number): string{
  if (!price || typeof price !== 'number') {
    return '0'
  }
  let numArr = price.toString().split('');
  if (numArr.length < 3) return `${price}`;
  let resArr = []
  let tmp = ''
  for (let i = numArr.length - 1; i >= 0; i--) {
    tmp = numArr[i] + tmp
    if (tmp.length === 3) {
      resArr.unshift(tmp)
      tmp = ''
    }
  }
  tmp && resArr.unshift(tmp);
  console.log('formatted array: ', resArr);
  return resArr.join(',')
}
export {
  priceFormatted
}