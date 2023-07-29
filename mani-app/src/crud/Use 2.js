import { useState } from "react"

export default function Use2(){
    const[number,setnumber]=useState(1)
    const increment=()=>{
        setnumber(number+1)
    }
    const decrement=()=>{
        setnumber(number-1)
    }
    const finish=()=>{
        setnumber(0)
    }
    return(
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={finish}>Reset</button>
            <button>{number}</button>
        </div>
    )
}