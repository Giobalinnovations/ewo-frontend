'use client';
import React, { useEffect, useState } from 'react';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import HomePrdLoader from '@/components/loader/home/home-prd-loader';

const tabs = ['new', 'featured', 'topSellers'];

const ProductArea = () => {
  const [activeTab, setActiveTab] = useState('new');
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
    content = product_items.map((prd, i) => (
      <div key={i} className="col-xl-3 col-lg-3 col-sm-6">
        <ProductItem product={prd} />
      </div>
    ));
  }

  return (
    <section className="tp-product-area">
      <div className="container">
        <div className="product-header">
          <h2 className="product-title">Trending Products</h2>
          <div className="product-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => handleActiveTab(tab)}
                className={`product-tab-button ${
                  activeTab === tab ? 'active' : ''
                }`}
              >
                {tab === 'topSellers'
                  ? 'Top Sellers'
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <a href="#" className="view-all-link">
            View All →
          </a>
        </div>
        <div className="row">{content}</div>
      </div>
    </section>
  );
};

export default ProductArea;
