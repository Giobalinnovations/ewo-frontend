'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import blogData from '@/data/blog-data';
import BlogItem from './blog-item';

import SectionHeader from '@/components/common/SectionHeader';

// slider setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.tp-blog-main-slider-button-next',
    prevEl: '.tp-blog-main-slider-button-prev',
  },
  pagination: {
    el: '.tp-blog-main-slider-dot',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const BlogArea = () => {
  const blogs = blogData;
  return (
    <section className="tp-blog-area section-pb">
      <div className="container">
        <SectionHeader title="Latest News & Articles" viewAllLink="/blog" />
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-main-slider">
              <Swiper
                {...slider_setting}
                modules={[Pagination, Navigation, Autoplay]}
                className="tp-blog-main-slider-active swiper-container"
              >
                {blogs.map(blog => (
                  <SwiperSlide key={blog.id}>
                    <BlogItem blog={blog} variant="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
