import "./style/style.css"

import { MyTitle, MyTitle3 } from "./components/MyTitle.jsx"
import MyButton from './components/MyButton.jsx';
import Menu from "./components/Menu.jsx";
import Menu2 from "./components/Menu2.jsx";
import MenuList from "./components/MenuList.jsx";


const App = () => {
  const menu1 = {
    "title": "네이버",
    "color": "red",
    "bg": "yellow",
    "href": "https://www.naver.com"
  }

  const menus = [
  {
    "title": "네이버",
    "color": "red",
    "bg": "yellow",
    "href": "https://www.naver.com"
  },
  {
    "title": "구글",
    "color": "blue",
    "bg": "ywllowgreen",
    "href": "https://www.google.com"
  },
  {
    "title": "다음",
    "color": "red",
    "bg": "cyon",
    "href": "https://www.daum.net"
  },
    {
    "title": "네이버",
    "color": "red",
    "bg": "yellow",
    "href": "https://www.naver.com"
  },
  {
    "title": "구글",
    "color": "blue",
    "bg": "ywllowgreen",
    "href": "https://www.google.com"
  },
  {
    "title": "다음",
    "color": "red",
    "bg": "cyon",
    "href": "https://www.daum.net"
  }
]

  return (
    //여러개를 컴포넌트 해야하는 경우 그루핑은 필수이다.
    <>
      <MyTitle />
      <MyTitle3 />
      <MyButton name="회원가입" type="button" style="button" />
      <MyButton name="로그인" type="submit" style="submit" />
      <MyButton name="취소" type="reset" style="reset" />
      <hr />
      <Menu title={menu1.title} color={menu1.color} bg={menu1.bg} href={menu1.href} />
      <Menu2 data={menu1} />
      <MenuList menus={menus} />
    </>
  );
}

export default App;