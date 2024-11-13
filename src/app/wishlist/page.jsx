import Wrapper from '@/layout/wrapper';
import HeaderTwo from '@/layout/headers/header-2';
import Footer6 from '@/layout/footers/footer-6';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import WishlistArea from '@/components/cart-wishlist/wishlist-area';
import { Suspense } from 'react';

export const metadata = {
  title: 'ewo - My Wishlist',
  description: 'View and manage your favorite items',
};

export default function WishlistPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb
        title="My Wishlist"
        subtitle="Manage Your Favorites"
        customClass="wishlist-breadcrumb"
      />
      <Suspense
        fallback={
          <div className="wishlist-loading">
            <div className="loading-spinner"></div>
          </div>
        }
      >
        <main className="wishlist-main">
          <WishlistArea />
        </main>
      </Suspense>
      <Footer6 variant="gradient" />
    </Wrapper>
  );
}
