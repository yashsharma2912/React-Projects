import React from 'react'
import "../Home/Home.scss"



import fp from "../Home/1.png"
import meta from "../Home/meta.png"
import google  from "../Home/google.png"
import netflix from "../Home/netflix.png"
import png from "../Home/png.png"
import paypal from "../Home/paypal.png"

import sp from "../Home/sp.mp4"
import poster from "../Home/Sp.png"

import banerImg from "../Home/baner.png"
import Slide from '../../Components/slide/Slide'



const Home = () => {
  return (
    <div className='home'>
         <div className="Feature-container">
            <div className="h-one">
              <div className="feature-left">
                <h3>Find the right <i>freelance</i> <br /> services, right away</h3>
                <input type="text" placeholder='Search for any service...' />
                <div className="popularTag">
                   <p>Popular:</p>
                   <button>Website Deign</button>
                   <button>WordPress</button>
                   <button>Logo Deign</button>
                   <button>AI Service</button>
                </div>
             </div>
             <div className="feature-right">
                   <img src={fp} alt="" />
             </div>
            </div>
         </div>
         <div className="spons">
            <h3>
               Trusted by:
            </h3>
               <img src={meta} alt="" />
               <img src={google} alt="" />
               <img src={netflix} alt="" />
               <img src={png} alt="" />
               <img src={paypal} alt="" />
         </div>
         <div className="popularService">
            <h3 className='secHead'>Popular Services</h3>
           <Slide className="psSlide"/>
         </div>
        

        <div className="h-three">
           <div className="left-sp">
               <h3>The best part? Everything.</h3>
               <div className="spInfo">
                <li>Stick to your budget</li>
                <p>Find the right service for every <br /> price point. No hourly rates, just project-based pricing.</p>
               </div>
               <div className="spInfo">
                <li>Get quality work done quickly</li>
                <p>Hand your project over to a talented freelancer in <br />minutes, get long-lasting results.</p>
               </div>
               <div className="spInfo">
                <li>Pay when you're happy</li>
                <p>Upfront quotes mean no surprises. Payments only get <br />released when you approve.</p>
               </div>
               <div className="spInfo">
                <li>Count on 24/7 support</li>
                <p>Our round-the-clock support team is available to help <br />anytime, anywhere.</p>
               </div>
           </div>
           <div className="right-sp">
                 <video src={sp} controls poster={poster}></video>
           </div>
        </div>

        <div className="h-four">
         <h3 className='secHead'>You need it, we've got it</h3>

        </div>

        <div className="h-five">
           <div className="left-baner">
                <h3><span>fiverr</span> pro.</h3>
                <h2>We're here for your <br /><span>e-commerce</span> everything</h2>
               <div className="banerinfo">
               <p>Get a project manager <br />
                   to guide you through each stage of launching your e-Commerce business<p/> <br />
                <p>Accelerate time-to-market <br />
                   with a dedicated team of top-tier freelance experts</p> <br />
                <p>Optimize your budget <br />
                   with a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth</p>
               </p>
               </div>
               <button>Get started</button>
           </div>
           <div className="right-baner">
             <img src={banerImg} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Home