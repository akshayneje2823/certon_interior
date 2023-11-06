import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content-wrap">
          <div className="container w-container">
            <div className="hero-content-area">
              <h1 className="hero-wrap-title">
                Creating Spaces Where Memories are Made <br />
              </h1>
              <p className="hero-wrap-description">
                Combining beauty with functionality for <br />
                challenges into greater opportunities.
              </p>
              <Link to="contactus" className="button banner-button w-button">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="container w-container">
          <div className="service-content-wrap">
            <div className="w-layout-grid service-grid-wrap">
              <div className="service-item">
                <h2 className="service-title">High-Quality Materials</h2>
                <p className="service-content">
                  We use only the quality materials to ensure your design stands
                  the test of time.
                </p>
                <a href="#" className="simple-link w-inline-block">
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Icon"
                    className="simple-link-icon"
                  />
                </a>
              </div>
              <div className="service-item">
                <h2 className="service-title">Budget Management</h2>
                <p className="service-content">
                  A smart approach to ensure your dream design fits within your
                  budget.
                </p>
                <a
                  href="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Icon"
                    className="simple-link-icon"
                  />
                </a>
              </div>
              <div className="service-item">
                <h2 className="service-title">Personalized Service</h2>
                <p className="service-content">
                  We believe in your distinctive vision, and we're here to make
                  it a reality.
                </p>
                <a
                  href="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Icon"
                    className="simple-link-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-section">
        <div className="container w-container">
          <div className="w-layout-grid intro-grid-wrap">
            <div className="intro-content-wrap">
              <h2 className="intro-section-title">
                Where Style and Comfort Meet
              </h2>
              <p className="intro-content">
                Your home is your canvas, and we are the artists that bring your
                vision to life. Our interior design services are all about
                elevating your living space to new heights of elegance and
                perfect style. We understand that every room tells a unique
                story, and we craft these stories with an expert eye for detail.
                From careful chosen color palettes to the placement of each
                piece of furniture, we ensure that your space reflects your
                personality.
              </p>
              <div className="intro-quick-link-wrap">
                <div className="intro-icon-wrap">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b38c59b20f18156d7e10d_intro-call.svg"
                    loading="lazy"
                    alt="Call Icon"
                  />
                </div>
                <div className="intro-call-wrap">
                  <a href="tel:012345678" className="call-link">
                    (+91) 9538111038
                  </a>
                  <p>Call Us Anytime</p>
                </div>
              </div>
              <Link to="contactus" className="button w-button">
                Get Free Estimate
              </Link>
            </div>
            <img
              src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b30656e76565ea79f29e5_intro-image.jpg"
              loading="lazy"
              alt="Intro Image"
              className="right-radius-image"
            />
          </div>
        </div>
      </div>
      <div className="testimonial-section">
        <div className="container w-container">
          <div className="testimonial-content-wrap">
            <h2 className="section-title text-center">
              What People Think
              <br /> About Interno
            </h2>
            <div className="w-layout-grid testimonial-grid">
              <div className="testimonial-item">
                <div className="testimonial-detail">
                  <div className="testimonial-image-wrap">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5d70ad9b5876274e17016_client-image-1.jpg"
                      loading="lazy"
                      alt="Testimonial Image"
                      className="testimonial-client"
                    />
                    <div className="client-detail">
                      <h3 className="client-name">Lisa Clairton</h3>
                      <div className="client-location">New York, USA</div>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    We selected Interno interior because of rigorous design
                    background &amp; education.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-detail">
                  <div className="testimonial-image-wrap">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5d70a4d252373e66ee1cb_client-image-3.jpg"
                      loading="lazy"
                      alt="Testimonial Image"
                      className="testimonial-client"
                    />
                    <div className="client-detail">
                      <h3 className="client-name">David Knight</h3>
                      <div className="client-location">Sydney, Australia</div>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    The team exceeded our expectations and emerged as leaders of
                    our project’s.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-detail">
                  <div className="testimonial-image-wrap">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5d70a990fade56fd885a7_client-image-2.jpg"
                      loading="lazy"
                      alt="Testimonial Image"
                      className="testimonial-client"
                    />
                    <div className="client-detail">
                      <h3 className="client-name">Lisa Clairton</h3>
                      <div className="client-location">Paris, France</div>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    They balanced the architectural vision and the project
                    realities beautifully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clients-section">
        <div className="container w-container">
          <div className="w-layout-grid client-gird-wrap">
            <div
              id="w-node-cc80d0cd-42e4-2620-442a-514667d49987-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbaf38fe2e294e77c4_client-logo-1.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-fad25dac-b525-0be8-6116-100ca22118f1-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db6a5ad2b2e8220095_client-logo-2.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-_2e6c85e4-0f13-3f54-32df-ab30b216b927-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db3b3a6aece9a31f5e_client-logo-3.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-_6b7d40ec-6f15-dc63-fcf5-11633ff702f4-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db1409585a01100743_client-logo-4.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-be48fccd-aa9d-2b76-d979-45623f925cd5-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbc57d3e3e8b8ed401_client-logo-5.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-listing-wrap home-page-projects">
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">
              Recent Projects
            </h2>
            <p className="section-title-content">
              With tools to make every part of your process more human and a
              support team <br />
              excited to help you, getting started with us never been easier.
            </p>
          </div>
          <div className="project-items home-page-projects">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      to="project1"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1-p-500.jpeg 500w, https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          href="project1"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Winery Dry Creek Building
                          </h2>
                        </Link>
                        <Link to="/project1" className="project-category-link">
                          Art Modern
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project1"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      to="project2"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2-p-500.jpeg 500w, https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="/project2"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Creative Workplace Design
                          </h2>
                        </Link>
                        <Link to="project2" className="project-category-link">
                          Minimalist
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project2"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      to="/project3"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3-p-500.jpeg 500w, https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="/project3"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Bedroom Interior Pot Work
                          </h2>
                        </Link>
                        <Link to="project3" className="project-category-link">
                          Modern
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project3"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      to="/project4"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4-p-500.jpeg 500w, https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="/project4"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Light Ambience Sepia Design
                          </h2>
                        </Link>
                        <Link to="/project4" className="project-category-link">
                          Scandinavian
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="/project4"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section">
        <div className="container w-container">
          <div className="w-layout-grid counter-grid-wrap">
            <div className="counter-item">
              <h3 className="count-number">12</h3>
              <p className="counter-title">Years Of Experiance</p>
            </div>
            <div className="counter-item">
              <h3 className="count-number">5K</h3>
              <p className="counter-title">Success Project</p>
            </div>
            <div className="counter-item">
              <h3 className="count-number">1K</h3>
              <p className="counter-title">Active Project</p>
            </div>
            <div className="counter-item counter-last-child">
              <h3 className="count-number">4K</h3>
              <p className="counter-title">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">What we Design</h2>
            {/* <p className="section-title-content">
              Get updates about our latest trends and techniques used in
              <br />
              interior design project works.
            </p> */}
          </div>
          <div className="blog-wrap home-page-blog">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="blog1"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1bd92c0eccd5cd71645fc_blog-image-small-1.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </Link>
                      <Link
                        to='blog1'
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Kitchen Design</div>
                      </Link>
                    </div>
                    <Link
                      to='blog1'
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">
                        Residential Interior Designer In New York, USA
                      </h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date">November 23, 2021</p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                      to='/blog1'
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to='blog2'
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1bdadb2eb07c93e396d9e_blog-image-small-2.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </Link>
                      <Link to="/blog2"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Living Room</div>
                      </Link>
                    </div>
                    <a
                      href="post/how-to-choose-the-best-wall-art-decor-house.html"
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">
                        How To Choose The Best Wall Art &amp; Decor House?
                      </h2>
                    </a>
                    <div className="blog-item-meta">
                      <p className="blog-date">November 23, 2021</p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to='blog2'
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to='/blog3'
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1bdc5798f2d3af13d1966_blog-image-small-3.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </Link>
                      <Link
                        to='/blog3'
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Minimalist Interior</div>
                      </Link>
                    </div>
                    <Link
                      to='blog3'
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">
                        Tips To Increase The Interior Value Of Your House
                      </h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date">November 23, 2021</p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                       to='/blog2'
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <a
                        href="post/best-solution-for-any-office-business-interior.html"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1bddb4a0a5378ab7d1199_blog-image-small-4.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </a>
                      <a
                        href="category/kitchen-design.html"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Kitchen Design</div>
                      </a>
                    </div>
                    <a
                      href="post/best-solution-for-any-office-business-interior.html"
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">
                        Best Solution For Any Office &amp; Business Interior
                      </h2>
                    </a>
                    <div className="blog-item-meta">
                      <p className="blog-date">November 23, 2021</p>
                      <a
                        style={{ background: " rgb(244, 240, 236)" }}
                        href="post/best-solution-for-any-office-business-interior.html"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <a
                        href="post/get-solution-for-building-construction-work-.html"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1bdf7191af40ae1c06fca_blog-image-small-5.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </a>
                      <Link to="/blog2"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Living Room</div>
                      </Link>
                    </div>
                    <a
                      href="post/get-solution-for-building-construction-work-.html"
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">
                        Get Solution For Building Construction Work{" "}
                      </h2>
                    </a>
                    <div className="blog-item-meta">
                      <p className="blog-date">November 23, 2021</p>
                      <a
                        style={{ background: " rgb(244, 240, 236)" }}
                        href="post/get-solution-for-building-construction-work-.html"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <a
                        href="post/attain-the-best-finish-for-the-kitchen-cabinets.html"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1be0da80aaec1a0c172c4_blog-image-small-6.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </a>
                      <a
                        href="category/minimalist-interior.html"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Minimalist Interior</div>
                      </a>
                    </div>
                    <a
                      href="post/attain-the-best-finish-for-the-kitchen-cabinets.html"
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">
                        Attain The Best Finish For The Kitchen Cabinets
                      </h2>
                    </a>
                    <div className="blog-item-meta">
                      <p className="blog-date">November 23, 2021</p>
                      <a
                        style={{ background: " rgb(244, 240, 236)" }}
                        href="post/attain-the-best-finish-for-the-kitchen-cabinets.html"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action-section">
        <div className="container w-container">
          <div className="call-to-action-wrap">
            <h2 className="call-to-action-title">Wanna join the interno?</h2>
            <p className="call-to-action-content">
              Contact Us &amp; Get a Free Consultation
            </p>
            <Link
              to="contactus"
              className="button-colored call-to-action-button w-button"
            >
              Connect With us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
