/**
 * 반복문 : for, while
 * for - 정화한 반복 횟수를 알고 있는 경우
 * while - 종료하는 조건을 알고 있는 경우
 * 
 * for ((1)초기값; (2)조건식체크; (4)증감식;) {
 *      (3)실행문;
 * }
 * for (let i = 0, i < 10, i++) {
 *      
 * }
 *초기값은 let으로 선언한다. const는 안됨!! - 데이터 값이 변해야 하기 때문.
 */

 // 1 ~ 10 까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(`number => ${i}`);
}

//숫자 배열을 출력
let numbers = [1, 3, 5, 6, 9]
for (let i = 0; i < numbers.length; i++){
    console.log(`numbers[${i}] = ${numbers} `);
}

//과일이 레몬이면 이모지 출력
let fruits = ['apple', 'orange', 'lemon'];
let emojis = ['🍎', '🍊','🍋'];

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let emoji = emojis[i];
    if(fruit === 'lemon') {
        console.log(`${fruit} = ${emoji}`);
    }
}