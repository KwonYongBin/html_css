//useState, useEffect, useContext, useRef, useMemo, useCallback등을 사용 시 필요.
import React from 'react'

const AvatarImage = ({img, style}) => {
  return (
    <img src={img} className={style} />
  )
}

export default AvatarImage;