
import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import changepass from "./images/changepass1.avif";




const Stuchangepass=()=>
{
    const [oldpass,setOldpass]=useState("");
    const [newpass,setNewpass]=useState("");
    const [renewpass,setRenewpass]=useState("");
    const stuid=useSelector((state)=>state.stulogin.stuid);

    const handleSubmit=()=>
    {
        let url=`http://localhost:4000/students/${stuid}`;
        axios.get(url).then((res)=>{
            if(res.data.password==oldpass)
            {
                if(newpass==renewpass)
                {
                    axios.patch(url,{password:newpass}).then((res)=>
                    {
                        alert("password successfully changed !");

                    });
                }
                else
                {
                    alert("password does not match");
                }

            }
            else{
                alert("Your old password is incorrect");
            }
        });

    }


    return(
        <>
        <br/>
        <h1 className="h1">CHANGE YOUR  PASSWORD </h1>
        <hr size="1" color="black"/><br/>
        <div id="stupass">
        <div>
           <p> Enter old password</p><br/>
            <input type="text" value={oldpass} name="oldpass"
            onChange={(e)=>{setOldpass(e.target.value)}} /><br/><br/>
            <p>Enter new password</p><br/>
            <input type="text" value={newpass} name="newpass"
            onChange={(e)=>{setNewpass(e.target.value)}} /><br/><br/>
            <p>Enter Re-new password</p><br/>
            <input type="text" value={renewpass} name="renewpass"
            onChange={(e)=>{setRenewpass(e.target.value)}} /><br/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div><br/>
        <div>
            <img src={changepass} width="390px" height="500px" />
        </div>

        </div>
        </>
    );
}
export default Stuchangepass;