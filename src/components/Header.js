import React from 'react'
import './../componentCss/Header.css'
import logo1 from './../assets/images/logo.jpg'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#"><img src={logo1} alt="" /></a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          {/* <li><a href="#">About Us</a></li> */}
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a>
            <ul className="submenu">
              <li><a href="#">Dogs</a></li>
              <li><a href="#">Cats</a></li>
              <li><a href="#">Other</a></li>
            </ul>
          </li>
          <li><a href="#">Store</a>
          <ul className="submenu">
              <li><a href="#">Dogs</a></li>
              <li><a href="#">Cats</a></li>
              <li><a href="#">Other</a></li>
              <li><a href="#">Other</a></li>
              <li><a href="#">Other</a></li>
              <li><a href="#">Other</a></li>
              <li><a href="#">Other</a></li>
            </ul>
          </li>
          <li><a href="#">Review</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}
