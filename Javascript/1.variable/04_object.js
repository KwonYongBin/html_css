/**
 * 객체형
 * Class, Array([]), Object({})
 * Array 형식 : [데이터, 데이터...]
 * Object 형식 : {
 *     프로퍼티: 데이터, 
 *     프로퍼티: 데이터, 
 *     프로퍼티: 데이터,
 *     ... 
 * }
 */

let apple = null;
apple = {
    // 외부에 제공 할 때 방식
    // 'name':'apple',
    // 'color':'red',
    // 'emoji':'🍎'

    // node.js에서 제공하는 방식
    name:'apple',
    color:'red',
    emoji:'🍎'
};
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

//orenge 객체 정의
let orenge = null;
orenge = {
    name : 'orenge',
    color : 'coral',
    emoji : '🍊'
};
console.log(orenge.name);
console.log(orenge.color);
console.log(orenge.emoji);

//Array
let numbers = [1,2,3,4,5]
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers);

let fruits = [apple, orenge];
console.log(fruits);
console.log(fruits[0].emoji);
console.log(fruits[1].emoji);