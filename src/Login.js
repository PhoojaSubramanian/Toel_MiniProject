 import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
// import { BsTwitter } from "react-icons/bs";
export default function Login() {
const[userName,setUserName]=useState('');
 const[password,setPassword]=useState('');
  return (
    <div className='full'>
    <div className='loginBox'>
    <p id="title"><b><center>User Login</center></b></p>
    <input  type="text" value={userName}
     onChange={e=>setUserName(e.target.value)}
    placeholder="USERNAME" required></input><br></br><br></br>
    <input  type="password" value={password}
     onChange={e=>setPassword(e.target.value)}
    placeholder="PASSWORD" required></input><br></br><br></br><br></br>
    <Link to="/destination"><button type='submit' className='btn btn-primary m-5'>LOGIN</button></Link><br></br><br></br>
    <center><Link to="/sign_up">Create Account</Link>or
    <a href='#'> Forgot password?</a></center><br></br>
    <p><center><b>or Sign In using</b></center></p>
    <div className='icons'>
    <ul>
    {/* <li><FcGoogle  size="47px"/></li> */}
    {/* <li><BsFacebook size="40px" color='blue'/></li> */}
    {/* <li><BsTwitter size="40px" color='blue'/></li> */}
    </ul>
    </div>
    </div>
    </div>
  )
}
