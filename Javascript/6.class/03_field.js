/**
 * 클래스 정의시 필드(전역변수)는 생성자 함수에서 정의!
 * 접근 제어가 필요한 필드는 #을 붙여 필드 영역에 정의해야 함!
 * #은 자바의 private와 같은 제어 기능을 가짐
*/
class Person {
    #empno;


    constructor(name, emoji, empno) {
        this.#empno = '1234';
        this.name = name;
        this.emoji = emoji;
    }

    display = () => {
        console.log(this.#empno, this.name, this.emoji);
        
    }
}

let hong  = new Person('홍길동', '👤');

hong.display();
console.log(hong.name); //#을 붙여 접근 제어를 하게 되면 외부에서 호출은 불가하다.
console.log(hong.emoji);