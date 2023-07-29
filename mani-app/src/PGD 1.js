import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function PGD1(){
    const[uname,setuname]=useState([])
    useEffect(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((p)=>{
            setuname(p.data)
            console.log(p.data);
        })
    },[])
 
    // const ball=(bat)=>{
    //     console.log(bat)
    //     axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${bat}`)
    // }


    const[name,setname]=useState('')
    const[mail,setmail]=useState('')
    const[fsname,setfs]=useState('') 
    const[lsname,setls]=useState('')
    const[midname,setmid]=useState('')
    const[pw,setpw]=useState('')
    const rose=(e)=>{
        e.preventDefault();
         axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,mail:mail,fsname:fsname,midname:midname,lsname:lsname,pw:pw})
        setname('')
        console.log(name)
        setmail('')
        console.log(mail)
        setfs('')
        console.log(fsname)
        setmid('')
        console.log(midname)
        setls('')
        console.log(lsname)
        setpw('')
        console.log(pw)
    }

    const ball=(bat)=>{
        console.log(bat)
        axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${bat}`)
    }
    return(
        <div>
        <form onSubmit={rose}>
            <div>
            <label for="">Name</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
            </div>

            <div>
            <label for="">Email ID</label>
            <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)}></input>
            </div>

            <div>
            <label for="">First name</label>
            <input type="text" value={fsname} onChange={(e)=>setfs(e.target.value)}></input>
            </div>

            <div>
            <label for="">Middle name</label>
            <input type="text" value={midname} onChange={(e)=>setmid(e.target.value)}></input>
            </div>

            <div>
            <label for="">Last name</label>
            <input type="text" value={lsname} onChange={(e)=>setls(e.target.value)}></input>
            </div>

            <div>
            <label for="">Password</label>
            <input type="text" value={pw} onChange={(e)=>setpw(e.target.value)}></input>
            </div>

            <div>
                <input type="submit"></input>
            </div>
        </form>

            <div>
                
                    <h1>Read All</h1>
                    <table className="table table-bordered">
                    {uname.map((bat)=>(
                        <tr>
                            <td>
                                {bat.uname}
                            </td>
                            <td>
                                {bat.mail}
                            </td>
                            <td>
                                {bat.fsname}
                            </td>
                            <td>
                                {bat.midname}
                            </td>
                            <td>
                                {bat.lsname}
                            </td>
                            <td>
                                {bat.pw}
                            </td>
                            
                                <button onClick={()=>ball(bat.id)}>delete</button>
                            
                        </tr>
                    ))}
                </table>
            </div>


        </div>
    )
}
