import axios from "axios";
import { useEffect, useState } from "react"

 export default function Get(){
    const [name,setname]=useState([]);

    useEffect(()=>{
        axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((r)=>{
            setname(r.data);
        })
    },[])



    return(
        <div>
            <table className="table table-bordered">
                <h1>read </h1>
                {name.map((t)=>(
                    <tr>
                        <td>
                            {t.uname}
                        </td>
                        <td>
                            {t.mail}
                        </td>
                        <td>
                            {t.date}
                        </td>
                    </tr>
                ))}
                </table>
        </div>
    )
 }