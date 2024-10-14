'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// internal
import ErrorMsg from '../common/error-msg';
import { useGetProductTypeCategoryQuery } from '@/redux/features/categoryApi';
import HomeCateLoader from '../loader/home/home-cate-loader';

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
      <div className="category-grid">
        {category_items.map(item => (
          <div
            className="category-item"
            key={item._id}
            onClick={() => handleCategoryRoute(item.parent)}
          >
            <div className="category-image">
              <Image
                src={item.img}
                alt={item.parent}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            <div className="category-info">
              <h3 className="category-title">{item.parent}</h3>
              <span className="category-count">
                {item.products.length} items
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="category-section">
      <div className="container">
        <div className="category-header">
          <div className="category-header-left">
            <h2 className="category-main-title">Our Good Categories</h2>
            <p className="category-subtitle">
              Don't miss out on this week's deals
            </p>
          </div>
          <Link href="/shop" className="view-all-link">
            View All →
          </Link>
        </div>
        {content}
      </div>
    </section>
  );
};

export default ElectronicCategory;
