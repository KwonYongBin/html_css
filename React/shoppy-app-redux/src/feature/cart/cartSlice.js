import { createSlice } from '@reduxjs/toolkit'
import { cartItemsCheck } from '../../utils/cart.js';

const initialState = {
  cartCount : 0, // 상점에 등록된 전역 초기값
  cartList : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) { //state 는 cartCount의 상태를 가져오는 객체 //action은 컴포넌트에 있는 데이터를 객체를 통해 가져옴
        const { cartItem } = action.payload;
        state.cartList = cartItemsCheck(state.cartList, cartItem);
        state.cartCount = state.cartCount + 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCartItem } = cartSlice.actions //API function or Component에서 호출 (액션함수)

export default cartSlice.reducer // store에서 import