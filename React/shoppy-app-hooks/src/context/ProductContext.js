import { createContext, useState } from "react";

//1. Context 생성
export const ProductContext = createContext();

//2. ProductProvider는 CartContext를 사용하는 컴포넌트들의 범위를 정의
export const ProductProvider = ({children}) => {
    const [ productList, setProductList ] = useState([]);
    const [product, setProduct] = useState({});
    const [imgList, setImgList] = useState([]);

    return (
        <ProductContext.Provider value={{ 
                productList, setProductList, 
                product, setProduct,
                imgList, setImgList 
            }}>
            {children}  
        </ProductContext.Provider>
    );
}