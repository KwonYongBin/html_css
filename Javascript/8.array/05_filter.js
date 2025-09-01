/**
 * 중요도 - ⭐⭐⭐⭐⭐
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 조건에 맞는 결과를 새로운 배열 객체로 리턴
 * - 배열.map(콜백함수);
 */

let objects = [
    {name : '홍길동', age : 10},
    {name : '이순신', age : 20},
    {name : '김유신', age : 30}
];

let fruits = new Array ('🍎', '🍊', '🍇', '🍋', '🍏', '🍋');

//object 요소 중 이름이 이순신이 객체를 새로운 배열 객체로 생성
//결과 --> [{ name: '이순신', age: 20 }]

// let obj = objects.map((item) => {
//     let resultItem = {};
//     if(item.name === '이순신'){
//         resultItem = item;
//     }
//     return resultItem;
// })

let obj = objects.filter((item) => item.name === '이순신');
console.log(obj);

const searchCount = (fruit, item) => {
    return fruit.filter(sitem => sitem === item).length;
    
    // let result = fruit.filter(sitem => sitem === item);
    // return result.length;

}
console.log(`count => ${searchCount(fruits, '🍋')}`);
