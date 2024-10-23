import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Cart, QuickView, Wishlist, WishlistTwo, WishlistFill } from '@/svg';
import Timer from '@/components/common/timer';
import { handleProductModal } from '@/redux/features/productModalSlice';
import { add_cart_product } from '@/redux/features/cartSlice';
import { add_to_wishlist } from '@/redux/features/wishlist-slice';

const ProductItem2 = ({ product, offer_design = false }) => {
  const {
    _id,
    img,
    category,
    title,
    reviews,
    price,
    discount,
    status,
    offerDate,
  } = product || {};

  const { cart_products } = useSelector(state => state.cart);
  const { wishlist } = useSelector(state => state.wishlist);
  const isAddedToCart = cart_products.some(prd => prd._id === _id);
  const isAddedToWishlist = wishlist.some(prd => prd._id === _id);
  const dispatch = useDispatch();
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

  const handleAddProduct = prd => {
    dispatch(add_cart_product(prd));
  };

  const handleWishlistProduct = prd => {
    dispatch(add_to_wishlist(prd));
  };

  return (
    <div className="featured__card">
      {discount > 0 && <span className="featured__discount">{discount}%</span>}
      {status === 'out-of-stock' && (
        <span className="featured__super-price">OUT OF STOCK</span>
      )}
      <button
        className={`featured__wishlist ${isAddedToWishlist ? 'active' : ''}`}
        onClick={() => handleWishlistProduct(product)}
        disabled={status === 'out-of-stock'}
      >
        {isAddedToWishlist ? <WishlistFill /> : <Wishlist />}
      </button>
      <div className="featured__image-wrapper">
        <div className="featured__image-container">
          <Image
            src={img}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="featured__image object-fit-contain"
          />
        </div>
        <button
          className="featured__quick-view"
          onClick={() => dispatch(handleProductModal(product))}
        >
          <QuickView />
          Quick View
        </button>
      </div>
      <div className="featured__content">
        <h3 className="featured__product-title">
          <Link href={`/product-details/${_id}`}>{title}</Link>
        </h3>
        <div className="featured__rating">
          <Rating
            allowFraction
            size={16}
            initialValue={ratingVal}
            readonly={true}
          />
          <span className="featured__review-count">
            {reviews && reviews.length > 0 ? reviews.length : 0} review
            {reviews && reviews.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="featured__price-wrapper">
          {discount > 0 ? (
            <>
              <span className="featured__old-price">${price}</span>
              <span className="featured__price">
                $
                {(
                  Number(price) -
                  (Number(price) * Number(discount)) / 100
                ).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="featured__price">
              ${parseFloat(price).toFixed(2)}
            </span>
          )}
        </div>
        <div className="featured__stock">
          {status === 'in-stock' ? (
            <span className="featured__stock--in">In Stock</span>
          ) : (
            <span className="featured__stock--out">Out of Stock</span>
          )}
        </div>
        {isAddedToCart ? (
          <Link href="/cart" className="featured__add-to-cart">
            <Cart />
            View Cart
          </Link>
        ) : (
          <button
            className="featured__add-to-cart"
            onClick={() => handleAddProduct(product)}
            disabled={status === 'out-of-stock'}
          >
            <Cart />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem2;
