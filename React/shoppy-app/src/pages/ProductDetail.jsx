import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosData } from '../utils/dataFetch.js';
import { PiGiftThin } from 'react-icons/pi';
import { ImageList } from '../components/commons/ImageList.jsx';
import { StarRating } from '../components/commons/StarRating.jsx';

export function ProductDetail({ addCart }) {
    const { pid } = useParams();//useParams는 객체로 데이터를 받는다
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('XS');
    const [imgList, setImgList] = useState([]);
    const tabLabels = ['DETAIL', 'REVIEW', "Q&A", 'RETURN & DELIVERY'];
    const [tabName, setTabName] = useState('detail');
    const tabEventNames = ['detail', 'review', 'qna', 'return'];

    useEffect(() => {
        const filterData = async () => {
            const jsonData = await axiosData("/data/products.json");
            const [filterProduct] = await jsonData.filter((item) => item.pid === pid); //fproduct는 배열로 반환한다. 얕은 복사본
            setProduct(filterProduct);
            setImgList(filterProduct.imgList);

            // await jsonData.filter((item)=> { // 해당 방법으로 로직을 작성 할 경우 배열로 반환되지 않는다.
            //     item.pid === pid ? setProduct(item) : null;
            // });

        }
        filterData()
    }, []);

    //쇼핑백 추가하기 함수
    const handleAddCartItem = () => {
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1
        }
        addCart(cartItem);
    }

    // console.log(product);

    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                    <img src={product.image} />
                    <ImageList className="product-detail-image-top-list"
                        imgList={imgList}
                    />
                </div>
                <ul className="product-detail-info-top">
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">
                        {`${parseInt(product.price).toLocaleString()}원`}
                        {/* {parseInt(product.price).toLocaleString()}원 */}
                    </li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li className="product-detail-subtitle-star">
                        <StarRating
                            totalRate={product.rate}
                            style="star-coral"
                        />
                        <span>527개 리뷰 &nbsp;&nbsp; {">"} </span>
                    </li>
                    <li><p className="product-detail-box">신규회원, 무이자할부 등</p></li>
                    <li className="flex">
                        <button className="product-detail-button size">사이즈</button>
                        <select
                            className="product-detail-select2"
                            onChange={(e) => setSize(e.target.value)
                            }

                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className="flex">
                        <button type="button" className="product-detail-button order">바로구매</button>
                        <button
                            type="button"
                            className="product-detail-button cart"
                            onClick={handleAddCartItem}
                        >쇼핑백 담기</button>
                        <div type="button" className="gift">
                            <PiGiftThin />
                            <div className="gift-span">선물하기</div>
                        </div>
                    </li>
                    <li>
                        <ul className="product-detail-summary-info">
                            <li>상품정보 요약 정보</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="product-detail-tab">
                <ul className="tabs">
                    {tabLabels && tabLabels.map((label, i) =>
                        <li className={tabName === tabEventNames[i]? "active":""} key={i}>
                            <button type='button'
                                    onClick={() => setTabName(tabEventNames[i])}
                            >{label}</button>
                        </li>
                    )}
                </ul>

                {/* {tabName === "detail" && 디테일컴포넌트}
                {tabName === "review" && 리뷰컴포넌트} */}

            </div>
            <div style={{marginBottom:"50px"}}></div>
        </div>
    )
}
