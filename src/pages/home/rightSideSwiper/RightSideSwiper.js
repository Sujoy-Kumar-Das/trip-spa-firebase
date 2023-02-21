import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";



const RightSideSwiper = ({places,handelUsePlace}) => {
  return (
    <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
          places.map(place=> <SwiperSlide onClick={()=>handelUsePlace(place.id)}>
            < img className='h-80' style={{width:'900px'}} src={place.placeImg} alt="" />
            <h2 className=' relative bottom-16 text-center text-3xl text-white'>{place.placeName}</h2>
          </SwiperSlide>)
        }
      </Swiper>
  );
};

export default RightSideSwiper;