import React from 'react'

const Menu2 = ({data}) => {
  const {title, href, color, bg} = data;
  return (
    <a href={href}
        className="menu"
        style={{color:color, background:bg}}>{title}</a>
  );
}

export default Menu2;