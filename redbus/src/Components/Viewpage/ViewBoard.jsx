import React from 'react'

function ViewBoard() {
  return (
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
                <hr style={{ border: "5px solid", height: '100%',margin:'0'}}/>
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



            {/* <div  className='container' style={{backgroundColor:'white'}}>
               <div  className='row'>
               <div  className='col-1 ' style={{paddingLeft:'12px'}}>
                <img src="images/Steer.png"  alt="" />
                  </div>
                 
                  <div className='col-2 ' style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
<img src="images/Redseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
<img src="images/Greyseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2 ' style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
              
                
               </div>
               <div  className='row'>
               <div  className='col-1 ' style={{ boxShadow: "1px 0  black",paddingLeft:'12px'}}>
                  </div>
                  <div className='col-2 ' style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
<img src="images/Redseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
<img src="images/Greyseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2 ' style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
              
                
               </div>
               <div className='row'>
               <div  className='col-1 ' style={{ boxShadow: "1px 0  black",paddingLeft:'12px'}}>
                <img src="images/Steer.png"  alt=""  style={{visibility:'hidden'}} />
                  </div>
               </div>
               <div  className='row' >
               <div  className='col-1 ' style={{ boxShadow: "1px 0  black",paddingLeft:'12px'}}>
            
                  </div>
                  <div className='col-2 ' style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
<img src="images/Redseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
<img src="images/Greyseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2'  style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
                  <div className='col-2 ' style={{width:'15%', paddingTop:'15px'}}>
                    <img src="images/Busseat.png" alt="" />
                  </div>
              
                
               </div>
                  </div> */}
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

export default ViewBoard
