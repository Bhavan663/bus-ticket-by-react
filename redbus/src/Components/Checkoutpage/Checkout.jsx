import React from 'react'

function Checkout() {
  return (
    <div>
      <div className="container mt-5">
                <h2 className="text-center">Passenger Details</h2>
                <hr />
            <div className="passenger-card" style={{ border: '100px' }}>
            <div className="mb-3">
                <div className="pasinfo">
                    <h2><i className="fas fa-user"></i> Passenger Information</h2>
                </div>
                <h1 style={{ fontSize: 'small' }}>Passenger 1 |seat WL1</h1>
                <label htmlFor="fullName" className="form-label">Name</label>
                <input type="tel" className="form-control" id="phoneNumber" placeholder="Name" />

            </div>
            </div>

                    <div className="passenger-card">
                      
                        <div className="passenger-card" style={{ border: '100px' }}>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="tel" className="form-control" id="phoneNumber" placeholder="Age" />
            </div>
            <div className="mb-3">
                <label htmlFor="gender">Gender</label><br />
                <input type="radio" id="male" name="gender" value="male" required />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" required />
                <label htmlFor="female">Female</label>
            </div>
            <div className="passenger-card" style={{ border: '100px' }}>
            <div className="mb-3">
                <label htmlFor="cityResidence" className="form-label">City of Residence</label>
                <input type="text" className="form-control" id="cityResidence" name="cityResidence" />
            </div>
            </div>
            <div className="passenger-card" style={{ border: '100px' }}>
            <div className="mb-3">
                <label htmlFor="cityResidence" className="form-label">State of Residence</label>
                <input type="text" className="form-control" id="cityResidence" name="cityResidence" />
            </div>
            </div>
            <div className="contact-card">
            <div className="container mt-3">
                <h2 className="text-center">Contact Details</h2>
                <hr />
                <h1 style={{ fontSize: 'small' }}>Your ticket will be sent to these details
</h1>
<div className="passenger-card" style={{ border: '100px' }}>
<div className="mb-3">
                <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope"></i> Email
                </label>
                <input type="tel" className="form-control" id="phoneNumber" placeholder="Email Id" />

            </div>
            <div>
                <form>
                    <div className="mb-3">

                    <i className="fas fa-envelope"></i>Phone
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Country</button>
                            <div className="dropdown-menu">
                            
                            <span style={{ marginTop: "12px", marginLeft: "8px", marginRight: "8px" }}> +91</span>

                            </div>
                        </div>
                        <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" />
                    </div>
                </form>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="hasGSTNumber" />
                <label className="form-check-label" htmlFor="hasGSTNumber">
                    I have a GST number (optional)?
                </label>
            </div>
        </div>
        <div className="whatsApp_block">
            <label className="checkbox_css">
                <input type="checkbox" id="whatsAppFeature" className="input-checkbox hide" checked />
                <label htmlFor="whatsAppFeature" id="whatsAppFeatureCheckBox" className="checkmark"></label>
                <span className="icon-whatsApp"></span>
                <span className="subscribe-txt">
                    <i className="fab fa-whatsapp"></i>Send booking details and updates on above WhatsApp number
                </span>
                </label>
        </div>
        <div className="insurance-card">
            <a target="_blank" className="tnc_link" href="https://www.redbus.in/info/ins_bcp_terms.html" style={{ marginLeft: '90%' }}>T&amp;C Apply</a>
            <h3><img src="https://st.redbus.in/images/insurance-section/rap_redbus.png" alt="img" width="40px" /> redBus
                <p style={{ marginLeft: '35px', fontSize: 'small' }}>Secure your trip just at ₹21 per passenger</p>
            </h3>
            <div className="form-check">
                <input type="radio"name="insurance" required />
                    Yes, Product my trip at 21 (1 passenger), I agree to  <a href="/info/termscondition" target="_blank">Terms and Conditions</a> 
            <div className="form-check">
                <input type="radio"name="insurance" required />
                    No, I would like to proceed without redBus Assurance Program
                    

            </div>
            <div className="benefits-block" style={{ backgroundColor: 'rgb(253, 255, 254)' }}>
            </div>
            <div className="insurance_container1">
                <div className="bottomRow insurance-radio">
                </div>
                <div className="sc-keVrkP jNzeAp">
                    <div className="addonsContainer">
                        <div className="addonsBlockcss__IAddonsProps-sc-12kjrii-0 gwRjAf">
                        </div>
                    </div>
                </div>
                <div className="addOn_block padding-bttom-2">
                    <div className="addOnTitle clearfix">
                        <span className="fl p-title">redBus Cares: your contribution makes a difference!</span>
                    </div>
                    <div className="subscribe-txt">
                        <input type="checkbox" /> <i className="fa-solid fa-hand-holding-dollar"></i>₹5 to support responsible tourism initiatives
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul className="addOnTnc">
                <li className="addOnList">
                    <span lang="EN-US">You hereby voluntarily choose to contribute to the social cause and by proceeding to donate the money, you do so at your own risk and expressly waive any and all claims, rights of action and/or remedies (under law or otherwise) that you may have against redBus arising out of or in connection with the aforesaid transaction.</span>
                </li>
                <li className="addOnList">
                    <span lang="EN-US">By proceeding to donate the money, You understand and confirm that this donation is not from any foreign source as defined under Foreign Contribution Regulation Act, 2010.</span>
                </li>
                <li className="addOnList">
                    No certificate under Section 80G of the Income Tax Act, 1961 will be issued.
                </li>
                <li className="addOnList">
                    In case of any queries, kindly reach out at "Help"/"Support" section of redBus.
                </li>
            </ul>
        </div>
    

        <div className="clearfix continue-booking withpptclink">
            <div className="pptnc-link">
                By clicking on proceed, I agree that I have read and understood the <a href="/info/termscondition" target="_blank">TnCs</a> and the <a href="/info/privacypolicy" target="_blank">Privacy Policy</a>
            </div>
            <div className="pR">
                <div className="booking-amt-details fl clearfix f-bold">
                    <div className="booking-amt-title fl">Total Amount :</div>
                    <div className="booking-amt fl">INR<span className="f-bold">600.00</span></div>
                </div>
                <div className="button-container fr">
                    <input type="submit" className="btn btn-danger" value="Proceed to pay" />
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
         )
}

export default Checkout