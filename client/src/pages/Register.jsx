import React from 'react'
import "./Register.css";

function Register() {
  return (
    <div>
        
    <section className="heading">
      <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Register</h1>
    </section>
    <form method="POST" name="myform" onsubmit="register()" className="content">
      <div>
        <label for="name">
          Full Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input type="text" name="name1" id="name" placeholder="First name" />
        <input type="text" name="name2" id="name" placeholder="Last name" />
      </div>
      <br />
      <div>
        <label for="age"
          >Age
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
        >
        <input
          type="number"
          name="number1"
          id="age"
          placeholder="Enter Your age"
        />
        <label for="dob">DOB :</label>
        <input
          type="date"
          name="number2"
          id="dob"
          placeholder="Enter Your DOB"
        />
      </div>
      <br />
      <div>
        <label for="group"> Blood Group :&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <select name="group" id="group">
          <option>Select Your Group</option>
          <option value="a+">A+</option>
          <option value="a-">A-</option>
          <option value="b+">B+</option>
          <option value="b-">B-</option>
          <option value="o+">O+</option>
          <option value="o-">O-</option>
          <option value="ab+">AB+</option>
          <option value="ab-">AB-</option>
        </select>

        <label for="last"> &nbsp;&nbsp;&nbsp;&nbsp;Last Date Donated : </label>
        <input type="date" name="last" id="last" />
      </div>
      <br />
      <div>
        <label for="contact"> Phone number :&nbsp; </label>
        <input
          type="number"
          name="contact"
          id="contact"
          placeholder="Enter your phone number"
        />
        <label for="email">&nbsp;&nbsp;Email Address :</label>
        <input
          type="email"
          name="email "
          id="email"
          placeholder=" Enter Email Address"
        />
      </div>
      <br />
      <div>
        <label for="address"
          >Address
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
        >
        <input
          type="text"
          name="address1"
          id="address"
          placeholder="Street Address"
        />
        <input type="text" name="address2" id="address" placeholder="City" />
        <input type="text" name="address3" id="address" placeholder="State" />
        <input type="text" name="address4" id="address" placeholder="Country" />
      </div>
      <br />
      <div>
        Gender:
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male
        <input type="radio" name="my gender" /> female
        <input type="radio" name="my gender" />
      </div>
      <br />
      <div>
        <label for="disease">Are you sufferring from any disease</label>
        <select name="disease" id="disease">
          <option>Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <br />
      <div>
        <input type="submit" value="Submit Now" className="btn" />
        <input type="reset" value="Reset Now" className="btn" />
      </div>
      <br />
    </form>
  
    </div>
  )
}

export default Register