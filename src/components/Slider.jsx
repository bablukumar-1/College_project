import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay, Parallax, Pagination } from 'swiper/modules'; // 🧑‍💻 Required modules

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import images from '../DataJson/banner';
import ObjectHuman from "../DataJson/human";

// Image Slider Component
const ImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-[#08FDC7] to-[#07DFF7] p-6">
      {/* Main Image Slider */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 1500, // 1.5 second delay
          disableOnInteraction: false, // autoplay continues even after user interaction
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="w-full max-w-5xl h-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img.imagePath}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full max-w-5xl"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img.imagePath}
              alt={`Thumb ${idx}`}
              className="w-full h-28 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export default ImageSlider
