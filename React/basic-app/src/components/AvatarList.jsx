/**
 * Avatar 컴포넌트 리스트
 */
import Avatar from './Avatar.jsx';

const AvatarList = ({list, className}) => {
  return (
    <div className={className}>
        {list.map(item=>{
            <Avatar img={item.img} name={item.name}/>
        })}
    </div>
  )
}

export default AvatarList;