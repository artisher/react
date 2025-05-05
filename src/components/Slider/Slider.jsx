import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image11 from "./../../Images/11.jpg"
import image22 from "./../../Images/22.jpg"
import image33 from "./../../Images/33.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <div className="w-[1920px] h-[600px] max-md:hidden">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide ><img src={image11} alt="" className="w-screen" /></SwiperSlide>
                    <SwiperSlide><img src={image22} alt="" className="w-screen" /></SwiperSlide>
                    <SwiperSlide><img src={image33} alt="" className="w-screen" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
