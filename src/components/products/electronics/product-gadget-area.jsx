'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import Link from 'next/link';
// internal
import { ArrowRight } from '@/svg';
import ProductItem from './product-item';
import PrdCategoryList from './prd-category-list';
import ErrorMsg from '@/components/common/error-msg';
import b_bg_1 from '@assets/img/product/gadget/gadget-banner-1.jpg';
import b_bg_2 from '@assets/img/product/gadget/gadget-banner-2.jpg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import gadget_girl from '@assets/img/product/gadget/gadget-girl.png';
import HomeGadgetPrdLoader from '@/components/loader/home/home-gadget-prd-loader';
import ProductItem2 from './product-item-2';
import Banner2 from '@/components/banner2/Banner2';
import { sidebarBannerData } from '@/components/banner2/bannerStyleData';

const ProductGadgetArea = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: 'electronics' });

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeGadgetPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 6);
    content = product_items.map((prd, i) => (
      <div key={i} className="col-xl-4 col-sm-6">
        <ProductItem2 product={prd} cardStyle="modern" />
      </div>
    ));
  }

  return (
    <>
      <section className="tp-product-gadget-area section-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-product-gadget-sidebar mb-40">
                <div className="h-100">
                  <Banner2
                    items={sidebarBannerData}
                    columns={1}
                    className="gadget-sidebar-banner"
                    banner2AreaPt={0}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-product-gadget-wrapper">
                <div className="row row-gap-4">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGadgetArea;
