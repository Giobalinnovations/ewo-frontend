'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Cart, QuickView, Wishlist } from '@/svg';
import { Rating } from 'react-simple-star-rating';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import HomePrdLoader from '@/components/loader/home/home-prd-loader';
import ProductItem2 from './product-item-2';

const ProductArea = ({
  tabs = ['new', 'featured', 'topSellers'],
  activeTabText = 'new',
}) => {
  const [activeTab, setActiveTab] = useState(activeTabText);
  const {
    data: products,
    isError,
    isLoading,
    refetch,
  } = useGetProductTypeQuery({
    type: 'electronics',
    query: `${activeTab}=true`,
  });

  const handleActiveTab = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomePrdLoader loading={isLoading} />;
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
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="featured__slider"
      >
        {product_items.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductItem2 product={product} offer_design={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="featured tp-product-area">
      <div className="container featured__container">
        <div className="featured__header product-header">
          <h2 className="featured__title product-title">Trending Products</h2>
          <div className="featured__tabs product-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => handleActiveTab(tab)}
                className={`featured__tab product-tab-button ${
                  activeTab === tab ? 'featured__tab--active active' : ''
                }`}
              >
                {tab === 'topSellers'
                  ? 'Top Sellers'
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
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

export default ProductArea;
