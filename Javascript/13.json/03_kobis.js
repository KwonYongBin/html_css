//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
addEventListener('DOMContentLoaded', function () {
    showResult('20250101');
})

/**
 * KMDB 영화 포스터 검색
 */
async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();

    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

async function showAPI(sdate) {
    //kobis key = 1387ed83604df30a0c5d9dfdea0cba00 / 2c0579b0529bc5042a8b0c5b3149b18b
    //kobis api연동
    let key = "2ee1e9537e81b13a4bc1c878e25be1b4";
    // let sdate = "20250903";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`
    url += `searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    return response.json();
    
}

async function showResult(sdate) {
    
    let kobis = await showAPI(sdate);
    let posterList = [];
    let kobisObj = kobis.boxOfficeResult;
    let movieList = kobisObj.dailyBoxOfficeList;

    for(const movie of movieList){
        let name = movie.movieNm;
        let date = movie.openDt.split("-")
        let poster = await searchMoviePoster(name, date);
        posterList.push(poster);
    }

    // console.log(kobis.boxOfficeResult.boxOfficeType);
    // console.log(kobis.boxOfficeResult.showRange);
    // console.log(kobis.boxOfficeResult.dailyBoxOfficeList);

    let output =
        `
            <div>
                <span>검색일 : </span>
                <input type="text" id="searchDate" placeholder="-제외 예)20250101">
                <button type="button" id="btnSearch">검색</button>
            </div>
            <h3>박스 오피스 타입 : ${kobisObj.boxofficeType}</h3>
            <h3>박스 오피스 일자 : ${kobisObj.showRange}</h3>
            <div style="display:flex; gap:20px;">
                <img src="${posterList[0]}" id="poster"/>
                <table border="1">
                <tr>
                    <td>순위</td>
                    <td>제목</td>
                    <td>개봉일</td>
                    <td>매출액</td>
                </tr>
                ${movieList.map((movie, index) =>
                    `

                        <tr class="movieInfo" id="${posterList[index]}">
                            <td>${movie.rank}</td>
                            <td>${movie.movieNm}</td>
                            <td>${movie.openDt}</td>
                            <td>${parseInt(movie.salesAcc).toLocaleString()}</td>
                        </tr>
                    `).join("")}
                </table>
            </div>
        `;
    document.querySelector("#content").innerHTML = output;

    //검색 버튼 이벤트 추가
    document.querySelector("#btnSearch").addEventListener('click', () => {
        let sdate = document.querySelector("#searchDate").value.trim();
        showResult(sdate);
    })

    //테이블 로우별 마우스 이벤트 적용
    let rows = document.querySelectorAll(".movieInfo");
    console.log(rows);

    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            let imgURL = row.id;
            row.style.background = 'gray';
            document.querySelector("#poster").src = imgURL;
        });
        row.addEventListener('mouseout', () => {
            row.style.background = 'white';
        });
    })
    

}