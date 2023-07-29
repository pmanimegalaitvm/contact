import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Edit(){
     //put

     const navi = useNavigate()

     const [id,setid]=useState(0)
     const[fsname,setfs]=useState('')
     const[midname,setmid]=useState('')
     const[lsname,setls]=useState('')
     const[mail,setmail]=useState('')
     const doll=(e)=>{
         e.preventDefault();
         axios.put(`https://6493d9290da866a95366c32f.mockapi.io/mani/${id}`,{uname:fsname,midname:midname, lsname:lsname,mail:mail})
         setfs('')
         console.log(fsname)
         setmid('')
         console.log(midname)
         setls('')
         console.log(lsname)
         setmail('')
         console.log(mail)
         navi('/re')
     }

       
     useEffect(()=>{
        setid(localStorage.getItem('id'))
        setfs(localStorage.getItem('fsname'))
        setmid(localStorage.getItem('midname'))
        setls(localStorage.getItem('lsname'))
        setmail(localStorage.getItem('mail'))
     },[])
     
    return(
        <div>
             <form onSubmit={doll}>
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
                    <input type="submit" className="btn btn-info"></input>
                </div>
            </form>

        </div>
    )
}