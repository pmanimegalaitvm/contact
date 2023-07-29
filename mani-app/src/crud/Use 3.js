import { useState } from "react"

export default function Use3(){
    const[colour,setcolour]=useState("red");
    const apple=()=>{
        setcolour("blue")
    }
    return(
        <div>
            <button onClick={apple}style={{backgroundColor:colour}}>Click</button>
        </div>
    )
}