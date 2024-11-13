import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '@/data/blog-data';

export default function BlogSidebar() {
  return (
    <div className="blog-sidebar">
      {/* Search Widget */}
      <div className="sidebar-widget mb-50">
        <div className="sidebar-search">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="sidebar-widget mb-50">
        <h3 className="sidebar-widget-title">Recent Posts</h3>
        <div className="sidebar-post-list">
          {blogData.slice(0, 3).map(post => (
            <div key={post.id} className="sidebar-post-item">
              <div className="post-thumb">
                <Link href={`/blog/${post.slug ?? post.id}`}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={80}
                    height={80}
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div className="post-content">
                <span className="date">{post.date}</span>
                <h4 className="title">
                  <Link href={`/blog/${post.slug ?? post.id}`}>
                    {post.title.length > 45
                      ? `${post.title.substring(0, 45)}...`
                      : post.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="sidebar-widget mb-50">
        <h3 className="sidebar-widget-title">Categories</h3>
        <div className="sidebar-categories">
          <ul>
            {Array.from(new Set(blogData.map(item => item.category))).map(
              (category, index) => (
                <li key={index}>
                  <Link href={`/blog/category/${category.toLowerCase()}`}>
                    {category}
                    <span>
                      {
                        blogData.filter(item => item.category === category)
                          .length
                      }
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
