import React from 'react'
import './registerStyle.css';


function Signup() {
  return (
      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>

          <div className="input-box">
            <input type="text" placeholder="First Name" required />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Last Name" required />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>

          <div className="input-box">
          <input type="text" placeholder="Password" required />
          </div>

          <div className="input-box">
          <input type="text" placeholder="Confirm Password" required />
          </div>

          <button type="submit">Sign Up</button>

          <div className="login-link">
            <p>Already Registered? <a href="">Login</a></p>
          </div>

        </form>
    </div>
  )
}

export default Signup

