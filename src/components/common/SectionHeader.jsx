import React from 'react';
import Link from 'next/link';

const SectionHeader = ({
  title,
  subtitle,
  viewAllLink,
  className,
  variant = 'default',
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'elegant-gradient':
        return 'section-header--elegant-gradient';
      case 'simple-responsive':
        return 'section-header--simple-responsive';
      default:
        return '';
    }
  };

  return (
    <div className={`section-header ${getVariantClass()} ${className || ''}`}>
      <div className="section-header__content">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
      {viewAllLink && (
        <Link href={viewAllLink} className="section-header__view-all">
          <span>View All</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8H15M15 8L8 1M15 8L8 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
