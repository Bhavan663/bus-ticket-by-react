import React from 'react'
import { Link } from 'react-router-dom'


function Section(){
    return(
        <div className="hero" style={{fontFamily: "'Montserrat', sans-serif;"}}>
          <div className="search-main" >
    <div className="search-from d-flex">
      
      <div className="form-floating" style={{width: "100%"}}>
        <input type="text" style={{ height: "100%",borderRadius:"40px", borderColor: "transparent",fontWeight: "500",fontSize: "20px"}} className="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword" style={{paddingTop: "35px",fontSize: "18px",fontWeight: "500"}}>From</label>
      </div>
    </div>
    <div className="search-to d-flex">
      <i className="fas fa-bus" style={{paddingTop: "40px", paddingLeft: "10px" , fontSize: "25px"}}></i>
      <div className="form-floating" style={{width: "100%"}}>
        <input type="text" style={{height: "100%" , borderColor: "transparent" , fontWeight: "500" ,fontSize: "20px"}} className="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword" style={{paddingTop: "35px" , fontSize: "18px" , fontWeight: "500"}}>To</label>
      </div>
    </div>
    <div className="Date d-flex">
      <i className="fa-solid fa-calendar-days" style={{fontSize: "25px",paddingLeft: "10px", paddingTop: "40px"}}></i>
      <div style={{paddingTop:"20px", paddingLeft: "10px"}}>
        <label for="" style={{fontSize: "20px",fontWeight: "400"}}>Date</label>
        <input type="date" name="date" id="" style={{borderColor: "transparent", fontWeight: "500" ,fontSize: "20px"}}/>
      </div>
    </div>
    <Link to="View" style={{textDecoration:"none"}}>
    <div className="Searchbuses">
      
    <p style={{fontSize: "20px", textAlign: "center",paddingTop: "40px", color: "white",fontWeight: "700",cursor: "pointer"}}>SEARCH BUSES</p>
    </div>
    
    </Link>
    
          </div>
            
          
        </div>
    )
}

export default Section