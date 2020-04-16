/**
 * 自己写一个符合 Promise/A+ 规范的 Promise
 */

// 声明 Promise 三种状态
const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

// Promise 构造函数接收一个函数作为参数
function _Promise(fn) {
  // 记录初始状态
  var self = this

  // 初始化状态
  this.state = PENDING

  // 记录状态变更后的值，即 resolved 或 rejected 传入值
  this.value = null

  // 保存 resolved 回调
  this.resolvedCallbacks = []

  // 保存 rejected 回调
  this.rejectedCallbacks = []
  
  // 状态变更为 resolved 时执行的函数
  function resolve(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 状态不可逆
      if(self.state === PENDING) {
        this.value = value
        // 改变状态
        self.state = RESOLVED

        self.resolvedCallbacks.forEach(callback => {
          callback(value)
        })
      }
    }, 0)
  }

  // 状态变更为 rejected 时执行的函数
  function reject(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 状态不可逆
      if(self.state === PENDING) {
        this.value = value
        // 改变状态
        self.state = REJECTED

        self.rejectedCallbacks.forEach(callback => {
          callback(value)
        })
      }
    }, 0)
    
  }

  try {
    fn(resolve, reject)
  } catch(e) {
    // 若执行过程中报错，则执行 reject 函数
    reject(e)
  }
}

// 定义 then 方法，其接收两个函数作为参数
_Promise.prototype.then = function(onResolved, onRejected) {
  if(this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved)
    this.rejectedCallbacks.push(onRejected)
  }

  if(this.state === RESOLVED) {
    onResolved(this.value)
  }
  if(this.state === REJECTED) {
    onRejected(this.value)
  }
}

_Promise.prototype.catch = function(reject) {

}