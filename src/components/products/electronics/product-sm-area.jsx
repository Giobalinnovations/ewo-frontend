'use client';
import React, { useState, useEffect } from 'react';
// internal
import { ShapeLineSm } from '@/svg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ErrorMsg from '@/components/common/error-msg';
import ProductSmItem from './product-sm-item';
import HomeSmPrdLoader from '@/components/loader/home/home-sm-prd-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
const tabs = ['discount products', 'featured products', 'selling products'];
// slider setting
// slider setting
const sliderSetting = {
  slidesPerView: 4,
  spaceBetween: 20,
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
const ProductSmArea = () => {
  const [activeTab, setActiveTab] = useState('discount products');
  const {
    data: products,
    isError,
    isLoading,
    refetch,
  } = useGetProductTypeQuery({ type: 'electronics' });
  // decide what to render
  let content = null;

  const handleActiveTab = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  if (isLoading) {
    content = <HomeSmPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (
    !isLoading &&
    !isError &&
    (!products?.data || products.data.length === 0)
  ) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    let filteredProducts = [];

    if (activeTab === 'discount products') {
      filteredProducts = products.data.filter(p => p.discount > 0).slice(0, 3);
    } else if (activeTab === 'featured products') {
      filteredProducts = products.data.filter(p => p.featured).slice(0, 3);
    } else if (activeTab === 'selling products') {
      filteredProducts = products.data
        .slice()
        .sort((a, b) => b.sellCount - a.sellCount)
        .slice(0, 3);
    }

    content = (
      <div className="row">
        {filteredProducts.length > 0 ? (
          <Swiper
            {...sliderSetting}
            modules={[Navigation, Pagination]}
            className="tp-product-offer-slider-active swiper-container"
          >
            {filteredProducts.map(item => (
              <SwiperSlide key={item._id}>
                <ProductSmItem product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ErrorMsg msg={`No ${activeTab} found!`} />
        )}
      </div>
    );
  }
  return (
    <>
      <section className="tp-product-area section-pb">
        <div className="container">
          <div className="product-header">
            <h2 className="product-title">Products</h2>
            <div className="product-tabs">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => handleActiveTab(tab)}
                  className={`product-tab-button ${
                    activeTab === tab ? 'active' : ''
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <a href="#" className="view-all-link">
              View All →
            </a>
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
    </>
  );
};

export default ProductSmArea;
