/**
 * Map : key, value 한 쌍으로 저장
 * - set (key, value)
 * - get(key) : 데이터 추출
 * - has(key) : 데이터 존재 확인
 * - delete(key) : 데이터 삭제
 */

let fruitMap = new Map();
fruitMap.set('apple', '🍎',);
fruitMap.set('manggo', '🥭',);

console.log(fruitMap);
console.log(fruitMap.get('apple'));
console.log(fruitMap.has('manggo'));
console.log(fruitMap.has('lemon'));
console.log(fruitMap.delete('apple'));
console.log(fruitMap);

fruitMap.set('apple', '🍎',);
fruitMap.set('manggo', '🥭',);// 중복 데이터는 하나만 저장된다.

console.log(fruitMap);