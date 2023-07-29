import { useState } from "react"

export default function Userivi(){
     const [Number,setnumber]=useState(1)
     const good=()=>{
        setnumber(Number+1)
        console.log(Number)
     }
    return(
        <div>
            <button onClick={good}>Click</button>
        </div>
    )
}