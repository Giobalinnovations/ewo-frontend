import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from '../blog-sidebar';
import { ArrowRightLong } from '@/svg';

export default function BlogDetailsArea({ blog }) {
  return (
    <section className="blog-details-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-wrapper">
              {/* Blog Header */}
              <div className="blog-details-header mb-40">
                <h1 className="blog-details-title mb-20">{blog.title}</h1>
                <div className="blog-details-meta">
                  <span className="date">
                    <i className="far fa-calendar-alt"></i> {blog.date}
                  </span>
                  <span className="category">
                    <i className="far fa-folder-open"></i> {blog.category}
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="blog-details-thumb mb-40">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={800}
                  height={500}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                  }}
                  priority
                />
              </div>

              {/* Blog Content */}
              <div className="blog-details-content">
                <div className="blog-details-desc">
                  <p className="mb-30">{blog.sm_desc}</p>

                  <h3 className="mb-20">Key Features and Benefits</h3>
                  <p>
                    When it comes to maintaining your vehicle's performance and
                    safety, choosing the right parts is crucial. Here are some
                    important considerations:
                  </p>

                  <ul className="blog-details-list mt-30 mb-30">
                    <li>Quality and Durability</li>
                    <li>Compatibility with Your Vehicle</li>
                    <li>Warranty Coverage</li>
                    <li>Installation Requirements</li>
                  </ul>

                  <blockquote className="blog-details-quote">
                    <p>
                      "Investing in quality auto parts is not just about
                      maintaining your vehicle – it's about ensuring your safety
                      and peace of mind on the road."
                    </p>
                    <cite>Auto Expert</cite>
                  </blockquote>

                  <h3 className="mb-20 mt-40">Making the Right Choice</h3>
                  <p>
                    Consider these factors when selecting replacement parts for
                    your vehicle:
                  </p>

                  <div className="blog-details-img-box row mt-40">
                    <div className="col-md-6 mb-30">
                      <Image
                        src={blog.img}
                        alt="Feature Image 1"
                        width={400}
                        height={300}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-30">
                      <Image
                        src={blog.img}
                        alt="Feature Image 2"
                        width={400}
                        height={300}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Tags & Social Share */}
                <div className="blog-details-footer mt-50">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="blog-details-tags">
                        <span>Tags:</span>
                        <Link href="/blog/category/auto-parts">Auto Parts</Link>
                        <Link href="/blog/category/maintenance">
                          Maintenance
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-details-share text-md-end">
                        <span>Share:</span>
                        <a href="#" aria-label="Share on Facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Share on Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Share on LinkedIn">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="blog-details-nav mt-50 pt-30 pb-30">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="prev-blog text-md-start text-center">
                        <Link
                          href={`/blog/${blog.id - 1}`}
                          className="prev-btn"
                        >
                          <ArrowRightLong /> Previous Post
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="next-blog text-md-end text-center">
                        <Link
                          href={`/blog/${blog.id + 1}`}
                          className="next-btn"
                        >
                          Next Post <ArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
