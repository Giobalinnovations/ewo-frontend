import Wrapper from '@/layout/wrapper';
import Header from '@/layout/headers/header';
import HomeHeroSlider from '@/components/hero-banner/home-hero-slider';
import BlogArea from '@/components/blog/electronic/blog-area';
import ElectronicCategory from '@/components/categories/electronic-category';
import NewArrivals from '@/components/products/electronics/new-arrivals';
import OfferProducts from '@/components/products/electronics/offer-products';
import ProductArea from '@/components/products/electronics/product-area';
import ProductGadgetArea from '@/components/products/electronics/product-gadget-area';
import ProductSmArea from '@/components/products/electronics/product-sm-area';
import Footer from '@/layout/footers/footer';
import Banner2 from '@/components/banner2/Banner2';
import {
  bannerDataHome2,
  bannerDataHome3,
  bannerDataHome4,
} from '@/components/banner2/bannerStyleData';

import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';
import Footer6 from '@/layout/footers/footer-6';
import BannerDual from '@/components/banner2/BannerDual';

export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <div className="pb-35">
        <HomeHeroSlider />
      </div>

      <ElectronicCategory />
      <ProductArea activeTabText="new" />
      <BannerDual />
      <Banner2 items={[...bannerDataHome2]} columns={3} showBadge={false} />
      <OfferProducts />
      <ProductGadgetArea />
      <Banner2 items={[...bannerDataHome3]} columns={2} showBadge={false} />
      <NewArrivals />
      <ProductSmArea otherLayout={true} />
      <Banner2 items={[...bannerDataHome4]} columns={3} showBadge={false} />
      {/* <FashionTestimonial /> */}
      <BeautyTestimonial />
      <BlogArea />
      <Footer6 variant="gradient" />
    </Wrapper>
  );
}
