import React from 'react'
import "../Home/Home.scss"
import fp from "../Home/1.png"

const Home = () => {
  return (
    <div className='home'>
         <div className="Feature-container">
            <div className="h-one">
              <div className="feature-left">
                <h3>Find the right freelance <br /> service, right away</h3>
                <input type="text" placeholder='Search for any service...' />
                <div className="popularTag">
                   <p>Popular:</p>
                   <button>Website Deign</button>
                   <button>WordPress</button>
                   <button>Logo Deign</button>
                </div>
             </div>
             <div className="feature-right">
                   <img src={fp} alt="" />
             </div>
            </div>
         </div>
         <div className="spons">
           
         </div>

         <div className="popularService">
            <h3>Popular Services</h3>
         </div>
    </div>
  )
}

export default Home