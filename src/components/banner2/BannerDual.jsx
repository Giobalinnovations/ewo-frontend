import Image from 'next/image';
import Link from 'next/link';

export default function BannerDual() {
  const bannerItems = [
    {
      img: 'https://res.cloudinary.com/datdyxl7o/image/upload/v1732103440/EWO_796X260_lhqb8s.jpg',
      href: '/shop',
      aspectRatio: '796/260',
    },
    {
      img: 'https://res.cloudinary.com/datdyxl7o/image/upload/v1732103439/EWO_386X260_he7xg0.jpg',
      href: '/shop',
      aspectRatio: '386/260',
    },
  ];

  return (
    <div className="banner2-area">
      <div className="container">
        <div className="banner2-wrapper banner2-dual">
          {bannerItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                className={`banner2-item-simple ${
                  index === 0 ? 'banner2-large' : 'banner2-small'
                }`}
                style={{
                  position: 'relative',
                  aspectRatio: item.aspectRatio,
                }}
              >
                <Image
                  src={item.img}
                  alt="banner"
                  fill
                  sizes={
                    index === 0
                      ? '(max-width: 768px) 100vw, 796px'
                      : '(max-width: 768px) 100vw, 386px'
                  }
                  quality={90}
                  priority={true}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
