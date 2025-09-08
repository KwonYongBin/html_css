import React from 'react'

const Menu = (props) => {
  return (
    <a href={props.href}
        className="menu"
        style={{color:props.color, background:props.bg}}>{props.title}</a>
  )
}

// const Menu = (title, color, bg, href) => {
//   return (
//     <a href={href}
//         className="menu"
//         style={{color:color, background:bg}}>{title}</a>
//   )
// }

export default Menu;