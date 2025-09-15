import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/router/Layout.jsx';
import Login from './form/Login.jsx'
import Signup from './form/Signup.jsx'

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}