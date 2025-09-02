//수자 증가/감소 함수
function counter(type) {
    let number = document.querySelector("#number").textContent;
    if(type === 'increment'){
        document.querySelector("#number").textContent = ++number;
    } else if (type === 'decrement'){
        document.querySelector("#number").textContent = --number;
    }
}

// //number 증가 함수 생성
// function increment(){
//     let number = document.querySelector("#number").textContent;
    
//     //0보다 크면 1증가
//     if(number >= 0){
//         document.querySelector("#number").textContent = ++number;
//     }
    
// }

// //number 감소 함수 생성
// function decrement(){
//     let number = document.querySelector("#number").textContent;
//         if(number > 0){
//         document.querySelector("#number").textContent = --number;
//     }
// }