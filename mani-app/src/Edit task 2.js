import axios from "axios";
import { useEffect, useState } from "react"

export default function Edittask2(){
    const[name,setname]=useState('')
    const apple=(e)=>{
        e.preventDefault();
        axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,mail:mail,date:date,pw:pw})
        setname('')
        console.log(name)
    }
    const[uname,setuname]=useState([])
    useEffect(()=>{
             axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((ro)=>{
                setuname(ro.data)
                console.log(ro.data)
             })
    },[])

    const mani=(o)=>{
        console.log(o)
        axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${o}`).then(()=>{
            axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((ro)=>{
                setuname(ro.data)
                console.log(ro.data)
        })
    })
}
    return(
        <div>
            <form onSubmit={apple}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
                <input type="text" value={mail} onChange={(e)=>setmail(e.target.value)}></input>
                <input type="date" value={date} onChange={(e)=>setdate(e.target.value)}></input>
                <input type="text" value={pw} onChange={(e)=>setpw(e.target.value)}></input>
                <input type="submit"></input>
            </form>
            <div>
                <h1>Get</h1>
                <table>
                    {uname.map((o)=>(
                         <tr>
                            <td>
                                {o.uname}
                            </td>
                            <td>
                                {o.mail}
                            </td>
                            <td>
                                {o.date}
                            </td>
                            <td>
                                {o.pw}
                            </td>
                            <button onClick={()=>mani(o.id)}>Delete</button>
                         </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}