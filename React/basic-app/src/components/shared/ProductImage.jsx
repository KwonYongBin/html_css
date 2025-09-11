import Image from "../commons/Image.jsx";


/**
 * 상품 이미지 컴포넌트
 */
const ProductImage = ({ img, style }) => {
    return (
        <Image
            img={img}
            width={style.width}
            height={style.height}
        />
    );
}
export default ProductImage;