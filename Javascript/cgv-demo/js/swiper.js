addEventListener('DOMContentLoaded', function () {
    //dom 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
    createSwiper();
}); // window.addEventListener

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

/**
 * KOBIS 알별 박스오피스 함수
 */
async function getAPI(sdate) {
    //kobis key = 1387ed83604df30a0c5d9dfdea0cba00 / 2c0579b0529bc5042a8b0c5b3149b18b
    //kobis api연동
    let key = "2ee1e9537e81b13a4bc1c878e25be1b4";
    // let sdate = "20250903";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`
    url += `searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    return response.json();
    
}

function createSdate() {
    let today = new Date;
    let year = today.getFullYear();
    let month =  today.getMonth() + 1;
    let day = today.getDate() - 1;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}${month}${day}`
}

//Swiper 생성 함수
async function createSwiper() {
    let sdate = createSdate();
    let kobis = await getAPI(sdate);
    let kobisList = kobis.boxOfficeResult.dailyBoxOfficeList;
    let posterList = [];
    
    for(const movie of kobisList){
        let poster = await searchMoviePoster(movie.movieNm, movie.openDt);
        posterList.push(poster);
    };

    //자동으로 순회하는 forEach()는 비동기 함수를 호출할 수 없다
    // kobisList.forEach((movie)=>{
    //    let poster = await searchMoviePoster(movie.movieNm, movie.openDt);
    // });
    
    let output =
    `
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                ${
                    posterList.map((posterUrl)=>
                        `
                        <div class="swiper-slide">
                            <img src="${posterUrl}" alt="poster">
                        </div>

                        `
                    ).join("")
                }
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    `;

    document.querySelector(".content-top").innerHTML = output;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // auto play
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //사용자가 슬라이드를 직접 사용 후 자동 슬라이드 정지/진행 설정
            pauseOnMouseEnter: true, //마우스가 슬라이더 위로 올라가면 슬라이드 중지
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    }); //Swiper class
}