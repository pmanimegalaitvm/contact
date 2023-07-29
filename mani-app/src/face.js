import { useState } from "react";
import "./user.css";
import axios from "axios";
import { API, API1 } from "./api";
import { useNavigate } from "react-router-dom";
// import "./App.css"
export default function Book(){
    const [name,setName]= useState();
    const [name1,setName1]= useState();
    const [name2,setName2]= useState();
    const [name3,setName3]= useState();
    const [name4,setName4]= useState();
    const [name5,setName5]= useState();
    const [name6,setName6]= useState();
    const [name7,setName7]= useState();
    const [name8,setName8]= useState();
    const [name9,setName9]= useState();
         const h=(e)=>{
        e.preventDefault();
        axios.post(API1,{name2,name3,name4,name5,name6,name7,name8,name9})
        setName2("");
        setName3("");
        setName4("");
        setName5("");
        setName6("");
        setName7("");
        setName8("");
        setName9("");
    }
    const navi = useNavigate();

    const r=()=>[
        navi(`/read`)
    ]




    const d=(s)=>{
        s.preventDefault();
        axios.post(API,{name,name1})
        setName("");
        setName1("");
    }

    return(
        <div className="container dev">
        <div className="row">
        <hr></hr>
        <div className="d-flex justify-content-between bg-primary">
            <div className="mt-4 text-white">
                <h1>facebook</h1>
            </div>
            <form onSubmit={d}>
            <div className="row">
                <div className="col">
                
                <label className="text-white"><b>Email</b></label>
                <input type="email" className="form-control" value={name} onChange={(s)=>setName(s.target.value)}/>                
                <input type="checkbox" className="form-check-input"></input>
                <label className="text-white">Keep me logged in</label>
                </div>
                <div className="col">
                <label className="text-white"><b>password </b></label>
                <input type="password" className="form-control" value={name1} onChange={(s)=>setName1(s.target.value)} />
                <a href="#!" className="text-white">forget your password?</a>
                </div>  
                 <div className="col mt-4">
                 <button type="submit"className="btn btn-info text-white"><b>Log in</b></button>
                 
                </div>
                </div>
                </form>
                </div> 
            
            </div>
<div className="row">
    <div className="col-7">
     <h4 ><b>Facebook helps you connect and share with<br></br>the people in you life.</b></h4>
     <img src=""></img>
     </div>
   
    <div className="col-5">
        <h1>Sign Up </h1>
        <h6>It's free and always will be</h6>
        <hr/>
        <form onSubmit={h}>
        <div>

        <label className="col-3">First Name:</label>
            <input type="name" className="col-9" value={name2} onChange={(e)=>setName2(e.target.value)}/>
        </div>
        <div className="pt-1">
            <label className="col-3">Last Name:</label>
            <input className="col-9" value={name3} onChange={(e)=>setName3(e.target.value)}/>
        </div>
        <div className="pt-1">
            <label className="col-3">Your Email:</label>
            <input className="col-9" value={name4} onChange={(e)=>setName4(e.target.value)}/>

        </div>
        <div className="pt-1">
            <label className="col-3" >Phone No:</label>
            <input className="col-9"  value={name5} onChange={(e)=>setName5(e.target.value)}/>
        </div>
        <div className="pt-1">
            <label className="col-3">New Password:</label>
            <input className="col-9" value={name6}  onChange={(e)=>setName6(e.target.value)}/>
            </div>
        <div className="pt-1">
            <label className="col-3">Con-Password:</label>
            <input className="col-9" value={name7} onChange={(e)=>setName7(e.target.value)}/>
        </div>

        <div className="pt-1">
            <label className="col-3">I am:</label>
        <select className="col-4" size="0" value={name8} onChange={(e)=>setName8(e.target.value)}>
            <option>Select Sex:</option>
            <option value="1">Female</option>
            <option value="2">Male</option>
            <option value="3">Other</option>
            </select>
        </div>
        <div className="pt-1">    
            <label className="col-3">Birthday:</label>
            <input type="date" className="col-6" value={name9} onChange={(e)=>setName9(e.target.value)}/>
        </div>
        
        
        <div className=" col-12 pt-3">
        <h6>Why did I need to provide my birthday?</h6>
        <h6>By clicking Sign Up,you agree to our Tearms and that you have read and understand our data Use Policy.</h6>
        </div>
        <div className="row">
        <div className="col-6">
            <button className=" btn btn-success">Sign Up</button>
        </div>
        <div className="col-6">
            <button className=" btn btn-success" onClick={r}>Result</button>
        </div>
        </div>
        <hr/>
        </form>
        </div>
    </div>
    </div>
    )  
    }
