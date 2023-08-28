import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { FaGreaterThan } from 'react-icons/fa'

function Breadcrumbs() {
    return (
        <section class="main" style={{ display: "block", width: "100%", fontFamily: "'Montserrat', sans-serif" }}>
            <div class="main" style={{ display: "inline-block", width: "100%" }}>
                <div style={{ backgroundColor: "#F1F1F1" }} >
                    <ul class=" breadcrumb mb-0" aria-label="breadcrumb"
                        style={{ fontSize: "15px", paddingLeft: "15px", marginBottom: "0" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600", fontSize: "12px" }}>
                            <li class="breadcrumb-item">
                                Home / </li>
                        </Link>

                        <li class="breadcrumb-item active" aria-current="page" style={{ fontSize: "12px" }}>Bus Tickets</li>
                        <li class="breadcrumb-item" style={{ fontSize: "12px" }}>Chennai To Madurai</li>
                    </ul>
                    <div style={{ paddingTop: "0", paddingLeft: "15px" }}>
                        <p style={{ fontWeight: "600", fontSize: "13px" }}>Fare Starts from INR 450</p>
                    </div>
                </div>


                <div style={{ boxShadow: "0 1px 0 0 rgb(168, 168, 168)" }}>
                    <p style={{ fontWeight: "600", fontSize: "13px", paddingLeft: "15px" }}>Chennai to Madurai Bus </p>
                </div>
                <div style={{ display: "flex", paddingLeft: "15px", boxShadow: "0 1px 0 0 rgb(168, 168, 168)" }}>
                    <p style={{ fontSize: "13px", fontWeight: "600", paddingTop: "10px" }}>Chennai</p>
                    <p style={{ fontSize: "13px", paddingLeft: "5px", paddingTop: "10px" }}><span>{< FaArrowRight />}</span>
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "600", paddingLeft: "5px", paddingTop: "10px" }}>Madurai</p>
                    <p style={{ fontSize: "13px", paddingLeft: "5px", paddingTop: "10px" }}><span>{<FaGreaterThan />}</span>
                    </p>
                    <p style={{ fontSize: "13px", paddingLeft: "10px", paddingTop: "10px", fontWeight: "600" }}>11 Aug <span
                        style={{ display: "block", fontSize: "12px", textAlign: "center", fontWeight: "600" }}>Fri</span></p>
                    <p style={{ paddingLeft: "10px", paddingTop: "10px" }}><i class="fa-solid fa-greater-than"></i></p>
                    <div style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                        <button type="button"
                            style={{ boxShadow: "none", borderWidth: "1px", borderColor: "#545454", width: "70px" }}><span
                                style={{ fontSize: "13px" }}>Modify</span></button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Breadcrumbs
