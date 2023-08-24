import React from 'react'

function Login() {
  return (

    <section className="vh-100" style={{backgroundColor: "#ffffff"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{borderRadius: "1rem"}}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="photo_2023-08-10_08-49-24.jpg"
                    alt="login form" className="img-fluid "/>
                </div>
                
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
    
                    
                   
                      <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" />
    
                      <h4 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px", color: "#ff6219"}}>Sign in to avail exciting discounts and cashbacks!!
                      </h4>
    
                      <div className="container mt-5">
                         
                          <form>
                              <div className="mb-3 input-group">
                                  <div className="input-group-prepend">
                                      <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Country</button>
                                      <div className="dropdown-menu">
                                          
                                          <a className="dropdown-item" href="#">+91 (India)</a>
                                      </div>
                                  </div>
                                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" />
                              </div>
                              <button type="submit" className="btn btn-danger">Generate OTP(One time Password)</button>
                          </form>
                      </div>
                      <div className="mb-3">
                          <h8>or Connect using social accounts:</h8>
                      </div>
<div className="sign" style={{marginLeft:"10px"}}>
<button type="submit" className="btn btn-info">
  <i className="fab fa-google me-2"></i> Sign in with Google
</button>
</div>

                      <div className="form-check mb-3">
                          <label>
                           By signing up, you agree to our Terms & Conditions and Privacy Policy.
                          </label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
