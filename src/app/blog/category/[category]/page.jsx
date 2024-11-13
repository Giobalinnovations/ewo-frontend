import BlogPageArea from '@/components/blog/blog-page-area';
import HeaderTwo from '@/layout/headers/header-2';
import Footer6 from '@/layout/footers/footer-6';
import blogData from '@/data/blog-data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const category = decodeURIComponent(params.category);
  const blogs = blogData.filter(
    blog => blog.category.toLowerCase() === category.toLowerCase()
  );

  if (!blogs.length) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${category} - Auto Parts Blog Category`,
    description: `Browse our collection of blog posts about ${category.toLowerCase()}.`,
  };
}

export default function CategoryPage({ params }) {
  const category = decodeURIComponent(params.category);
  const filteredBlogs = blogData.filter(
    blog => blog.category.toLowerCase() === category.toLowerCase()
  );

  if (!filteredBlogs.length) {
    notFound();
  }

  return (
    <>
      <HeaderTwo style_2={true} />
      <BlogPageArea blogs={filteredBlogs} category={category} />
      <Footer6 variant="gradient" />
    </>
  );
}

export async function generateStaticParams() {
  const categories = Array.from(
    new Set(blogData.map(blog => blog.category.toLowerCase()))
  );

  return categories.map(category => ({
    category: category,
  }));
}
