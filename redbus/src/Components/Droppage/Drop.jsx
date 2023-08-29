import React from 'react'

function Drop() {
  return (
    <div>
        <div className="bp-dp-selector-container">
      <div className="">
        <header className="modal-header clearfix">
          <div className="fl w-50 selector default-clr bp selected-bpdp-color tac">
            <span data-value="bp" className="bpdp-point">BOARDING POINT</span>
          </div>
          <div className="fl w-50 selector default-clr dp tac">
            <span data-value="dp" className="bpdp-point">DROPPING POINT</span>
          </div>
        </header>
        <ul data-value="bp" className="select-list scrollbar height-bpdp-double-deck bpdp-name-cleanup-ul">
            <li className="db oh">
              <div>
                <div className="radio-css">
                  <div className="radio-unchecked"></div>
                </div>
                <div className="bpDpTime-css">
                  <span className="time bpdp-time"> 20:45 </span>
                </div>
                <div className="bpDpAddr-css-container">
                  <div className="bpDpAddr-css">
                    <span className="loc fw-700 capitalize" title="Egmore">Egmore</span>
                    <div className="bpdpPanelAddress capitalize">Near Albert Theatre</div>
                  </div>
                </div>
              </div>
            </li>



        




                

                <hr className="hr-bpDpSummary" />
                <div className="margin-t-b-10">
                  <span className="fares-lb">Amount</span>
                  <span className="fareDisclaimer margin-l-5">( Taxes will be calculated during payment )</span>
                  <span className="fr fare-summary-value">
                    <span className="fare-summary-currency">INR</span>
                    <span>700.00</span>
                  </span>
                </div>
                <button className="button continue inactive text-trans-uc w-h-cont">continue</button>
                </ul>
                </div>
                </div>
                </div>




    
  )
}

export default Drop
