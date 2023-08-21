import React from 'react'

function Print() {
  return (
    <div className="container-fluid" style={{ fontFamily: "'Montserrat', sans-serif", marginTop: "120px" }}>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", marginLeft: "200px" }}>
        <div className="container-fluid">
            <div className="row justify-content-center" style={{ gap: "80px" }}>
                <div className="col-lg-3">


                    <div className="mb-3">
                        <label htmlFor="Ticket Number" className="form-label" style={{ fontWeight: "700", fontSize: "14px", letterSpacing: "0.3px", color: "#3e3e52" }}>TICKET
                            NUMBER</label>
                        <div className="d-flex gap-1" style={{ marginTop: "10px", borderBottom: "1px solid #dbdbdb", borderColor: "#d2d2d2" }}>
                            <span style={{ marginTop: "12px", marginLeft: "8px", marginRight: "8px" }}> <img
                                src="https://www.redbus.in/images/tickets.png" alt="" /></span>
                            <input
                                style={{ borderColor: "transparent", color: "#404040", height: "48px", width: "85%", fontSize: "14px", lineHeight: "normal" }}
                                type="text" className="form-control" id="ticketnumber"
                                placeholder="Enter your ticket number" required />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="mb-3">
                        <label htmlFor="Ticket Number" className="form-label" style={{ fontWeight: "600", fontSize: "17px" }}>MOBILE
                            NUMBER</label>
                        <div className="d-flex gap-1" style={{ marginTop: "10px", borderBottom: "1px solid #dbdbdb", borderColor: "#d2d2d2" }}>
                            <span style={{ marginTop: "12px", marginLeft: "8px", marginRight: "8px" }}> +91</span>
                            <input
                                style={{ borderColor: "transparent", color: "#404040", height: "48px", width: "85%", fontSize: "14px", lineHeight: "normal" }}
                                type="text" className="form-control" id="ticketnumber"
                                placeholder="Enter your mobile number" required />


                        </div>


                    </div>
                </div>
                
                <div style={{ marginLeft: "", marginTop: "" }}>
                    <input type="submit" value="SUBMIT" className="btn btn-danger" id="ticketSearch"></input>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Print
