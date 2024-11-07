'use client';
// external
import React, { useState } from 'react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import banner1 from '@assets/img/banner/slider/banner1.webp';
import banner1Mobile from '@assets/img/banner/slider/banner1-mobile.webp';
import { ArrowRightLong, SliderNextBtn, SliderPrevBtn } from '@/svg';

// slider data
const sliderData = [
  {
    id: 1,
    title: 'Your One-Stop Shop for Reliable Auto Parts',
    subtitle: 'Drive with Confidence, Drive with Quality',
    img: banner1,
    mobileImg: banner1Mobile,
  },
  {
    id: 2,
    title: 'Your One-Stop Shop for Reliable Auto Parts',
    subtitle: 'Drive with Confidence, Drive with Quality',
    img: banner1,
    mobileImg: banner1Mobile,
  },
];

const HomeHeroSlider = () => {
  const [active, setActive] = useState(false);

  // handleActiveIndex
  const handleActiveIndex = index => {
    setActive(index === 0);
  };

  return (
    <>
      <section className="tp-slider-area p-relative z-index-1 pb-35">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          effect="fade"
          navigation={{
            nextEl: '.tp-slider-button-next',
            prevEl: '.tp-slider-button-prev',
          }}
          onSlideChange={swiper => handleActiveIndex(swiper.activeIndex)}
          pagination={{ el: '.tp-slider-dot', clickable: true }}
          modules={[Navigation, Pagination, EffectFade]}
          className={`tp-slider-active tp-slider-variation swiper-container ${
            active ? 'is-light' : ''
          }`}
        >
          {sliderData.map(item => (
            <SwiperSlide
              key={item.id}
              className="tp-slider-item tp-slider-height d-flex align-items-center"
              // style={{
              //   backgroundImage: `url(${item.img.src})`,
              //   backgroundSize: 'cover',
              //   backgroundPosition: 'center',
              // }}
            >
              <Image
                src={item?.img?.src ?? ''}
                alt="banner"
                // loading="lazy"
                // placeholder="blur"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-fit-cover object-position-center"
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="tp-slider-content p-relative z-index-1">
                      <h3 className="tp-slider-title text-white">
                        {item.title}
                      </h3>
                      <p className="text-white">{item.subtitle}</p>
                      <div className="tp-slider-btn">
                        <Link
                          href="/shop"
                          className="tp-btn tp-btn-2 tp-btn-white"
                        >
                          Shop Now <ArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-slider-arrow tp-swiper-arrow">
            <button type="button" className="tp-slider-button-prev">
              <SliderPrevBtn />
            </button>
            <button type="button" className="tp-slider-button-next">
              <SliderNextBtn />
            </button>
          </div>
          <div className="tp-slider-dot tp-swiper-dot"></div>
        </Swiper>
      </section>
    </>
  );
};

export default HomeHeroSlider;
