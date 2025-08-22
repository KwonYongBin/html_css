
//로그인
class Member {
    #id;
    #pwd;
    constructor(id, pwd){
        this.#id = id;
        this.#pwd = pwd;
    }

    getId = () => this.#id;
    getPwd = () => this.#pwd;

    setId = () => this.#id = id;
    setPwd = () => this.#pwd = pwd;

    display = () => console.log(this.#id, this.#pwd)

}

function loginCheck() {
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');

    if(id.value === ''){

        alert('아이디 입력바랍니다.')
        id.focus();

    } else if(pwd.value === '') {

        alert('패스워드를 입력바랍니다.')
        pwd.focus();
    } else {
        
        let member = new Member(id.value, pwd.value);
        member.display();

        //ID, Password server 전송 : member 객체 전송
        const sid = 'hong';
        const spwd = '1234';

        if(sid === member.getId() && spwd === member.getPwd()) {
            alert('로그인 성공')
        } else {
            alert('로그인 실패')
            id.value = '';
            pwd.value = '';
            id.focus();
        }
    }
}

// 회원가입
class Join {
    #id;
    #pass;
    #passc;
    #name;
    #phone;
    #email;
    constructor(id, pass, passc, name, phone, email) {
        this.#id = id;
        this.#pass = pass;
        this.#passc = passc;
        this.#name = name;
        this.#phone = phone;
        this.#email = email;

    }

    getId = () => this.#id;
    getPass = () => this.#pass;
    getPassc = () => this.#passc;
    getName = () => this.#name;
    getPhone = () => this.#phone;
    getEmail = () => this.#email;

    setId = () => this.#id = id;
    setPass = () => this.#pass = pass;
    setPassc = () => this.#passc = passc;
    setName = () => this.#name = name;
    setPhone = () => this.#phone = phone;
    setEmail = () => this.#email = email;

    display = () => console.log(this.#id, this.#pass, this.#passc, this.#name, this.#phone, this.#email);
}

function joinCheck() {

}