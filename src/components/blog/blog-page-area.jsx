import React from 'react';
import BlogSidebar from './blog-sidebar';
import BlogItem from './electronic/blog-item';
import blogData from '@/data/blog-data';
import Pagination from '../shared/pagination';

export default function BlogPageArea({ blogs = blogData, category = '' }) {
  return (
    <section className="blog-area pt-100 pb-100">
      <div className="container">
        {category && (
          <div className="row mb-50">
            <div className="col-12">
              <div className="category-title">
                <h2>Category: {category}</h2>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="blog-post-wrapper">
              <div className="row">
                {blogs.map(blog => (
                  <div key={blog.id} className="col-12">
                    <BlogItem blog={blog} variant="horizontal" />
                  </div>
                ))}
              </div>
              {blogs.length > 0 ? (
                <Pagination />
              ) : (
                <div className="no-posts text-center mt-50">
                  <h3>No posts found</h3>
                  <p>There are no blog posts in this category yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <BlogSidebar currentCategory={category} />
          </div>
        </div>
      </div>
    </section>
  );
}
