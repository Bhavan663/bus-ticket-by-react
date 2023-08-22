import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs() {
  return (
    <section class="main" style={{display: "block", width: "100%",fontFamily: "'Montserrat', sans-serif"}}>
        <div class="main" style={{display: "inline-block", width: "100%"}}>
            <div style={{backgroundColor: "#F1F1F1"}}>
                <ul class=" breadcrumb mb-0" aria-label="breadcrumb"
                    style={{bsBreadcrumbDivider:">",fontSize: "15px", paddingLeft: "15px", marginBottom: "0"}}>
                   <Link to="/" style={{textDecoration: "none",color: "black",fontWeight: "600",fontSize: "15px"}}>
                   <li class="breadcrumb-item">
                            Home </li>
                   </Link>
                    
                    <li class="breadcrumb-item active" aria-current="page" style={{fontSize: "15px"}}>Bus Tickets</li>
                    <li class="breadcrumb-item" style={{fontSize: "15px"}}>Chennai To Madurai</li>
                </ul>
                <div style={{paddingTop: "0",paddingLeft: "15px"}}>
                    <p style={{fontWeight: "600",fontSize: "15px"}}>Fare Starts from INR 450</p>
                </div>
            </div>


            <div style={{marginTop: "10px",paddingBottom: "1px", boxShadow: "0 1px 0 0 rgb(168, 168, 168)"}}>
                <p style={{fontWeight: "600",fontSize: "15px",paddingLeft: "15px"}}>Chennai to Madurai Bus </p>
            </div>
            <div style={{display: "flex",paddingLeft: "15px",boxShadow: "0 1px 0 0 rgb(168, 168, 168)"}}>
                <p style={{fontSize: "15px", fontWeight: "600", paddingTop: "10px"}}>Chennai</p>
                <p style={{fontSize: "15px", paddingLeft: "20px", paddingTop: "10px"}}><i
                        class="fa-solid fa-arrow-right"></i></p>
                <p style={{fontSize: "15px", fontWeight: "600",paddingLeft: "20px", paddingTop: "10px"}}>Madurai</p>
                <p style={{fontSize: "15px", paddingLeft: "20px", paddingTop: "10px"}}><i
                        class="fa-solid fa-greater-than fa-rotate-180"></i>
                </p>
                <p style={{fontSize: "15px", paddingLeft: "10px", paddingTop: "10px",fontWeight: "600"}}>11 Aug <span
                        style={{display: "block",fontSize: "12px",textAlign: "center",fontWeight: "600"}}>Fri</span></p>
                <p style={{paddingLeft: "10px", paddingTop: "10px"}}><i class="fa-solid fa-greater-than"></i></p>
                <div style={{paddingLeft: "20px", paddingTop: "10px"}}>
                    <button type="button"
                        style={{boxShadow: "none", borderWidth: "1px", borderColor: "#545454", width: "70px"}}><span
                            style={{fontSize: "15px"}}>Modify</span></button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Breadcrumbs
