import React from 'react'
import { FaGoogle } from 'react-icons/fa'
function Login() {
  return (

    <div className='login d-flex' style={{marginTop:'50px',height:'fit-content',width:'55%',marginLeft:'20%'}}>
      <div className=''>
<img src="images/Login.jpeg" alt="" />
      </div>
      <div className='' style={{paddingLeft:'15px'}}>
      <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" style={{paddingTop:"15px"}} />
      <p style={{paddingTop:'5px',fontSize:'23px',color:"red"}}>Sign in to avail exciting discounts and cashbacks!!</p>
  <div className="input-group input-group-lg" style={{width:'90%'}}>
  <span className="input-group-text" id="inputGroup-sizing-lg">+91</span>
  <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required  aria-describedby="inputGroup-sizing-lg" />
</div>
<div style={{paddingTop:'15px ',width:'90%'}}>
  <button style={{width:'100%',fontSize:'15px',fontWeight:'600', paddingTop:'10px',paddingBottom:'10px',backgroundColor:"#D84E55",color:'white',border:'transparent'}} >
    GENERATE OTP (One Time Password)
  </button>
</div>
<p style={{textAlign:'center',paddingTop:'10px'}}><span style={{fontWeight:'600 '}}>OR ,</span> Connect using social accounts</p>
      <div>
        <button style={{marginLeft:'20%',backgroundColor:'white'}}>
<span style={{paddingRight:'5px',boxShadow: '2px 0 0 0 black'}}>{<FaGoogle/>}</span><span style={{paddingLeft:'15px'}}>Sign in with Google Account</span>        </button>
      </div>
      <div style={{fontWeight:'400',fontSize:'15px'}}>
      <p style={{textAlign:'center' , paddingTop:'15px'}}>By signing up, you agree to our</p>
      <p style={{color:'blue',textAlign:'center'}}>Terms & Conditions <span style={{color:'black'}}>and</span>  <span style={{color:"blue"}}>Privacy Policy</span> </p>
      
      </div>
      
      </div>
    </div>
  )
}

export default Login
