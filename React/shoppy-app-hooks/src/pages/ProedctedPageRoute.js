import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/AuthContext.js'
import { Navigate } from 'react-router-dom'; //링크와 비슷한 효과를 가짐 다만 이벤트가 필요하지 않다

export function ProedctedPageRoute({ children }) {
  const { isLogin } = useContext(AuthContext);
  const isAlert = useRef(false);

  if (!isLogin) { //isLogin = false
    if(!isAlert.current){
      alert("로그인이 필요한 서비스입니다.\n로그인 페이지로 이동합니다.");
      isAlert.current = true;
    }
    
    return <Navigate to="/login" /> //실시간 페이지 이동
  } else {
    isAlert.current = true;
    return children;
  }

}
