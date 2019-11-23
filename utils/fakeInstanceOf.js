/**
 * instanceOf 实现机制
 * 通过遍历其祖先的 __proto__ 对象与目标对象的 prototype 对象比对
*/
const fakeInstanceOf = function(children, parent){
  let _proto_ = children.__proto__
  while(_proto_ !== null) {
    if(_proto_ === parent.prototype) {
      return true
    }
    _proto_ = _proto_.__proto__
  }
  return false
}

exports = {
  fakeInstanceOf
}