import axios from "axios";
import { useState } from "react";

export default function Posttask(){
    
        const[name,setname]=useState('')
        const[mail,setmail]=useState('')
        const[date,setdate]=useState('')
        const rose=(e)=>{
        e.preventDefault();
        setname('')
        axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,mail:mail,date:date})
        console.log(name)
        setmail('')
        console.log(mail)
        setdate('')
        console.log(date)

        }
        return(
        <div>
            <form onSubmit={rose}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name"></input>
            <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)} placeholder="email"></input>
            <input type="date" value={date} onChange={(e)=>setdate(e.target.value)} placeholder="date"></input>
            <input type="submit"></input>
            </form>
        </div>
    )
}