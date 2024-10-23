import React from 'react';
import Link from 'next/link';

const SectionHeader = ({ title, subtitle, viewAllLink, className }) => {
  return (
    <div className={`section-header ${className || ''}`}>
      <div className="section-header__content">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
      {viewAllLink && (
        <Link href={viewAllLink} className="section-header__view-all">
          View All →
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
