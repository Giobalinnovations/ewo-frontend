import Image from 'next/image';
import Link from 'next/link';

// Banner item type definition for better type safety
const BannerItem = ({
  badge,
  title,
  text,
  buttonText = 'Shop Now',
  buttonLink = '/shop',
  image,
  isDark = false,
  showBadge = true,
}) => {
  return (
    <div className={`banner2-item ${isDark ? 'banner2-item-dark' : ''}`}>
      <div className="banner2-content">
        {showBadge && badge && <span className="banner2-badge">{badge}</span>}
        {title && <h3 className="banner2-title">{title}</h3>}
        {text && <p className="banner2-text">{text}</p>}
        <Link href={buttonLink} className="banner2-btn">
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
      <div className="banner2-img">
        <Image src={image} alt={title} width={800} height={600} priority />
      </div>
    </div>
  );
};

export default function Banner2({
  items = [],
  columns = 2,
  className = '',
  showBadge = true,
  banner2AreaPt = 40,
}) {
  return (
    <div className={`banner2-area pt-${banner2AreaPt} pb-35`}>
      <div className="container">
        <div className={`banner2-wrapper banner2-cols-${columns} ${className}`}>
          {items.map((item, index) => (
            <BannerItem
              key={index}
              {...item}
              showBadge={
                item.showBadge !== undefined ? item.showBadge : showBadge
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
