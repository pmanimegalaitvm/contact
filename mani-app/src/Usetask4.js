import { useState } from "react"

export default function Usetask4(){
     const suga=()=>{
        var a1=Math.floor(Math.random()*200)
        var a2=Math.floor(Math.random()*200)
        var a3=Math.floor(Math.random()*200)
        var bgcolour=document.getElementById("jk");
        console.log(bgcolour);
        bgcolour.style.backgroundColor="rgb("+a1+","+a2+","+a3+")";
     }
     return(

        <div className="height:300px">
            <h1 id="jk">hii</h1>
            <button onClick={suga}>Click</button>
        

        </div>
    
    )
}