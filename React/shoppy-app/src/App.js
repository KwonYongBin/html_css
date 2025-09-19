import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';

import { cartItemCheck } from './utils/cart.js';

import './styles/cgv.css';
import './styles/shoppy.css';
import './styles/cgvSignup.css';

export default function App() {
  // 1. 장바구니 수량 관리 setCartCount
  const [cartCount, setCartCount] = useState(0);

  // 2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]);

  const addCart = (cartItem) => { // ProductDetail 쇼핑백 추가 이벤트 처리
    //pid, size가 동일한 경우 qty 증가, cartItems없는경우 새로추가
    setCartItems(cartItemCheck(cartItems, cartItem));
    setCartCount(cartCount + 1);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount} />}>
          <Route index element={<Home />} />
          <Route path="/all" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:pid" element={< ProductDetail addCart={addCart} />} /> {/* passbaryable */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}