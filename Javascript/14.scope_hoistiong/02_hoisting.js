/**
 * 호이스팅(hoisting) : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 * - function 키워드로 정의된 함수
 */

test1(); //객체에 로드된 함수 호출
//호이스팅
function test1() { //메모리에 객체 생성과 로드 진행
    console.log(`-----> test1`);
}

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는
 * 호이스팅 작업이 선행되지 않음!!
 */
//test2();
//변수형 함수는 호이스팅이 불가하다.
const test2 = () => { //호이스팅 불가
    console.log(`-----> test2`);
}
test2();// 변수형 함수의 정상적인 호출 위치

let test3 = function() {
    console.log(`-----> test3`);
}
test3(); //해당 함수도 변수에 저장되었기 때문에 호이스팅이 불가능 하다.