'use client';
import React from 'react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// slider data
const sliderData = [
  {
    id: 1,
    desktopImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto/v1731326596/EWO_BANNER_2_1_lsyohw.jpg',
    mobileImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto,w_768/v1731326596/EWO_BANNER_2_1_lsyohw.jpg',
    alt: 'Hero banner 1',
  },
  {
    id: 2,
    desktopImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto/v1731326622/EWO_BANNER_rtzlvt.jpg',
    mobileImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto,w_768/v1731326622/EWO_BANNER_rtzlvt.jpg',
    alt: 'Hero banner 2',
  },
  {
    id: 3,
    desktopImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto/v1731326612/EWO_BANNER_2_vb5vzz.jpg',
    mobileImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto,w_768/v1731326612/EWO_BANNER_2_vb5vzz.jpg',
    alt: 'Hero banner 3',
  },
];

const HomeHeroSlider = () => {
  return (
    <section className="hero-slider">
      <Swiper
        slidesPerView={1}
        effect="fade"
        loop={true}
        navigation={{
          nextEl: '.hero-slider-next',
          prevEl: '.hero-slider-prev',
        }}
        pagination={{
          el: '.hero-slider-pagination',
          clickable: true,
        }}
        modules={[Navigation, Pagination, EffectFade]}
        className="hero-slider-container"
      >
        {sliderData.map(slide => (
          <SwiperSlide key={slide.id} className="hero-slide">
            {/* Desktop Image */}
            <div className="hero-slide-desktop">
              <Image
                src={slide.desktopImg}
                alt={slide.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 100vw"
                quality={95}
                className="hero-slide-img"
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Mobile Image */}
            <div className="hero-slide-mobile">
              <Image
                src={slide.mobileImg}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                quality={90}
                className="hero-slide-img"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button className="hero-slider-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button className="hero-slider-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        {/* Pagination */}
        <div className="hero-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default HomeHeroSlider;
