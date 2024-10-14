'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// internal
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import { NextArr, PrevArr } from '@/svg';
import ErrorMsg from '@/components/common/error-msg';
import ProductItem from './product-item';
import HomeNewArrivalPrdLoader from '@/components/loader/home/home-newArrival-prd-loader';

// slider setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.tp-arrival-slider-dot',
    clickable: true,
  },
  navigation: {
    nextEl: '.tp-arrival-slider-button-next',
    prevEl: '.tp-arrival-slider-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const NewArrivals = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: 'electronics', query: 'new=true' });
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeNewArrivalPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = (
      <Swiper
        {...slider_setting}
        modules={[Navigation, Pagination]}
        className="tp-product-arrival-active swiper-container"
      >
        {product_items.map(item => (
          <SwiperSlide key={item._id}>
            <ProductItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <>
      <section className="tp-product-arrival-area pb-55">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '10px',
              marginBottom: '20px',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
              New Arrivals
            </h2>
            <div className="tp-product-arrival-arrow tp-swiper-arrow text-end">
              <button
                type="button"
                className="tp-arrival-slider-button-prev"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px',
                }}
              >
                <PrevArr />
              </button>{' '}
              <button
                type="button"
                className="tp-arrival-slider-button-next"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px',
                }}
              >
                <NextArr />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-product-arrival-slider fix">{content}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
