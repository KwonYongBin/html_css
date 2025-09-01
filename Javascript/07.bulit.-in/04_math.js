/**
 * Math 클래스의 메소드 : static으로 정의됨
 * - Math.상수명, Math.메소드명()
 */

let a = 123.856;

console.log(`Math.abs(value) --> ${Math.abs(a)}`);
console.log(`Math.floor(value) --> ${Math.floor(a)}`);
console.log(`Math.trunc(value) --> ${Math.trunc(a)}`);
console.log(`Math.round(value) --> ${Math.round(a)}`);
console.log(`Math.max(1,2,3,4,5) --> ${Math.max(1, 2, 3, 4, 5)}`);
console.log(`Math.min(1,2,3,4,5) --> ${Math.min(1, 2, 3, 4, 5)}`);

//자리수별 절삭
let b = 123.456;
let result = Number(b.toPrecision(4)); //맨 앞자리를 기준으로 원하는 자리수를 절삭과 동시에 소수점 뒷자리를 반올림
console.log(result);

//임의 숫자 반환
console.clear();
console.log(`Math.random() --> ${Math.random()}`); // 0 ~ 1까지 램덤한 수를 출력

// 1 ~ 100 사이의 숫ㅈ를 임의로 변환
let rnum = Math.floor(Math.random() * 100 + 1);
console.log(`Math.random() --> ${rnum}`);

