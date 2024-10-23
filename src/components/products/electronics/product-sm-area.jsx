'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ErrorMsg from '@/components/common/error-msg';
import ProductSmItem from './product-sm-item';
import HomeSmPrdLoader from '@/components/loader/home/home-sm-prd-loader';
import Link from 'next/link';

const ProductSmArea = () => {
  const [activeTab, setActiveTab] = useState('discount products');
  const {
    data: products,
    isError,
    isLoading,
    refetch,
  } = useGetProductTypeQuery({ type: 'electronics' });

  const tabs = ['discount products', 'featured products', 'selling products'];

  const handleActiveTab = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  // decide what to render
  let content = null;

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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="featured__slider"
      >
        {filteredProducts.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductSmItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="featured tp-product-area">
      <div className="container featured__container">
        <div className="featured__header product-header">
          <h2 className="featured__title product-title">Products</h2>
          <div className="featured__tabs product-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => handleActiveTab(tab)}
                className={`featured__tab product-tab-button ${
                  activeTab === tab ? 'featured__tab--active active' : ''
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <Link href="/products" className="featured__view-all view-all-link">
            View All →
          </Link>
        </div>
        {content}
      </div>
    </section>
  );
};

export default ProductSmArea;
