import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(null);
  const sliderRef = useRef(null);

  // Placeholder image URLs
  const images = [
    '/smm1.png',
    '/smm2.png',
    '/smm3.png',
    '/smm4.png',
    '/smm5.png',
    '/smm6.png',
   
  ];

  // Base slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 7500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Handle mouse enter on image
  const handleMouseEnter = (index) => {
    setActiveImage(index);
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  // Handle mouse leave from image
  const handleMouseLeave = () => {
    setActiveImage(null);
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">We Handle SMM like pros</h2>
        
        <div className="w-full h-[450px] flex items-center justify-center overflow-hidden">
          <Slider ref={sliderRef} {...settings} className="w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className="px-2 outline-none cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`relative transition-all duration-500 transform ${
                  activeImage === index ? 'scale-105 z-10' : 'scale-95'
                }`}>
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className={`w-full h-50 object-cover rounded-lg shadow-xl transition-all duration-500 ${
                      activeImage !== null && activeImage !== index ? 'grayscale' : ''
                    }`}
                  />
                  <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
                    activeImage === index ? 'opacity-100' : 'opacity-0'
                  } border-4 pointer-events-none`}></div>
                </div>
                <div className={`mt-3 text-center transition-opacity duration-300 ${
                  activeImage === index ? 'opacity-100' : 'opacity-70'
                }`}>
                  <h3 className="text-xl font-semibold text-white">Project {index + 1}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;