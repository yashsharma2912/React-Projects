import React from 'react'
import { Link } from 'react-router-dom'
import "../footer/Footer.scss"

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
               
        </div>
     </div>
   </div>
  )
}

export default Footer