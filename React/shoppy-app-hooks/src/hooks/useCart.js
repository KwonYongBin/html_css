import React, { useContext } from 'react'
import { CartContext } from '../context/CacrContext.js'
import { cartItemsAddInfo, cartItemsCheck, updateCartItemsQty, getTotalPrice } from '../utils/cart.js';
import { axiosData } from '../utils/dataFetch.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    //CartContext의 값 가져오기
    const { setCartCount, setCartList, cartList, cartCount } = useContext(CartContext);

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
            // setTotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }

    // 장바구니 수량 변경
    const updateCart = (cid, type) => {
        //카트수량 변경
            // 삼항연산자를 가독성 증가를 위해 아래 if-else로 변경
            setCartList((cartList) => cartList.map((item) => 
                item.cid === cid ?
                    type === '+'? {...item, qty: item.qty+1}   
                                : item.qty > 1 ? {...item, qty: item.qty-1} : item
                :   item  
                // if (item.cid === cid) {  // cid 가 일치하면
                //     if (type === "+") { // 타입이 +면
                //         return { ...item, qty: item.qty + 1 };
                //     } else if (item.qty > 1) { // 타입이 +가 아니고 qty가 1보다 크면
                //         return { ...item, qty: item.qty - 1 }
                //     } else { // 타입이 +가 아니고, qty가 1보다 작으면
                //         return item;
                //     }
                // } else { // cid가 일치하지 않으면
                //     return item;
                // }
        ));
    }

    return { addCart, showCart, updateCart  }
}