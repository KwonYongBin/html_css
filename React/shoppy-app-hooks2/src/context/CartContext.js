import { createContext, useState } from "react";

/**
 * 사용하려는 자식들에게 넘겨주는 함수
 */
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartList, setCartList] = useState([]); //Cart.jsx에 있던 useState
    const [cartCount, setCartCount] = useState(0); //App.js에 있던 useState
    const [totalPrice, setTotalPrice] = useState(0); //Cart.jsx에 있던 useState

    return (
        <CartContext.Provider
            value={{
                cartList, setCartList,
                cartCount, setCartCount,
                totalPrice, setTotalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
