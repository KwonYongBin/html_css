import {Menu} from './components/commons/Menu.jsx';
import {HeaderLeft} from './components/menus/HeaderLeft.jsx';
import './style/Menu.css';

const App = () => {
  return (
    <>
    <HeaderLeft />
    <div>
        <Menu 
            href="#" 
            name="Menu#1"
            style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}}
            isIcon ="true"
            icon="❤️"
            />
        <Menu 
            href="#" 
            name="Menu#2"
            style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}}
            isIcon ="true"
            icon="❤️"
            />
        <Menu 
            href="#" 
            name="Menu#3"
            style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}}
            icon="❤️"
            />
    </div>
    </>
  )
}

export default App;