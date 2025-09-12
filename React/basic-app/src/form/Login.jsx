import { useState, useRef } from "react";

export default function Login(){
    // const DOM객체의 참조변수 = useRef(null)
    const idRef = useRef(null);
    const passRef = useRef(null);

    const initForm = {
        id:"", 
        password:""
    }
    const [form, setForm] = useState(initForm)

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});
    }

    const handleFormReset = () => {
        setForm(initForm);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if(idRef.current.value === ""){
            alert("아이디 입력");
            idRef.current.focus();
        } else if(passRef.current.value === "") {
            alert("패스워드 입력")
            passRef.current.focus();
        } else { 
            console.log(`서버연동 전송데이터 --> `, form);
        }

        // const id = document.querySelector("#id").value;
        // console.log(`id`, id);
        // if(id === ""){
        //     alert("아이디 입력")
        //     document.querySelector("#id").focus();
        // } else {
        //     alert("로그인 성공")
        // }

    }

    return (
        <>
            <h1>Login</h1>
            <form 
                name="loginfrom"
                onSubmit={handleSubmit}
            >
                <ul>
                    <li>
                        <label>아이디</label>
                        <input  
                                type="text" id="id"
                                name="id"
                                value={form.id}
                                ref={idRef}
                                placeholder="ID"
                                onChange={handleChangeForm}
                                />
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input  
                                type="password"
                                name="password"
                                value={form.password}
                                ref={passRef}
                                placeholder="PASSWORD"
                                onChange={handleChangeForm}
                        />
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset"
                                onClick={handleFormReset}

                        >다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    )
} 