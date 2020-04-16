/**
 * call, apply, bind 的模拟实现
*/

/**
 * 原型上增加自定义 call 方法 
 */
interface Function {
  __call__(context: Object, args: []): any;
  __apply__(context: Object, args: []): any;
  __bind__(context: Object, args: []): Function;
  // __curry__(context: Object, args: any): Function
}

/**
 * 用作临时执行函数
 */
interface Object {
  __fn__: Function
}

Function.prototype.__call__ = function(context: Object, ...args: []) {
  context.__fn__ = this;
  let res = context.__fn__(...args);
  delete context.__fn__;
  return res;
}

Function.prototype.__bind__ = function(context, ...args) {
  let thisFunc = this
  function __bound__() {
    return thisFunc.apply(
      thisFunc instanceof __bound__ ?
      thisFunc : context || window,
      args
    )
  }
  __bound__.prototype = Object.create(this.prototype)
  return __bound__
}

/**
 * 函数柯里化
*/
const __curry__ = function(fn: Function, context: Object, args: any) {
  let length = this.length
  args = args || []
  context = context || window
  return function() {
    let subArgs = args.slice(0)
    
    // 拼接新的参数
    for(let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i])
    }
    // 参数长度满足原来的函数的话，则执行目标函数，否则继续调用 curry, 并把参数继续传递下去
    if(subArgs.length < length) {
      return __curry__.call(context, fn, subArgs)
    } else {
      fn.apply(context, subArgs)
    }
  }
}