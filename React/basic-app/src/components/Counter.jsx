import { useState } from 'react';

const Counter = ({click}) => {
    const [number, setNumber] = useState(0);

    const handleClickDecrement = () => {
        (number < 10) ? setNumber(number +1) : setNumber(number);
        click(number); // 부모에게 number 전달
    }
    const handleClickIncrement = () => {
        (number > 0) ? setNumber(number -1) : setNumber(0)
        click(number); // 부모에게 number 전달
    }
    const handleClickInit = () => {
        setNumber(0);
    }

  return (
        <div className="counter-container">
            <div>
                <span className='number'>{number}</span>
                <span>/</span>
                <span className='total-number'>0</span>
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