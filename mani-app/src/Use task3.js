import { useState } from "react"

export default function Usetask3(){
     const [colour,setcolour]=useState("blue")
     const good=()=>{
         setcolour('#' + Math.floor(Math.random()*(256*256*256)).toString(16)) 
         
     }  



    return(

        <div>
            <button onClick={good} style={{backgroundColor:colour}}>Click</button>
        </div>
    
    )
}