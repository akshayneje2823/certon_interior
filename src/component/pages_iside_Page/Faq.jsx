import React, { useState } from "react";
import Accordation from "./components/Accordation";

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
  const [height, setHeight] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeHeight = () => {
    setHeight(!height);
  };
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
                    {/* <div
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
                    </div> */}
                    <Accordation />
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
                  alt="FAQ"
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
                    <Accordation />
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
                  alt="FAQ"
                  className="faq-image"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Faq;
