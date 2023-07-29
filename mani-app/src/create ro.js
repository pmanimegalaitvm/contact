import axios from "axios";
import { useState } from "react"

export default function Createro(){
    const[name,setname]=useState('')
    const[date,setdate]=useState('')
    const[mail,setmail]=useState('')
    const apple=(e)=>{
        e.preventDefault();
        axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,date:date,mail:mail})
        setname('')
        console.log(name)
        setdate('')
        console.log(date)
        setmail('')
        console.log(mail)
    }
    return(
        <div>
            <form onSubmit={apple}>
                <div>
                    <label for="">Name</label>
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
                </div>

                <div>
                    <label for="">DOB</label>
                    <input type="date" value={date} onChange={(e)=>setdate(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Email</label>
                    <input type="text" value={mail} onChange={(e)=>setmail(e.target.value)}></input>
                </div>
                <div>
                    <button className="btn btn-danger">submit</button>
                </div>
                    
                        
                    
                
            </form>
        </div>
    )
}