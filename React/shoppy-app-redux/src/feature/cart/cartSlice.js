import { createSlice } from '@reduxjs/toolkit'
import { cartItemsCheck, cartItemsAddInfo } from '../../utils/cart.js';

const initialState = {
    cartCount: 0, // 상점에 등록된 전역 초기값
    cartList: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action) { //state 는 cartCount의 상태를 가져오는 객체 //action은 컴포넌트에 있는 데이터를 객체를 통해 가져옴
            const { cartItem } = action.payload;
            state.cartList = cartItemsCheck(state.cartList, cartItem);
        },
        showCartItem(state, action) {
            const { items } = action.payload;
            state.cartList = cartItemsAddInfo(items, state.cartList);
        },
        updateCartCount(state) {
            state.cartCount = state.cartList.reduce((total, item) => total + item.qty, 0); //cartList에 있는 qty에 누적합 하여 cartCount에 반영
        },
        updateTotalPrice(state) {
            state.totalPrice = state.cartList.reduce((total, item) => total + (item.qty * item.price), 0);
        },
        updateCartItem(state, action) {
            const { cid, type } = action.payload;
            state.cartList = state.cartList.map((item) => {
                
                if (item.cid === cid) {
                    if (type === '+') {
                        return { ...item, qty: item.qty + 1 }
                    } else if (item.qty > 1) {
                        return { ...item, qty: item.qty - 1 }
                    } else {
                        return item;
                    }
                } else {
                    return item;
                }
                
            }
                // item.cid === cid ?
                //     type === '+' ? { ...item, qty: item.qty + 1 }
                //         : item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
                //     : item
            );
        },
        removeCartItem(state, action) {
            const { cid } = action.payload;
            state.cartList = state.cartList.filter(item => !(item.cid === cid));
        }

    },
})

// Action creators are generated for each case reducer function
export const { addCartItem, updateCartCount, showCartItem, updateTotalPrice, updateCartItem, removeCartItem } = cartSlice.actions //API function or Component에서 호출 (액션함수)

export default cartSlice.reducer // store에서 import