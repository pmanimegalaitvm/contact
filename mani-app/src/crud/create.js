import axios from "axios";
import { useState } from "react"

export default function Create(){
    const [name,setname]=useState('');
    const surya =(e)=>{
        e.preventDefault();
        console.log(name);
        // axios.post('https://6493d9290da866a95366c32f.mockapi.io/api',{uname:name})
        setname('')
    }
    return(
        <div>
            <form onSubmit={surya}> 
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
                <input type="submit"></input>
                 
            </form>
        </div>
    )
}