import BlogPageArea from '@/components/blog/blog-page-area';
import Footer6 from '@/layout/footers/footer-6';
import HeaderTwo from '@/layout/headers/header-2';

export const metadata = {
  title: 'Blog - Latest Auto Parts News & Updates',
  description:
    'Stay updated with the latest news and insights about auto parts and vehicle maintenance.',
};

export default function BlogPage() {
  return (
    <>
      <HeaderTwo style_2={true} />
      <BlogPageArea />
      <Footer6 variant="gradient" />
    </>
  );
}
