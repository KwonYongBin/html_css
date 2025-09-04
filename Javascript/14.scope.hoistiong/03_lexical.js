/**
 * 
 */
{
    const a = 1; //  전역변수
    const b = 100;
    console.log(a);
    
    {
        const a = 2; // 지역 변수
        const c = 1000;
        console.log(a);
        {
            const a = 3; // 지역 변수
            console.log(a);
            console.log(b);
            console.log(c); 
            //스코프 체이닝은 상위 블록에 정의된 변수를 하위 블록 안에서만 호출이 가능하며,
            //하위 블록에 선언된 변수는 상위 블록안에서는 호출이 불가능 하다.
        }
    }
}
console.clear();
{
    function test1 (){
        const a = 1;
        
        function test2 (){
            const b = 2;
            console.log(`a ${a}`);
            console.log(`b ${b}`);
        }
        test2();
    }
    test1();
}