import axios from "axios";
import { useEffect, useState } from "react"

export default function Pgdfinal(){
  //get
      const[uname,setname]=useState([])
       useEffect(()=>{
         axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((o)=>{
            setname(o.data)
            console.log(o.data);
         })
       },[])

  //delete
       const pet=(p)=>{
        console.log(p)
         axios.delete(`https://6493d9290da866a95366c32f.mockapi.io/mani/${p}`).then(()=>{
            axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((o)=>{
            setname(o.data)
            console.log(o.data);
         }) 
        })
    }

   //post
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

  //edit
    const edit=(a,b,c,d,e,f,g)=>{
localStorage.setItem('id',a);
localStorage.setItem('fname',b);
localStorage.setItem('mname',c);
localStorage.setItem('lname',d);
localStorage.setItem('mail',e);
localStorage.setItem('pass',f);
localStorage.setItem('date',g);



    }
    return(
        <div>
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
      {/* for get details: */}
            <div>
                <h1 className="">Get Details</h1>
                <table className="table table-bordered">
                {uname.map((p)=>(
                    <tr>
                        <td>
                            {p.uname}
                        </td>
                        <td>
                            {p.midname}
                        </td>
                        <td>
                            {p.lsname}
                        </td>
                        <td>
                            {p.mail}
                        </td>
                        <td>
                            {p.pw}
                        </td>
                        <td>
                            {p.dob}
                        </td>
                {/* for delete: */}
                        <td><button onClick={()=>pet(p.id)}>delete</button></td>
                    {/* for edit: */}
                        <td><button onClick={()=>edit(p.id,p.uname,p.midname,p.lsname,p.mail,p.pw,p.dob)}>edit</button></td>
                        <td><button onClick={()=>console.log(p.id,p.uname,p.midname,p.lsname,p.mail,p.pw,p.dob)}>edit</button></td>
                        
                    </tr>
                ))}
                </table>
            </div>
        </div>
    )
}