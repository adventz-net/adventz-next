import Head from 'next/head';
import Link from 'next/link';
import PortfoliosNav from './components/PortfolioNav';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Our Portfolio | Digital Marketing Agency Oman</title>
        <meta
          name="keywords"
          content="web design companies oman, Social media promotions Oman, web design muscat Oman, software development company Oman, website design services Oman, website design Oman,web design in oman"
        />
        <meta
          name="description"
          content="Leading Digital Marketing Agency in Oman. Professional Website Design and Marketing Company. Offering quality Media services that meet your needs. Explore more."
        />
      </Head>

      <section className="ins-banner-sec">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="ins-banner-cover">
                <div className="ins-banner-graphics">
                  <div className="ins-banner-ptc ins-banner-ptc-01">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-02">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path className="st0" d="M3.2 3.2H28.9V28.9H3.2z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-03">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 45 45"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-04">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                </div>
                <div className="ins-banner-hd">
                  <h1>
                    <span className="color-red">Our</span> Portfolio
                  </h1>
                  <p>#CreativeAgency #LogoDesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="portfolio-nav-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div id="portfolio-Nav" className="portfolio-hd">
                  <p>Featured projects</p>
                  <h2>Latest Works</h2>
                </div>
              </div>
              <div className="col-12">
                <PortfoliosNav />
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-body-sec">
          <div className="container-fluid px-1  px-lg-2 px-xl-3">
            <div className="row mx-n1 mx-lg-2 mx-xl-n3">
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-video01.jpg"
                      alt="Adventz proud"
                    />
                  </figure>
                  <figcaption>
                    <p>#ProudOmani</p>
                    <Link
                      href="https://www.youtube.com/watch?v=QS-DfvrepI8"
                      target="_blank"
                    >
                      #ProudOmani #Nadhira Al Harthy
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-video02.jpg" alt="Adventz smo" />
                  </figure>
                  <figcaption>
                    <Link
                      href="https://www.youtube.com/watch?v=JkSc-r7kD7U"
                      target="_blank"
                    >
                      <p>#OmanTraditionalCulture</p>
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/img-nationalday.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <Link
                      href="https://www.youtube.com/watch?v=ht6R8RKapck"
                      target="_blank"
                    >
                      <p>#49th#NationalDayCelebrations#Oman</p>
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <Link
                      href="https://www.youtube.com/watch?v=udOytDQwRpM"
                      target="_blank"
                    >
                      {' '}
                      <img
                        src="images/portfolio-video03.jpg"
                        alt="Adventz"
                      />{' '}
                    </Link>
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <Link
                      href="https://www.youtube.com/watch?v=dytQCzuL15c"
                      target="_blank"
                    >
                      {' '}
                      <img
                        src="images/portfolio-video04.jpg"
                        alt="Adventz"
                      />{' '}
                    </Link>
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <Link
                      href="https://www.youtube.com/watch?v=CPo-L9fE5vc"
                      target="_blank"
                    >
                      {' '}
                      <img
                        src="images/portfolio-video05.jpg"
                        alt="Adventz"
                      />{' '}
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="circle-shape-left">
        <img src="images/ins-circle-left.png" alt="Affiliate marketing" />
      </div>
    </>
  );
}