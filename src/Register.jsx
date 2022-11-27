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
    class="wrapper6"
  >
    <div class="inner6">
        <div class="image-holder6">
          <img src={Bg} alt="image" class='bg17' />
        </div>
        <form onsubmit="sendEmail(); reset(); return false" id="form6">
        <h3>Registration Form</h3>
          <div class="form-group6">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
              class="form-control6"
            />
            <br />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              class="form-control6"
            />
            <br />
          </div>
          <div class="form-group6">
            <input
              type="text"
              id="lname."
              name="Rollno"
              placeholder="Roll No."
              class="form-control6"
            />
            <br />
            <input
              type="text"
              id="lname"
              name="StudentID"
              placeholder="StudentID"
              class="form-control6"
            />
            <br />
          </div>
          <div class="form-group6">
            <input
              type="text"
              id="lname."
              name="Branch"
              placeholder="Branch"
              class="form-control6"
            />
            <br />
            <input
              type="text"
              id="lname"
              name="Year"
              placeholder="Year"
              class="form-control6"
            />
            <br />
          </div>
          <div class="form-wrapper6">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              class="form-control6"
            />
            <br />
            <input
            type="text"
            id="lname"
            name="number"
            placeholder="Phone Number"
            class="form-control6"
          />
          </div>
          <button class="btn17" type="submit">
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