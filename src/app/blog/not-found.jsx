import Link from 'next/link';
import HeaderTwo from '@/layout/headers/header-2';
import Footer6 from '@/layout/footers/footer-6';

export default function NotFound() {
  return (
    <>
      <HeaderTwo style_2={true} />
      <section className="error-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-content text-center">
                <h2 className="error-title">404</h2>
                <h3 className="mb-30">Blog Post Not Found</h3>
                <p>
                  The blog post you are looking for might have been removed, had
                  its name changed, or is temporarily unavailable.
                </p>
                <div className="error-btn mt-30">
                  <Link href="/blog" className="tp-btn">
                    Return to Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer6 variant="gradient" />
    </>
  );
}
