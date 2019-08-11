import { lengthOfLongestSubstring } from '../utils/lengthOfLongestSubstring';
import { longestCommonPrefix } from '../utils/longestCommonPrefix';
import { info, error, warn } from '../utils/print'
import { aNew } from '../utils/aNew'
import { bubleSort } from '../utils/bubleSort';
import { priceFormatted } from '../utils/priceFormatted';

const longest1 = lengthOfLongestSubstring('aksjdgbndbfaligufa')
console.log('string "aksjdgbndbfaligufa" the longest substring length >>> ', longest1)


const longest2 = lengthOfLongestSubstring('pqowieuryytalskdjfhg')
console.log('string "pqowieuryytalskdjfhg" the longest substring length >>> ', longest2)

// interface Person{
//   name: string;
//   age: number;
// }
// const jack: Person = {
//   name: 'jack',
//   age: 16
// }
// console.log(jack)

// function Animal(name, sound) {
//   this.name = name
//   this.sound = sound
// }

// var fls = ["flower","flow","flight"]
// const prefixRes = longestCommonPrefix(fls)
// console.log('"flower","flow","flight" , longestCommonPrefix result is ', prefixRes)

// var animals = ["dog","racecar","car"]
// const prefixRes2 = longestCommonPrefix(animals)
// console.log('"dog","racecar","car" , longestCommonPrefix result is ', prefixRes2)

// var lang = ["javascript","java", "typescript"]
// const prefixRes3 = longestCommonPrefix(lang)
// console.log('"dog","racecar","car" , longestCommonPrefix result is ', prefixRes3)

let unsortedArray = [47,45,21,2,4,34,345,456,456,56,57,8,9,89,89,42,1,4,6,9,84,74,293,45,7,68,789,79,92]
console.log('before sort: ', unsortedArray);
console.log('after sort: ', bubleSort(unsortedArray));

info('==================================================')

const price1 = 123123132
console.log('test price formatted func, before:', price1, ', after: ', priceFormatted(price1))

const price2 = 1231231326
console.log('test price formatted func, before:', price2, ', after: ', priceFormatted(price2))

const price3 = 98127123872
console.log('test price formatted func, before:', price3, ', after: ', priceFormatted(price3))