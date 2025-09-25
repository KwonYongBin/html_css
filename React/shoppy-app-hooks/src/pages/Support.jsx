import { useEffect, useState } from "react";
import { SerchForm } from "../components/commons/SerchForm.jsx";
import { MenuList } from "../components/commons/MenuList.jsx";
import { axiosData } from "../utils/dataFetch.js";

export function Support() {
    const [menus, setMenus] = useState([]);
    const [category, setCategory] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        const supportData = async () => {
            const supportJsonData = await axiosData("/data/support.json");
            setMenus(supportJsonData.menus);
            setCategory(supportJsonData.category);
            setList(supportJsonData.list);
        }
        supportData()
    }, []);

    const filterList = (type) => { //탭을 클릭하면 해당되는 이름을 가진 데이터를 보여주는 함수
        const filter = async () => {
            const filterJson = await axiosData("/data/support.json");
            if (type === 'all') {
                setList(filterJson.list)
            } else {
                const filterData = filterJson.list.filter((item) => item.type === type)
                setList(filterData);
            }
        }
        filter();
    }

    return (
        <div classNameName="content">
            <div className="support center-layout">
                <h1 className="center-title">공지/뉴스</h1>
                <div className="support-content">
                    <p style={{ color: "#777" }}>CGV의 주요한 이슈 및 여러가지 소식들을 확인할 수 있습니다.</p>
                    <SerchForm category={category} />
                    <nav>
                        <MenuList menus={menus} filterList={filterList} />
                    </nav>
                    <p id="before_table" style={{ color: "#777" }}>총 114건이 검색되었습니다. </p>
                    {/* 내용 출력 - 테이블 */}
                    <table className="stable">
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
                            {
                                list && list.map((item, idx) =>
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td>{item.type}</td>
                                        <td>{item.title}</td>
                                        <td>{item.rdate}</td>
                                        <td>{item.hits}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5}>{"<<"} 1 2 3 4 5 {">>"} </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
