import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/cart/cartSlice.js'
import productSlice from '../feature/Product/ProductSlice.js'
import authSlice from '../feature/auth/authSlice.js'

//액션 로깅 처리 담당 미들웨어
const myLoggerMiddlware = (store) => (next) => (action) => {
    console.log("dispatch::", action)
    const result = next(action);
    console.log("next action ::", store.getState());

    return result;
}

//장바구니 상태 저장 : 로컬 스토리지 저장
const myScartSaveMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    //장바구니 (cartSlice) 경우에만 저장
    if(typeof action.type === "string" && action.type.startsWith("cart/")) { //store에 저장되어 있는 cart카가 가지고 있는 cartSlice를 가지고 옴
        const cart = store.getState().cart; //getState() 객체를 반환하는 함수
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return result;
}


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(myLoggerMiddlware)
            .concat(myScartSaveMiddleware)
})