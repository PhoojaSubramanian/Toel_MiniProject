import React from 'react';
import './Otp.css';
import {Link} from 'react-router-dom'
export default function Otp(){
  return(
<div>
  <title>OTP</title>

  <center>
    <div className="boxe">
      <h1>OTP VERIFICATION</h1>
      <p>Please enter the OTP to verify your Account</p>
      <input type="number" id="i" maxLength={1} onkeyup="movetoNext(this, 'j')" />
      <input type="number" maxLength={1} id="j" onkeyup="movetoNext(this, 'k')" />
      <input type="number" maxLength={1} id="k" onkeyup="movetoNext(this, 'l')" />
      <input type="number" maxLength={1} id="l" onkeyup="movetoNext(this,'btn')" /><br /><br /><br />
      <Link to="/destination"><button id="verify"><b>VERIFY</b></button></Link><br /><br /><br />
      <p /><center>Didn't receive OTP?</center><p />
      <a href="#"><center>Resend OTP?</center></a>
    </div>
  </center>
</div>
  )
}
