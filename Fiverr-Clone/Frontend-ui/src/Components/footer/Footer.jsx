import React from 'react'
import { Link } from 'react-router-dom'
import "../footer/Footer.scss"

import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { TbWorld } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import { RxAccessibility } from "react-icons/rx";


const Footer = () => {
  return (
   <div className="footer">
   
     <div className="topF">
         <div className="ftcol">
             <h3>Categories</h3>
             <Link className='link'>Graphics & Design</Link>
             <Link className='link'>Digital Marketing</Link>
             <Link className='link'>Video & Animation</Link>
             <Link className='link'>Data</Link>
             <Link className='link'>Business</Link>
         </div>
         <div className="ftcol">
             <h3>About</h3>
             <Link className='link' >Graphics & Design</Link>
             <Link className='link' >Digital Marketing</Link>
             <Link className='link' >Video & Animation</Link>
             <Link className='link' >Data</Link>
             <Link className='link' >Business</Link>
         </div>
         <div className="ftcol">
             <h3>Support & Education</h3>
             <Link className='link'>Graphics & Design</Link>
             <Link className='link'>Digital Marketing</Link>
             <Link className='link'>Video & Animation</Link>
             <Link className='link'>Data</Link>
             <Link className='link'>Business</Link>
         </div>
         <div className="ftcol">
             <h3>Community</h3>
             <Link className='link'>Graphics & Design</Link>
             <Link className='link'>Digital Marketing</Link>
             <Link className='link'>Video & Animation</Link>
             <Link className='link'>Data</Link>
             <Link className='link'>Business</Link>
         </div>
         <div className="ftcol">
             <h3>Business Solution</h3>
             <Link className='link'>Graphics & Design</Link>
             <Link className='link'>Digital Marketing</Link>
             <Link className='link'>Video & Animation</Link>
             <Link className='link'>Data</Link>
             <Link className='link'>Business</Link>
         </div>
     </div>
    
     <div className="botF">
        <div className="fbLeft">
            <h3>fiverr.</h3>
           <h4> © Fiverr International Ltd. 2024</h4>
        </div>
        <div className="fbRight">
               <div className="footIcon">
                    <FaTiktok/>
                    <FaInstagram/>
                    <FaLinkedin/>
                    <FaFacebook/>
                    <FaPinterest/>
                    <FaTwitter/>
               </div>
               <div className="footTools">
                <p><TbWorld/>English</p>
                 <p><BsCurrencyRupee/>INR</p>
                 <span><RxAccessibility/></span>
               </div>
        </div>
     </div>
   </div>
  )
}

export default Footer