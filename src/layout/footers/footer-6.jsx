'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pay from '@assets/img/footer/footer-pay.png';
import logo from '@assets/img/logo/logo.webp';

const Footer6 = ({ variant = 'default' }) => {
  return (
    <footer className={`footer-6 footer-style-${variant}`}>
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            {/* Column 1 - Logo & Social */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Ewo"
                      priority
                      width={140}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="social-links">
                  <Link href="/" className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/" className="social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="/" className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link href="/" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/" className="social-icon youtube">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links Columns */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="row">
                {/* Account Links */}
                <div className="col-md-4">
                  <div className="footer-widget">
                    <h3 className="footer-title">Account</h3>
                    <div className="footer-menu">
                      <Link href="/dashboard">Dashboard</Link>
                      <Link href="/orders">Orders</Link>
                      <Link href="/wishlist">Wishlist</Link>
                      <Link href="/my-garage">My garage</Link>
                      <Link href="/addresses">Addresses</Link>
                    </div>
                  </div>
                </div>

                {/* Catalog Links */}
                <div className="col-md-4">
                  <div className="footer-widget">
                    <h3 className="footer-title">Catalog</h3>
                    <div className="footer-menu">
                      <Link href="/shop-by-parts">Shop by parts</Link>
                      <Link href="/shop-by-brands">Shop by brands</Link>
                      <Link href="/shop-by-make">Shop by make</Link>
                      <Link href="/promotions">Promotions</Link>
                      <Link href="/sitemap">Sitemap</Link>
                    </div>
                  </div>
                </div>

                {/* Help Links */}
                <div className="col-md-4">
                  <div className="footer-widget">
                    <h3 className="footer-title">Help</h3>
                    <div className="footer-menu">
                      <Link href="/features">Features</Link>
                      <Link href="/faq">FAQ</Link>
                      <Link href="/about">About us</Link>
                      <Link href="/career">Career</Link>
                      <Link href="/contact">Contact us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-title">Need help? / Contact us</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <div className="contact-text">
                      <span>Call us between 8 AM - 10 PM</span>
                      <a href="tel:6668555584664">6668 5555 8464</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="copyright">
              <p>© {new Date().getFullYear()} Ewo. All Rights Reserved</p>
            </div>
            <div className="footer-links">
              <Link href="/terms">Terms of Use</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/ads">Interest-Based Ads</Link>
              <Link href="/accessibility">Accessibility</Link>
            </div>
            <div className="payment-section">
              <span>Payment options</span>
              <div className="payment-methods">
                {/* {[
                  'apple-pay',
                  'google-pay',
                  'mastercard',
                  'paypal',
                  'visa',
                  'amex',
                ].map(method => (
                  <Image
                    key={method}
                    src={`/assets/img/payment/${method}.png`}
                    alt={method}
                    width={40}
                    height={25}
                    className="payment-icon"
                  />
                ))} */}
                <Image
                  // key={method}
                  // src={`/assets/img/payment/${method}.png`}
                  src={pay ?? ''}
                  alt="pay"
                  // width={40}
                  // height={25}
                  className="payment-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
