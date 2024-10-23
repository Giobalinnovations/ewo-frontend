'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Cart, QuickView, Wishlist } from '@/svg';
import { Rating } from 'react-simple-star-rating';

const FeaturedProducts = ({ products }) => {
  const [activeTab, setActiveTab] = useState('Auto Safety & Security');

  const tabs = [
    'Auto Safety & Security',
    'Interior Accessories',
    'Motor Oils',
    'Tires & Wheels',
  ];

  return (
    <section className="featured">
      <div className="featured__container">
        <div className="featured__header">
          <h2 className="featured__title">Featured Products</h2>
          <div className="featured__tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`featured__tab ${
                  activeTab === tab ? 'featured__tab--active' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <Link href="/products" className="featured__view-all">
            View All →
          </Link>
        </div>
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
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="featured__card">
                {product.discount && (
                  <span className="featured__discount">
                    {product.discount}%
                  </span>
                )}
                {product.superPrice && (
                  <span className="featured__super-price">SUPER PRICE</span>
                )}
                <button className="featured__wishlist">
                  <Wishlist />
                </button>
                <div className="featured__image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="featured__image"
                  />
                  <button className="featured__quick-view">
                    <QuickView />
                    Quick View
                  </button>
                </div>
                <div className="featured__content">
                  <h3 className="featured__product-title">
                    <Link href={`/product/${product.id}`}>{product.title}</Link>
                  </h3>
                  <div className="featured__rating">
                    <Rating
                      initialValue={product.rating}
                      readonly={true}
                      size={16}
                      fillColor="#ffa800"
                      emptyColor="#ddd"
                    />
                    <span className="featured__review-count">
                      {product.reviewCount} review
                      {product.reviewCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="featured__price-wrapper">
                    {product.oldPrice && (
                      <span className="featured__old-price">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="featured__price">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="featured__stock">
                    {product.inStock ? (
                      <span className="featured__stock--in">In Stock</span>
                    ) : (
                      <span className="featured__stock--out">Out of Stock</span>
                    )}
                  </div>
                  <button className="featured__add-to-cart">
                    <Cart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
