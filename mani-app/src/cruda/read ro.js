import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Readro(){
    const[uname,setname]=useState([])
    useEffect(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((r)=>{
            setname(r.data)
            console.log(r.data)
        })
    },[])

    const mani=(o)=>{
        console.log(o)
    axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${o}`)
    }

    const edit=(a,b,c,d)=>{
        localStorage.setItem('id',a)
        localStorage.setItem('uname',b)
        localStorage.setItem('date',c)
        localStorage.setItem('mail',d)
   }

    return(
        <div>
            <h1>Get/read</h1>
            <table>
                {uname.map((o)=>(
                      <tr>
                        <td>
                            {o.uname}
                        </td>
                        <td>
                            {o.date}
                        </td>
                        <td>
                            {o.mail}
                        </td>
                        <td><button onClick={()=>mani(o.id)}>delete</button></td>
                        <td><Link to={'/e'}><button onClick={()=>edit(o.id,o.uname,o.date,o.mail)}>Edit</button></Link></td>


                       

                        
                      </tr>
                ))}
            </table>
        </div>
    )
}