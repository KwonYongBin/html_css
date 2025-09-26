import React, { useContext } from 'react'
import { CartContext } from '../context/CacrContext.js'
import { cartItemsAddInfo, cartItemsCheck, getTotalPrice } from '../utils/cart.js';
import { axiosData } from '../utils/dataFetch.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    //CartContext의 값 가져오기
    const { cartCount, setCartCount, cartList, setCartList, totalPrice, setTotalPrice } = useContext(CartContext);

    //Context 객체의 값을 변경하는 함수 정의
    //장바구니 아이템 추가
    const addCart = (cartItem) => {  // <-- ProductDetail 쇼핑백 추가 이벤트 처리
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount + 1);
    }

    //장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가
    const showCart = () => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, cartList));
            setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        fetch();
    }

    // 장바구니 수량 변경
    const updateCart = (cid, type) => {
        //카트수량 변경
        // 삼항연산자를 가독성 증가를 위해 아래 if-else로 변경
        setCartList((cartList) => cartList.map((item) =>
            item.cid === cid ?
                type === '+' ? { ...item, qty: item.qty + 1 }
                    : item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
                : item
        ));

        // 총 금액 반영 로직 수량 변경에 따른 전체 상품 가격 변경
        const findItem = cartList.find((item) => item.cid === cid);
        type === '+' ? setTotalPrice(totalPrice + findItem.price)
            : findItem.qty > 1 ? setTotalPrice(totalPrice - findItem.price)
                : setTotalPrice(totalPrice);

        //cartCount 수량 변경 :  Header
        type === "+" ? setCartCount(cartCount + 1)
            : cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(cartCount);
    }

    //장바구니 아이템 삭제
    const removeCart = (cid, qty, price) => {
        // cartList 상태(state) 업데이트
        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid));
        });

        //Header 수량 반영
        setCartCount(cartCount - qty); 

        //전체 상품 가격 반영
        setTotalPrice(totalPrice - (qty * price)); 

    }

    return { addCart, showCart, updateCart, removeCart }
}