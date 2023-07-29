import { useState } from "react"

export default function Crea(){
    const[name,setName]=useState('')
    const[dob,setdob]=useState('')
    const[mail,setmail]=useState('')
    const[pw,setpw]=useState('')
    const mani=(e)=>{
        e.preventDefault();
        setName('')
        console.log(name)
        setdob('')
        console.log(dob)
        setmail('')
        console.log(mail)
        setpw('')
        console.log(pw)
    }
    return(
        <div>
            <form onSubmit={mani}>
                <label for="">Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
                <br>
                </br>
                <label for="">DOB:</label>
                <input type="date" value={dob} onChange={(e)=>setdob(e.target.value)}></input><br>
                </br>
                <br>
                </br>
                <label for="">Email:</label>
                <input type="email" value={mail} onChange={(e)=>setmail(e.target.value)}></input><br>
                </br>
                <br>
                </br>
                <label for="">Password:</label>
                <input type="text" value={pw} onChange={(e)=>setpw(e.target.value)}></input><br>
                </br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}