import { useState, useRef } from "react";
import validateLoginChedck from '../util/validata.js'

export default function App() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        msgIdRef: useRef(null),
        msgPassRef: useRef(null)
    }

    const [form, setForm] = useState({id:'', pass:''})
    const [msg, setMsg] = useState({id:'', pass:''});

    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
        // refs.msgIdRef.current.innerText = "";
        // refs.msgPassRef.current.innerText = "";
        setMsg({id:'', pass:''});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        //validation check(유효성 체크)
        if(validateLoginChedck(refs, setMsg)) {
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
                        <span ref={refs.msgIdRef}>{msg.id}</span>
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
                        <span ref={refs.msgPassRef}>{msg.pass}</span>
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