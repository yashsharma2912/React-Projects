import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../Components/slide/Slide.scss';
import ps1 from "../../Pages/Home/ps1.png"
// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper 
       slidesPerView={5}
       spaceBetween={15}
       navigation={true} 
       modules={[Navigation]}
       className="mySwiper">
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="pscardinfo">
            <p className="psdesc">This is Desc of this card</p>
            <h3>Logo Designing</h3>
            </div>
            <img src={ps1} alt="" />
        </SwiperSlide>
     
       
      </Swiper>
    </>
  );
}
