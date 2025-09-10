/**
 * 베스트 상품 이미지 컴포넌트
 */

export const BestProductImage = () => {
    const data = {
        "img": "/images/product4.jpg",
        "style": {
            "width": "200px",
            "height": "300px"
        }
    }
    return (
        <div className="best-product-img">
            <ProductImage
                img={data.img}
                style={data.style}
            />
            <span className="best-product-imgb no">1</span>
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