import axios from "axios"
import { useEffect, useState } from "react"
import Posttask from "./post task"

export default function Getdel(){
    const[name,setname]=useState([])
     useEffect(()=>{
          axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((b)=>{
              setname(b.data)
          })
     },[])
     let cat=()=>{
        console.log('hello')
     }
    return(
        <div>
            <Posttask></Posttask>
            <table className="table table-bordered">
                {name.map((a)=>(
                    <tr>
                        <td>
                            {a.uname}
                        </td>
                        <td>
                            {a.mail}
                        </td>
                        <td>
                            {a.date}
                        </td>
                        <td>
                            <button onClick={cat}>delete</button>
                        </td>
                    </tr>
                ))}
                
            </table>
        </div>
    )
}