import React from 'react'
import './../componentCss/FirstFooter.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function FirstFooter() {
  return (
    <footer className="firstfooter">
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href=""><FaFacebook className='icon-facebook'/></a>
                    <a href=""><FaInstagram className='icon-instagram'/></a>
                    <a href=""><FaTwitter className='icon-twitter'/></a>
                    <a href=""><FaYoutube className='icon-youtube'/></a>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024; Designed by <span className="designer">Group 12</span></p>
            </div>
        </footer>
  )
}

export default FirstFooter