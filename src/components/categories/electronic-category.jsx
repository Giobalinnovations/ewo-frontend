'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
// internal
import ErrorMsg from '../common/error-msg';
import { useGetProductTypeCategoryQuery } from '@/redux/features/categoryApi';
import HomeCateLoader from '../loader/home/home-cate-loader';
import SectionHeader from '../common/SectionHeader';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const ElectronicCategory = ({ variant = 'modern' }) => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductTypeCategoryQuery('electronics');
  const router = useRouter();

  // handle category route
  const handleCategoryRoute = title => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace('&', '')
        .split(' ')
        .join('-')}`
    );
  };

  const renderCategoryCard = item => {
    switch (variant) {
      case 'minimal':
        return (
          <div
            className="category-card category-card--minimal"
            onClick={() => handleCategoryRoute(item.parent)}
          >
            <div className="category-card__image">
              <Image
                src={item.img}
                alt={item.parent}
                width={200}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                priority={false}
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="category-card__content">
              <h3 className="category-card__title">{item.parent}</h3>
              <span className="category-card__count">
                {item.products.length} items
              </span>
            </div>
          </div>
        );

      case 'elegant':
        return (
          <div
            className="category-card category-card--elegant"
            onClick={() => handleCategoryRoute(item.parent)}
          >
            <div className="category-card__image">
              <Image
                src={item.img}
                alt={item.parent}
                width={200}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                priority={false}
                loading="lazy"
                quality={75}
              />
              <div className="category-card__overlay">
                <span className="category-card__explore">Explore Now</span>
              </div>
            </div>
            <div className="category-card__content">
              <h3 className="category-card__title">{item.parent}</h3>
              <span className="category-card__count">
                {item.products.length} items
              </span>
            </div>
          </div>
        );

      default: // modern
        return (
          <div
            className="category-card category-card--modern"
            onClick={() => handleCategoryRoute(item.parent)}
          >
            <div className="category-card__image">
              <Image
                src={item.img}
                alt={item.parent}
                width={200}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                priority={false}
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="category-card__content">
              <h3 className="category-card__title">{item.parent}</h3>
              <span className="category-card__count">
                {item.products.length} items
              </span>
              <div className="category-card__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        );
    }
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeCateLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;
    content = (
      <div className="category-slider">
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={{
            enabled: true,
            sticky: true,
            momentumRatio: 0.25,
            momentumVelocityRatio: 0.5,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5.2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6.2,
              spaceBetween: 20,
            },
          }}
          className={`category-swiper category-swiper--${variant}`}
        >
          {category_items.map((item, index) => (
            <SwiperSlide key={index}>{renderCategoryCard(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <section className="category-section">
      <div className="container">
        <SectionHeader
          title="Top Categories"
          subtitle="Discover our premium selection of quality auto parts"
          viewAllLink="/shop"
        />
        {content}
      </div>
    </section>
  );
};

export default ElectronicCategory;
