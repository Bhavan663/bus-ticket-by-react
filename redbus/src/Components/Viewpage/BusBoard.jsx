import React from 'react'
import { FaStar, FaTv } from 'react-icons/fa'
import { FaPhone, FaWifi } from 'react-icons/fa'
import { FaPrescriptionBottle } from 'react-icons/fa'
import { FaChargingStation } from 'react-icons/fa'
class BusBoard extends React.Component {
    state = {
        divcontainer: false,
    }
    render() {
        var Handlechange = e => {
            this.setState({ divcontainer: !this.state.divcontainer })
        }

        const x = this.state.divcontainer;
        return (
            <div>
                <div class=" bus-board"
                    style={{ height: "fit-content", marginTop: "10px", border: "1px solid #ccc", fontFamily: "'Montserrat', sans-serif", paddingLeft: "0" }}>
                    <div class="row" style={{ paddingTop: "2px" }}>
                        <div class="col-lg-4">
                            <p style={{ fontSize: "15px", paddingLeft: "20px", fontWeight: "600", paddingTop: "10px" }}>Egloo Travels</p>
                        </div>
                        <div class="col-lg-1 ">
                            <p style={{ fontWeight: "600", fontSize: "20px", paddingTop: "5px", textAlign: "center" }}>21:15</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ fontSize: "14px", paddingTop: "10px", textAlign: "center" }}>08h 15m</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ fontSize: "20px", fontWeight: "600", paddingTop: "5px", textAlign: "center" }}>5:30</p>
                        </div>
                        <div class="col-lg-1" style={{ paddingTop: "7px" }}>
                            <button type="button"
                                style={{ borderRadius: "5px", fontSize: "13px", borderColor: "transparent", backgroundColor: "green", color: "white", textAlign: "center" }}><span>{<FaStar />}</span>4.6</button>
                        </div>
                        <div class="col-lg-2">
                            <p style={{ textAlign: "center", paddingTop: "5px" }}>INR <span
                                style={{ fontSize: "20px", fontWeight: "600" }}>1899</span></p>
                        </div>
                    </div><div class="row">
                        <div class="col-lg-6">
                            <p style={{ paddingLeft: "20px", fontSize: "12px" }}>A/c Slepper(2+1)</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ color: "red", fontWeight: "200" }}>12-Aug</p>
                        </div>
                        <div class="col-lg-3">
                            <p style={{ fontSize: "15px" }}><i class="fa-solid fa-users"></i><span
                                style={{ paddingLeft: "10px" }}>706</span></p>
                        </div>
                        <div class="col-lg-2">
                            <p style={{ fontSize: "15px", fontWeight: "300" }}>7 Seats available </p>
                        </div>
                    </div><div class="row ">
                        <div class="col-lg-4">

                        </div>
                        <div class="col-lg-2">
                            <p style={{ fontSize: "12px" }}>Koyambedu</p>
                        </div>

                        <div class="col-lg-2">
                            <p style={{ fontSize: "12px" }}>Mattuthavani</p>
                        </div>
                        <div class="col-lg-2">

                        </div>
                        <div class="col-lg-2">
                            <p style={{ fontSize: "15px", fontWeight: "300" }}>2 Single</p>
                        </div>
                    </div><div class="row mb-0">
                        <div class="col-lg-2" style={{ fontSize: "15px" }}>
                            <p><span style={{ paddingLeft: '15px' }}>{<FaPrescriptionBottle />}</span>
                                <span style={{ paddingLeft: '5px' }}>{<FaWifi />}</span>
                                <span style={{ paddingLeft: '5px' }}>{<FaTv />}</span>
                                <span style={{ paddingLeft: '5px' }}>{<FaChargingStation />}</span>
                                <span style={{ paddingLeft: "8px" }}>2</span>
                            </p>

                        </div>
                    </div>
                    <div class="row " onClick={Handlechange}>
                        <div class="col-lg-12 ">
                            <button type="button"
                                style={{ float: "right", borderWidth: "0", color: "#fff", backgroundColor: "#D84E55" }}>VIEW SEATS
                            </button>
                        </div>
                    </div>

                </div>




                {
                    x && (
                        <div class="container"
                            style={{ backgroundColor: "#EEEDED", paddingBottom: "20px", fontFamily: "'Montserrat', sans-serif", }}>
                            <div class="row" style={{ marginLeft: "70px" }}>
                                <div class=" col-lg-2 " style={{ textAlign: "end" }}>
                                    <p style={{ fontSize: "15px", fontWeight: "600", paddingTop: "18px" }}>Seat Price</p>
                                </div>
                                <div class="col-lg-1" style={{ paddingTop: "6px" }}>
                                    <button type="button"
                                        style={{ width: "100%", borderStyle: "none", color: "#fff", fontWeight: "600", fontSize: "15px", marginTop: "10px", textAlign: "center", backgroundColor: "#545454" }}>All</button>
                                </div>
                                <div class="col-lg-1 " style={{ paddingTop: "6px" }}>
                                    <button type="button" class="rate">2933</button>

                                </div>
                                <div class="col-lg-1" style={{ paddingTop: "6px" }}>
                                    <button type="button" class="rate">3093</button>


                                </div>
                                <div class="col-lg-1" style={{ paddingTop: "6px" }}>
                                    <button type="button" class="rate">3913</button>


                                </div>
                                <div class="col-lg-1" style={{ paddingTop: "6px" }}>
                                    <button type="button" class="rate">4113</button>



                                </div>
                            </div>
                            <hr style={{ height: "2px", borderWidth: "0", width: "100%", color: "black", backgroundColor: "black" }} />

                            <div class="row" >
                                <div class=" d-block" style={{ paddingLeft: "100px", marginTop: "40px", width: '55%' }}>
                                    <div style={{ paddingLeft: "50px" }}>
                                        <p
                                            style={{ fontSize: "13px", backgroundColor: "#D84E55", color: "#fff", textAlign: "center", width: "fit-content" }}>
                                            Click on an Available seat to proceed with your transaction.</p>
                                    </div>

                                    <div>
                                        <span>Lower Deck</span>
                                        <div className='cont' style={{ backgroundColor: 'white', display: 'flex' }}>
                                            <div>
                                                <hr style={{ border: "5px solid", height: '100%', margin: '0' }} />
                                            </div>
                                            <div className='custom-steer'>
                                                <img src="images/Steer.png" alt="" />
                                            </div>

                                            <div>
                                                <hr style={{ border: "1px solid", color: 'black', marginLeft: '5px', height: '80%' }} />
                                            </div>


                                            <div className='custom-seats'>
                                                <div>


                                                    <div className='custom-loweseat'>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    </div>
                                                    <div className='custom-lowseat'>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>

                                                    </div>
                                                </div>
                                                <div className='custom-loseat'>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: "10px" }}>
                                        <span>Upper Deck</span>
                                        <div className='container' style={{ backgroundColor: 'white', display: 'flex' }}>



                                            <div className='custom-seats' style={{ marginLeft: '40px' }}>
                                                <div>


                                                    <div className='custom-upperseat'>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    </div>
                                                    <div className='custom-upseat'>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                        <a href=""><img src="images/Busseat.png" alt="" /></a>

                                                    </div>
                                                </div>
                                                <div className='custom-lowerseat'>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                    <a href=""><img src="images/Busseat.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style={{ marginTop: "15px", paddingLeft: "90px", width: '45%' }}>
                                    <p style={{ fontWeight: "900", fontSize: "15px", paddingLeft: "50px" }}>SEAT LEGEND</p>
                                    <div style={{ display: "flex", paddingLeft: "50px", paddingTop: "10px" }}>
                                        <div style={{ display: "flex" }}>
                                            <button
                                                style={{ width: "40px", height: "20px", backgroundColor: "#fff", borderColor: "#545454", borderWidth: "1px" }}></button>
                                            <p style={{ fontSize: "12px", fontWeight: "300", paddingLeft: "10px" }}>Available</p>
                                        </div>
                                        <div style={{ display: "flex", paddingLeft: "30px" }}>
                                            <button
                                                style={{ width: "40px", height: "20px", backgroundColor: "#CBCBCB", borderColor: "#545454", borderWidth: "0" }}></button>
                                            <p style={{ fontSize: "12px", fontWeight: "100", paddingLeft: "10px" }}>Unavailable</p>
                                        </div>

                                    </div>
                                    <div style={{ display: "flex", paddingLeft: "50px" }}>
                                        <button
                                            style={{ width: "40px", height: "20px", backgroundColor: "#fff", borderColor: "red", borderWidth: "1px" }}></button>
                                        <p style={{ fontSize: "12px", fontWeight: "100", paddingLeft: "10px" }}>Female</p>
                                    </div>


                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    )
                }

            </div>
        )
    }

}

export default BusBoard
