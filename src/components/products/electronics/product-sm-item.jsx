import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const ProductSmItem = ({ product }) => {
  const { _id, img, category, title, price, reviews, oldPrice } = product || {};
  const [ratingVal, setRatingVal] = useState(0);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const rating =
        reviews.reduce((acc, review) => acc + review.rating, 0) /
        reviews.length;
      setRatingVal(rating);
    } else {
      setRatingVal(0);
    }
  }, [reviews]);

  const discountPercentage = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <div className="product-sm-card">
      {discountPercentage > 0 && (
        <div className="product-sm-discount-badge">{discountPercentage}%</div>
      )}
      <div className="product-sm-image-wrapper">
        <Link href={`/product-details/${_id}`}>
          <div className="product-sm-image-container">
            <Image
              src={img}
              alt={title}
              width={140}
              height={140}
              className="product-sm-image"
            />
          </div>
        </Link>
      </div>
      <div className="product-sm-content">
        <div className="product-sm-category">{category?.name}</div>
        <h3 className="product-sm-title">
          <Link href={`/product-details/${_id}`}>{title}</Link>
        </h3>
        <div className="product-sm-rating">
          <Rating
            allowFraction
            size={16}
            initialValue={ratingVal}
            readonly={true}
          />
          <span className="product-sm-review-count">
            ({reviews && reviews.length > 0 ? reviews.length : 0} Review)
          </span>
        </div>
        <div className="product-sm-price-wrapper">
          <span className="product-sm-price">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="product-sm-old-price">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSmItem;
