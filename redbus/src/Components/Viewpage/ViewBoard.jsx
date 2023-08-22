import React from 'react'

function ViewBoard() {
  return (
    <div class="container"
                style={{backgroundColor: "#EEEDED", paddingBottom: "20px",fontFamily: "'Montserrat', sans-serif"}}>
                <div class="row" style={{marginTop: "20px",marginLeft: "70px"}}>
                    <div class=" col-lg-2 " style={{textAlign: "end"}}>
                        <p style={{fontSize: "15px",fontWeight: "600", paddingTop: "18px"}}>Seat Price</p>
                    </div>
                    <div class="col-lg-1" style={{paddingTop: "6px"}}>
                        <button type="button"
                            style={{width: "100%",borderStyle: "none",color: "#fff", fontWeight: "600",fontSize: "15px",marginTop: "10px", textAlign: "center", backgroundColor: "#545454"}}>All</button>
                    </div>
                    <div class="col-lg-1 " style={{paddingTop: "6px"}}>
                        <button type="button" class="rate">2933</button>
                        <span class="rate-underline">3010</span>
                    </div>
                    <div class="col-lg-1" style={{paddingTop: "6px"}}>
                        <button type="button" class="rate">3093</button>
                        <span class="rate-underline">3170</span>

                    </div>
                    <div class="col-lg-1" style={{paddingTop: "6px"}}>
                        <button type="button" class="rate">3913</button>
                        <span class="rate-underline">3990</span>

                    </div>
                    <div class="col-lg-1" style={{paddingTop: "6px"}}>
                        <button type="button" class="rate">4113</button>
                        <span class="rate-underline">4190</span>


                    </div>
                </div>
                <hr style={{height:"2px",borderWidth:"0",width:"100%",color:"black",backgroundColor:"black"}} />

                <div class="row" >
                    <div class="col-6 d-block" style={{paddingLeft: "100px",marginTop: "40px"}}>
                        <div style={{paddingLeft: "50px"}}>
                            <p
                                style={{fontSize: "13px", backgroundColor: "#D84E55",color: "#fff",textAlign: "center",width: "fit-content"}}>
                                Click on an Available seat to proceed with your transaction.</p>
                        </div>

                        <div>
                            <span>Lower Deck</span>
                            <img src="./images/busticket.png" alt="" />
                        </div>
                        <div style={{paddingTop: "10px"}}>
                            <span>Upper Deck</span>
                            <img src="./images/busticket1.png" alt="" />
                        </div>
                    </div>
                    <div class="col-6" style={{marginTop:"15px" , paddingLeft: "90px"}}>
                        <p style={{fontWeight: "900", fontSize:"15px" , paddingLeft: "50px"}}>SEAT LEGEND</p>
                        <div style={{display: "flex",paddingLeft: "50px", paddingTop: "10px"}}>
                            <div style={{display: "flex"}}>
                                <button
                                    style={{width: "40px",height: "20px",backgroundColor:"#fff",borderColor: "#545454",borderWidth: "1px"}}></button>
                                <p style={{fontSize: "12px",fontWeight: "300", paddingLeft: "10px"}}>Available</p>
                            </div>
                            <div style={{display: "flex", paddingLeft: "30px"}}>
                                <button
                                    style={{width: "40px",height: "20px",backgroundColor:"#CBCBCB",borderColor: "#545454", borderWidth: "0"}}></button>
                                <p style={{fontSize: "12px",fontWeight: "100",paddingLeft: "10px"}}>Unavailable</p>
                            </div>

                        </div>
                        <div style={{display: "flex",paddingLeft: "50px"}}>
                            <button
                                style={{width: "40px",height: "20px",backgroundColor:"#fff",borderColor: "red", borderWidth: "1px"}}></button>
                            <p style={{fontSize: "12px",fontWeight: "100",paddingLeft: "10px"}}>Female</p>
                        </div>


                    </div>
                    <div>

                    </div>
                </div>

            </div>
  )
}

export default ViewBoard
