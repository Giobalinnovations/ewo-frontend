import Wrapper from '@/layout/wrapper';
import HeaderTwo from '@/layout/headers/header-2';
import ShopBreadcrumb from '@/components/breadcrumb/shop-breadcrumb';
import ShopArea from '@/components/shop/shop-area';
import Footer6 from '@/layout/footers/footer-6';

export const metadata = {
  title: 'ewo - Shop Page',
};

export default function ShopPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Shop Grid" subtitle="Shop Grid" />
      <ShopArea />
      <Footer6 variant="gradient" />
    </Wrapper>
  );
}
