import React from 'react'

const MyButton = ({name, type, style, handleProps}) => {
  const handleClick = () => {
    console.log(`(자식)button click ----> ${name}`);
    handleProps(`button click ----> ${name}`)
  }

  return (
    <button 
      type={type} 
      className={style} 
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default MyButton;