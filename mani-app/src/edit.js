import { useEffect, useState } from "react"
import axios from "axios";

export default function Edit(){

    const[fsname,setfs]=useState('')
    const[midname,setmid]=useState('')
    const[lsname,setls]=useState('')
    const[mail,setmail]=useState('')
    const[pw,setpw]=useState('')
    const[dob,setdob]=useState('')
    const cat=(e)=>{
        e.preventDefault();
        axios.post('https://6493d9290da866a95366c32f.mockapi.io/mani',{uname:fsname,midname:midname, lsname:lsname,mail:mail,pw:pw,dob:dob})
        setfs('')
        console.log(fsname)
        setmid('')
        console.log(midname)
        setls('')
        console.log(lsname)
        setmail('')
        console.log(mail)
        setpw('')
        console.log(pw)
        setdob('')
        console.log(dob)
    }
    useEffect(()=>{
        localStorage.getItem('id');
        localStorage.getItem('fname');
        localStorage.getItem('mname');
        localStorage.getItem('lname');
        localStorage.getItem('mail');
        localStorage.getItem('pass');
        localStorage.getItem('date');
        
    })
    return(
        <div>
            <h1>edit page</h1>
            <form onSubmit={cat}>
                <div>
                    <label for="">First Name:</label>
                    <input type="text" value={fsname} onChange={(e)=>setfs(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Middle Name:</label>
                    <input type="text" value={midname} onChange={(e)=>setmid(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Last Name:</label>
                    <input type="" value={lsname} onChange={(e)=>setls(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Email ID:</label>
                    <input type="text" value={mail} onChange={(e)=>setmail(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Password</label>
                    <input type="password" value={pw} onChange={(e)=>setpw(e.target.value)}></input>
                </div>
                <div>
                    <label for="">Date of Birth</label>
                    <input type="date" value={dob} onChange={(e)=>setdob(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" className="btn btn-info"></input>
                </div>
            </form>
        </div>
    )
}