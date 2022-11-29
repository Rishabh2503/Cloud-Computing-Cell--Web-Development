import React from 'react'
import Bg from './image/main.jpg'
import "./reg.css"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'
function Register() {
  const [userlastname,setUser]=useState("")
  function setTheUserlastname(e){
    setUser(e.target.value)
  }
  const [userfirstname,setFirst]=useState("")

  const [userRoll,setTheUserRoll]=useState("")

  const [userId,setTheUserId]=useState("")

  const [userBranch,setTheUserBranch]=useState("")

  const [userYear,setTheUserYear]=useState("")

  const [useremail,setTheUseremail]=useState("")

  const [userphone,setTheUserphone]=useState("")

  var data={firstname:userfirstname,email:useremail,lastname:userlastname,Rollno:userRoll,email:useremail,StudentID:userId,Branch:userBranch,Year:userYear}

  function SendDtata(event){
    console.log(data)
    event.preventDefault()
    setUser("")
    setTheUserRoll("")
    setTheUserId("")
    setTheUserBranch("")
    setTheUserYear("")
    setTheUseremail("")
    setTheUserphone("")
    setFirst("")
   axios.post('https://regis-production.up.railway.app/register',data).then((res)=>{
    console.log(res)
   })
  }

  return (
    <>
      <Navbar />
    <div
    className="wrapper6"
  >
    <div className="inner6 reveal">
        <div className="image-holder6">
          <img src={Bg} alt="image" className='bg17' />
        </div>
        <form onsubmit="sendEmail(); reset(); return false" id="form6">
        <h3>Registration Form</h3>
          <div className="form-group6">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
              className="form-control6"
              value={userfirstname}
              onChange={(e)=>{setFirst(e.target.value)}}
            />
            <br />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              className="form-control6"
              value={userlastname}
              onChange={(e)=>{setUser(e.target.value)}}
            />
            <br />
          </div>
          <div className="form-group6">
            <input
              type="text"
              id="lname."
              name="Rollno"
              placeholder="Roll No."
              className="form-control6"
              value={userRoll}
              onChange={(e)=>{setTheUserRoll(e.target.value)}}
            />
            <br />
            <input
              type="text"
              id="lname"
              name="StudentID"
              placeholder="StudentID"
              className="form-control6"
              value={userId}
              onChange={(e)=>{setTheUserId(e.target.value)}}
            />
            <br />
          </div>
          <div className="form-group6">
            <input
              type="text"
              id="lname."
              name="Branch"
              placeholder="Branch"
              className="form-control6"
              value={userBranch}
              onChange={(e)=>{setTheUserBranch(e.target.value)}}
            />
            <br />
            <input
              type="text"
              id="lname"
              name="Year"
              placeholder="Year"
              className="form-control6"
              value={userYear}
              onChange={(e)=>{setTheUserYear(e.target.value)}}
            />
            <br />
          </div>
          <div className="form-wrapper6">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              className="form-control6"
              value={useremail}
              onChange={(e)=>{setTheUseremail(e.target.value)}}
            />
            <br />
            <input
            type="text"
            id="lname"
            name="number"
            placeholder="Phone Number"
            className="form-control6"
            value={userphone}
            onChange={(e)=>{setTheUserphone(e.target.value)}}
          />
          </div>
          <button className="btn17" type="submit" onClick={SendDtata}>
            Registration
        </button>
        <br />
        </form>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Register