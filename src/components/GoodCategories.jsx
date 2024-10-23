import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from './common/SectionHeader';

const categories = [
  {
    id: 1,
    title: 'Auto Safety & Security',
    items: 8,
    image: '/assets/img/categories/auto-safety.jpg',
  },
  {
    id: 2,
    title: 'Garage Tools',
    items: 1,
    image: '/assets/img/categories/garage-tools.jpg',
  },
  {
    id: 3,
    title: 'Headlights & Lighting',
    items: 5,
    image: '/assets/img/categories/headlights.jpg',
  },
  {
    id: 4,
    title: 'Interior Accessories',
    items: 9,
    image: '/assets/img/categories/interior-accessories.jpg',
  },
  {
    id: 5,
    title: 'Tires & Wheels',
    items: 13,
    image: '/assets/img/categories/tires-wheels.jpg',
  },
  {
    id: 6,
    title: 'Tools & Equipment',
    items: 8,
    image: '/assets/img/categories/tools-equipment.jpg',
  },
];

export default function GoodCategories() {
  return (
    <section className="good-categories">
      <div className="container">
        <SectionHeader
          title="Top Categories"
          subtitle="Don't miss out on this week's deals"
          viewAllLink="/categories"
          className="good-categories__header"
        />
        <div className="good-categories__grid">
          {categories.map(category => (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className="good-categories__item"
            >
              <div className="good-categories__item-image">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
              <div className="good-categories__item-content">
                <h3 className="good-categories__item-title">
                  {category.title}
                </h3>
                <p className="good-categories__item-count">
                  {category.items} items
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
