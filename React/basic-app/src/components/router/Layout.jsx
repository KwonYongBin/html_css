import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';


export function Layout() {
    return (
        <div>
            <Header />
            {/* <header style={{ backgroundColor: "green" }}> 자식컴포넌트를 Header컴포넌트의 props로 전달하여 출력한다. */}
                {/* <Link to="/" style={{ padding: "10px", color: "white" }}>Home</Link>
                <Link to="/login" style={{ padding: "10px", color: "white" }}>로그인</Link>
                <Link to="/signup" style={{ padding: "10px", color: "white" }}>회원가입</Link>
                <Link to="/about" style={{ padding: "10px", color: "white" }}>About</Link>
                <Link to="/support" style={{ padding: "10px", color: "white" }}>Support</Link> */}
            {/* </header> */}
            <div style={{ height: "700px" }}>
                <Outlet />
            </div>
            {/* <footer style={{backgroundColor:"#000", color:"white"}}>
                <p>footer</p>
            </footer> */}
            <Footer />
        </div>
    );
}