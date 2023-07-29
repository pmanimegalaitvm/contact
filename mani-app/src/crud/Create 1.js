import axios from "axios";
import { useState } from "react"

export default function Create1(){
    
        const[name,setname]=useState('')
        const[mail,setmail]=useState('')

        
        const mani=(e)=>{
            e.preventDefault();
            setname('')
            axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:name,email:mail})
            console.log(name)
            setmail('')
            console.log(mail)
        }
        return(
        <div> 
            <form onSubmit={mani}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
                
               
                <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)}></input> 
                <input type="submit"></input>
            </form>
        </div>
    )
}