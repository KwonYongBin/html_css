import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../feature/counter/counterSlice.js'

export function Counter() {
  const count = useSelector((state) => state.counter.value); //기본값 호출 -> count 변수에 반영
  const dispatch = useDispatch(); // 햐당 컴포넌트에서 이벤트 발생 시 slice 요청담당

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment(증가)
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement(감소)
        </button>
      </div>
    </div>
  )
}