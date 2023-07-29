import { useState } from "react"

export default function Createtask (){
    const[name,setName]=useState();
    const[mail,setMail]=useState();
    const[dob,setDob]=useState();
    const mani=(e)=>{
        e.preventDefault();
        setName('')
        console.log(name);
        setMail('');
        console.log(mail);
        setDob('')
        console.log(dob);
    }
    

    return(
        <div>
            <form onSubmit={mani}>
                <label for="">Email ID:</label>
                <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}></input><br>
                </br>
                <br></br>
                <label for="">DOB:</label>
                <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}></input><br></br>
                <br>
                </br>
                <label for="">Name:</label><input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br>
                </br>
                <br></br>
                <input type="submit"></input>
                <br>
                </br>

            
            </form>
        </div>
    )
}