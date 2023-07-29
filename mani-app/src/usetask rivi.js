import { useState } from "react"

export default function Usetaskrivi(){
       const [number,setnumber]=useState(1)
       const increment=()=>{
        setnumber(number+1)
       }
       const decrement=()=>{
        setnumber(number-1)
       }
       const reset=()=>{
        setnumber(0)
       }

    return(
        <div>
            <button className="btn bg-info" onClick={increment}>+</button>
            <button className="btn bg-primary" onClick={decrement}>-</button>
            <button className="btn bg-secondary" onClick={reset}>Reset</button>
            <button>{number}</button>
        </div>
    )
}