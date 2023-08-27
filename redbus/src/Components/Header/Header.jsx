import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'


function Header(){
    return(
        <div className=" nav-logo justify-content-between" style={{backgroundColor:"#fff",position: "static",fontFamily: "'Montserrat', sans-serif;"}}>
        <div className="nav-top" style={{width: "230px;"}}>
            <img style={{paddingTop:"20px",paddingLeft:"100px",marginBottom: "10px"}} src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus" className="rb_logo"/>
            <div className="nav-option" style={{marginLeft: "200px", alignItems: "center", display:"block", paddingTop: "15px"}}>
           <Link to="View">
           
            <div className="but">
              <button style={{borderColor: "transparent",backgroundColor: "transparent"}}>
                <img src="https://st.redbus.in/web/images/layout/rb_vertical.svg" alt="" /><p style={{width:"90px" ,paddingTop: "5px"}}>Bus Tickets</p>
               </button>
            </div>
            </Link>
              
               </div>
          
          </div>
       
          <div className="navigation ">
            <div className=" d-flex" style={{gap: "30px", paddingTop: "10px"}}>
              <Link to="AddCards">
              <p><i className="fas fa-headset"></i><a href="#" className="link"><span style={{paddingLeft: "5px"}}>Help</span></a></p>
              </Link>
               
               
            </div>
          <div className="d-flex">
            <div>
            <img src="images/user.png" alt=""  style={{width:"20px",paddingTop:"9px"}}/>
            </div>
          
           <div className="dropdown" style={{paddingTop: "5px"}}>  <button  className="account dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderColor: "transparent", backgroundColor: "#fff"}} >
    Accounts
  </button>
  <ul className="dropdown-menu">
    <Link to="Cancel" style={{textDecoration:"none"}}>
    <li><button className="dropdown-item" type="button"><a href="cancel.html" style={{textDecoration: "none",color: "black"}}>Cancel Ticket</a></button></li>
    </Link>
   <Link to="Show"  style={{textDecoration:"none"}}>
   <li><button className="dropdown-item" type="button"><a href="show.html" style={{textDecoration: "none",color: "black"}}>Show My Ticket</a></button></li>
   </Link>

    <li><button className="dropdown-item" type="button">Email/SMS</button></li>
    <Link to="Sign" style={{textDecoration :"none"}}>
    <li><button type="button" className="dropdown-item">log-in / Sign-up</button></li>
 
    </Link>
   </ul>
</div>
            </div>
        
            </div>         
    </div>

    
    
    
    )
}

export default Header
