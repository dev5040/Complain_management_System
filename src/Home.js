import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { stulogin } from "./stuloginSlice";
import { adminlogin } from "./adminSlice";
const Home=()=>{
 const [email, setEmail]= useState("");
 const [password, setPassword]= useState("");
 const [usertype, setUsertype]= useState("student");
 const myDispatch= useDispatch();
 const myNav=useNavigate();
 const submitHandle=(e)=>
 {
   if (usertype=="student")
   {
    e.preventDefault();
    let url=`http://localhost:4000/students?email=${email}`;
    axios.get(url).then((res)=>{
        console.log(res.data);
        if (res.data.length==1)
        {   
            if (res.data[0].password==password)
            {
                let stunm=res.data[0].name;
                let stuid=res.data[0].id;
                myDispatch(stulogin({stunm, stuid}));
                myNav("/studashboard");
            }
            else 
            {
                alert("Invalid Password");
            }
        }
        else 
        {
            alert("Invalid email!")
        }
    });

}
else 
{
    e.preventDefault();
     let url=`http://localhost:4000/adminuser/?email=${email}`;
     axios.get(url).then((res)=>{
          if (res.data.length==1)
          {
             if (res.data[0].password==password)
             {

                let adminname= res.data[0].name;
                myDispatch(adminlogin(adminname));

                myNav("/admindashboard");
             }
             else 
             {
                alert("Password dose not Match!!!");
             }
          }
          else 
          {
            alert("Invalid Email!!!");
          }
     });
}
 }

    return(
        <>
        <div id="container">
        
        <div className="box1">
            <form className="form">
                <h1>Login Form</h1>
                
                <span> use your email & password</span><br/>
                <input type="email" name="email" placeholder="Email" value={email} 
                onChange={(e)=>{setEmail(e.target.value)}} required /><br/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br/><br/>
                <select className="dropdown" name="userRoll"
                value={usertype} onChange={(e)=>{setUsertype(e.target.value)}}>
                    <option>student</option>
                    <option>admin</option>    
                </select>                
                <button onClick={submitHandle}>Sign In</button>
            </form>
        </div>

        <div className="box2">
            <div>
                
                <div >
                    <h1>Complain Management System</h1>
                    
                      <Link to="/register" > 
                      <p style={{color:"black"}} className="para"> New User Register Here! </p> </Link> 
                      
                                
                </div>
            </div>
        </div>

    </div>
        </>
    )
}
export default Home;