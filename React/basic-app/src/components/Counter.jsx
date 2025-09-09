import { useState } from 'react';

const Counter = ({click, total}) => {

    const [number, setNumber] = useState(0);

    const handleClickDecrement = () => {
        if (number < 10) {
            setNumber(number +1)
            click("+"); // 부모에게 number 전달
        } else setNumber(number);
    }

    const handleClickIncrement = () => {
        if(number > 0){
            setNumber(number -1);
            click("-"); // 부모에게 number 전달
        }    
        else setNumber(0);
    }
    const handleClickInit = () => {
        setNumber(0);
        click(0);
    }

  return (
        <div className="counter-container">
            <div>
                <span className='number'>{number}</span>
                <span>/</span>
                <span className='total-number'>{total}</span> 
            </div>
            <div>
                <button type='button' onClick={handleClickIncrement}>-(감소)</button>
                <button type='button' onClick={handleClickDecrement}>+(증가)</button>
                <button type='button' onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    )
}

export default Counter