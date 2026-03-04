import React, {useState} from 'react'
import './Footer.css'
import logo from '../Assets/logo.jpg';
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = ({ setMenu }) => {
  return (
    <footer className='footer'>
        <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-brand">
          <img src={logo} alt="PetPaw Logo" />
          <h2>PETPAW</h2>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link to='/' onClick={() => window.scrollTo(0,0)}>Shop</Link>
          <Link to='/dogs' onClick={() => window.scrollTo(0,0)}>Dog</Link>
          <Link to='/cats' onClick={() => window.scrollTo(0,0)}>Cat</Link>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PetPaw. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer