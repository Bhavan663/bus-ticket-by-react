import React from 'react'
import { Link } from 'react-router-dom'


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
                <p><i className="fas fa-headset"></i><a href="#" className="link"><span style={{paddingLeft: "5px"}}>Help</span></a></p>
               
               
            </div>
          
           <div className="dropdown" style={{paddingTop: "7px"}}>
            <i className="fas fa-user" style={{paddingRight: "10px"}}></i><button  className="account dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderColor: "transparent", backgroundColor: "#fff"}} >
    Account
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button"><a href="cancel.html" style={{textDecoration: "none",color: "black"}}>Cancel Ticket</a></button></li>
    <li><button className="dropdown-item" type="button"><a href="show.html" style={{textDecoration: "none",color: "black"}}>Show My Ticket</a></button></li>
    <li><button className="dropdown-item" type="button">Email/SMS</button></li>
    <li><button type="button" className="dropdown-item"><a href="login.html" className="link" style={{textDecoration: "none",color: "black"}}>log-in / Sign-up</a></button></li>
  </ul>
</div>
            </div>
        
              
    </div>

    
    
    
    )
}

export default Header
