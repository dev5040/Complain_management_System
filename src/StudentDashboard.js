import { useSelector, useDispatch } from "react-redux";
import { stulogout } from "./stuloginSlice";
import { useNavigate } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";


const StudentDashboard=()=>
{
 const stuName=useSelector((state)=>state.stulogin.stuuser);
 const myDispatch= useDispatch();
 const myNav= useNavigate();

  const stuLogout=()=>
  {
    myDispatch(stulogout());
    myNav("/home");
    
  }
 return(
        <>
          
         <div id="stuinfo">
           welcome  &nbsp;&nbsp;<span>{stuName}</span>&nbsp;&nbsp; on student dashboard &nbsp;&nbsp;&nbsp;&nbsp;
           <a href="#"><button onClick={stuLogout}>Logout</button></a> 
         </div>
        
        
  <div class="sidebar">
  <hr size="2" color="white" />
  <Link to="stuprofile"> Student Profile </Link>
  <hr size="2" color="white" />
  <Link to="stucomplain"> Write Your Complain </Link>
  <hr size="2" color="white" />
  <Link to="sturesponse"> Display Response </Link>
  <hr size="2" color="white" />
  <Link to="stupassword"> Change Password</Link>
  <hr size="2" color="white" />
</div>

<div class="content1">
 
 <Outlet/>

</div>

        </>
    );
}

export default StudentDashboard;