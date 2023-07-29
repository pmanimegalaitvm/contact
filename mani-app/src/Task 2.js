import { useState } from "react"

function Task2 (){
    // let pink=()=>{
    //     for(let i=0;i<10;i++){
    //         console.log(i);  
    //     }
        
    
    // }

    const[Number,setnumber]=useState(1)
    const pink=()=>{
        setnumber(Number+1)
        console.log(Number)
    }
    return(
        <div>
            <button onClick={pink}>Click</button>
        </div>
    )
}
export default Task2