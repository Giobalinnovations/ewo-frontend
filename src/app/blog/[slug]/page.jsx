import HeaderTwo from '@/layout/headers/header-2';
import Footer6 from '@/layout/footers/footer-6';
import blogData from '@/data/blog-data';
import { notFound } from 'next/navigation';
import BlogDetailsArea from '@/components/blog/blog-details/blog-details-area';

export async function generateMetadata({ params }) {
  const blog = blogData.find(b => b.slug.toString() === params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} - Auto Parts Blog`,
    description: blog.sm_desc,
  };
}

export default function BlogPost({ params }) {
  const blog = blogData.find(b => b.slug.toString() === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <HeaderTwo style_2={true} />
      <BlogDetailsArea blog={blog} />
      <Footer6 variant="gradient" />
    </>
  );
}

export async function generateStaticParams() {
  return blogData.map(blog => ({
    slug: blog.slug.toString(),
  }));
}
