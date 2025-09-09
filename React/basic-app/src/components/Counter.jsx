import { useState } from 'react'

const Counter = () => {
    const total = useState(0);
    const handleClick = () => {
        total = total + 1;
        console.log(`click~~${total}`);
    }

  return (
    <div style={{width:"100px", padding:"10px 20px", border:"1px solid blue"}}>
        <span style={{display: "block", fontSize:"35px"}}>{total}</span>
        <button type='button' onClick={handleClick}>클릭</button>
    </div>
  )
}

export default Counter