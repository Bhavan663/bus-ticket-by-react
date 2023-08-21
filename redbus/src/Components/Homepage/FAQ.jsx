import React from 'react'

function FAQ() {
  return (
    <div>
<section className="faq py-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
        <div className="container">
            <h2 style={{fontWeight:"400",margin: "0 0 2.5em",fontSize: "40px"}}>Frequently Asked Questions</h2>
          <div style={{display: "flex",paddingTop: "20px", fontSize:"18px"}}>
            <p className="questions">General</p>
            <p className="questions">Ticket-related</p>
            <p className="questions">Payment</p>
            <p className="questions">cancellation</p>
            <p className="questions">Refund</p>
            <p className="questions">Insurance</p>
            
          </div> 
           <div className="accordion mt-3" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="false" aria-controls="faqCollapse1">
                            What are the advantages of purchasing a bus ticket with Bus?
                        </button>
                    </h2>
                    <div id="faqCollapse1" className="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            You can choose your seat
                            -    You can book your bus tickets online, by phone, or in person
                            -    You can choose from over 1500+ bus operators
                            -    You can choose from buses based on boarding points, timing and bus type.
                        </div>
                    </div>
                </div>
                
              </div>
                <div className="accordion mt-3" id="faqAccordion" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                            Does booking online cost me more?
                        </button>
                    </h2>
                    <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Not at all! The price of the bus ticket is the same as you would get from the bus operator too.The price of hotel voucher is the same or sometimes discounted depending on the season/time.
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion mt-3" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                            Is it mandatory to take a printout of the ticket?
                        </button>
                    </h2>
                    <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            It depends on the bus operator you have booked your ticket with. Even mTickets are available on redBus. For operators that support mTickets, the SMS that is sent to your mobile can be produced at the time of boarding and you will be allowed to travel.

                            For operators that do not support mTickets it is a must to take a printout of the e-ticket and produce it at the time of boarding. The e-ticket is sent to the e-mail ID provided at the time of boarding.
                            
                            To know which operators are mTicket enabled, look for the mTicket icon  under the mTicket column while searching for buses..
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion mt-3" id="faqAccordion" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                            What payment options do I have?
                        </button>
                    </h2>
                    <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Credit card-
Debit card-
Internet banking (Internet enabled online bank account)-
Wallets
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion mt-3" id="faqAccordion" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                            Is it safe to use my credit card on this site?
                        </button>
                    </h2>
                    <div id="faqCollapse5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Transactions on redBus are very safe. We employ the best-in-className security and the transactions done are secure. Apart from being certified by Verisign, redBus uses Secure Socket Layers (SSL) data encryption. Using SSL ensures that the information exchanged with us is never transmitted unencrypted, thus protecting the information from being viewed by unauthorized individuals.
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion mt-3" id="faqAccordion" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse6" aria-expanded="false" aria-controls="faqCollapse6">
                            How can I cancel my bus ticket online?
                        </button>
                    </h2>
                    <div id="faqCollapse6" className="accordion-collapse collapse" aria-labelledby="faqHeading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            You need to click on the cancellation link provided on our home page. Enter your ticket number and the e-mail ID that was provided at the time of booking and click on cancel ticket.
                        </div>
                    </div>
                </div>
                </div>
                 <div className="accordion mt-3" id="faqAccordion" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse7" aria-expanded="false" aria-controls="faqCollapse7">
                            I missed the bus. Do I get a refund?
                        </button>
                    </h2>
                    <div id="faqCollapse7" className="accordion-collapse collapse" aria-labelledby="faqHeading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            redBus provides a 100% refund if the bus is missed due to either redBus or its’ partner company's fault. However, if the bus is missed due to any other reason not directly related to redBus no refund is provided.

                        </div>
                    </div>
                </div>
               </div>
        </div>
        </section>
    </div>
  )
}

export default FAQ
