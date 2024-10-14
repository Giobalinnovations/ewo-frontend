'use client';
import React, { useEffect, useState } from 'react';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import { ShapeLine, TabLine } from '@/svg';
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
  // handleActiveTab
  const handleActiveTab = tab => {
    setActiveTab(tab);
  };
  // refetch when active value change
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
    <section className="tp-product-area pb-55">
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
            Trending Products
          </h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => handleActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: activeTab === tab ? '#000' : '#757575',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  position: 'relative',
                  paddingBottom: '5px',
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: '#000',
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="row">{content}</div>
      </div>
    </section>
  );
};

export default ProductArea;
