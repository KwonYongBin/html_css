/**
 * 비교 연산자 >, <, >=, <=, ==(값 비교), ===(값,데이터타입)
 */
console.log(3 > 2);       //true
console.log(3 < 2);       //false
console.log(3 >= 2);      //true
console.log(3 <= 2);      //false
console.log(3 == '3');    //true
console.log(3 === '3');   //false
console.log(3 == 'A');    //false A = 67(아스키 문자와 비교) 3 == 67
console.log(3 === 'a');   //false

let obj1 = {
    name: '홍길동'
}
let obj2 = {
    name: '홍길동'
}

console.log("참조형-------------------");
console.log(obj1 == obj2); //false - 주소값이 다르기 때문에
console.log(obj1.name == obj2.name);
console.log(typeof obj1 === typeof obj2);
