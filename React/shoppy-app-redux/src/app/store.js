import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/cart/cartSlice.js'

export const store = configureStore({
  reducer: { //생산자 리스트
    "cart" : cartSlice,
  }
})