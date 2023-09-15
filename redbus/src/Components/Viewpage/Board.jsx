import React from 'react'

function Board() {
    return (
        <div className="container-fluid">
            <div className="top-cont" style={{ fontFamily: "'Montserrat', sans-serif", marginTop: "30px" }}>
                <div className="row" style={{ marginLeft: "2px" }}>
                    <div className="col-lg-2">
                        <p style={{ fontSize: "15px", fontWeight: "600" }}>230 Buses <span
                            style={{ fontWeight: "500" }}>Found</span></p>
                    </div>
                    <div className="col-lg-2 ">
                        <p style={{ fontSize: "15px", fontWeight: "600" }}>Sort By:</p>
                    </div>
                    <div className="col-lg-1">
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>Departure</p>
                    </div>
                    <div className="col-lg-1">
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>Duration</p>
                    </div>
                    <div className="col-lg-1">
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>Arrival</p>
                    </div>
                    <div className="col-lg-1">
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>Ratings</p>
                    </div>
                    <div className="col-2 ">
                        <p style={{ fontSize: "12px", fontWeight: "500", textAlign: "center" }}>Fare</p>
                    </div>
                    <div className="col">
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>Seat Avaliability</p>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Board
