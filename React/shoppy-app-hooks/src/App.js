import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import { CheckoutInfo } from './pages/CheckoutInfo.jsx';
import { Support } from './pages/Support.jsx';
import { CartProvider } from './context/CacrContext.js';

import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/commons.css';
import './styles/shoppy.css';

export default function App() {
    return (
        // CartProvider범위 내에 있는 자식들은 CartProvider가 전달하는 프롭스 데이터를 사용할 수 있다.
        <CartProvider >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/all" element={<Products />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/products/:pid" element={<ProductDetail />} />
                        <Route path='/checkout' element={<CheckoutInfo />} />
                        <Route path='/support' element={<Support />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}







