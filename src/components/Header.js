import React from 'react'
import './../componentCss/Header.css'
import logo1 from './../assets/images/logo.jpg'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#"><img src={logo1} alt="" /></a>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
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
              <li><a href="#">Pet Foods</a></li>
              <li><a href="#">Pet </a></li>
            </ul>
          </li>
          <li><a href="#">Review</a></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#">Login</a>
            <ul className="submenu">
              <li><a href="#">User</a></li>
              <li><a href="#">Admin</a></li>
            </ul>
          </li>
          <li><FaUserCircle className='user-circle'/></li>
        </ul>
      </nav>
    </header>
  )
}
