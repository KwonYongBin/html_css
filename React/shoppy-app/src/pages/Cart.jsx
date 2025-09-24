import { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/dataFetch.js';
import { Link, useNavigate } from 'react-router-dom';

import { cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';

import '../styles/cart.css';

export function Cart({ items, updateCart }) {
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, items));
            setTotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }, []);

    //수량 업데이트 함수
    const handleUpdateCartList = (cid, type) => {
        setCartList((cartList) => cartList.map((item) => {
            // item.cid === cid ? ( type === '+'? {...item, qty: item.qty+1}  : (item.qty > 1 ? {...item, qty: item.qty-1} : item)) : item  
            if (item.cid === cid) {  // cid 가 일치하면
                if (type === "+") { // 타입이 +면
                    return { ...item, qty: item.qty + 1 };
                } else if (item.qty > 1) { // 타입이 +가 아니고 qty가 1보다 크면
                    return { ...item, qty: item.qty - 1 }
                } else { // 타입이 +가 아니고, qty가 1보다 작으면
                    return item;
                }
            } else { // cid가 일치하지 않으면
                return item;
            }
        }));


        // 이게 무슨 변수인지 주석을 달면 매우 편함
        const findItem = cartList.find((item) => item.cid === cid);

        // type === '+'?  setTotalPrice(totalPrice + findItem.price) 
        //                 : findItem.qty > 1 ? setTotalPrice(totalPrice-findItem.price)
        //                                 : setTotalPrice(totalPrice);
        // 총 금액 반영 로직
        if (type === '+') {
            setTotalPrice(totalPrice + findItem.price)

        } else if (findItem.qty > 1) {
            setTotalPrice(totalPrice - findItem.price)

        } else {
            setTotalPrice(totalPrice);
        }

        updateCart(cid, type);

    }

    //장바구니 아이템 삭제 함수
    const handleRemoveCartList = (cid) => {
        // 타겟을 잡음
        const findItem = cartList.find(item => item.cid === cid);

        // 값 반영
        setTotalPrice(totalPrice - (findItem.qty * findItem.price));

        // cartList 상태(state) 업데이트
        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid));
        });

        updateCart(cid);
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
                                onClick={() => {
                                    item.qty > 1 &&
                                    handleUpdateCartList(item.cid, '-')
                                }}>-</button>
                            <input type='text' value={item.qty} readOnly />
                            <button type='button'
                                onClick={() => { handleUpdateCartList(item.cid, '+') }}>+</button>
                        </div>
                        <button className='cart-remove'
                            onClick={() => { handleRemoveCartList(item.cid) }}>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            )}

            {/* 주문 버튼 출력 */}
            { cartList && cartList.length > 0 ?
                <>
                {/* 장바구니에 담은 상품이 있다면 */}
                    <div className='cart-summary'>
                        <h3>주문 예상 금액</h3>
                        <div className='cart-summary-sub'>
                            <p className='cart-total'>
                                <label>총 상품 가격 : </label>
                                <span>{totalPrice.toLocaleString()}원</span>
                            </p>
                            <p className='cart-total'>
                                <label>총 할인 가격 : </label>
                                <span>0원</span>
                            </p>
                            <p className='cart-total'>
                                <label>총 배송비 : </label>
                                <span>0원</span>
                            </p>
                        </div>
                        <p className='cart-total2'>
                            <label>총 금액 : </label>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </p>
                    </div>
                    <div className='cart-actions'>
                        <button 
                            type='button'
                            onClick={() => { // 주문결제 페이지도 이동
                                // navigate(이동주소, {state:전송 전송 하려는 객체})
                                navigate("/checkout", {state:{cartList: cartList, totalPrice:totalPrice}}) //state는 객체이기 때문에 각가 다른 형식의 2개의 데이터를 넘길시 객체 형대로 만들어주고 프롭스로 넘겨준다
                            }}
                        >주문하기</button>
                    </div>
                </>
                :
                <div>
                    {/* 장바구니에 담은 상품이 없다면 */}
                    <p style={{marginBottom:"20px"}}>장바구니가 비었습니다.<br />
                        <Link to="/all">상품보러 가기</Link>
                    </p>
                    <img src="/images/cart.jpg" style={{width:"50%"}}/>
                </div>
            }

        </div>
    );
}

