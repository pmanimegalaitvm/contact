import axios from "axios"
import { useEffect, useState } from "react"
import Posttask from "./crud/post task"

export default function Deltask(){
    const[name,setname]=useState([])
    useEffect(()=>{
       axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((q)=>{
            setname(q.data)
       })
    },[])
    const dog=(o)=>{
        console.log(o)
         axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${o}`)
    }
    return(
        <div>
        <Posttask></Posttask>
            <table>
                {name.map((p)=>(
                    <tr>
                        <td>
                            {p.uname}
                        </td>
                        <td>
                            {p.mail}
                        </td>
                        <td>
                            {p.date}
                        </td>
                        <button onClick={()=>dog(p.id)}>delete</button>
                    </tr>
                ))}

                
            </table>
        </div>
    )
}