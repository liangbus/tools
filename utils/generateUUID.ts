const genUUID = (uuidLen: number): string => {
  const sourceChar = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const sLen = sourceChar.length
  const uuidArr = []
  for (let i = 0; i < uuidLen; i++) {
    uuidArr.push(sourceChar.charAt(Math.floor(Math.random() * sLen)));
  }
  return uuidArr.join('')
}

export {
  genUUID
}