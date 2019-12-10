// 随机不重复数组（排序后是连续的）
const generateRandomArray = function(len: number): Array<number>{
  let i = 0;
	const arr = []
	while(i++ < len) {
		arr.push(i)
	}
	return arr.sort(() => 0.5 - Math.random())
}

export {
  generateRandomArray
}

// // testing
// const longArray = generateRandomArray(10000000)
// const start = new Date().getTime()
// longArray.sort((cur, next) => { return cur > next ? 1 : -1})
// const end = new Date().getTime()
// console.log(`Sort Func  cost ${end - start} milli sec`);

// const longArray2 = generateRandomArray(10000000)
// const bubleStart = new Date().getTime()
// bubleSort(longArray2);
// const bubleEnd = new Date().getTime()
// console.log(`Buble Func cost ${bubleEnd - bubleStart} milli sec`);

// const longArray3 = generateRandomArray(10000000)
// const quickStart = new Date().getTime()
// quickSort(longArray3)
// const quickEnd = new Date().getTime()
// console.log(`Quick Func cost ${quickEnd - quickStart} milli sec`);