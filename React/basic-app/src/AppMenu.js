import './css/Menu.css';
import { MenuLeft } from './components/menus/MenuLeft.jsx';
import { useState, useEffect } from 'react';
import { fetchData } from './util/commonData.js';
import { Logo } from './components/commons/Logo.jsx';

export default function App() {
    const [menus, setMenus] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const data = await fetchData("/data/menus.json");
            setMenus(data);
        }
        fetch();
    }, []);

    return (
        <div>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                borderBottom:"1px solid #777",
                paddingBottom:"20px"
            }}>
                <MenuLeft menus={menus.headerLeft}/>
                <Logo img="/images/logoRed.png" alt="header-logo" w="120px" />
                <MenuLeft menus={menus.headerRight}/>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuLeft menus={menus.headerCenter} />
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuLeft menus={menus.footerTop} />
            </div>
        </div>
    );
}