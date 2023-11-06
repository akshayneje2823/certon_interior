import React from 'react'
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <div className="banner-title-area projects-page">
        <div className="container w-container">
          <div className="banner-content-wrap">
            <h1 className="banner-title">Our Projects</h1>
            <div className="breadcrumb-wrap">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <div className="breadcrumb-separator">/</div>
              <div>Our Projects</div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-listing-wrap">
        <div className="container w-container">
          <div className="project-items">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                <div
                  role="listitem"
                  className="collection-item-projects w-dyn-item w-col w-col-6"
                >
                  <div className="project-item">
                    <Link
                      to="project/winery-dry-creek-building.html"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1.jpg        580w
                      "
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="project/winery-dry-creek-building.html"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Winery Dry Creek Building
                          </h2>
                        </Link>
                        <Link
                          to="project-categories/art-modern.html"
                          className="project-category-link"
                        >
                          Art Modern
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project/winery-dry-creek-building.html"
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
                <div
                  role="listitem"
                  className="collection-item-projects w-dyn-item w-col w-col-6"
                >
                  <div className="project-item">
                    <Link
                      to="project/creative-workplace-design.html"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2.jpg        580w
                      "
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="project/creative-workplace-design.html"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Creative Workplace Design
                          </h2>
                        </Link>
                        <Link
                          to="project-categories/minimalist.html"
                          className="project-category-link"
                        >
                          Minimalist
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project/creative-workplace-design.html"
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
                <div
                  role="listitem"
                  className="collection-item-projects w-dyn-item w-col w-col-6"
                >
                  <div className="project-item">
                    <Link
                      to="project/bedroom-interior-pot-work.html"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3.jpg        580w
                      "
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="project/bedroom-interior-pot-work.html"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Bedroom Interior Pot Work
                          </h2>
                        </Link>
                        <Link
                          to="project-categories/modern.html"
                          className="project-category-link"
                        >
                          Modern
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project/bedroom-interior-pot-work.html"
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
                <div
                  role="listitem"
                  className="collection-item-projects w-dyn-item w-col w-col-6"
                >
                  <div className="project-item">
                    <Link
                      to="project/light-ambience-sepia-design.html"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4.jpg        580w
                      "
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="project/light-ambience-sepia-design.html"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Light Ambience Sepia Design
                          </h2>
                        </Link>
                        <Link
                          to="project-categories/scandinavian.html"
                          className="project-category-link"
                        >
                          Scandinavian
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project/light-ambience-sepia-design.html"
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
                <div
                  role="listitem"
                  className="collection-item-projects w-dyn-item w-col w-col-6"
                >
                  <div className="project-item">
                    <Link
                      to="project/minimalistic-bedroom-interior.html"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd2a426c5e8a217e22aa_project-image-5.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd2a426c5e8a217e22aa_project-image-5-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd2a426c5e8a217e22aa_project-image-5.jpg        580w
                      "
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="project/minimalistic-bedroom-interior.html"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">
                            Minimalistic Bedroom Interior
                          </h2>
                        </Link>
                        <Link
                          to="project-categories/art-modern.html"
                          className="project-category-link"
                        >
                          Art Modern
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project/minimalistic-bedroom-interior.html"
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
                <div
                  role="listitem"
                  className="collection-item-projects w-dyn-item w-col w-col-6"
                >
                  <div className="project-item">
                    <Link
                      to="project/reading-area-gardening.html"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd33f3292593cc54b3db_project-image-6.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd33f3292593cc54b3db_project-image-6-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd33f3292593cc54b3db_project-image-6.jpg        580w
                      "
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="project/reading-area-gardening.html"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">Reading Area Gardening</h2>
                        </Link>
                        <Link
                          to="project-categories/minimalist.html"
                          className="project-category-link"
                        >
                          Minimalist
                        </Link>
                      </div>
                      <div className="project-readmore">
                        <Link
                          to="project/reading-area-gardening.html"
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
    </div>
  );
}

export default Projects
