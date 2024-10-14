'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
// internal
import ProductItem from './product-item';
import { useGetOfferProductsQuery } from '@/redux/features/productApi';
import { ArrowRightLong } from '@/svg';
import ErrorMsg from '@/components/common/error-msg';
import HomeOfferPrdLoader from '@/components/loader/home/home-offer-prd-loader';

// slider setting
const sliderSetting = {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.tp-deals-slider-dot',
    clickable: true,
  },
  navigation: {
    nextEl: '.tp-deals-slider-button-next',
    prevEl: '.tp-deals-slider-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const OfferProducts = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetOfferProductsQuery('electronics');

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeOfferPrdLoader loading={isLoading} />;
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
        {...sliderSetting}
        modules={[Navigation, Pagination]}
        className="tp-product-offer-slider-active swiper-container"
      >
        {product_items.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductItem product={item} offer_design={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="tp-product-offer pb-55">
      <div className="container">
        <div className="product-header">
          <div className="product-header-left">
            <h3 className="product-title">Latest Deals for This Week</h3>
            <p className="product-subtitle">
              Don't miss out on this weeks deals
            </p>
          </div>
          <Link href="/shop" className="view-all-link">
            View All <ArrowRightLong />
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-product-offer-slider-wrapper">
              {content}
              <div className="tp-deals-slider-dot tp-swiper-dot text-center mt-40"></div>
              <div className="tp-deals-slider-button-next tp-swiper-next"></div>
              <div className="tp-deals-slider-button-prev tp-swiper-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferProducts;
