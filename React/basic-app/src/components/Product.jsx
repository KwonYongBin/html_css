/**
 * 베스트 상품 컴포넌트
 */
export const BestProduct = () => {
  return (
    <>
        <h2>베스트 상품</h2>
        <ul className="best-product">
            <li><BestProductImage /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
            <li><BestProductItem /></li>
        </ul>
    </>
  )
}

/**
 * 베스트 상품 아이템 컴포넌트
 */
export const BestProductItem = () => {
  return (
    <div>
        <BestProductImage />
        <BestProductContent />
    </div>
  )
}

/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export const BestProductContent = () => {
  return (
    <div className="best-product-content">
        <p className="best-product-content-title">HALF SLEEVE KNIT TOP OLIVE_UDSW5C201K1</p>
        <span className="best-product-content-sale">30%</span>
        <span className="best-product-content-price">21,500</span>
        <span className="best-product-content-like">🤍</span>
    </div>
  )
}

/**
 * 베스트 상품 이미지 컴포넌트
 */

export const BestProductImage = () => {
    const data = {
        "img": "/images/product4.jpg",
        "style": {
            "width": "200px",
            "height": "300px"
        },
        "no": 1,
        "like": false
    }
    return (
        <div className="best-product-img">
            <ProductImage img={data.img} style={data.style}/>
            <span className="best-product-img-no">{data.no}</span>
            {data.like?
                <span className="best-product-img-like">🤍</span> : "" }
        </div>
    )
}

/**
 * 상품 이미지 컴포넌트
 */
const ProductImage = ({ img, style }) => {
    const { width, height } = style;
    return (
        <div>
            <img
                src={img}
                style={{ width: width, height: height }}
            />
        </div>
    )
}

export default ProductImage;