import { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';
import '../styles/cart.css';

export function Cart({ items, updateCart}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, items));
            settotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }, []);

    console.log(totalPrice);
    
    //수량 업데이트 함수
    const handleUpdateCartList = (cid, type) => {
        //numbers의 짝수 값을 전체 1씩 증가하여 업데이트
        //
        // const result = numbers.map((number) => (number %2 === 0) ?  number + 1 : number) //[]맵 안에서의 리턴 결과는 새로운 배열에 채워진다.
        // console.log("result",result);
        
        // setNumbers((numbers) => 
        //     numbers.map((number) => (number %2 === 0) ?  number + 1 : number)
        // );

        setCartList((cartList) => cartList.map((item) =>
            item.cid === cid ?
                type === '+' ? { ...item, qty : item.qty + 1 }
                    : item.qty > 1 ? { ...item, qty: item.qty - 1 } : item : item
        ));

        const findItem = cartList.find((item) => item.cid === cid)
        type === '+' 
                    ? settotalPrice(totalPrice + findItem.price)
                    : findItem.qty > 1 ? settotalPrice(totalPrice - findItem.price)
                    : settotalPrice(totalPrice);
        updateCart(cid, type);
    }

    const handleRemoveCartList = (cid) => {

    }

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            {cartList && cartList.map(item =>
                <div key={item.pid}>
                    <div className='cart-item'>
                        {item.cid}
                        <img src={item.image} alt="product img" />
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{item.name}</p>
                            <p className='cart-item-title'>{item.size}</p>
                            <p className='cart-item-price'>
                                {parseInt(item.price).toLocaleString()}원</p>
                        </div>
                        <div className='cart-quantity'>
                            <button type='button'
                                onClick={() => { handleUpdateCartList(item.cid, '-') }}>-</button>
                            <input type='text' value={item.qty} readOnly />
                            <button type='button'
                                onClick={() => { handleUpdateCartList(item.cid, '+') }}>+</button>
                        </div>
                        <button 
                            className='cart-remove'
                            onClick={() => {
                                handleRemoveCartList(item.cid)
                            }}
                        >
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            )}

            {/* 주문 버튼 출력 */}
            <>
                <div className="cart-summary">
                    <h3>주문 예상 금액</h3>
                    <div className="cart-summary-sub">
                        <p className="cart-total">
                            <lable>총 상품 가격 : </lable>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </p>
                        <p className="cart-total">
                            <lable>총 할인 가격 : </lable>
                            <span>0원</span>
                        </p>
                        <p className="cart-total">
                            <lable>총 배송비 : </lable>
                            <span>0원</span>
                        </p>
                    </div>
                    <p className="cart-total2">
                        <lable>총 금액 : </lable>
                        <span>{totalPrice.toLocaleString()}원</span>
                    </p>
                </div>
                <div className="cart-actions">
                    <button type='button'>주문하기</button>
                </div>
            </>

        </div>
    );
}