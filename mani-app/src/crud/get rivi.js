import axios from "axios"
import { useEffect, useState } from "react"
import Posttask from "./post task"

export default function Getrivi(){
    const[name,setname]=useState([])
    // useEffect(()=>{
    //     axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((flower)=>{
    //         setname(flower.data)
    //         console.log(flower.data);
    //     })
            
    // },[])
    useEffect(  function  (){
    axios.get('https://6493d9290da866a95366c32f.mockapi.io/mani').then((t)=>{
            setname(t.data);console.log(t.data);
        })
    },[])
    let apple=()=>{
        console.log('hello')
    }
    console.log(name);
    return(
        
        <div>
            <Posttask></Posttask>
            <h1>read data</h1>
            {/* <table className="table table-bordered">
                {name.map((fruit)=>{
                    <tr>
                        <td>
                            {fruit.uname}
                        </td>
                        <td>
                            {fruit.mail}
                        </td>
                        <td>
                            {fruit.date}
                        </td>
                        <td>
                            <button onClick={apple}>delete</button>
                        </td>
                    </tr>
                })}
                
            </table> */}

            <table border={'2px'}>
                {name.map((r)=>{
               <>
               <tr>
                <th>
                    name
                </th>
               </tr>
                    <tr>
                        <td>{r.uname}</td>
                        <td>
                        <button>delete</button>
                        </td>
                    </tr>

                    </>
                })}
            </table>
        </div>
    )
}