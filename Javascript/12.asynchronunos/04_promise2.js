/**
 * Pizza주문 처리 로직
 * - 1. 주문
 * - 2. 피자만들기 : 5초
 * - 3. 배달
 */

async function pizzaOrder (){
    
    let makePizza = new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            console.log(`2. 피자완성`);
            resolve();
        }, 2500);
        
    });
    
    console.log(`1. 주문 완료`);

    await makePizza
            .then((resolve)=> console.log(`--> resolve`))
            .catch((reject)=> console.log(`--> reject`))
            
    console.log(`3. 배달 완료`);
}

pizzaOrder();


/**
 * Pizza 주문 처리 로직
 * - 1. 주문
 * - 2. 피자만들기 (2.5초 소요)
 * - 3. 배달
 */

async function pizzaOrder () {
    console.log("1. 주문 완료");

    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("2. 피자완성");
                resolve();
            }, 2500);
        });

        console.log("3. 배달 완료");
    } catch (err) {
        console.log("🚨 주문 처리 중 오류 발생:", err);
    }
}

pizzaOrder();