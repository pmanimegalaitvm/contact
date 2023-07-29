import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Read(){
    const[uname,setname]=useState([])
    useEffect(()=>{
         axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((o)=>{
            setname(o.data)
            console.log(o.data)
         })
    },[])

    const mani=(i)=>{
        console.log(i)
        axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${i}`).then(()=>{
            axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((o)=>{
                setname(o.data)
                console.log(o.data)
    })
        })
    }
    const edit=(x,y,z,u,v)=>{
        localStorage.setItem('id',x)
        localStorage.setItem('fsname',y)
        localStorage.setItem('midname',z)
        localStorage.setItem('lsname',u)
        localStorage.setItem('mail',v)
    }
    return(
        <div>
            <h1>Read/Get</h1>
            <table>
                {uname.map((i)=>(
                    <tr>
                        <td>
                            {i.uname}
                        </td>
                        <td>
                            {i.midname}
                        </td>
                        <td>
                            {i.lsname}
                        </td>
                        <td>
                            {i.mail}
                        </td>
                        <td><button onClick={()=>mani(i.id)}>delete</button></td>
                        <td><Link to={'/e'}><button onClick={()=>edit(i.id,i.uname,i.midname,i.lsname,i.mail)}>Edit</button></Link></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}