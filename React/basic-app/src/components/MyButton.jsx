import React from 'react'

const MyButton = ({name, type, style}) => {
  return (
    <button type={type} className={style}>{name}</button>
  )
}

export default MyButton;