import React from 'react'
import './../componentCss/LastFooter.css'
import logoImage from './../assets/images/Footer/logo1.jpg'

function LastFooter() {
  return (
    <footer className="lastfooter">
            <div className="row">
                <div className="col">
                    <img src={logoImage} alt="logo" className="logo" />
                    <p>Discover your perfect match in our gallery of adorable companions.
                    Start your journey to unconditional love today!</p>
                </div>
                <div className="col">
                    <h3>Office<div className="underline"><span></span></div></h3>
                    <p>Kandy Road</p>
                    <p>Dalugama</p>
                    <p>Kelaniya, Sri Lanka</p>
                    <p className="email-id">petcare@gmail.com</p>
                    <h4>+94-12345678</h4>
                </div>
                <div className="col">
                    <h3>Links<div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Service</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter<div className="underline"><span></span></div></h3>
                    <form>
                        <input type="email" placeholder="Enter your email id" required />
                    </form>
                </div>
            </div>
            <hr />
        </footer>
  )
}

export default LastFooter
