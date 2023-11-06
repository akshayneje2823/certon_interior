import React from 'react'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div>
      <div className="banner-title-area service-page wf-section">
        <div className="container w-container">
          <div className="banner-content-wrap">
            <h1 className="banner-title">Services</h1>
            <div className="breadcrumb-wrap">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <div className="breadcrumb-separator">/</div>
              <div>Services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section wf-section">
        <div className="container w-container">
          <div className="service-content-wrap">
            <div className="w-layout-grid service-grid-wrap">
              <div className="service-item">
                <h2 className="service-title">Interior Design</h2>
                <p className="service-content">
                  Enhancing the interior to achieve a healthier environment for
                  the people using right space.
                </p>
                <Link
                  to="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    className="simple-link-icon"
                  />
                </Link>
              </div>
              <div className="service-item">
                <h2 className="service-title">Furniture</h2>
                <p className="service-content">
                  Movable articles that are used to make a room or building
                  suitable for living or working.
                </p>
                <Link
                  to="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    className="simple-link-icon"
                  />
                </Link>
              </div>
              <div className="service-item">
                <h2 className="service-title">Lighting</h2>
                <p className="service-content">
                  The lighting in your house or office is the use of electric
                  lights view for the building.
                </p>
                <Link
                  to="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    className="simple-link-icon"
                  />
                </Link>
              </div>
              <div className="service-item">
                <h2 className="service-title">Flooring &amp; Tiling</h2>
                <p className="service-content">
                  Thin object any finished material applied over a floor
                  structure to provide a walking surface.
                </p>
                <Link
                  to="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    className="simple-link-icon"
                  />
                </Link>
              </div>
              <div className="service-item">
                <h2 className="service-title">Decoration</h2>
                <p className="service-content">
                  The activity of making something that look more attractive by
                  putting things around it.
                </p>
                <Link
                  to="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    className="simple-link-icon"
                  />
                </Link>
              </div>
              <div className="service-item">
                <h2 className="service-title">Gardening</h2>
                <p className="service-content">
                  Craft design with the mind of delivering clean water &amp; the
                  perfect positive energy.{" "}
                </p>
                <Link
                  to="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    className="simple-link-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-section wf-section">
        <div className="container w-container">
          <div className="process-steps-wrap">
            <div className="section-title-wrap">
              <h2 className="section-title center-small-space">How We Work</h2>
              <p className="section-title-content">
                The world needs innovators and problem solvers who turn
                challenges into greater <br />
                opportunities about transformative trends challenging the
                status.
              </p>
            </div>
            <div className="process-steps">
              <div className="w-layout-grid process-item-grid">
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b53ed814f07583fd7_process-image-one.jpg"
                  loading="lazy"
                  alt="Process Image"
                  className="process-image"
                />
                <div className="process-item-content">
                  <div className="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b265aacf4ef0f8aa7_process-icon-one.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 className="process-count">01</h2>
                  </div>
                  <h2 className="process-heading">Planning &amp; Designing</h2>
                  <p>
                    Constructor explains how you can enjoy high end flooring
                    trends like textured wood and realistic stones with new
                    laminate flooring.
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-layout-grid process-item-grid process-toggle">
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5c32c6b08f8177ce33_process-image-two.jpg"
                  loading="lazy"
                  id="w-node-_49671877-bdd0-e5a2-f734-ffa7eedf86fb-ac77ac78"
                  alt="Process Image"
                  className="process-image"
                />
                <div className="process-item-content">
                  <div className="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5ba55231743af01372_process-icon-two.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 className="process-count">02</h2>
                  </div>
                  <h2 className="process-heading">Evaluation</h2>
                  <p>
                    Our highly educated staff will make sure that your project
                    will be finished on time and specified budget house &amp;
                    remodeling.
                  </p>
                </div>
              </div>
              <div className="w-layout-grid process-item-grid">
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5c24a31d4181e57f43_process-image-three.jpg"
                  loading="lazy"
                  alt="Process Image"
                  className="process-image"
                />
                <div className="process-item-content">
                  <div className="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b578de649459013c9_process-icon-three.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 className="process-count">03</h2>
                  </div>
                  <h2 className="process-heading">Implementation</h2>
                  <p>
                    Professional construction services from house renovations
                    and remodeling, green building and small scope work, like
                    painting.
                  </p>
                </div>
              </div>
              <div className="w-layout-grid process-item-grid process-toggle">
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b246619f89abea101_process-image-four.jpg"
                  loading="lazy"
                  id="w-node-_6c642a3c-5cf0-485f-bd00-20bafeae7c62-ac77ac78"
                  alt="Process Image"
                  className="process-image"
                />
                <div className="process-item-content">
                  <div className="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b34b828d6fd905433_process-icon-four.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 className="process-count">04</h2>
                  </div>
                  <h2 className="process-heading">Perfect Result</h2>
                  <p>
                    Planning new cities. Restoring damaged environments.
                    Connecting people and economies with roads, bridges, tunnels
                    and transit systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action-section wf-section">
        <div className="container w-container">
          <div className="call-to-action-wrap">
            <h2 className="call-to-action-title">Wanna join with Interno?</h2>
            <p className="call-to-action-content">
              Contact Us &amp; Get a Free Consultation
            </p>
            <Link
              to="contact-us.html"
              className="button-colored call-to-action-button w-button"
            >
              Connect With us
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-section wf-section">
        <div className="container w-container">
          <div className="w-layout-grid footer-grid-wrap">
            <div className="footer-widget-wrap">
              <Link to="index.html" className="w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                  loading="lazy"
                  alt=""
                  className="footer-logo"
                />
              </Link>
              <p className="footer-intro-content">
                We are the leading architect and interior design firm in the
                world.
              </p>
              <div className="footer-social-wrap">
                <Link
                  to="#0"
                  className="footer-social-link first-child w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
                <Link to="#0" className="footer-social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="footer-widget-wrap">
              <h2 className="footer-widget-title">Pages</h2>
              <div className="footer-menu-links-wrap">
                <Link to="style-guide.html" className="footer-link">
                  Style Guide
                </Link>
                <Link to="401.html" className="footer-link">
                  Protected
                </Link>
                <Link to="licenses.html" className="footer-link">
                  Licenses
                </Link>
                <Link to="changelog.html" className="footer-link">
                  Changelog
                </Link>
                <Link to="404.html" className="footer-link">
                  404
                </Link>
              </div>
            </div>
            <div className="footer-widget-wrap">
              <h2 className="footer-widget-title">Explore</h2>
              <div className="footer-menu-links-wrap">
                <Link
                  to="services.html"
                  aria-current="page"
                  className="footer-link w--current"
                >
                  About Us
                </Link>
                <Link to="blog.html" className="footer-link">
                  Recent Blog
                </Link>
                <Link to="pricing-plan.html" className="footer-link">
                  Pricing Plan
                </Link>
                <Link to="our-projects.html" className="footer-link">
                  Our Projects
                </Link>
                <Link to="contact-us.html" className="footer-link">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="footer-widget-wrap footer-widget-four">
              <h2 className="footer-widget-title">Contact</h2>
              <div className="footer-address-wrap">
                <p className="footer-address">
                  Plot No: 128-P2, Ground Floor, EPIP Zone Whitefield Rd, near
                  Gingeeer Hotel, Whitefield, EPIP Zone, Bengaluru, Karnataka
                  560066
                </p>
                <Link to="mailto:contact@interno.com" className="footer-link">
                  info@certoninterior.com
                </Link>
                <Link to="tel:(123)456-7890" className="footer-link">
                  (+91) 9538111038
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="copyright-content">
            Copyright © Interno | Designed by{" "}
            <Link to="https://www.victorflow.com/">Victorflow</Link> Templates -
            Powered by <Link to="https://webflow.com/">Webflow</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
