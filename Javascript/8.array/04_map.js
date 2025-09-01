/**
 * 중요도 - ⭐⭐⭐⭐⭐
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 결과를 새로운 배열 객체로 리턴
 * - 배열.map(콜백함수);
 */

let nArray = [1.2, 2.3, 3.4, 5.6, 6.7];
let numbers = [1, 2, 3, 4, 5];
let objects = [
    {name : '홍길동', age : 10},
    {name : '이순신', age : 20},
    {name : '김유신', age : 30}
];

//nArray 요서 출력
nArray.forEach( (item, i) => console.log(`nArray[${i}] = ${item}`) );

//nArray 요소의 소수점 절삭 후 출력 : map()
let nArray2 = nArray.map((item) => Math.floor(item)); //[] {return 필수} {없을 땐 자동으로 map이 return생성}
nArray2.forEach ((item) => console.log(item));

//numbers 요소애 100을 곱하여 새로운 배열 객체를 생성하시오
let numbers2 = numbers.map(item => item * 100)
numbers2.forEach(item => console.log(item));

//object 요소 중 이름이 이순신이 객체를 새로운 배열 객체로 생성
let obj = objects.map((item) => {
    let resultItem = {};
    if(item.name === '이순신'){
        resultItem = item;
    }
    return resultItem;
})
console.log(obj);