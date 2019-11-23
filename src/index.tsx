import * as React from 'react';
import * as ReactDom from 'react-dom'
import { lengthOfLongestSubstring } from '../utils/lengthOfLongestSubstring';
import { longestCommonPrefix } from '../utils/longestCommonPrefix';
import { info, error, warn } from '../utils/print'
import { bubleSort } from '../utils/bubleSort';
import { quickSort } from '../utils/quickSort';
import { priceFormatted } from '../utils/priceFormatted';
import { genRandomNumber } from '../utils/genRandomNumber';
import { genUUID } from '../utils/generateUUID';
import { fibonanceSequence, fibonanceSequenceInRecursive } from '../utils/fibonacciSequence';
import { mockSetInterval } from '../utils/mockSetInterval';
import { recursiveFlattening, arrayFlattening } from '../utils/flatten'
import { App } from './App'
import { SimpleCounting } from './components/Button/SimpleCounting'

ReactDom.render(
  <App />,
  document.getElementById('app')
)

// const longest1 = lengthOfLongestSubstring('aksjdgbndbfaligufa')
// console.log('string "aksjdgbndbfaligufa" the longest substring length >>> ', longest1)


// const longest2 = lengthOfLongestSubstring('pqowieuryytalskdjfhg')
// console.log('string "pqowieuryytalskdjfhg" the longest substring length >>> ', longest2)

// let unsortedArray = [47,45,21,2,4,34,345,456,456,56,57,8,9,89,89,42,1,4,6,9,84,74,293,45,7,68,789,79,92]
// console.log('before sort: ', unsortedArray);
// console.log('after buble sort: ', bubleSort(unsortedArray));
// console.log('after quick sort', quickSort(unsortedArray));

// info('==================================================')

// const price1 = 123123132
// console.log('test price formatted func, before:', price1, ', after: ', priceFormatted(price1))

// const price2 = 1231231326
// console.log('test price formatted func, before:', price2, ', after: ', priceFormatted(price2))

// const price3 = 98127123872
// console.log('test price formatted func, before:', price3, ', after: ', priceFormatted(price3))

// const randomArray = [];
// for(let i = 0; i < 100000; i++) {
//   randomArray.push(genRandomNumber(0, 1000));
// }
// console.log('Random array >>> ', randomArray);
// const d = new Date();
// console.log('after quick sort', quickSort(randomArray));
// const dd = new Date()
// console.log('Time cost: ', dd.getTime() - d.getTime());

// console.log('generated uuid >>> ', genUUID(20));
// info('===============================================')
// console.log('fibonanceSequence >', fibonanceSequence(20));
// console.log('fibonanceSequenceInRecursive >', fibonanceSequenceInRecursive(20));

// // mockSetInterval(() => {
// //   console.log('I am a mock setInterval');
// // }, 1000)

// const beforeFlattenArr = [1, 22, 41, [22, 12, [1, 34, 51], 65, 4], 3, 123, 27, 8, 9, 6, [123, 231, [13, 7, 534, 46, 34, [45, 54], 4], 22, 3], 5, 45, 4, 345, 56];
// console.log(`after recursiveFlattening: `, recursiveFlattening(beforeFlattenArr));
// console.log(`after arrayFlattening`, arrayFlattening(beforeFlattenArr));
