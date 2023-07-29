import { useState } from "react"

export default function Usetask2 (){
    const[colour,setcolour]=useState("blue");
    const good=()=>{
         setcolour("red")
         
    }
    return(
        <div>
            <button onClick={good} style={{backgroundColor:colour}}>Click</button>
        </div>
    )
}