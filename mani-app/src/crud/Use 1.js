import { useState } from "react"

export default function Use1(){
    const[name,setname]=useState('Amma')
    const pink=()=>{
        setname('Appa')
        console.log(name)
    }
    return(
        <div>
            <i>{name}</i><br>
            </br>
            <br>
            </br>
            <button onClick={pink}>click</button>
        </div>
    )
}