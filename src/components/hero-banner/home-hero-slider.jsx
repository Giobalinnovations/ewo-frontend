'use client';
import React from 'react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

// slider data
const sliderData = [
  {
    id: 1,
    desktopImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto/v1732100385/EWO_Slider_01_qadgov.webp',
    mobileImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto/v1732085444/EWO_430x360_01_sjjtr8.webp',
    alt: 'Hero banner 1',
  },
  {
    id: 2,
    desktopImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto/v1732100385/EWO_Slider_02_frthom.webp',
    mobileImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto/v1732085444/EWO_430x360_02_zr1lmq.webp',
    alt: 'Hero banner 2',
  },
  {
    id: 3,
    desktopImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/f_auto,q_auto/v1732100385/EWO_Slider_03_arfgn2.webp',
    mobileImg:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto/v1732085444/EWO_430x360_03_ck5v0u.webp',
    alt: 'Hero banner 3',
  },
];

const HomeHeroSlider = () => {
  return (
    <section className="hero-slider">
      <Swiper
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: '.hero-slider-pagination',
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        grabCursor={true}
        modules={[Pagination, EffectFade, Autoplay]}
        className="hero-slider-container"
      >
        {sliderData.map(slide => (
          <SwiperSlide key={slide.id} className="hero-slide">
            <Link href="/shop" className="block w-full h-full">
              {/* Desktop Image */}
              <div className="hero-slide-desktop">
                <Image
                  src={slide.desktopImg}
                  alt={slide.alt}
                  width={1920}
                  height={800}
                  priority
                  unoptimized
                  sizes="100vw"
                  quality={95}
                  className="hero-slide-img"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>

              {/* Mobile Image */}
              <div className="hero-slide-mobile md:hidden w-full">
                <Image
                  src={slide.mobileImg}
                  alt={slide.alt}
                  fill
                  priority
                  unoptimized
                  sizes="100vw"
                  quality={90}
                  className="hero-slide-img"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="hero-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default HomeHeroSlider;
