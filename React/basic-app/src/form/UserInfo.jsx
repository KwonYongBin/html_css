import { useState, useRef } from "react";

export default function UserInf() {

    const refs = {
        nameRef : useRef(null),
        ageRef : useRef(null),
        addressRef : useRef(null)
    }

    const initform = {
        name:'',
        age:'',
        address:''
    }
    const [form, setForm] = useState(initform);

    const handleChangeForm = (event) => {
        const {name, value} = event.target
        setForm ({...form, [name]:value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        if(refs.nameRef.current.value === ""){
            alert("이름 입력")
        } else if(refs.ageRef.current.value === ""){
            alert("나이 입력")
        }else if(refs.addressRef.current.value === ""){
            alert("주소 입력")
        } else {
            console.log(`formdata->`,form)
        }

    }

    const handleFormReset = () => {
        setForm(initform);
    }

    return (
        <>
            <h1>UserInfo</h1>
            <form 
                name="userinfo"
                onSubmit={handleSubmit}
            >
                <ul>
                    <li>
                        <label>이름</label>
                        <input 
                            type="text" 
                            name="name"
                            value={form.name}
                            ref={refs.nameRef}
                            onChange={handleChangeForm}
                            />
                    </li>
                    <li>
                        <label>나이</label>
                        <input 
                            type="text" 
                            name="age"
                            value={form.age}
                            ref={refs.ageRef}
                            onChange={handleChangeForm}
                            />
                    </li>
                    <li>
                        <label>주소</label>
                        <input 
                            type="text" 
                            name="address"
                            value={form.address}
                            ref={refs.addressRef}
                            onChange={handleChangeForm}
                        />
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="reset"
                                onClick={handleFormReset}
                        >다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}