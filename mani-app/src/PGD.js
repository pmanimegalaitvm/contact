import axios from "axios"
import { useEffect, useState } from "react"

export default function Pgd(){
    // get
    const[uname,setuname]=useState([])

    useEffect(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((a)=>{
        setuname(a.data)
        console.log(a.data);
    })
    },[])




    //post
    const[name,setname]=useState('')
    const[dob,setdob]=useState('')
    const[mail,setmail]=useState('')
    const[pw,setpw]=useState('')
    const mani=(e)=>{
        axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,dob:dob,mail:mail,pw:pw})
        e.preventDefault();
    
        setname('')
        console.log(name)
        setdob('')
        console.log(dob)
        setmail('')
        console.log(mail)
        setpw('')
        console.log(pw)

}


//delete
 const megalai=(o)=>{
        console.log(o)
       axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${o}`).then(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((a)=>{
            setuname(a.data)
            
        })
       })
 }




    return(
        <div>
        
            <form onSubmit={mani}>
            

            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name"></input>

            <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)} placeholder="email"></input>

            <input type="date" value={dob} onChange={(e)=>setdob(e.target.value)} placeholder="date"></input>

            <input type="text" value={pw} onChange={(e)=>setpw(e.target.value)} placeholder="pw"></input>

            <input type="submit"></input>
            </form>
<div>
    <h1>Read</h1>
    <table className="table table-bordered">
    
    {/* {name.map((o)=>(
          
          <tr>
            <td>
                {o.uname}
            </td>
            <td>
                {o.mail}
            </td>
            <td>
                {o.dob}
            </td>
            <td>
                {o.pw}
            </td>
            <button onClick={()=>megalai(o.id)}>delete</button>
          </tr> */}
    {/* ))} */}

         {uname.map((o)=>(
            <tr>
                <td>
                    {o.uname}
                </td>
                <td>
                    {o.dob}
                </td>
                <td>
                    {o.mail}
                </td>
                <td>
                    {o.pw}
                </td>
                <button onClick={()=>megalai(o.id)}>delete</button>
            </tr>
         ))}
   </table> 
</div>

                
        </div>
    )
}