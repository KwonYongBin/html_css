/**
 * iterable(순회) object : Iteratiorn protocol을 준수하고 있는 객체
 * - for..of 구문
 * - ...(Spread orerator : 스프레드 연산자) : 블록안에서 객체의 데이터를 전개, 펼쳐놓음
 * - ...(Rest parameter : 나머지 인자) : 매개벼수에서 파라미터 매핑
 * - ...(Destructring object : 구조분해 할당) : 객체의 구조를 분해하여 대입하는 변수에 자동으로 매핑
 * - String, Array, Set, Map
*/

//문자열 객체 생성 - 'Hello~ JavaScript World!!!'
const str = new String('Hello~ JavaScript World!!!');
console.log(`str.length ${str.length}`);

for(const text of str){
    console.log(text);
}

console.clear();
const numbers = [1, 2, 3, 4, 5];
for(const number of numbers) console.log(number);

console.clear();
const numbers2 = new Number(12345); //iterable 객체가 아니기 때문에 에러 발생 for...on 사용X
// for(const number of numbers2) console.log(number);
