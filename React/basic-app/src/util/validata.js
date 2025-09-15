/**
 * 회원가입 폼 체크
 */
export function validateFormCheck({refs, setErrors}) {
    if(refs.idRef.current.value === "") {
        setErrors({id: "아이디를 입력해주세요"});
        refs.idRef.current.focus();
        return false;
    } else if(refs.pwdRef.current.value === "") {
        setErrors({pwd: "패스워드를 선택해주세요"});
        refs.pwdRef.current.focus();
        return false;
    } else if(refs.cpwdRef.current.value === "") {
        setErrors({cpwd: "패스워드 확인을 진행해주세요"});
        refs.cpwdRef.current.focus();
        return false;
    } else if(refs.nameRef.current.value === "") {
        setErrors({name: "이메일 주소를 선택해주세요"});
        refs.nameRef.current.focus();
        return false;
    } else if(refs.phoneRef.current.value === "") {
        setErrors({phone: "이메일 주소를 선택해주세요"});
        refs.emailDomainRef.current.focus();
        return false;
    } else if(refs.emailDomainRef.current.value === "") {
        setErrors({emailDomain: "이메일 주소를 선택해주세요"});
        refs.emailDomainRef.current.focus();
        return false;
    }
    return true;
}

/**
 * 로그인 폼 체크
 */

export default function validateLoginChedck(refs, setMsg) {
    if (refs.idRef.current.value === "") {
        // alert("아이디를 입력해주세요")
        setMsg({id: "아이디를 입력해주세요"})
        // refs.msgIdRef.current.innerText = "아이디를 입력해주세요"
        refs.idRef.current.focus();
        return false;
    } else if (refs.passRef.current.value === "") {
        // alert("패스워드를 입력해주세요")
        setMsg({pass: "패스워드를 입력해주세요"})
        // refs.msgPassRef.current.innerText = "패스워드를 입력해주세요"
        refs.passRef.current.focus();
        return false;
    } else {
        alert("로그인 성공");
    }
    return true;
}