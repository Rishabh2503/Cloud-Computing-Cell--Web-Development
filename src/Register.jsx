import React from 'react'
import Bg from './image/main.jpg'
import "./reg.css"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function Register() {
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
            />
            <br />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              className="form-control6"
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
            />
            <br />
            <input
              type="text"
              id="lname"
              name="StudentID"
              placeholder="StudentID"
              className="form-control6"
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
            />
            <br />
            <input
              type="text"
              id="lname"
              name="Year"
              placeholder="Year"
              className="form-control6"
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
            />
            <br />
            <input
            type="text"
            id="lname"
            name="number"
            placeholder="Phone Number"
            className="form-control6"
          />
          </div>
          <button className="btn17" type="submit">
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