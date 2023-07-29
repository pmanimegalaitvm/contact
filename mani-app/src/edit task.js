import axios from "axios"
import { useEffect, useState } from "react"

export default function Edittask(){
    //delete
    const rose=(a)=>{
        console.log(a)
        axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${a}`).then(()=>{
            axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((b)=>{
            setname(b.data)
            console.log(b.data)
         })
        })
    }

    //get
    const[uname,setname]=useState([])
    useEffect(()=>{
         axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((b)=>{
            setname(b.data)
            console.log(b.data)
         })
    },[])

   
    //edit in local storage:
    const edit=(z,y,x,w,v)=>{
        localStorage.setItem('id',z)
        localStorage.setItem('uname',y)
        localStorage.setItem('midname',x)
        localStorage.setItem('lsname',w)
        localStorage.setItem('mail',v)
    }

    

    return(
        <div>
        {/* post: */}
           
        {/* get:     */}
            <div>
                <h1>get</h1>
                <table className="table table-bordered">
                    {uname.map((a)=>(
                        <tr>
                            <td>
                                {a.uname}
                            </td>
                            <td>
                                {a.midname}
                            </td>
                            <td>
                                {a.lsname}
                            </td>
                            <td>
                                {a.mail}
                            </td>
                      {/* delete:       */}
                            <td><button onClick={()=>rose(a.id)}>delete</button></td>

                        {/* Edit in console: */}
                            {/* <td><button onClick={()=>console.log(a.id,a.uname,a.midname,a.lsname,a.mail)}>Edit</button></td> */}

                            {/* Edit in local storage: */}
                            <td><button onClick={()=>edit(a.id,a.uname,a.midname,a.lsname,a.mail)}>Edit</button></td>
                        </tr>
                    ))}
                </table>
            </div>
                
            
        </div>
    )
}