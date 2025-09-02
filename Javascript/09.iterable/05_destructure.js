/**
 * Destructure : 구조 분해 할당
 * - 객체의 구조를 분해하여 대입하는 변수에 자동으로 할당
 */

let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let bb = numbers[2];
let [a, b, ...nlist] = numbers; // 구조 분해 할당

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`nlist = ${nlist}`);
console.log(a, b, nlist);