import React, { useEffect, useState } from 'react'
import { axiosData } from '../../utils/dataFetch.js' 

export function Return() {
    const [returnData, setReturnData] = useState({});
    useEffect(() => {
        const fetch = async() => {
            const jsonData = await axiosData("/data/productReturn.json");
            setReturnData(jsonData);
        }
        fetch();
    }, [])

  return (
    <div>
        <div style={{padding:"20px"}}></div>
        <h4>{returnData && returnData.title}</h4>
        <p style={{marginBottom:"30px"}}>{returnData && returnData.description}</p>
        <table>
            <tbody style={{textAlign:"center"}}>
                {returnData.list && returnData.list.map(item =>
                    <tr style={{border:"1px solid #ddd", display:"block"}}>
                        <td style={{width:"30%", background:"#eee"}}>{item.title}</td>
                        <td>
                            <ul style={{textAlign:"left"}}>
                                <li>{item.infoList}</li>
                            </ul>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
