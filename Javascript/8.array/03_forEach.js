/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 제공됨
 * - 배열.forEach(callbackFn);
 */
let fruits = new Array ('🍎', '🍊', '🥭', '🍋', '🍏');
fruits.forEach((item, index, array) => { //(element, index, array만 들어갈 수 있다.) => {}
    console.log(item, index, array);
    // 결과 -> 🍎(item) 0(index) [ '🍎', '🍊', '🍇', '🍋', '🍏' ](array)
});

console.clear();
// 🍋을 🍇로 교체
fruits.forEach((item, index) => {
    if(item === '🍋'){
        fruits.splice(index, 1, '🍇')
    }
});
console.log(fruits);