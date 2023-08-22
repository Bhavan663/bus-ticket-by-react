import React from 'react'

function Sidebar() {
  return (
    <div className="d-flex" >
    <div className="filter-details bg-danger px-3 col-lg-2" style={{width:"fit-content",fontFamily: "Montserrat',sans-serif"}}>
        <p className="title "
            style={{fontWeight: "700", fontSize: "12px", paddingBottom: "10px" ,boxShadow:" 0 1px 0 0 rgb(168, 168, 168)", paddingTop: "10px"}}>
            FILTERS
        </p>
        <div className="details">
    
            <p style={{ display:"flex", boxShadow:" 0 1px 0 0 rgb(168, 168, 168)",paddingBottom: "10px"}}> 
                <span
                    style={{textAlign: "center",paddingTop: "2px", fontSize: "12px", fontWeight: 400, fontFamily: "'Montserrat', sans-serif,"}}
                    className="d-color">Live Tracking (225)</span>
            
            </p>
    
    
        </div>
     
        <p className="filter-titles" style={{fontWeight: "700"}}>
            DEPARTURE TIME</p>
        <div >
            <div className="dept-time dt-time-filter" style={{listStyle:"none",paddingLeft: "0"}}>
                <div data-value="" className="checkbox depart" style={{fontSize: "12px",display: "flex"}}>
                    <input type="checkbox" id="dtBefore 6 am"/>
                    <label for="dtBefore 6 am" className="custom-checkbox"></label>
                    <label  for="dtBefore 6 am" className="cbox-label" title="Before 6 am"><img src="images/sunrise (1).png" alt="" style={{width:"20px"}} />Before 6 am (2)</label>
                </div>
                <div data-value="" className="checkbox depart"
                    style={{ fontSize: "12px", paddingTop:"10px",display: "flex"}}>
                    <input type="checkbox" id="dt6 am to 12 pm" />
                    <label for="dt6 am to 12 pm" className="custom-checkbox" ></label>
                    <span><img  src="images/sun.png" alt="" style={{width:"15px"}} /></span>
                    <label for="dt6 am to 12 pm" className="cbox-label" title="6 am to 12 pm" >6 am to 12 pm (10)</label>
                </div>
                <div data-value="" className="checkbox depart"
                    style={{ fontSize: "12px", paddingTop:"10px",display: "flex"}}>
                    <input type="checkbox" id="dt12 pm to 6 pm"/>
                    <label for="dt12 pm to 6 pm" className="custom-checkbox"></label>
                   <span><img src="images/cloudy-night.png" alt="" style={{width:"15px"}} /></span>
                    <label for="dt12 pm to 6 pm" className="cbox-label" title="12 pm to 6 pm" >12 pm to 6 pm (20)</label>
                </div>
                <div data-value="" className="checkbox depart"
                    style={{fontSize: "12px", paddingTop:"10px",display: "flex"}}>
                    <input type="checkbox" id="dtAfter 6 pm"/>
                    <label for="dtAfter 6 pm" className="custom-checkbox"></label>
                    <span><img src="images/sleeping.png" alt="" style={{width:"15px"}} /></span>
                    <label for="dtAfter 6 pm" className="cbox-label" title="After 6 pm">After 6 pm (193)</label>
                </div>
            </div>
    
    </div>
       
        <div className="filter-titles"
            style={{fontWeight: "700"}}> TYPES</div>
        <ul className="list-chkbox" style={{listStyle:"none",paddingLeft: "0"}}>
            <li data-value="" className="checkbox"
                style={{fontFamily:"'Montserrat', sans-serif", fontSize: "13px", paddingTop:"10px"}}>
                <input type="checkbox" id="bt_SEATER" />
                <label for="bt_SEATER" className="custom-checkbox"></label>
                <label for="bt_SEATER" className="cbox-label" title="SEATER">SEATER (93)</label>
            </li>
            <li data-value="" className="checkbox"
                style={{ fontSize: "13px", paddingTop:"10px"}}>
                <input type="checkbox" id="bt_SLEEPER"/>
                <label for="bt_SLEEPER" className="custom-checkbox">
    
                </label>
                <label for="bt_SLEEPER" className="cbox-label" title="SLEEPER">SLEEPER (213)</label>
            </li>
            <li data-value="" className="checkbox"
                style={{fontSize:"13px", paddingTop:"10px"}}>
                <input type="checkbox" id="bt_AC"/>
                <label for="bt_AC" className="custom-checkbox"></label>
                <label for="bt_AC" className="cbox-label" title="AC">AC (124)</label>
            </li>
            <li data-value="" className="checkbox"
                style={{ fontSize: "13px", paddingTop:"10px"}}>
                <input type="checkbox" id="bt_NONAC"/>
                <label for="bt_NONAC" className="custom-checkbox"></label>
                <label for="bt_NONAC" className="cbox-label" title="NONAC">NONAC (101)</label>
            </li>
        </ul>
       
        <div className="singleSeatContainer">
            <div className="filter-titles"
                style={{ fontWeight: "700"}}>SEAT AVAILABILITY
            </div>
            <ul className="list-chkbox" style={{listStyle: "none",paddingLeft: "0"}}>
                <li data-value="" className="checkbox"
                    style={{paddingTop:"10px",fontSize: "13px"}}>
                    <input type="checkbox" id="bt_Single Seats"/>
                    <label for="bt_Single Seats" className="custom-checkbox"></label>
                    <label for="bt_Single Seats" className="cbox-label" title="Single Seats">Single Seats (127)</label>
                </li>
            </ul>
        </div>
        
        <p className="filterx" style={{fontWeight: "700"}}>
            ARRIVAL TIME</p>
        <div>
            <ul className="dept-time dt-time-filter" style={{listStyle: "none",paddingLeft: "0"}}>
                <li data-value="" className="checkbox" style={{ fontSize: "13px"}}>
                    <input type="checkbox" id="dtBefore 6 am"/>
                    <label for="dtBefore 6 am" className="custom-checkbox"></label>
                <span><img src="images/sunrise (1).png" alt="" style={{width:"20px"}} /></span>
                    <label for="dtBefore 6 am" className="box-label" title="Before 6 am">Before 6 am (2)</label>
                </li>
                <li data-value="" className="checkbox"
                    style={{fontSize: "13px", paddingTop:"10px"}}>
                    <input type="checkbox" id="dt6 am to 12 pm"/>
                    <label for="dt6 am to 12 pm" className="custom-checkbox"></label>
                    <span><img src="images/sun.png" alt="" style={{width:"12px"}} /></span>
                    <label for="dt6 am to 12 pm" className="box-label" title="6 am to 12 pm">6 am to 12 pm (10)</label>
                </li>
                <li data-value="" className="checkbox"
                    style={{fontSize: "13px", paddingTop:"10px"}}>
                    <input type="checkbox" id="dt12 pm to 6 pm"/>
                    <label for="dt12 pm to 6 pm" className="custom-checkbox"></label>
    <label for="dt12 pm to 6 pm" className="box-label" title="12 pm to 6 pm">12 pm to 6 pm (20)</label>
                </li>
                <li data-value="" className="checkbox"
                    style={{fontSize: "13px", paddingTop:"10px"}}>
                    <input type="checkbox" id="dtAfter 6 pm"/>
                    <label for="dtAfter 6 pm" className="custom-checkbox"></label>
                   <label for="dtAfter 6 pm" className="box-label" title="After 6 pm">After 6 pm (193)</label>
                </li>
            </ul>
    
        </div>
       
        <div className="filter-titles"
            style={{ fontWeight: "700", paddingTop: "10px"}}>
            BOARDING POINT</div>
        <div className="fil-search" style={{fontSize: "11px", paddingTop:"10px"}}>
            <input type="text" placeholder=" BOARDING POINT" style={{borderWidth: "thin",width: "100%,"}}/>
        </div>
        <div className="filter-titles"
            style={{fontWeight: "700", fontSize: "11px",paddingTop: "10px"}}>
            DROPPING POINT</div>
        <div className="fil-search" style={{fontSize: "11px", paddingTop:"10px"}}>
            <input style={{width: "100%",borderWidth: "thin"}} type="text" placeholder="DROPPING POINT"/></div>
        <div className="filter-titles"
            style={{ fontWeight: "700", fontSize: "11px", paddingTop: "10px,"}}>
            OPERATOR</div>
        <div className="fil-search" style={{fontSize: "11px", paddingTop:"10px"}}>
            <input id="opfilter" style={{width: "100%",borderWidth: "thin"}}
                type="text" placeholder="OPERATOR"/>
        </div>
    
        <div className="filter-titles"
            style={{fontWeight: "700", fontSize: "14px", paddingTop:"15px "}}>
            AMENITIES</div>
        <div style={{display: "block"}}>
            <ul style={{listStyleType: "none",paddingLeft: "0"}}>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border:"1px solid gray"}}><span style={{fontSize: "12px", paddingRight: "5px"}} className="material-symbols-outlined">
                            wifi
                            </span>Wifi(8)</button>
                </li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor: "#fff",  border: "1px solid gray"}}><span style={{fontSize: "12px",paddingRight: "5px"}} className="material-symbols-outlined">
                            water_bottle
                            </span>Water
                        Bottle(59)</button></li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor: "#fff",  border: "1pxsolid gray"}}><span style={{fontSize: "12px",paddingRight: "5px"}} className="material-symbols-outlined">
                            bed
                            </span>Blankets(69)</button>
                </li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border:"1px solid gray"}}><span style={{fontSize: "12px",paddingRight:" 5px" }}className="material-symbols-outlined">
                            ev_station
                            </span>Charging
                        Point(81)</button></li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border:" 1px solid gray"}}><span style={{fontSize: "12px",paddingRight:" 5px"}}className="material-symbols-outlined">
                            movie
    
    </span>Movie</button>
                </li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border: "1px solid gray"}}><span style={{fontSize: "12px",paddingRight:" 5px"}} className="material-symbols-outlined">
                            directions_bus
                            </span> Track My Bus</button>
                </li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border: "1px solid gray"}}><span  style={{fontSize: "12px",paddingRight:" 5px" }}className="material-symbols-outlined">
                            sos
                            </span>Emergency Contact(40)</button>
                </li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border:"1px solid gray"}}>Toilet(4)</button>
                </li>
                <li><button type="button" className="amenities-btn"
                        style={{backgroundColor:"#fff",  border: "1px solid gray"}}>Bed
                        Sheet(32)</button></li>
    
    
            </ul>
    
    
        </div>
    
    </div>
    </div>
  )
}

export default Sidebar
