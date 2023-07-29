import axios from "axios"
import { useEffect, useState } from "react"
import { API, API1} from "./api";
import "./user.css"
export default function Read(){
    const [no,setNo]=useState([]);
    const [sign,setSign]= useState([]);
    
   
    useEffect(()=>{
        axios.get(API).then((dev)=>{
            console.log(dev.data);
            
            setNo(dev.data)
        })
    },[])

    useEffect(()=>{
        axios.get(API1).then((dd)=>{
            console.log(dd.data);
            setSign(dd.data)
        })
    },[])
    return(
        <>
        <div className=" text-white container log">
            <div>
            <h1 className="text-center fst-italic text-danger">Login Details</h1>
         <table className="col-12">  {
            
            no.map((tem)=>{
               return <tr>
                <td className="border border-2 ">{tem.name}</td>
                <td className="border border-2">{tem.name1}</td>
               </tr>
            })
           }
           </table>
           </div>
           </div>
        <br></br>
        <div className=" text-white container face">
            <div>
            <h1 className="text-center fst-italic text-danger">Facebook  Details</h1>
         <table className="col-12 text">  {
            
            sign.map((temp)=>{
               return <tr>
                <td className="border border-2 ">{temp.name2}</td>
                <td className="border border-2">{temp.name3}</td>
                <td className="border border-2">{temp.name4}</td>
                <td className="border border-2">{temp.name5}</td>
                <td className="border border-2">{temp.name6}</td>
                <td className="border border-2">{temp.name7}</td>
                <td className="border border-2">{temp.name8}</td>
                <td className="border border-2">{temp.name9}</td>
                
               </tr>
            })
           }
           </table>
           </div>
        </div>
        </>   
     ) 
    }