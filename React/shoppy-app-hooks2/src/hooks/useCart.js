import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { axiosData } from "../utils/dataFetch.js";
import { cartItemsAddInfo, getTotalPrice, cartItemsCheck } from '../utils/cart.js';

/**
 * 
 */

export function useCart() {
    const { cartCount, setCartCount, cartList, setCartList, totalPrice, setTotalPrice } = useContext(CartContext);

    const addCart = (cartItem) => {  // <-- ProductDetail 쇼핑백 추가 이벤트 처리
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount + 1);
    }

    /**
     * 장바구니 정보 출력 
     */
    const showCart = async () => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/products.json");
            return jsonData;
            setCartList(cartItemsAddInfo(jsonData, cartList));
            setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        const app = await fetch();

        setCartList()
    }

    return { addCart, showCart }
}

