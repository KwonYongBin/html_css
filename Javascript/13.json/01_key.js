//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
addEventListener('DOMContentLoaded', function () {
    showResult();
})

async function showAPI() {
    //kobis key = 1387ed83604df30a0c5d9dfdea0cba00
    //kobis api연동
    let response = await fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1387ed83604df30a0c5d9dfdea0cba00&targetDt=20120101");
    console.log(response.json());
    
}

async function showResult() {
    await getAPI();
}
	