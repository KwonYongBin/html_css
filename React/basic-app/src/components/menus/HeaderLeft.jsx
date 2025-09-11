import Menu from '../commons/Menu'
import { useEffect, useState } from 'react';
import fetchData  from '../../util/commonData.js'

export const HeaderLeft = () => {

    const[menus, setMenus] = useState([]);
    useEffect(()=>{
        const fetch = async() => {
            const data = await fetchData("/data/menus.json")
            setMenus(data.HeaderLeft)
        }
        fetch();
    }, [])

  return (
        <ul>
            {
                menus.map((menus) => {
                    <li>
                        <Menu
                            href={menus.href}
                            name={menus.name} 
                            style={menus.style} 
                            isIcon={menus.isIcon}
                            icon={menus.icon} 
                        />
                    </li>
                })
            }
        </ul>
  )
}

export default HeaderLeft