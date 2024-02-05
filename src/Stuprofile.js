
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import proimg from "./images/profileimg.png";

const Stuprofile=()=>
{
    const stuid=useSelector((state)=>state.stulogin.stuid);
    const [mydata,setMydata]=useState({});
    const loadData=()=>
    {
        let url=`http://localhost:4000/students/${stuid}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        });

    }

    useEffect(()=>{
        loadData();
       }, []);
    
    
    return(
        <>
        <br/>
        <div id="stuprofile"> 
        <h1>STUDENT PROFILE </h1>
        <hr size="1" color="white"/><br/>
            <img src={proimg} width="200px" height="200px" className="stuimg" />
            <h1>Student name:<span style={{color:'blue'}}>{mydata.name}</span></h1>
            <hr size="1" color="white"/><br/>
            <p>Student email:<span style={{color:'blue'}}>{mydata.email}</span></p><br/>
            <hr size="1" color="white"/><br/>
        </div>
        
        </>
    );
}
export default Stuprofile;