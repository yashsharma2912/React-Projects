import React, { useEffect } from 'react'
import { useState } from 'react';

import "../../Components/Navbar/Navbar.scss";

const Navbar = () => {
  // variable for navbar effect
  const[active,setActive] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  // navbar effect hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentUser = {
    id: 1,
    name : "Yash",
    isSeller : true,
  }
  const[open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className="container">
         <div className={active ? "topNav active" : "topNav"}>
               <div className="left">
                 <h2>fiverr <span className='dot'>.</span></h2>
               {active && ( <input type="text" placeholder='What services are you looking for today?' /> )}
               </div>
               <div className="right">
                   <span>Fiverr Pro</span>
                   <span>Explore</span>
                   <span>English</span>
                  {!currentUser?.isSeller && <span>Become a Seller</span> }
                   <span>Sign in</span>
                  {!currentUser?.isSeller && <span className='join-btn'>Join</span> }
                  {currentUser?.isSeller && (
                    <div className="user" onClick={()=>setOpen(!open)} >
                       <img src="https://tse3.mm.bing.net/th?id=OIP.ATVrWDqHffN2PsqCbGK8PAHaFj&pid=Api&P=0&h=220" alt="profile-pic" />
                       <span >{currentUser?.name}</span>
                      {open && (<div className="option">
                        {currentUser?.isSeller && (<span>Gigs</span> ) }
                        {currentUser?.isSeller && (<span>Add New Gigs</span> ) }
                      
                         <span>Orders</span>
                         <span>Messages</span>
                         <span>Logout</span>
                       </div> )}
                    </div> )}
                  
               </div>
               
         </div>
         <hr />
        {active && (<div className="botNav">
            <span>Graphics & Design</span>
            <span>Programming & Tech</span>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Writing & Translation</span>
            <span>Music & Audio</span>
            <span>Business</span>
            <span>Data</span>
         </div> )
         }
         <hr />
      </div>
  
    </div>
  )
}

export default Navbar;