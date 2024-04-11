import React, { useEffect } from 'react'
import { useState } from 'react';

import "../../Components/Navbar/Navbar.scss";

const Navbar = () => {
  const[active,setActive] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
                   <span>Become a Seller</span>
                   <span>Sign in</span>
                   <span className='join-btn'>Join</span>
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
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
      <h1>yash</h1>
    </div>
  )
}

export default Navbar