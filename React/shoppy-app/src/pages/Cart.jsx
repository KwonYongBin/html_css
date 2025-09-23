import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { cartItemsAddInfo } from '../utils/cart.js';
import { axiosData } from '../utils/dataFetch.js';
import '../styles/cart.css';

export function Cart({ items }) {
    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, items));
        }
        fetch();
    });

    const handleUpdateCartList = (cid, type) => {
        setCartList((cartList) => {
            return cartList.map(item => 
                item.cid === cid ?
                type === '+' ? {...item, qty: qty + 1 }
                             : {...item, qty: qty - 1 }
            : item
            );
        });
    }

    return (
        <div className="cart-container">
            <h2 className="cart-header">장바구니</h2>
            {items && items.map(item =>
                <div key={item.pid}>
                    <div className="cart-item">
                        {item.cid}
                        <img src={items.image} />
                        <div className="cart-item-details">
                            <p className="cart-item-title">{item.name}</p>
                            <p className="cart-item-title">{item.size}</p>
                            <p className="cart-item-price">{parseInt(item.price).toLocaleString()}원</p>
                        </div>
                        <div className="cart-quantity">
                            <button 
                                type="button"
                                onClick={() => {
                                    handleUpdateCartList(item.cid, '-')
                                }}
                            >-</button>
                            <input type="text" value={item.qty} readOnly/>
                            <button 
                                type="button"
                                onClick={() => {
                                    handleUpdateCartList(item.cid, '+')
                                }}
                            >+</button>
                        </div>
                        <button className="cart-remove">
                            <RiDeleteBin6Line />
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}