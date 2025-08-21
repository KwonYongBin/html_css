let name = '홍길동';
let age = 20;

const person = {
    name, age //key, value 이름이 동일!!
};

console.log(person);
console.log(person.name);
console.log(person.age);


let x = 0;
let y = 0;

const number = {
    x,y
}
console.log(number);
console.log(number.x);
console.log(number.y);

//사원들의 정보를 입력받아 객체를 생성하는 함수 정의
//사원의 정보 : name, age, address


const createEmplotyy = (name, age, address) => {
    return {name, age, address}    
}
let emp1 = createEmplotyy('홍길동', 20, '서울시');
let emp2 = createEmplotyy('김철수', 30, '부산시');
console.log(emp1, emp2);
