import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../feature/cart/cartSlice.js';
import productSlice from '../feature/Product/ProductSlice.js';
import authSlice from '../feature/auth/authSlice.js';

export const store = configureStore({
  reducer: { //생산자 리스트
    cart : cartSlice,
    product : productSlice,
    auth : authSlice,
  },
})