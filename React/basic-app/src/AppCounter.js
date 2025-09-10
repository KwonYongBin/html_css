import { useState } from "react";
import Counter from "./components/Counter.jsx";
import './style/Style.css'

// 자식 > 부모(누적합) > 자식(결과전송)

const App = () => { 
  const [total,  setTotal] = useState(0); //변수의 상태관리
  const [init, setInit] = useState(0); // 자식 초기화 : 0, 1 값을 토글(Toggle)

  /**
      let total = 0;
      const setTotal = (value) => {
        total = value;
      }
   */


  const click = (type) => {// 자식 컴포넌트의 클릭이벤트 결과 가져오기
    if(type === "+") setTotal(total + 1);
    else if(type === "-") setTotal(total - 1);
    else if(type === 0){      
      setTotal(0);
      setInit(!init);
    }
  }

  return ( 
    <>
      <h1>Counter Test : {total}</h1>
      <Counter click={click} total={total} init={init}/>
      <Counter click={click} total={total} init={init}/>
    </>
  )
}

export default App;