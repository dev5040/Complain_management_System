import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import rep from "./images/repans.avif";
const ReplyAns=()=>
{
    const {id} = useParams();

    const [msg, setMsg ]= useState("");

  const sendReply=()=>
  {
    let url=`http://localhost:4000/stucomplain/${id}`;

    axios.patch(url, {ans:msg}).then(()=>{
        alert("Answer Reply Succesfull!!!");
    });
  }

    return(
        <>
        
        
        <p id="replyparagraph"> Write Reply of Student Complain </p>
        {/* <hr size="1" color="black"/>  */}
          <div id="replyans">         
            <div className="box"> 
            <br/>    
        <textarea rows="23" cols="53" value={msg} onChange={(e)=>{setMsg(e.target.value)}} placeholder="Write your response"  />
           <br />
           <button onClick={sendReply}> Send Reply</button>
           </div>
           <div className="box">
                <img src={rep} width="398px" height="414px" />
           </div>
           </div>
        </>
    );
}


export default ReplyAns;