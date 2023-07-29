import axios from "axios";
import { useEffect, useState } from "react"
import Posttask from "./post task";

export default function Get1(){
    const[name,setname]=useState([]);
    useEffect(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani/').then((r)=>{
            setname(r.data)
        })
    },[])
    return(
        <>
        <Posttask></Posttask>
        <table className="table table-bordered">

            {name.map((s)=>(
                <tr>
                    <td>
                        {s.uname}
                    </td>
                    <td>
                        {s.mail}
                    </td>
                    <td>
                        {s.date}
                    </td>
                </tr>
            ))}
        </table>
        </>
    )
}