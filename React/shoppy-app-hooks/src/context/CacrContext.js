import { createContext, useState } from "react";

//1. Context 생성
export const CartContext = createContext(); 

/** 2.
 * CartContext 사용하는 전체적인 범위 설정 
 * - CartProvider안에 있는 컴포넌트 들은 CartContext를 사용
 * CartProvider는 App.js에서 사용 범위를 정의
 */
export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);  // 장바구니 수량 관리
    const [cartList, setCartList] = useState([]);   // 장바구니 리스트
    const [totalPrice, setTotalPrice] = useState(0);//장바구니 상품 전체 가격

    return (
        <CartContext.Provider value={{ cartCount, setCartCount,
                                        cartList, setCartList,
                                        totalPrice, setTotalPrice
        }}> {/* 범위내 자식들에게 cartCount를 전달*/}
            {children}
        </CartContext.Provider>
    )
}