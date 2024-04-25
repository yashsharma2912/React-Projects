import React, { useEffect } from 'react'
import { useState } from 'react';

import "../navbar/Navbar.scss"
import { TbWorld } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // variable for navbar effect
  const[active,setActive] = useState(false);

  const handleScroll = () => {
    window.scrollY > 4 ? setActive(true) : setActive(false);
  };
  // navbar effect hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 // useLocation for Navbar 
  const{pathname} = useLocation()
  const currentUser = {
    id: 1,
    name : "Yash",
    isSeller : true,
  }
  const[open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className="container">
         <div className={active || pathname !=="/" ? "topNav active" : "topNav"}>
               <div className="left">
                <Link to="/" className='Link'> <h2>fiverr <span className='dot'>.</span></h2> </Link>
               {(active || pathname !=="/" ) && ( <input type="text" placeholder='What services are you looking for today?' /> )}
               </div>
               <div className="right">
                {}   <Link className={active ? 'active' : "link"}>Fiverr Pro</Link>
                   <Link className={active ? 'active' : "link"}>Explore</Link>
                   <Link className={active ? 'active' : "link"}><TbWorld/>English</Link>
                  {!currentUser?.isSeller && <span>Become a Seller</span> }
                  {!currentUser?.isSeller && <span>Sign in</span> }
                  {!currentUser?.isSeller && <span className='join-btn'>Join</span> }
                  {currentUser?.isSeller && (
                    <div className="user" onClick={()=>setOpen(!open)} >
                       <img src="https://up.yimg.com/ib/th?id=OIP.4z2feTp_Mw25d-lmn1wMdQAAAA&pid=Api&rs=1&c=1&qlt=95&w=80&h=99" alt="profile-pic" />
                       <span >{currentUser?.name}</span>
                      {open && (<div className="option">
                        {currentUser?.isSeller && (<Link to="/MyGigs" className='menuLink'>Gigs</Link> ) }
                        {currentUser?.isSeller && (<Link to="/Add" className='menuLink'>Add New Gig</Link> ) }
                      
                         <Link to="" className='menuLink'>Orders</Link>
                         <Link to="" className='menuLink'>Messages</Link>
                         <Link to="" className='menuLink'>Logout</Link>
                       </div> )}
                    </div> )}
                  
               </div>
               
         </div>
         
        { ( active  || pathname !=="/") && (<div className="botNav">
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
       
      </div>
  
    </div>
  )
}

export default Navbar;