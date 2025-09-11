import { useEffect, useState, useRef } from 'react'
import { fetchKobisAPI, searchMoviePoster } from '../util/commonData.js'
import BestProductImage from './shared/BestProductImage.jsx';
import { BestProductItem } from './BestProduct.jsx';
import '../style/Product.css'

const Boxoffice = () => {
    const [list, setlist] = useState([]);
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            const fetchKobis = async () => {
                const kobis = await fetchKobisAPI("20250910");
                const mlist = kobis.boxOfficeResult.dailyBoxOfficeList;

                for (const movie of mlist) {
                    if (movie.rank !== "10") { //API는 무조건 문자열
                        const poster = await searchMoviePoster(movie.movieNm, movie.openDt)
                        const posterObj = {
                            "img": poster,
                            "rank": movie.rank,
                            "title": movie.movieNm,
                            "like": true,
                            "icon": "❤",
                            "style": { "width": "600px", "height": "800px" },
                            "icon_style": {
                                bg: "#000",
                                color: "#fff",
                                radius: "0",
                                width: "40px",
                                height: "40px"
                            }
                        }
                        setlist(prev => [...prev, posterObj]); // 0 - prev(현재의 List) : []
                    }
                }
            }
            fetchKobis();
            hasRun.current = true;
        }


    }, []);

    return (
        <>
            <h2>박스오피스</h2>
            <ul className="best-product">
                {list.map((item, index) =>
                    (index === 0) ?
                        <li key={index}>
                            <BestProductImage
                                img={item.img}
                                style={item.style}
                                rank={item.rank}
                                like={item.like}
                                icon={item.icon}
                                icon-style={item.icon_style}
                            />
                        </li>
                        :
                        <li key={index}>
                            <BestProductItem
                                item={item}
                            />
                        </li>
                )}
            </ul>
        </>
    );
}

export default Boxoffice;