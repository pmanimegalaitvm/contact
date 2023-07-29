import axios from "axios"
import { useState } from "react"

export default function Post(){
    const[name,setname]=useState('')
    const[dob,setdob]=useState('')
    const[mail,setmail]=useState('')
    const megha=(e)=>{
          e.preventDefault();
          axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,dob:dob,mail:mail})
          setname('')
          console.log(name)
          setdob('')
          console.log(dob)
          setmail('')
          console.log(mail)
    }
    return(
        <div>
            <form onSubmit={megha}>
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
                    <input type="date" value={dob} onChange={(e)=>setdob(e.target.value)}></input>
                    <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)}></input>
            </form>
        </div>
    )
}