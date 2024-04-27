import React from 'react'
import { Link } from 'react-router-dom'
import "../myGigs/mygigs.scss"

import { MdMessage } from "react-icons/md";


const MyGigs = () => {
  return (
    <div className='myGigs'>
        <div className="topmg">
          <h1>Orders</h1>
          </div>
        <div className="botmg">
            <table>
                 <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Buyer</th>
                    <th>Contact</th>
                 </tr>
                 <tr>
                    <th>
                        <img src="https://www.jsdelivr.com/open-graph/image/npm/react-icons" className='gigImg' alt="" />
                    </th>
                    <th>
                        <h3>Yash Sharma</h3>
                    </th>
                    <th>$ 99.56</th>
                    <th>Aryan Raj</th>
                    <th>
                        <MdMessage className='msg'/>
                    </th>
                 </tr>
                 <tr>
                    <th>
                        <img src="https://www.jsdelivr.com/open-graph/image/npm/react-icons" className='gigImg' alt="" />
                    </th>
                    <th>
                        <h3>Om Khulbe</h3>
                    </th>
                    <th>$ 199.56</th>
                    <th>John Jocabs</th>
                    <th>
                    <MdMessage className='msg'/>
                    </th>
                 </tr>
                 <tr>
                    <th>
                        <img src="https://www.jsdelivr.com/open-graph/image/npm/react-icons" className='gigImg' alt="" />
                    </th>
                    <th>
                        <h3>Atharva Temkar</h3>
                    </th>
                    <th>$ 999.56</th>
                    <th>Sheikh Rashid</th>
                    <th>
                       <MdMessage className='msg'/>
                    </th>
                 </tr>
                 <tr>
                    <th>
                        <img src="https://www.jsdelivr.com/open-graph/image/npm/react-icons" className='gigImg' alt="" />
                    </th>
                    <th>
                        <h3>Akshay Pawar</h3>
                    </th>
                    <th>$ 9.56</th>
                    <th>Nikhil Gole</th>
                    <th>
                       <MdMessage className='msg'/>
                    </th>
                 </tr>

            </table>
        </div>
        
    </div>
  )
}

export default Orders