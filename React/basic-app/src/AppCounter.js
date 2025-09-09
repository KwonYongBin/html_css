import Counter from "./components/Counter.jsx";
import './style/Style.css'

// 자식 > 부모(누적합) > 자식(결과전송)

const AppCounter = () => { // 자식 컴포넌트의 클릭이벤트 결과 가져오기
  const click = (number) => {
    console.log(`number -> ${number}`)
  }
  return ( 
    <>
      <h1>Counter Test</h1>
      <Counter click={click}/>
      <Counter click={click}/>
    </>
  )
}

export default AppCounter