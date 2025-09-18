import axios from "axios"; // axios는 promise 타입으로 비동기

/**\
 * axios함수를 이용하여 데이터 가져오기
 */
export const axioshData = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

/**\
 * fatch함수를 이용하여 데이터 가져오기
 */
export const fetchData = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json(); //JSON 타입으로 파싱을 진행 이유는 문자열로 넘어오기 때문에
    
    return jsonData;
}