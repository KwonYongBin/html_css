import { useState, useRef } from "react";

export default function App() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null)
    }

    const [form, setForm] = useState({id:"", pass:""})

    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        //validation check(유효성 체크)
        if(refs.idRef.current.value === "") {
            alert("아이디를 입력해주세요")
            refs.idRef.current.focus();
            return false;

        } else if(refs.passRef.current.value === "") {
            alert("패스워드를 입력해주세요")
            refs.passRef.current.focus();
            return false;

        } else {
            alert("로그인 성공");
            console.log(`submit --> `, form);
        }
    }
    
    const handleReset = () => {
        setForm({id:"", pass:""})
    }
    
    return (
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input 
                            type="text" 
                            name="id"
                            value={form.id}
                            ref={refs.idRef}
                            onChange={handleChangeForm}
                            />
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input 
                            type="password" 
                            name="pass"
                            value={form.pass}
                            ref={refs.passRef}
                            onChange={handleChangeForm}
                        />
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </li>
                </ul>
            </form>
        </>
    )
}