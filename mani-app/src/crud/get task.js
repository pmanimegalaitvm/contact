import axios from "axios"
import { useEffect, useState } from "react"

export default function Gettask(){
    const[name,setname]=useState([])
    useEffect(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((pink)=>{
            setname(pink.data)
        })
    },[])
    let pet=(a)=>{
        
        console.log(a);
        axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${a}`)
    }

 
    return(
        <div>
            <table className="table table-bordered">
                
                {name.map((doll)=>(
                    <tr>
                        <td>
                            {doll.uname}
                        </td>
                        <td>
                            {doll.mail}
                        </td>
                        <td>
                            {doll.date}
                        </td>
                        <td>
                            <button onClick={()=>pet(doll.id)}>delete</button>
                        </td>
                    </tr>
                ))}
            
            
            </table>
        </div>
    )
}