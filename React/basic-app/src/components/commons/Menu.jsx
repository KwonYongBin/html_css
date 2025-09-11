import React from 'react'

const Menu = (href, name, style, isIcon, icon) => {
  return (
        <a 
        href={href}
        className='menu-item'
        style={
            {
                width: style.w,
                height: style.h, 
                backgroundColor: style.bg,
                color: style.color
            }
        }
    >
        {isIcon ? icon : ""}
        {name}
    </a>
  )
}

export default Menu;
