import React from 'react'

const Image = ({img, width, height}) => {
  return (
    <img src={img} style={{width: width, height: height }} />
  );
}

export default Image