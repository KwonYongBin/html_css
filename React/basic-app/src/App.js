import "./style/style.css"

import { MyTitle, MyTitle3 } from "./components/MyTitle.jsx"
import MyButton from './components/MyButton.jsx';

const App = () => {
  return (
    //여러개를 컴포넌트 해야하는 경우 그루핑은 필수이다.
    <> 
      <MyTitle />
      <MyTitle3 />
      <MyButton name="회원가입"/>
      <MyButton name="아이디 찾기"/>
      <MyButton name="비밀번호 찾기"/>
    </>
  )
}

export default App;