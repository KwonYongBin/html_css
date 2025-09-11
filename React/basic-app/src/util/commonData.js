/**
 * 데이터 처리 공통 모듈
 */
export default async function fetchDataa(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}

/**
 * KMDB 영화 포스터 검색
 */
export async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();

    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

/**
 * Kobis 영화 일별 오피스
 */
export async function fetchKobisAPI(sdate) {
    let key = "2ee1e9537e81b13a4bc1c878e25be1b4";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`
    url += `searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);

    return response.json();
}