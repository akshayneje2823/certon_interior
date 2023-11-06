import React, { useState } from 'react'

function Faq() {

  
const iconStyle = {
  WebkitTransform:
    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
  MozTransform:
    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
  msTransform:
    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
  transform:
    "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
};
const [height,setHeight]=useState(true)

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



const changeHeight =()=>{
  setHeight(!height);
}
  return (
    <div className="header-section">
      <body>
   
        <div className="banner-title-area faq-page wf-section">
          <div className="container w-container">
            <div className="banner-content-wrap">
              <h1 className="banner-title">FAQ</h1>
              <div className="breadcrumb-wrap">
                <a href="index.html" className="breadcrumb-link">
                  Home
                </a>
                <div className="breadcrumb-separator">/</div>
                <div className="breadcrumb-current-page">FAQ</div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-section wf-section">
          <div className="container w-container">
            <div className="faq-content-wrap">
              <div className="w-layout-grid faq-grid">
                <div className="faq-accordion-wrap">
                  <div className="faq-accordion-content">
                    <h2 className="section-title">Service Related Questions</h2>
                    <div
                      data-hover="true"
                      data-delay="0"
                      data-w-id="4bc8c6da-5dc6-de19-7d96-e21f8abcbb22"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          Hiring an interior designer for work?
                        </div>
                      </div>

                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          All designers work differently. At Interno Interiors,
                          first a short questionnaire and follow-up phone
                          conversation will help us evaluate your project, and
                          if we may be of help.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="4bc8c6da-5dc6-de19-7d96-e21f8abcbb2a"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          How do you charge per square feet?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          We maintain competitive design fees. There are a few
                          ways that we charge but our design fee will typically
                          have a combination of a fixed fee and hourly
                          estimates.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="4bc8c6da-5dc6-de19-7d96-e21f8abcbb32"
                      style={{ height: height ? "70px" : "220px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          What will our project cost?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          It depends on the level you wish to take your project.
                          If you have a specific design fee budget in mind, we
                          are more than happy to prepare a proposal, stating
                          what we can offer, keeping within your budget.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="4bc8c6da-5dc6-de19-7d96-e21f8abcbb3a"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          How do we get started, what is next?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          Before beginning work, you go through a detailed
                          questionnaire that helps us get to know you better. We
                          take a design fee retainer that is applied to your
                          final invoice.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="4bc8c6da-5dc6-de19-7d96-e21f8abcbb42"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          What cities do you work in?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          Interno Interiors works primarily in Los Angeles and
                          Hawaii with select engagements on the east coast.
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c8cdc9cec0161fe8d9_faq-image-2.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 1200px"
                  srcset="
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c8cdc9cec0161fe8d9_faq-image-2-p-500.jpeg 500w,
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c8cdc9cec0161fe8d9_faq-image-2.jpg        555w
              "
                  alt="FAQ Image"
                  className="faq-image"
                />
              </div>
              <div className="w-layout-grid faq-grid toggle-grid">
                <div
                  id="w-node-_13574361-17a9-36cd-94b7-b0c7b9d0cdec-6ec78083"
                  className="faq-accordion-wrap"
                >
                  <div className="faq-accordion-content">
                    <h2 className="section-title">Project Related Questions</h2>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="13574361-17a9-36cd-94b7-b0c7b9d0cdf0"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          Hiring an interior designer for work?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          All designers work differently. At Interno Interiors,
                          first a short questionnaire and follow-up phone
                          conversation will help us evaluate your project, and
                          if we may be of help.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="13574361-17a9-36cd-94b7-b0c7b9d0cdf8"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          How do you charge per square feet?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          We maintain competitive design fees. There are a few
                          ways that we charge but our design fee will typically
                          have a combination of a fixed fee and hourly
                          estimates.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="13574361-17a9-36cd-94b7-b0c7b9d0ce00"
                      style={{ height: height ? "70px" : "220px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          What will our project cost?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          It depends on the level you wish to take your project.
                          If you have a specific design fee budget in mind, we
                          are more than happy to prepare a proposal, stating
                          what we can offer, keeping within your budget.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="13574361-17a9-36cd-94b7-b0c7b9d0ce08"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          How do we get started, what is next?
                        </div>
                      </div>
                      <nav className="accordion-list w-dropdown-list">
                        <div className="faq-content-wrap">
                          Before beginning work, you go through a detailed
                          questionnaire that helps us get to know you better. We
                          take a design fee retainer that is applied to your
                          final invoice.
                        </div>
                      </nav>
                    </div>
                    <div
                      data-hover="false"
                      data-delay="0"
                      data-w-id="13574361-17a9-36cd-94b7-b0c7b9d0ce10"
                      style={{ height: height ? "70px" : "200px" }}
                      className="accordion-item w-dropdown"
                      onClick={() => {
                        changeHeight();
                      }}
                    >
                      <div className="accordion-toggle w-dropdown-toggle">
                        <div
                          style={iconStyle}
                          className="accordion-icon w-icon-dropdown-toggle"
                        ></div>
                        <div className="dropdown-question">
                          What cities do you work in?fd
                        </div>
                      </div>
                      <nav style={{ display: "block" }}>
                        <div style={{ display: "block" }}>
                          Interno Interiors works primarily in Los Angeles and
                          Hawaii with select engagements on the east coast.
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c885db57eb2ccdb983_faq-image-1.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 1200px"
                  srcset="
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c885db57eb2ccdb983_faq-image-1-p-500.jpeg 500w,
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c885db57eb2ccdb983_faq-image-1.jpg        555w
              "
                  alt="FAQ Image"
                  className="faq-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section wf-section">
          <div className="container w-container">
            <div className="w-layout-grid footer-grid-wrap">
              <div className="footer-widget-wrap">
                <a href="index.html" className="w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                    loading="lazy"
                    alt=""
                    className="footer-logo"
                  />
                </a>
                <p className="footer-intro-content">
                  We are the leading architect and interior design firm in the
                  world.
                </p>
                <div className="footer-social-wrap">
                  <a
                    href="#0"
                    className="footer-social-link first-child w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                      loading="lazy"
                      alt=""
                    />
                  </a>
                  <a href="#0" className="footer-social-link w-inline-block">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                      loading="lazy"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="footer-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                      loading="lazy"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="footer-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                      loading="lazy"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="footer-widget-wrap">
                <h2 className="footer-widget-title">Pages</h2>
                <div className="footer-menu-links-wrap">
                  <a href="style-guide.html" className="footer-link">
                    Style Guide
                  </a>
                  <a href="401.html" className="footer-link">
                    Protected
                  </a>
                  <a href="licenses.html" className="footer-link">
                    Licenses
                  </a>
                  <a href="changelog.html" className="footer-link">
                    Changelog
                  </a>
                  <a href="404.html" className="footer-link">
                    404
                  </a>
                </div>
              </div>
              <div className="footer-widget-wrap">
                <h2 className="footer-widget-title">Explore</h2>
                <div className="footer-menu-links-wrap">
                  <a href="services.html" className="footer-link">
                    About Us
                  </a>
                  <a href="blog.html" className="footer-link">
                    Recent Blog
                  </a>
                  <a href="pricing-plan.html" className="footer-link">
                    Pricing Plan
                  </a>
                  <a href="our-projects.html" className="footer-link">
                    Our Projects
                  </a>
                  <a href="contact-us.html" className="footer-link">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="footer-widget-wrap footer-widget-four">
                <h2 className="footer-widget-title">Contact</h2>
                <div className="footer-address-wrap">
                  <p className="footer-address">
                    53, East Birchwood Ave. Brooklyn, New York 11201, USA.
                  </p>
                  <a href="mailto:contact@interno.com" className="footer-link">
                    contact@interno.com
                  </a>
                  <a href="tel:(123)456-7890" className="footer-link">
                    (123) 456 - 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <div className="copyright-content">
              Copyright © Interno | Designed by
              <a href="https://www.victorflow.com/">Victorflow</a> Templates -
              Powered by <a href="https://webflow.com/">Webflow</a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Faq
