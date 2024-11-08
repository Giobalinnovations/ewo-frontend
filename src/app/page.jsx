import Wrapper from '@/layout/wrapper';
import Header from '@/layout/headers/header';
import HomeHeroSlider from '@/components/hero-banner/home-hero-slider';
import BannerArea from '@/components/banner/banner-area';
import BlogArea from '@/components/blog/electronic/blog-area';
import ElectronicCategory from '@/components/categories/electronic-category';
import CtaArea from '@/components/cta/cta-area';
import FeatureArea from '@/components/features/feature-area';
import InstagramArea from '@/components/instagram/instagram-area';
import NewArrivals from '@/components/products/electronics/new-arrivals';
import OfferProducts from '@/components/products/electronics/offer-products';
import ProductArea from '@/components/products/electronics/product-area';
import ProductBanner from '@/components/products/electronics/product-banner';
import ProductGadgetArea from '@/components/products/electronics/product-gadget-area';
import ProductSmArea from '@/components/products/electronics/product-sm-area';
import Footer from '@/layout/footers/footer';
import GoodCategories from '@/components/GoodCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Banner2 from '@/components/banner2/Banner2';
import {
  bannerDataHome2,
  bannerDataHome3,
  bannerDataHome4,
} from '@/components/banner2/bannerStyleData';

import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';

export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <HomeHeroSlider />
      <ElectronicCategory />
      <ProductArea activeTabText="new" />
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
      {/* <CtaArea /> */}

      <Footer />
    </Wrapper>
  );
}
