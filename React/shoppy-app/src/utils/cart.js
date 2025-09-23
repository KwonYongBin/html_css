/**
 * 상품리스트에서 이미지, 상품명, 가격 --> 장바구니 리스트에 추가하는 함수
 */
export function cartItemsAddInfo(products, items) {
    items.map((item) => {
        const product = products.find((product) => item.pid === product.pid);

        return {
            ...item,
            image: product.image,
            name: product.name,
            price: product.price
        }
        
    }, []);
}

/**
 * 장바구니 수량 증가 체크 함수
 */
export function cartItemsCheck(prevItems, cartItem) {
    //존재여부 체크
    const existItem = prevItems.find((item) => 
                            item.pid === cartItem.pid && item.size === cartItem.size);

    if(existItem) { //존재하면 map으로 순회하면서 pid, size가 동일한 item에 qty +1 증가
        return prevItems.map((item) =>  //map은 새로운 배열 반환
        item.pid === cartItem.pid && item.size === cartItem.size
            ? { ...item, qty: item.qty + 1 } //... <= 의 뜻은 item이 가지고 있는 데이터를 펼쳐놓는다는 뜻
            : item
        );
    } else {         
        return [...prevItems, { ...cartItem }];  //존재하지 않으면 새로운 item 추가
        // { ...cartItem } <= 얕은 복사를 하지 않으면 주소값만 들어가기 때문에 정확한 비교가 불가하다.
    }
}