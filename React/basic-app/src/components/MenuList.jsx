import React from 'react'
import Menu  from "../components/Menu.jsx"

const MenuList = ({menus}) => {
  return (
    <ul>
        {menus.map((menu)=>
            <li className='menu_list'>
                    <Menu
                      title={menu.title} 
                      color={menu.color} 
                      bg={menu.bg} 
                      href={menu.href}
                    />
            </li>
        )}
    </ul>
  );
}

export default MenuList;