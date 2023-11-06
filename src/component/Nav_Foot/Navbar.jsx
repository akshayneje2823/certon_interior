import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="header-section">
        <div className="top-bar-header-area">
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar w-nav"
          >
            <div className="container w-container">
              <Link
                to="/"
                aria-current="page"
                className="brand w-nav-brand w--current"
              >
                <img
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                  loading="lazy"
                  alt="Doctorate Logo"
                  height=""
                />
              </Link>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <Link
                  to="/"
                  aria-current="page"
                  className="nav-link w-nav-link w--current"
                >
                  Home
                </Link>
                <Link to="/aboutus" className="nav-link w-nav-link">
                  About Us
                </Link>
                <Link to="/services" className="nav-link w-nav-link">
                  Services
                </Link>
                <div
                  data-hover="true"
                  data-delay="100"
                  className="dropdown w-dropdown"
                >
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="dropdown-nav-link">Pages</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <a
                      href="our_projects"
                      className="dropdown-link w-dropdown-link"
                    >
                      Our Projects
                    </a>
                    {/* <a
                      href="our_profesionals"
                      className="dropdown-link w-dropdown-link"
                    >
                      Professionals
                    </a>
                    <a
                      href="single_service"
                      className="dropdown-link w-dropdown-link"
                    >
                      Services Single
                    </a> */}
                    {/* <Link
                      to="pricing-plan.html"
                      className="dropdown-link w-dropdown-link"
                    >
                      Pricing Plan
                    </Link> */}
                    <a href="blog"
                     className="dropdown-link w-dropdown-link">
                      Blog
                    </a>
                    <Link
                      to="faq_page"
                      className="dropdown-link w-dropdown-link"
                    >
                      FAQ
                    </Link>
                  </nav>
                </div>
                <Link to="contactus" className="nav-link last-child w-nav-link">
                  Contact Us
                </Link>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="menu-icon w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
