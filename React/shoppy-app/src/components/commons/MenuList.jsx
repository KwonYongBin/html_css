import { useState } from "react";
import { Menu } from "./Menu.jsx";

export function MenuList({menus}) {
    const [active, setActive] = useState("전체");
    const handleClick = (name) => {
        setActive(name);
    }

    return (
        <ul className="menu-list">
            {!menus || menus.map(menu => 
                <li className="menu-list-item">
                    <Menu href={menu.href}
                        name={menu.name}
                        isIcon={menu.isIcon}
                        icon={menu.icon} 
                        style={active === menu.name ?
                            "support-content-menu support-active"
                            :
                            "support-content-menu"}
                        handleClick={handleClick}
                    />
                    {menu.isBorder? <span className="menu-list-item-border"></span> : ""}
                </li>
            )}         
        </ul>

    );
}