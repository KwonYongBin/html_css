import {useState, useEffect} from 'react';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';
import './css/style.css';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const init = {
    header: { menus: [] },
    content:{
      home:{},
      about: { majors:[], jobs:[] },
      skill: { skills:[], tools:[], etc:[] },
      work: {categories:[], projects:[] },
      testimonials: {testimonialList: [] }
    },
    footer: { links:[] }
  }
  const [data, setData] = useState(init);
  useEffect(()=>{
    const load = async () => {
    const response = await fetch("/data/portfolio.json")
    const jsonData = await response.json(); //json 파싱 작업
    setData(jsonData);
    }
    load();
  }, []);//[] 데이터가 변경된다면 반복해서 호출
  

    // .then((response) => response.json())
    // .then(jsonData => setData(jsonData))
    // .catch(error => console.log(error));

  return (
    <>
      <Header data={data.header} />
      <Content data={data.content}/>
      <Footer data={data.footer}/>
    </>
  );
}


