import React, { useState } from 'react'
import "../gigs/Gigs.scss"
import Gigcard from './Gigcard';

import { IoIosArrowDown } from "react-icons/io";


const data = [
   {
    id:1,
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291318306/original/89e36871d08abe03462354c8174a8d106aa7b8ef.png",
    profile: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c44ec3d5ad2d3133c7559d9cae6d997b-1703695890708/d1102f69-261a-4d51-8dda-1b1c5e5f2810.png",
    name: "Yash Sharma",
    star: 5,
    rate: 112.99
   },
   {
    id:2,
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291318306/original/89e36871d08abe03462354c8174a8d106aa7b8ef.png",
    profile: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c44ec3d5ad2d3133c7559d9cae6d997b-1703695890708/d1102f69-261a-4d51-8dda-1b1c5e5f2810.png",
    name: "Sarang Sharma",
    star: 5,
    rate: 212.99
   },
   {
    id:3,
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291318306/original/89e36871d08abe03462354c8174a8d106aa7b8ef.png",
    profile: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c44ec3d5ad2d3133c7559d9cae6d997b-1703695890708/d1102f69-261a-4d51-8dda-1b1c5e5f2810.png",
    name: "Swapnil Sharma",
    star: 5,
    rate: 154.99
   },
   {
    id:4,
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291318306/original/89e36871d08abe03462354c8174a8d106aa7b8ef.png",
    profile: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c44ec3d5ad2d3133c7559d9cae6d997b-1703695890708/d1102f69-261a-4d51-8dda-1b1c5e5f2810.png",
    name: "Om Khulbe",
    star: 5,
    rate: 154.99
   },
];
const Gigs = () => {
   
  const [open,setOpen] = useState(false);
  const [sort,setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  return (
    <div className="gigs">
       <div className="topinfon">
         <p>FIVERR {'>'} GRAPHICS & DESIGN {">"}</p>
         <h1>AI Artists</h1>
         <p>Explore the boundries of art and tech witg Fiverr's AI artists</p>
        <div className="sort">
         <div className="left">
            <span>Budget</span> <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
         </div>
         <div className="right">
             <span>sort by </span>
           {sort ==="sales" ? <p>Best Selling</p> :
             <p>Newest</p> }
             <IoIosArrowDown className='tit' onClick={() => setOpen(!open)}/>
             {open && (<div className="rightlist">
                  <span onClick={()=>reSort("sales")}>Best Selling</span>
                  <span onClick={()=>reSort("createdAt")}>Newest</span>
             </div>)}
         </div>
         </div>
        </div> 

        <div className="cards">
            {data.map((item) => <Gigcard 
            img={item.img}
            pp={item.profile}
            name={item.name}
            desc={item.name}
            star={item.star}
            price={item.rate}
            key={item.id}/>) }
        </div>
    </div>
  )
}

export default Gigs