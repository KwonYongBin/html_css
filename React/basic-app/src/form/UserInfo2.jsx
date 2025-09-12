import { useState } from "react";
import TextInput from "./TextInput";

export default function UseInfo2(){
    
    const forms = [
        {"label" : "이름", "type":"text", "name": "name", "msg":"이름을 입력해주세요"},
        {"label" : "나이", "type":"text", "name": "age", "msg":"나이를 입력해주세요"},
        {"label" : "주소", "type":"text", "name": "address", "msg":"주소를 입력해주세요"},
        {"label" : "이메일", "type":"text", "name": "email", "msg":"이메일을 입력해주세요"},
        {"label" : "취미", "type":"text", "name": "hobby", "msg":"취미를 입력해주세요"}
    ]
    const [formData, setFromData] = useState({name:"", age:"", address:"", emmail:"", hobby:""})
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        
        setFromData({...formData, [name]:value});
    }

    return (
        <>
            <h1>UseInfo2</h1>
            <form >
                {!forms || forms.map(item => 
                    <li>
                        <label>{item.label}</label>
                        <TextInput 
                            item={item}
                            value={formData[item.name]} 
                            handleChange={handleChangeForm}
                        />
                    </li>
                )}
                <ul>

                </ul>
            </form>
        </>
    )
}