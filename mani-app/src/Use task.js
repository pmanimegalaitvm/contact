import { useState } from "react"

export default function Usetask (){
        const [number,setnumber]=useState(1);
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
        <center>
           <button onClick={increment}>+</button>
           <button onClick={finish}>Reset</button>
            <button onClick={decrement}>-</button>
            <button>{number}</button>
        {/* {number} */}
        </center>
        </div>
    )
}