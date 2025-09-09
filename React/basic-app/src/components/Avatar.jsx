const Avatar = ({img, name}) => {
  return (
    <div>
        <AvatarImage img={img} style="avatar-img-circle"/>
        <p>{name}</p>
    </div>
  );
}
export default Avatar ;
/**
 * Avatar 컴포넌트 리스트
 */

export const AvatarList = ({list, className}) => {
  return (
    <>
        <div className={className}>
            { list.map((item, i) => <Avatar key={i} img={item.img} name={item.name}/> )}
        </div>
    </>
  )
}

export const AvatarImage = ({img, style}) => {
  return (
    <img src={img} className={style} />
  )
}

/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */

export const AvatarImageList = ({imgList}) => {
  return (
    <>
      {imgList.map(item => 
        <img src={item.img} className={item.style} />
      )}
    </>
  );
}