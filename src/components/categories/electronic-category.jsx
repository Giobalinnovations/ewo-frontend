'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// internal
import ErrorMsg from '../common/error-msg';
import { useGetProductTypeCategoryQuery } from '@/redux/features/categoryApi';
import HomeCateLoader from '../loader/home/home-cate-loader';
import SectionHeader from '../common/SectionHeader';

const ElectronicCategory = () => {
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
      <div className="good-categories__grid">
        {category_items.map(item => (
          <div
            className="good-categories__item"
            key={item._id}
            onClick={() => handleCategoryRoute(item.parent)}
          >
            <div className="good-categories__item-image">
              <Image
                src={item.img}
                alt={item.parent}
                width={200}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                priority={false}
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(200, 200)
                )}`}
              />
            </div>
            <div className="good-categories__item-content">
              <h3 className="good-categories__item-title">{item.parent}</h3>
              <p className="good-categories__item-count">
                {item.products.length} items
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="good-categories">
      <div className="container">
        <SectionHeader
          title="Our Good Categories"
          subtitle="Don't miss out on this week's deals"
          viewAllLink="/shop"
          className="good-categories__header"
        />
        {content}
      </div>
    </section>
  );
};

// Helper function to generate shimmer effect
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default ElectronicCategory;
