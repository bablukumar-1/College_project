import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ObjectHuman from "../DataJson/human";

const DeveloperBanner = () => {
  const [slides, setSlides] = useState(ObjectHuman);
  const swiperRef = useRef(null);

  // Filter slides: Must have at least 4
  const filteredSlides = slides.length >= 4 ? slides.slice(0, 5) : [];

  return (
    <div className="relative w-full min-h-[400px] bg-gradient-to-bl from-[#08FDC7] to-[#07DFF7] flex flex-col items-center justify-center p-4">
      {filteredSlides.length > 0 ? (
        <Swiper
          style={{
            '--swiper-navigation-color': 'red',
            '--swiper-pagination-color': 'red',
          }}
          speed={800}
          parallax={true}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper w-full max-w-4xl" // 🛠 Made container smaller
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {filteredSlides.map((developer, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                
                {/* Left Side - Image */}
                <div className="relative w-full md:w-1/2 h-[350px] md:h-[450px] overflow-hidden">
                  <img
                    src={developer.imagePath}
                    alt={developer.name}
                    className="w-full h-full object-cover object-center rounded-none md:rounded-l-2xl brightness-110"
                  />
                  {/* Correct Overlay */}
                  <div className="absolute inset-0  bg-opacity-20"></div>
                </div>

                {/* Right Side - Content */}
                <div className="relative w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-8 space-y-4 text-gray-800 bg-gradient-to-tr from-gray-50 to-gray-100">
                  <h2 className="text-2xl md:text-4xl font-bold" data-swiper-parallax="-200">
                    {developer.name}
                  </h2>
                  <h3 className="text-lg md:text-2xl text-blue-600" data-swiper-parallax="-150">
                    {developer.projectRole}
                  </h3>
                  <p className="text-sm md:text-base" data-swiper-parallax="-100">
                    {developer.role} | {developer.department} | {developer.college}
                  </p>
                  {developer.batch && (
                    <p className="text-xs md:text-sm font-semibold" data-swiper-parallax="-50">
                      Batch: {developer.batch}
                    </p>
                  )}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center text-red-600 font-bold text-lg">
          Minimum 4 developers required to show the banner!
        </div>
      )}
    </div>
  );
};

export default DeveloperBanner;
