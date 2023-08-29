import React from 'react'

function Board() {
    return (
        <div>
            <div class="container-fluid">
                <div class="top-cont" style={{ fontFamily: "'Montserrat', sans-Serif", marginTop: "30px" }}>
                    <div class="row" style={{ marginLeft: "2px" }}>
                        <div class="col-lg-2">
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>230 Buses <span
                                style={{ fontWeight: "500", }}>Found</span></p>
                        </div>
                        <div class="col-lg-2 ">
                            <p style={{ fontSize: "15px", fontWeight: "600" }}>Sort By:</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Departure</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Duration</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Arrival</p>
                        </div>
                        <div class="col-lg-1">
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Ratings</p>
                        </div>
                        <div class="col-2 ">
                            <p style={{ fontSize: "12px", fontWeight: "500", textAlign: "center" }}>Fare</p>
                        </div>
                        <div class="col">
                            <p style={{ fontSize: "12px", fontWeight: "500" }}>Seat Avaliability</p>
                        </div>
                    </div>

                </div>
                <div class="container"
                    style={{ marginTop: "10px", fontFamily: "'Montserrat', sans-serif" }}>
                    <div class="row bg-danger-subtle" style={{ marginTop: "20px", paddingTop: "20px" }}>
                        <div class="col-lg-4">
                            <p style={{ fontSize: "15px", fontWeight: "600", paddingTop: "10px" }}>Egloo Travels</p>
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
                                style={{ borderRadius: "5px", fontSize: "13px", borderColor: "transparent", backgroundColor: "green", color: "white", textAlign: "center" }}><i
                                    class="fa-solid fa-star"></i>4.6</button>
                        </div>
                        <div class="col-lg-2">
                            <p style={{ textAlign: "center", paddingTop: "5px" }}>INR <span
                                style={{ fontSize: "20px", fontWeight: "600" }}>1899</span></p>
                        </div>
                    </div><div class="row bg-danger-subtle">
                        <div class="col-lg-6">
                            <p style={{ fontSize: "12px" }}>A/c Slepper(2+1)</p>
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
                    </div><div class="row bg-danger-subtle">
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
                    </div><div class="row bg-danger-subtle mb-0">
                        <div class="col-lg-2" style="fontSize: 15px,">
                            <p><i class="fa-solid fa-bottle-water"></i><span><i style={{ paddingLeft: "10PX" }}
                                class="fa-solid fa-charging-station"></i></span><i style={{ paddingLeft: "10px" }}
                                    class="fa-solid fa-tv"></i><span><i style={{ paddingLeft: "10px" }}
                                        class="fa-solid fa-video"></i></span><span><i style={{ paddingLeft: "10px" }}
                                            class="fa-solid fa-circle-plus"></i></span><span style={{ paddingLeft: "8px" }}>2</span>
                            </p>

                        </div>
                        <div class="col-lg-2">

                        </div>
                        <div class="col-lg-2">

                        </div>
                        <div class="col-lg-2">

                        </div>
                        <div class="col-lg-1">

                        </div>
                        <div class="col-lg-1">
                        </div>
                    </div><div class="row bg-danger-subtle">
                        <div class="col-lg-10">

                        </div>
                        <div class="col-lg-2 ">
                            p style={{ backgroundColor: "#E9555D", textAlign: "center", fontSize: "15px" }}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Board
