import { isLeapYear } from './dateUtil.js';

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2004)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2001)); // false