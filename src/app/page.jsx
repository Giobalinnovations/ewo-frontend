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

const sampleProducts = [
  {
    id: 1,
    title: 'Thinkware F770 Dash Cam Dual Channel Wifi',
    image: '/assets/img/product.webp',
    discount: 8,
    rating: 3,
    reviewCount: 1,
    oldPrice: 268.99,
    price: 249.99,
    inStock: true,
  },
  {
    id: 2,
    title: 'Technaxx car Alarm with Charging Function',
    image: '/assets/img/product.webp',
    discount: 21,
    superPrice: true,
    rating: 5,
    reviewCount: 1,
    oldPrice: 51.99,
    price: 47.99,
    inStock: true,
  },
  {
    id: 3,
    title: 'Car LED Interior Lights Kit',
    image: '/assets/img/product.webp',
    discount: 15,
    rating: 4,
    reviewCount: 3,
    oldPrice: 39.99,
    price: 33.99,
    inStock: true,
  },
  {
    id: 4,
    title: 'Steering Wheel Cover - Genuine Leather',
    image: '/assets/img/product.webp',
    discount: 10,
    rating: 4.5,
    reviewCount: 7,
    oldPrice: 45.99,
    price: 41.39,
    inStock: true,
  },
  {
    id: 5,
    title: 'Premium Car Phone Mount',
    image: '/assets/img/product.webp',
    superPrice: true,
    rating: 4.8,
    reviewCount: 12,
    price: 29.99,
    inStock: true,
  },
  {
    id: 6,
    title: 'High-Performance Motor Oil 5W-30',
    image: '/assets/img/product.webp',
    discount: 5,
    rating: 4.2,
    reviewCount: 9,
    oldPrice: 32.99,
    price: 31.34,
    inStock: true,
  },
  {
    id: 7,
    title: 'All-Season Floor Mats Set',
    image: '/assets/img/product.webp',
    rating: 4.6,
    reviewCount: 15,
    price: 59.99,
    inStock: false,
  },
];

export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <HomeHeroSlider />
      <ElectronicCategory />
      {/* <FeaturedProducts products={sampleProducts} /> */}
      <ProductArea />
      <BannerArea />
      <OfferProducts />
      <ProductGadgetArea />
      <ProductBanner />
      <NewArrivals />
      <ProductSmArea otherLayout={true} />
      <BlogArea />
      <CtaArea />
      <FeaturedProducts products={sampleProducts} />
      <Footer />
    </Wrapper>
  );
}
