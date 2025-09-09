import MyButton from "./components/MyButton.jsx"
import './style/Style.css';

export default function App() {
    // function handleProps() {}
    // const handleProps = function() {}
    const handleProps = (result) => {
        console.log(`(부모)result --->`, result);
    }

  return (
    <div>
        <MyButton 
            name="button #1"
            type="button" 
            style="button" 
            handleProps={handleProps} 
        />
        <MyButton 
            name="button #2"
            type="button" 
            style="button" 
            handleProps={handleProps} 
        />
    </div>
  );
}