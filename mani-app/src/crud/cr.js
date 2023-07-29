import axios from "axios";
import { useState } from "react"

export default function Cr(){
const [name,setname]=useState('');
const[mail,setmail]=useState('');
const[date,setdate]=useState('')

const h =(e)=>{
    e.preventDefault();
    axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,mail:mail,date:date})
    //axios.get('')
    setname('')
    console.log(name)
    setmail('')
    console.log(mail)
    setdate('')
    console.log(date)
}

    return(
        <div>
            <form onSubmit={h}>
                <input type="text"  value={name}  onChange={(e)=>setname(e.target.value)}/> <br></br>

                <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)}></input><br></br>

                <input type="date" value={date} onChange={(e)=>setdate(e.target.value)}></input><br></br>
                
                <input type="submit" />             
            </form>
        </div>
    )
}