
import {Link,Outlet} from "react-router-dom"
const Layout=()=>
{
    return(
        <>
<div className="navbar">
      {/* <input type="checkbox" id="toggle" hidden />
      <label for="toggle" className="label-click" hidden><i className="fa fa-bars" id="toggle" style={{"font-size": "30px"}}></i></label> */}
      <nav className="content">
        <label className="logo">COMPLAIN</label><br/>
        {/* <li className="logo"><img src={logo} alt="" /></li> */}
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to=''>Courses</Link></li>
          <li><Link to=''>Faculty</Link></li>
          <li><Link to=''>Contact</Link></li>
        </ul>
          {/* <button className="btn">Submit</button> */}
      </nav>
    </div>

    <Outlet/>
    
    <br/> <br/>
  <hr size="4" color="blue"/>
  <center>
  www.complainmanagement.com 2023 &copy;
    </center>
    </>
    )
}
export default Layout;