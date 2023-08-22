import React from 'react'

function Login() {
  return (

    <section class="vh-100" style={{backgroundColor: "#ffffff"}}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{borderRadius: "1rem"}}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="photo_2023-08-10_08-49-24.jpg"
                    alt="login form" class="img-fluid "/>
                </div>
                
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
    
                    
                   
                      <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" />
    
                      <h4 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px", color: "#ff6219"}}>Sign in to avail exciting discounts and cashbacks!!
                      </h4>
    
                      <div class="container mt-5">
                         
                          <form>
                              <div class="mb-3 input-group">
                                  <div class="input-group-prepend">
                                      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Country</button>
                                      <div class="dropdown-menu">
                                          
                                          <a class="dropdown-item" href="#">+91 (India)</a>
                                      </div>
                                  </div>
                                  <input type="tel" class="form-control" id="phoneNumber" placeholder="Enter phone number" />
                              </div>
                              <button type="submit" class="btn btn-danger">Generate OTP(One time Password)</button>
                          </form>
                      </div>
                      <div class="mb-3">
                          <h8>or Connect using social accounts:</h8>
                      </div>
<div class="sign" style={{marginLeft:"10px"}}>
<button type="submit" class="btn btn-info">
  <i class="fab fa-google me-2"></i> Sign in with Google
</button>
</div>

                      <div class="form-check mb-3">
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
