addEventListener('DOMContentLoaded', function () {
    //dom 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
    createTable('all');
    filterMenuEvent();
}); // window.addEventListener

function menuDefaultColor(menu) {
    menu.style.background = "rgb(137,137,135)";
    menu.style.borderLeft = `1px solid var(rgb(137,137,135))`;
    menu.style.borderBottom = `2px solid var(rgb(137,137,135))`;
}

function menuSelectColor(menu) {
    menu.style.background = "rgb(251, 67, 87)";
    menu.style.borderLeft = `1px solid var(rgb(251, 67, 87))`;
    menu.style.borderBottom = `2px solid var(rgb(251, 67, 87))`;
}

function filterMenuEvent(type) {
    let menuList = document.querySelectorAll(".notice a");

    menuList.forEach((menu) => {
        menu.id === 'all'? menuSelectColor(menu) : menuDefaultColor(menu);
    });

    menuList.forEach((menu)=>{
        menu.addEventListener('click',() => {
            menuList.forEach(menu => menuDefaultColor(menu));
            menuSelectColor(menu);
            createTable(menu.id);
        });
    });
}
    
//     menuList.forEach((menu) => {
//         menu.addEventListener('click', () => {
//             let type = menu.id;
//             // //기본 컬러를 초기화
//             // menuList.forEach((menu) => { menu.style.background = "rgba(77, 77, 77)" })
            
//             // //클릭 시 배경컬러 변경
//             // menu.style.background = "var(--color-button)";
//             // menu.style.transition = "all 0.3s";
//             createTable(type);
//         })
//     });

async function filterData(type) {
    let list = await getData();
    let filterList = list.filter((item) => item.type === type); //[] 
    // createTable(filterList);
    return filterList;
}

async function getData() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function createTable(type, list) {
    // let list = await getData();
    list = null;
    if (type === 'all') {
        list = await getData();
    } else {
        list = await filterData(type);
    }

    let output =
        `
            <table class="stable">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        list.map((rdata, key) =>
                            `
                                <tr>
                                    <td>${key + 1}</td>
                                    <td>${rdata.type}</td>
                                    <td><a href="#">${rdata.title}</a></td>
                                    <td>${rdata.rdate}</td>
                                    <td>${rdata.hits}</td>
                                </tr>
                            `
                        ).join("")
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">1 2 3 4 5 >> </td>
                    </tr>
                </tfoot>
            </table>
        `
    document.querySelector(".stable")?.remove();
    document.querySelector("#before_table").insertAdjacentHTML('afterend', output);
}

