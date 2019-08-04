import { lengthOfLongestSubstring } from '../utils/lengthOfLongestSubstring';
import { longestCommonPrefix } from '../utils/longestCommonPrefix';
import { info, error, warn } from '../utils/print'
import { aNew } from '../utils/aNew'

const longest1 = lengthOfLongestSubstring('aksjdgbndbfaligufa')
console.log('string "aksjdgbndbfaligufa" the longest substring length >>> ', longest1)


const longest2 = lengthOfLongestSubstring('pqowieuryytalskdjfhg')
console.log('string "pqowieuryytalskdjfhg" the longest substring length >>> ', longest2)

interface Person{
  name: string;
  age: number;
}
const jack: Person = {
  name: 'jack',
  age: 16
}
console.log(jack)

// function Animal(name, sound) {
//   this.name = name
//   this.sound = sound
// }

var fls = ["flower","flow","flight"]
const prefixRes = longestCommonPrefix(fls)
console.log('"flower","flow","flight" , longestCommonPrefix result is ', prefixRes)

var animals = ["dog","racecar","car"]
const prefixRes2 = longestCommonPrefix(animals)
console.log('"dog","racecar","car" , longestCommonPrefix result is ', prefixRes2)

var lang = ["javascript","java", "typescript"]
const prefixRes3 = longestCommonPrefix(lang)
console.log('"dog","racecar","car" , longestCommonPrefix result is ', prefixRes3)