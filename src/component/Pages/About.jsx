import React from 'react'
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <body>
     
        <div className="banner-title-area about-us-page wf-section">
          <div className="container w-container">
            <div className="banner-content-wrap">
              <h1 className="banner-title">About Us</h1>
              <div className="breadcrumb-wrap">
                <Link to="/" className="breadcrumb-link">
                  Home
                </Link>
                <div className="breadcrumb-separator">/</div>
                <div className="breadcrumb-current-page">About Us</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-blockquote-section wf-section">
          <div className="container w-container">
            <div className="intro-blockquote-wrap">
              <blockquote>
                Your Home should tell the story of who you are, and be a
                Collection of what you Love.
              </blockquote>
            </div>
          </div>
        </div>
        <div className="about-section wf-section">
          <div className="container w-container">
            <div className="w-layout-grid about-grid-wrap">
              <div className="about-content-wrap">
                <h2 className="about-heading">Initial Design</h2>
                <p className="about-content">
                  Craft design with the mind of delivering clean <br />
                  water and energy. Building iconic skyscrapers. Planning new
                  cities. Restoring damaged building Connecting people and
                  economies with roads.
                </p>
                <Link to="services.html" className="button w-button">
                  Our Concept
                </Link>
              </div>
              <img
                src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a600b45f1c4532372507aa_compare-image-1.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 1200px"
                srcset="
              https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a600b45f1c4532372507aa_compare-image-1-p-500.jpeg 500w,
              https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a600b45f1c4532372507aa_compare-image-1.jpg        659w
            "
                alt="Work Image"
                className="about-image"
              />
            </div>
            <div className="w-layout-grid about-grid-wrap about-toggle">
              <div
                id="w-node-_0594dbd2-a01d-5eba-8907-55f79f074083-25594337"
                className="about-content-wrap left-spacing"
              >
                <h2 className="about-heading">The End Result</h2>
                <p className="about-content">
                  With more than 3,500 active clients, we work across the global
                  economy. Our clients are remarkably diverse: large and small,
                  private and public, for-profit and nonprofit.
                </p>
                <Link to="services-single.html" className="button w-button">
                  Explore More
                </Link>
              </div>
              <img
                src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a600b4d5a82c480f1f5450_compare-image-2.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 1200px"
                srcset="
              https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a600b4d5a82c480f1f5450_compare-image-2-p-500.jpeg 500w,
              https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a600b4d5a82c480f1f5450_compare-image-2.jpg        659w
            "
                alt="Work Image"
                className="about-image"
              />
            </div>
          </div>
        </div>
        <div className="professionals-section about-page wf-section">
          <div className="container w-container">
            <div className="section-title-wrap">
              <h2 className="section-title center-small-space">
                Interno Professional
              </h2>
              <p className="section-title-content">
                Talented team behind our success in all our projects. Dream your
                interior and <br />
                our professional make your dream true
              </p>
            </div>
            <div className="professionals-wrap about-us-page">
              <div className="w-layout-grid professionals-grid about-page-professionals">
                <div className="professionals-item">
                  <div className="professionals-image">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1f22f3d891840a3cc7e9a_team-image-one.jpg"
                      loading="lazy"
                      sizes="100vw"
                      srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1f22f3d891840a3cc7e9a_team-image-one-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1f22f3d891840a3cc7e9a_team-image-one.jpg        568w
                  "
                      alt="Team Member Image"
                      className="professionals-listing-image"
                    />
                  </div>
                  <div className="professionals-member-details">
                    <h2 className="member-name">Martin Devan</h2>
                    <div className="member-profession">Marketing Head</div>
                    <div className="member-social-wrap">
                      <Link 
                        to="https://www.facebook.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.twitter.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.linkedin.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="professionals-item">
                  <div className="professionals-image">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa765819168f07363c_team-image-two.jpg"
                      loading="lazy"
                      sizes="100vw"
                      srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa765819168f07363c_team-image-two-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa765819168f07363c_team-image-two.jpg        568w
                  "
                      alt="Team Member Image"
                      className="professionals-listing-image"
                    />
                  </div>
                  <div className="professionals-member-details">
                    <h2 className="member-name">Fiona Dourif</h2>
                    <div className="member-profession">Design Lead</div>
                    <div className="member-social-wrap">
                      <Link 
                        to="https://www.facebook.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.twitter.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.linkedin.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="professionals-item">
                  <div className="professionals-image">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa3d89184c52ccdebe_team-image-eight.jpg"
                      loading="lazy"
                      sizes="100vw"
                      srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa3d89184c52ccdebe_team-image-eight-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa3d89184c52ccdebe_team-image-eight.jpg        568w
                  "
                      alt="Team Member Image"
                      className="professionals-listing-image"
                    />
                  </div>
                  <div className="professionals-member-details">
                    <h2 className="member-name">Andrew Howard</h2>
                    <div className="member-profession">Senior Manager</div>
                    <div className="member-social-wrap">
                      <Link 
                        to="https://www.facebook.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.twitter.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.linkedin.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="professionals-item">
                  <div className="professionals-image">
                    <img
                      src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa798f2d6d723eb2e1_team-image-three.jpg"
                      loading="lazy"
                      sizes="100vw"
                      srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa798f2d6d723eb2e1_team-image-three-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa798f2d6d723eb2e1_team-image-three.jpg        568w
                  "
                      alt="Team Member Image"
                      className="professionals-listing-image"
                    />
                  </div>
                  <div className="professionals-member-details">
                    <h2 className="member-name">Elizabeth Debic</h2>
                    <div className="member-profession">Senior Manager</div>
                    <div className="member-social-wrap">
                      <Link 
                        to="https://www.facebook.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.twitter.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                      <Link 
                        to="https://www.linkedin.com/"
                        className="professional-social-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                          loading="lazy"
                          alt="Social Icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lets-talk-section wf-section">
          <div className="container w-container">
            <h2 className="section-title text-center">
              Creative Project? Let&#x27;s have
              <br />a productive talk.
              <br />
            </h2>
            <div className="contact-form-minimum-width">
              <div className="form-block w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="get"
                  className="form-minimum-width"
                >
                  <div className="w-layout-grid contact-form-grid">
                    <div className="input-block">
                      <input
                        type="text"
                        className="form-input-field w-input"
                        maxlength="256"
                        name="name-2"
                        data-name="Name 2"
                        placeholder="Name"
                        id="name-2"
                        required=""
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="email"
                        className="form-input-field w-input"
                        maxlength="256"
                        name="email-2"
                        data-name="Email 2"
                        placeholder="Email"
                        id="email-2"
                        required=""
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="tel"
                        className="form-input-field w-input"
                        maxlength="256"
                        name="Phone-Number-2"
                        data-name="Phone Number 2"
                        placeholder="Phone"
                        id="Phone-Number-2"
                        required=""
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="text"
                        className="form-input-field w-input"
                        maxlength="256"
                        name="Subject-Field-2"
                        data-name="Subject Field 2"
                        placeholder="Subject"
                        id="Subject-Field-2"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-text-area">
                    <textarea
                      placeholder="Hello Iam Intrested in.."
                      maxlength="5000"
                      id="field"
                      name="field"
                      data-name="Field"
                      className="form-input-field text-area w-input"
                    ></textarea>
                  </div>
                  <div className="contact-form-button-section">
                    <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      className="button-large form-button w-button"
                    />
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div className="success-message-title">
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div className="error-message w-form-fail">
                  <div className="error-message-title">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      
      </body>
    </div>
  );
}

export default About
