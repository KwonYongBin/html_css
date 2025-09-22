import React from 'react'
import { TbStarFilled, TbStar, TbStarHalfFilled } from "react-icons/tb";
// import { TbStar } from "react-icons/tb";
// import { TbStarHalfFilled } from "react-icons/tb";

export function StarRating({totalRate, style}) {
    const stars = [...Array(5)]; // = new Array(5)
    const color = (style === "star-coral") ? "coral" : "black";

    //totalRate의 값의 범위를 정확히 정의 1 ~ 5
    let fillStars = 0, halfStar = 0, emptyStar = 0;
    if(totalRate > 0 && totalRate <= 5){
        fillStars = Math.floor(totalRate); //채워진 별 갯수
        halfStar = (totalRate % 1) !== 0; //반별 여부 체크 
        emptyStar = 5 - fillStars - (halfStar ? 1 : 0); // 빈별 갯수
    }

  return (
    <div className="star-rating">
      {/* 채워진 별 */}
      {[...Array(fillStars)].map((_, i) => (
        <span key={`fill-${i}`} className={style.concat(" ", color)}>
          <TbStarFilled />
        </span>
      ))}

      {/* 반 별 */}
      {halfStar && (
        <span key="half" className={style.concat(" ", color)}>
          <TbStarHalfFilled />
        </span>
      )}

      {/* 빈 별 */}
      {[...Array(emptyStar)].map((_, i) => (
        <span key={`empty-${i}`} className={style.concat(" ", color)}>
          <TbStar />
        </span>
      ))}

      {/* 숫자 표시 */}
      {style === "star-coral" && (
        <span className={style.concat(" number")}>
          {totalRate}
        </span>
      )}
      {/* 숫자 표시 */}
      {style === "star-black-big" && (
        <>
          <span className={style.concat(" number")}>
            {totalRate} /
          </span>
          <span className={style.concat(" tot-number")}>
            5
          </span>
        </>
      )}
    </div>
  );
}
