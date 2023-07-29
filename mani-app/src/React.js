 import { useState } from "react"
import Page2 from "./Page 2"
 import Page from "./page 1"
 import Page3 from "./page 3"

     function React(){
        const[name,setname]=useState('Mani')
        const rose=()=>{
            setname('megalai')
        }
        const[number,setnumber]=useState(1)
        const increment=()=>{
            setnumber(number+1)
        }
        const finish=()=>{
            setnumber(0)
        }
        const decrement=()=>{
            setnumber(number-1)
        }
        const[color,setcolour]=useState('red')
        const change=()=>{
            setcolour('#' +Math.floor(Math.random()*(256*256*256)).toString(16))
        }
        const[bgcolor,setbgcolour]=useState('yellow')
        const changeother=()=>{
            setbgcolour('#' +Math.floor(Math.random()*(256*256*256)).toString(16))
        }
        
        

      return(
<div>
         <div>
            <h1 className="text-center mt-4">React</h1>
        </div>
        <div>
            <center><img src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg" alt="" className="img-fluid w-25 col-2"></img></center>
        </div>
        <center> 
             <br></br>
            <div>
            <form>
            <input type="text"></input>
            </form>
            </div>
            </center>
<br></br> 
<div className="d-flex justify-content-between">         
     <div>
        <h1>{name}</h1>
        <button onClick={rose}>click</button>
     </div>
      <div>
     
        <button onClick={increment}>+</button>
        <button onClick={finish}>Reset</button>
        <button onClick={decrement}>-</button>
        <button>{number}</button>
     </div>
     <div>
        <button onClick={change} style={{backgroundColor:color}}>click color</button>
     </div>
     <div style={{backgroundColor:bgcolor}}>
        <button onClick={changeother}>Change BG</button>
     </div>
</div>
     {/* <form>
      <div className="form-control  container bg-info">  
        <label for=" ">EAT BREAKFAST</label>
     </div>   
   <br></br>     
   <div className="form-control  container bg-success">
        <label for=" "> DO LAUNDRY</label>
    </div> */}
    {/* <br></br>
    <div className="form-control container bg-secondary"> 
         <label for=" ">Finish Project</label>
    </div>    
    </form>
    <br></br>
    </center> */}


    {/* <Page></Page>
    <Page2></Page2>
    <Page3></Page3>  */}
     
</div>            

    )
  }
  export default React