import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <header>
                <h1>Layout 공간</h1>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    );
}