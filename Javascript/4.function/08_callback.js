/**
 * callback(콜백함수) : 함수의 파라미터로 입력되는 익명함수
 */
const job = (a, b, callback) => {
    callback(a, b);
}

const print = (a, b) => {
    console.log(a, b);
}

job(1, 2, print) // 동기식 - 인터프리터 형태로 즉시 일 처리

// setTimeout 함수 호출 - 비동기식 백그라운드에 저장후 후처리 방식 이유는 스레드가 하나라서 동기식으 선처리하고 다음에 할 일이 없어야 비동기식을 처리한다.

// 사용 방법 - setTimeout(함수호출, 시간);
// setTimeout은 비동기식 처리를 하므로, 백그라운드에서 저장된 후 
// 이벤트 루프를 통해 호출되어 처리될 때 자신이 포함한
// 콜백함수를 실행한다.
// 하지만 현재 작성된 코드는 이미 print가 가지고있는 매개변수를 실행 했기 때문에 setTimeout은 undifind를 넘겨받아 에러가 발생한다.
// setTimeout(print(callback(처리할 함수형식), delay));
// setTimeout(print(1,2), 1000);

/**
 * 정리된 내용 요약
네가 정리한 내용에 추가적인 설명을 붙여줄게.

동기적 실행: setTimeout(print(1, 2), 1000)에서, setTimeout이 호출되기도 전에 **print(1, 2)**가 먼저 동기적으로 실행돼.
이 과정에서 1 2가 즉시 출력되고, print 함수는 특별한 반환값이 없으므로 **undefined**를 반환해.

비동기 작업 등록: setTimeout은 **'함수'**를 넘겨받아 비동기 작업 큐에 등록해야 하는데, 네 코드에서는 print(1, 2)의 반환값인 **undefined**가 넘어가.

오류 발생: setTimeout은 undefined라는 값을 실행할 수 없기 때문에 **TypeError**와 같은 에러를 발생시키는 거야.
 */



console.clear();

console.log(`동기식 처리 ----------> 1`);
console.log(`동기식 처리 ----------> 2`);

setTimeout(()=>{
    console.log(`setTimeout 호출(비동기) -----> #1`)
}, 0);

console.log(`동기식 처리 ----------> 3`);

setTimeout(()=>{
    console.log(`setTimeout 호출(비동기) -----> #2`)
}, 1000);

console.log(`동기식 처리 ----------> 4`);