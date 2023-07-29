import { useState } from "react"

export default function Createtaskrivi(){
    const[name,setname]=useState('')
    const mani=(e)=>{
        e.preventDefault();
        setname('')
        console.log(name);
    }
    return(
        <div>
            <form onSubmit={mani}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
            <input type="submit"></input>
            </form>
        </div>
    )
}