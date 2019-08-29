const mockSetInterval = (func: Function, milliSec: number) => {
  function interval() {
    setTimeout(interval, milliSec)
    func();
  }
  setTimeout(interval, milliSec);
}

export {
  mockSetInterval
}