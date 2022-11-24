import React, { useState } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
// import { BsFillPersonFill} from "react-icons/bs";
export default function SignUp() {
 const[firstName,setFirstName]=useState('');
 const[lastName,setLastName]=useState('');
 const[email,setEmail]=useState('');
 const[contact,setContact]=useState('');
 const[gender,setGender]=useState('');
 const[age,setAge]=useState('');
 const[password,setPassword]=useState('');
 const[confirmpassword,setConfirmPassword]=useState('');
  return (
    <div className='signupBox'>
    <p id="title"><b><center>Sign Up</center></b></p>
    <p><center>Create Your Account</center></p>
    <div id='name'>
    <input type="text" value={firstName}
    onChange={e=>setFirstName(e.target.value)}
    placeholder="FirstName" required></input>

    <input id="lname" type="text" value={lastName}
    onChange={e=>setLastName(e.target.value)}
    placeholder="LastName" required></input>
    <br></br><br></br>
    </div>
    <input className='st' type="email" value={email}
    onChange={e=>setEmail(e.target.value)}
    placeholder="Email" required></input>
    <br></br><br></br>

    <input type="text" value={contact}
    onChange={e=>setContact(e.target.value)}
    placeholder="Contact Number" required></input>
    <select className="age">
         <option value="Gender">Gender</option>
         <option value="female">Female</option>
         <option value="male">Male</option>
         <option value="other">Other</option>
   </select>
    <br></br><br></br>
    <input className='st' type="password" value={password}
    onChange={e=>setPassword(e.target.value)}
    placeholder="Enter Password" required></input>
    <br></br><br></br>
    <input className='st' type="confirmpassword" value={confirmpassword}
    onChange={e=>setConfirmPassword(e.target.value)}
    placeholder="Confirm Password" required></input>
    <br></br><br></br><br></br>
    <Link to="/otp"><button className='btn'>SIGN UP</button></Link>
    <p><center><b>Already have an Account? </b>
    <Link to="/login">Log In</Link></center></p>

    </div>
  )
}
