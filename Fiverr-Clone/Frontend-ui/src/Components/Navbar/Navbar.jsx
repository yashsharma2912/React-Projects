import React from 'react'
import "../../Components/Navbar/Navbar.scss";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
         <div className="topNav">
               <div className="left">
                 <h2>fiverr <span className='dot'>.</span></h2>
                 <input type="text" placeholder='What services are you looking for today?' />
               </div>
               <div className="right">
                   <span>Fiverr Pro</span>
                   <span>Explore</span>
                   <span>English</span>
                   <span>Become a Seller</span>
                   <span>Sign in</span>
                   <span className='join-btn'>Join</span>
               </div>
         </div>
         <div className="botNav">

         </div>
      </div>
    </div>
  )
}

export default Navbar