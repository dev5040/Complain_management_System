import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentComplain=()=>
{
    const [msg, setMsg]= useState("");

    const stuid=useSelector((state)=>state.stulogin.stuid);

   const submitHandle=()=>{
     let mystuid=stuid;
      let url="http://localhost:4000/stucomplain";
      axios.post(url, {"stuid":mystuid, "complain":msg, "ans":"" }).then((res)=>{
     alert("Your complain succesfully Registered!!!");
      });
   }

    return(
        <>
        <br/><br/>
        <div id="stucomp">
         <h1> Register Your Complain</h1>
        <div className="stucontainer">
         <h2>Write Your Complain :------></h2>
         <br/> 
        <div>
         <textarea name="stumsg" rows="18" cols="45" value={msg} 
         onChange={(e)=>{setMsg(e.target.value)}}  />
          <br />
         <button onClick={submitHandle}> Submit your Complain</button>
         </div>
        </div>
        </div>
        
        </>
    );
}


export default StudentComplain;