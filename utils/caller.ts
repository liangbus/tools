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
      this instanceof __bound__ ?
        this : context || window,
      args
    )
  }
  __bound__.prototype = Object.create(this.prototype)
  return __bound__
}