import React from 'react';
import {
    addCartItem, updateCartCount,
    showCartItem, updateTotalPrice,
    updateCartItem, removeCartItem
} from './cartSlice.js';

import { axiosData } from '../../utils/dataFetch.js';

//이곳은 이벤트를 처리하는 공간이 아니어서 디스패치를 선언하면 안됨!

export const addCart = (cartItem) => async (dispatch) => { //addCartItem
    //redux
    dispatch(addCartItem({ "cartItem": cartItem })); //{"cartItem" : cartItem} payload
    dispatch(updateCartCount());
}

export const showCart = () => async (dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    dispatch(showCartItem({ "items": jsonData }));
    dispatch(updateTotalPrice());
    // setCartList(cartItemsAddInfo(jsonData, cartList));
    // setTotalPrice(getTotalPrice(jsonData, cartList));
}

export const updateCart = (cid, type) => async (dispatch) => {
    dispatch(updateCartItem({"cid" : cid, "type" : type})); // 카트 리스트 수량 변경
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());

}

export const removeCart = (cid) => async(dispatch) => {
    dispatch(removeCartItem({"cid" : cid}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
}