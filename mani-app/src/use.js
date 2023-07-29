import { useState } from "react"

export default function Use(){
    const [name,setname]=useState('surya')
    const h = ()=>{
         setname('manimegalai')
         console.log('surya')
    }

    return(
        <div>
            <h1>{name}</h1>
            <button className="btn btn-primary" onClick={h}>click me</button>
        </div>
    )
}