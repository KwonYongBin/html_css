/**
 * Set : 다양한 데이터 타입을 저장
 * - add() : 데이터 추가
 * - has() : 데이터 확인
 * - delete() : 데이터 삭제
 * - 중복된 데이터 추가되지 않고 필터링으로 하나만 저장한다
 */

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');
mySet.add({name : '홍길동'});
mySet.add([1,2,3,4,5]);
mySet.add(100);//중복 할당 안됨

console.log(mySet);

//mySet 출력
console.clear();
for(const value of mySet){
    console.log(value);
    
}

//mySet 데이터 확인
console.log(mySet.has(100));
console.log(mySet.has('홍길동'));

//mySet 데이터 삭제
if(mySet.has(100)){
    mySet.delete(100);
    console.log('삭제완료');
}
console.log(mySet);