import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightLong } from '@/svg';

const BlogItem = ({ blog, variant = 'default' }) => {
  return (
    <div className={`tp-blog-item tp-blog-item-${variant} mb-50`}>
      <Link
        href={`/blog-details/${blog.id}`}
        className="tp-blog-thumb p-relative fix"
        style={{ marginBottom: '0px!important' }}
      >
        <Image
          src={blog.img}
          alt={blog.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="tp-blog-meta-top">
          <div className="tp-blog-category">
            <span>{blog.category}</span>
          </div>
        </div>
      </Link>

      <div className="tp-blog-content">
        <div className="tp-blog-meta">
          <span className="date">{blog.date}</span>
        </div>

        <h3
          className={`tp-blog-title ${
            variant === 'minimal' ? 'tp-blog-title-sm' : ''
          }`}
        >
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h3>

        {variant !== 'minimal' && (
          <div className="tp-blog-desc">
            <p>{blog.sm_desc}</p>
          </div>
        )}

        <div className="tp-blog-btn">
          <Link href={`/blog-details/${blog.id}`} className="read-more-btn">
            Read More
            <span className="arrow-icon">
              <ArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
