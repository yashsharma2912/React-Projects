import React from 'react'
import "../gigs/gc.scss"

import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Gigcard = (props) => {
  return (
    <div className='gigcard'>
        <div className="top">
            <img src={props.img} className='gigpic' alt="" />
            <div className="topinfo">
                <div className="name">
                  <img src={props.pp} alt="" />
                  <h3>{props.name}</h3>
                </div>
                <h4>{props.desc}</h4>
                <span className='rating'><FaStar className='star'/><span>{props.star}</span></span>
            </div>
        </div>
        <div className="bot">
             <span><FaHeart className='heart'/></span>
             <div className="botr">
                 <p>STARTING AT</p>
                 <h3>${props.price}</h3>
             </div>
        </div>
    </div>
  )
}

export default Gigcard 