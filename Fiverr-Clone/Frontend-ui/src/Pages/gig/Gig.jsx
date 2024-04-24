import React from 'react'
import "./gig.scss"
import { FaClock, FaStar } from 'react-icons/fa'
import { FaCheck } from "react-icons/fa";
import { BiRevision } from "react-icons/bi";




import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Gig = () => {
  return (
    <>
      <div className="gigContainer">
         <div className="leftGig">
          <p>FIVERR {'>'} GRAPHICS & DESIGN {">"}</p>
          <h1>I will create ai generated art for you</h1>
         <div className="profile">
           <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c44ec3d5ad2d3133c7559d9cae6d997b-1703695890708/d1102f69-261a-4d51-8dda-1b1c5e5f2810.png" alt="" />
            <h3>Yash Sharma</h3>
            <div className="star">
               <FaStar className='star'/>
               <FaStar className='star'/>
               <FaStar className='star'/>
               <FaStar className='star'/>
               <span>4</span>
            </div>
          </div>
              <div className="lSwipe">
                  <Swiper navigation={true} loop={true} modules={[Navigation]}>
                      <SwiperSlide>
                           <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/110928855/original/8b65c55172f99d57b28fe8030a9d6695f2f21a6f/do-minimalist-logo-design.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                           <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/f63018122fb99932d345e82fa6a89f2c-1713911042/Opt%2006/create-modern-minimalist-logo-design.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                           <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/170694345/original/e675351539a399d01ca7687825a6c0084e5ea0f7/create-modern-minimalist-logo-design.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                           <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/110928855/original/8b65c55172f99d57b28fe8030a9d6695f2f21a6f/do-minimalist-logo-design.jpg" alt="" />
                      </SwiperSlide>
                  </Swiper>
              </div>
         </div>

         <div className="rightGig">
              <div className="r1">
                 <h3>1 AI generated image</h3>
                 <h2>$ 59.99</h2>
              </div>
              <p className='rdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum expedita ad, </p>
              <div className="r2">
                 <p> <FaClock/> 2 Days Delivery</p>
                 <p> <BiRevision/> 3 Revisions</p>
              </div>
              <div className="r3">
                 <span><FaCheck className='check'/> Promt Writing</span>
                 <span><FaCheck className='check'/> Artwork Delivery</span>
                 <span><FaCheck className='check'/> Image Upscaling</span>
                 <span><FaCheck className='check'/> Additional Design</span>
              </div>
                 <button>Continue</button>
         </div>
      </div>
    </>
  )
}

export default Gig