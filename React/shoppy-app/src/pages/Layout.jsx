import { Outlet } from 'react-router-dom';
import { Header } from '../components/commons/Header.jsx';
import { Footer } from '../components/commons/Footer.jsx';

/**
 * shoppy 사이트의 화명 출력 에이아웃(틀)
 */
export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}