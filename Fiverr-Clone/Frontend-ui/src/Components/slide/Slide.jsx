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

export const Slide2 = () => {

   return(
    <>
     <Swiper
     slidesPerView={4}
     spaceBetween={15}
     navigation={true} 
     modules={[Navigation]}
     className="mySwiper2">
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='ss2'>
               <img className='workthumb' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" alt="" />
                <div className="workBot">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" alt="" />
                   <div className="wo">
                   <h4>Social Media Design</h4>
                    <p>by fernandobengua</p>
                    </div>
                </div>
             </SwiperSlide>
     </Swiper>
    </>
   );
}
