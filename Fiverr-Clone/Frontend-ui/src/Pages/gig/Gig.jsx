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

              <div className="aboutGig">
                  <h4>About this gig</h4>
                  <p>
                  Welcome to my Modern Minimalist Logo Design Gig.

As an experienced graphics designer, I am happy to have you on my gig and would love to let you know a bit briefly about me. I have more than 12 years of professional experience working with 1000+ clients worldwide. 



YOU ARE HERE!! It simply means that you are having a good eye for the designs :)



I have expertise in creating Modern and Premium brand identities. Each business requires a professional logo to effectively convey its services and create an everlasting presence.  

Thus, We focus on creating simple yet effective designs that leave an enduring impression on the customer's mind.
                  </p>
              </div>

              <div className="reviews">
                  <div className="rwbox">
                     <div className="rR">
                        <h3>M</h3>
                     </div>
                     <div className="rL">
                       <h4>medlenmax</h4>
                       <p>❤️ United States</p>
                      <p>I am very pleased with the final result and Abhi was very motivated to reach that point. To get there was a long process however that I was frustrated with at times. I felt it was hard to get across what I was looking for and I believe a language...</p>
                      <span>Helpful? <span>Yes</span> <span>No</span></span>
                     </div>
                  </div>
                  <div className="rwbox">
                     <div className="rR">
                        <h3>M</h3>
                     </div>
                     <div className="rL">
                       <h4>medlenmax</h4>
                       <p>❤️ United States</p>
                      <p>I am very pleased with the final result and Abhi was very motivated to reach that point. To get there was a long process however that I was frustrated with at times. I felt it was hard to get across what I was looking for and I believe a language...</p>
                      <span>Helpful? <span>Yes</span> <span>No</span></span>
                     </div>
                  </div>
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
                 <button>Continue</button>
              </div>
         </div>
      </div>
    </>
  )
}

export default Gig