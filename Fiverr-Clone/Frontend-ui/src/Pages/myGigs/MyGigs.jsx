import React from 'react'
import { Link } from 'react-router-dom'
import "../myGigs/mygigs.scss"

import { MdDelete } from "react-icons/md";


const MyGigs = () => {
  return (
    <div className='myGigs'>
        <div className="topmg">
          <h1>Gigs</h1>
          <Link to="/Add"> <button> Add New Gig </button></Link>
        </div>
        <div className="botmg">
            <table>
                 <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Orders</th>
                    <th>Action</th>
                 </tr>
                 <tr>
                    <th>
                        <img src="https://www.jsdelivr.com/open-graph/image/npm/react-icons" className='gigImg' alt="" />
                    </th>
                    <th>
                        <h3>Yash Sharma</h3>
                    </th>
                    <th>$ 99.56</th>
                    <th>65</th>
                    <th>
                        <MdDelete className='del'/>
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
                    <th>85</th>
                    <th>
                        <MdDelete className='del'/>
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
                    <th>165</th>
                    <th>
                        <MdDelete className='del'/>
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
                    <th>5</th>
                    <th>
                        <MdDelete className='del'/>
                    </th>
                 </tr>

            </table>
        </div>
        
    </div>
  )
}

export default MyGigs