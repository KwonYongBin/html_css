import "./style/Style.css"

import Avatar, {AvatarList, AvatarImageList, AvatarImage } from "./components/Avatar.jsx";


const App = () => {
  const list = [
    {"img" : "/images/people1.webp", "style" : "avatar-img"},
    {"img" : "/images/people2.webp", "style" : "avatar-img-circle"},
    {"img" : "/images/people3.webp", "style" : "avatar-img"}
  ]
  const alist = [
    {"img" : "/images/people1.webp", "name" : "smith"},
    {"img" : "/images/people2.webp", "name" : "john"},
    {"img" : "/images/people3.webp", "name" : "jein"}
  ]
  return (
    //여러개를 컴포넌트 해야하는 경우 그루핑은 필수이다.
    <>
      <AvatarList list={alist} className="avatar-list"/>
      <hr/>
      <Avatar img="/images/people1.webp" name="smith"/>
      <Avatar img="/images/people2.webp" name="john"/>
      <Avatar img="/images/people3.webp" name="jein"/>
      <hr/>
      <AvatarImageList imgList={list}/>
      <hr/>
      <AvatarImage img="/images/people1.webp" style="avatar-img-circle"/>
      <AvatarImage img="/images/people2.webp" style="avatar-img"/>
      <AvatarImage img="/images/people3.webp" style="avatar-img-circle"/>
    </>
  );
}

export default App;