import { useCart } from '../hooks/useCart.js';
import { useEffect, useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CacrContext.js';
import '../styles/cart.css';

export function Cart() {
    const navigate = useNavigate();
    const { showCart, updateCart, removeCart } = useCart();
    const { cartList, totalPrice } = useContext(CartContext);
    
    useEffect(() => { showCart() }, []);

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
                                    updateCart(item.cid, '-')
                                }}>-</button>
                            <input type='text' value={item.qty} readOnly />
                            <button type='button'
                                onClick={() => { updateCart(item.cid, '+') }}>+</button>
                        </div>
                        <button className='cart-remove'
                            onClick={() => { removeCart(item.cid, item.qty, item.price) }}>
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
                                //state는 객체이기 때문에 각가 다른 형식의 2개의 데이터를 넘길시 객체 형대로 만들어주고 프롭스로 넘겨준다
                                // navigate("/checkout", {state:{cartList: cartList, totalPrice:totalPrice}})
                                navigate("/checkout")
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

