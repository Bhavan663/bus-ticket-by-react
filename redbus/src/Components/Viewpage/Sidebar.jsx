import React from 'react'
import { FaPhone, FaWifi } from 'react-icons/fa'
import { FaPrescriptionBottle } from 'react-icons/fa'
import { FaBed } from 'react-icons/fa'
import { FaTv } from 'react-icons/fa'
import { FaChargingStation } from 'react-icons/fa'
import { FaBusAlt } from 'react-icons/fa'
import { FaToilet } from 'react-icons/fa'

function Sidebar() {
    return (
        <div className="d-flex" >
            <div className="filter-details" style={{ width: "fit-content", fontFamily: "Montserrat',sans-serif" }}>
                <p className="title "
                    style={{ fontWeight: "700", fontSize: "13px", paddingBottom: "10px", boxShadow: " 0 1px 0 0 rgb(168, 168, 168)", paddingTop: "10px" }}>
                    FILTERS
                </p>
                <div className="details">

                    <p style={{ display: "flex", boxShadow: " 0 1px 0 0 rgb(168, 168, 168)", paddingBottom: "10px" }}>
                        <span
                            style={{ textAlign: "center", paddingTop: "2px", fontSize: "12px", fontWeight: 500, }}
                            className="d-color">Live Tracking</span>

                    </p>


                </div>

                <p className="filter-titles" style={{ fontWeight: "700", fontSize: '13px' }}>
                    DEPARTURE TIME</p>
                <div >
                    <div className="dept-time dt-time-filter" style={{ listStyle: "none", paddingLeft: "0" }}>
                        <div data-value="" className="checkbox depart" style={{ fontSize: "12px", display: "flex" }}>
                            <input type="checkbox" id="dtBefore 6 am" />
                            <label for="dtBefore 6 am" className="custom-checkbox" style={{ paddingLeft: '5px' }}></label>
                            <img src="images/sunrise (1).png" alt="" style={{ width: "20px" }} />
                            <label for="dtBefore 6 am" className="cbox-label" title="Before 6 am" style={{ paddingLeft: '5px' }} >Before 6 am </label>
                        </div>
                        <div data-value="" className="checkbox depart"
                            style={{ fontSize: "12px", paddingTop: "10px", display: "flex" }}>
                            <input type="checkbox" id="dt6 am to 12 pm" />
                            <label for="dt6 am to 12 pm" className="custom-checkbox" style={{ paddingLeft: '10px' }}></label>
                            <span><img src="images/sun.png" alt="" style={{ width: "15px" }} /></span>
                            <label for="dt6 am to 12 pm" className="cbox-label" title="6 am to 12 pm" style={{ paddingLeft: '8px' }}>6 am to 12 pm </label>
                        </div>
                        <div data-value="" className="checkbox depart"
                            style={{ fontSize: "12px", paddingTop: "10px", display: "flex" }}>
                            <input type="checkbox" id="dt12 pm to 6 pm" />
                            <label for="dt12 pm to 6 pm" className="custom-checkbox" style={{ paddingLeft: '10px' }}></label>
                            <span><img src="images/cloudy-night.png" alt="" style={{ width: "15px" }} /></span>
                            <label for="dt12 pm to 6 pm" className="cbox-label" title="12 pm to 6 pm" style={{ paddingLeft: '5px' }} >12 pm to 6 pm </label>
                        </div>
                        <div data-value="" className="checkbox depart"
                            style={{ fontSize: "12px", paddingTop: "10px", display: "flex" }}>
                            <input type="checkbox" id="dtAfter 6 pm" />
                            <label for="dtAfter 6 pm" className="custom-checkbox" style={{ paddingLeft: '10px' }}></label>
                            <span><img src="images/sleeping.png" alt="" style={{ width: "15px" }} /></span>
                            <label for="dtAfter 6 pm" className="cbox-label" title="After 6 pm" style={{ paddingLeft: '8px' }}>After 6 pm</label>
                        </div>
                    </div>

                </div>

                <div className="filter-titles"
                    style={{ fontWeight: "700", fontSize: '13px', paddingTop: '15px' }}> TYPES</div>
                <ul className="list-chkbox" style={{ listStyle: "none", paddingLeft: "0" }}>
                    <li data-value="" className="checkbox"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", paddingTop: "10px" }}>
                        <input type="checkbox" id="bt_SEATER" />
                        <label for="bt_SEATER" className="custom-checkbox"></label>
                        <label for="bt_SEATER" className="cbox-label" title="SEATER">SEATER </label>
                    </li>
                    <li data-value="" className="checkbox"
                        style={{ fontSize: "13px", paddingTop: "10px" }}>
                        <input type="checkbox" id="bt_SLEEPER" />
                        <label for="bt_SLEEPER" className="custom-checkbox">

                        </label>
                        <label for="bt_SLEEPER" className="cbox-label" title="SLEEPER">SLEEPER </label>
                    </li>
                    <li data-value="" className="checkbox"
                        style={{ fontSize: "13px", paddingTop: "10px" }}>
                        <input type="checkbox" id="bt_AC" />
                        <label for="bt_AC" className="custom-checkbox"></label>
                        <label for="bt_AC" className="cbox-label" title="AC">AC </label>
                    </li>
                    <li data-value="" className="checkbox"
                        style={{ fontSize: "13px", paddingTop: "10px" }}>
                        <input type="checkbox" id="bt_NONAC" />
                        <label for="bt_NONAC" className="custom-checkbox"></label>
                        <label for="bt_NONAC" className="cbox-label" title="NONAC">NONAC</label>
                    </li>
                </ul>

                <div className="singleSeatContainer">
                    <div className="filter-titles"
                        style={{ fontWeight: "700", fontSize: '13px' }}>SEAT AVAILABILITY
                    </div>
                    <ul className="list-chkbox" style={{ listStyle: "none", paddingLeft: "0" }}>
                        <li data-value="" className="checkbox"
                            style={{ paddingTop: "10px", fontSize: "13px" }}>
                            <input type="checkbox" id="bt_Single Seats" />
                            <label for="bt_Single Seats" className="custom-checkbox"></label>
                            <label for="bt_Single Seats" className="cbox-label" title="Single Seats">Single Seats</label>
                        </li>
                    </ul>
                </div>

                <p className="filterx" style={{ fontWeight: "700", fontSize: '13px' }}>
                    ARRIVAL TIME</p>
                <div>
                    <ul className="dept-time dt-time-filter" style={{ listStyle: "none", paddingLeft: "0" }}>
                        <li data-value="" className="checkbox" style={{ fontSize: "13px" }}>
                            <input type="checkbox" id="dtBefore 6 am" />
                            <label for="dtBefore 6 am" className="custom-checkbox" style={{ paddingLeft: '5px' }}></label>
                            <span><img src="images/sunrise (1).png" alt="" style={{ width: '20px' }} /></span>
                            <label for="dtBefore 6 am" className="box-label" title="Before 6 am" style={{ paddingLeft: '5px' }} >Before 6 am</label>
                        </li>
                        <li data-value="" className="checkbox"
                            style={{ fontSize: "13px", paddingTop: "10px" }}>
                            <input type="checkbox" id="dt6 am to 12 pm" />
                            <label for="dt6 am to 12 pm" className="custom-checkbox" style={{ paddingLeft: '10px' }}></label>
                            <span><img src="images/sun.png" alt="" style={{ width: "12px" }} /></span>
                            <label for="dt6 am to 12 pm" className="box-label" title="6 am to 12 pm" style={{ paddingLeft: '8px' }}>6 am to 12 pm</label>
                        </li>
                        <li data-value="" className="checkbox"
                            style={{ fontSize: "13px", paddingTop: "10px" }}>
                            <input type="checkbox" id="dt12 pm to 6 pm" />
                            <label for="dt12 pm to 6 pm" className="custom-checkbox" style={{ paddingLeft: '10px' }}></label>
                            <span><img src="images/cloudy-night.png" alt="" style={{ width: "15px" }} /></span>
                            <label for="dt12 pm to 6 pm" className="box-label" title="12 pm to 6 pm" style={{ paddingLeft: '5px' }}>12 pm to 6 pm</label>
                        </li>
                        <li data-value="" className="checkbox"
                            style={{ fontSize: "13px", paddingTop: "10px" }}>
                            <input type="checkbox" id="dtAfter 6 pm" />
                            <label for="dtAfter 6 pm" className="custom-checkbox" style={{ paddingLeft: '10px' }}></label>
                            <span><img src="images/sleeping.png" alt="" style={{ width: "15px" }} /></span>
                            <label for="dtAfter 6 pm" className="box-label" title="After 6 pm" style={{ paddingLeft: '8px' }}>After 6 pm</label>
                        </li>
                    </ul>

                </div>

                <div className="filter-titles"
                    style={{ fontWeight: "700", paddingTop: "10px", fontSize: '12px' }}>
                    BOARDING POINT</div>
                <div className="fil-search" style={{ fontSize: "11px" }}>
                    <input type="text" placeholder=" BOARDING POINT" style={{ borderWidth: "thin", width: '100%' }} />
                </div>
                <div className="filter-titles"
                    style={{ fontWeight: "700", fontSize: "12px", paddingTop: "10px" }}>
                    DROPPING POINT</div>
                <div className="fil-search" style={{ fontSize: "11px" }}>
                    <input style={{ width: "100%", borderWidth: "thin" }} type="text" placeholder="DROPPING POINT" /></div>
                <div className="filter-titles"
                    style={{ fontWeight: "700", fontSize: "12px", paddingTop: "10px" }}>
                    OPERATOR</div>
                <div className="fil-search" style={{ fontSize: "11px" }}>
                    <input id="opfilter" style={{ width: "100%", borderWidth: "thin" }}
                        type="text" placeholder="OPERATOR" />
                </div>

                <div className="filter-titles"
                    style={{ fontWeight: "700", fontSize: "14px", paddingTop: "15px " }}>
                    AMENITIES</div>
                <div style={{ display: "block" }}>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: "5px" }} >{<FaWifi />}</span>Wifi</button>
                        </li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: "5px" }}>{<FaPrescriptionBottle />}</span>Water Bottle</button></li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: "5px" }}>
                                {<FaBed />}
                            </span>Blankets</button>
                        </li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: " 5px" }} >
                                {<FaChargingStation />}
                            </span>Charging
                            Point</button></li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: " 1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: " 5px" }} >

                                {<FaTv />}
                            </span>Movie</button>
                        </li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: " 5px" }} >
                                {<FaBusAlt />}
                            </span> Track My Bus</button>
                        </li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span style={{ fontSize: "12px", paddingRight: " 5px" }}>
                                {<FaPhone />}
                            </span>Emergency Contact</button>
                        </li>
                        <li><button type="button" className="amenities-btn"
                            style={{ backgroundColor: "#fff", border: "1px solid gray" }}><span>{<FaToilet />}</span> Toilet</button>
                        </li>


                    </ul>


                </div>

            </div>
        </div>
    )
}

export default Sidebar
