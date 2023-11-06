import React from 'react'

function Contact() {
  return (
    <div>
      <div className="banner-title-area contact-us wf-section">
        <div className="container w-container">
          <div className="banner-content-wrap">
            <h1 className="banner-title">Contact Us</h1>
            <div className="breadcrumb-wrap">
              <a href="index.html" className="breadcrumb-link">
                Home
              </a>
              <div className="breadcrumb-separator">/</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page-form wf-section">
        <div className="container w-container">
          <div className="contact-page-wrap">
            <h2 className="section-title text-center">
              Reach Us to know the way to <br />
              create your Dream Interior
            </h2>
            <div className="w-layout-grid contact-page-grid">
              <div className="contact-detail-wrap">
                <div className="contact-detail-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35fa244c2bd431a603_contact-icon-one.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href="mailto:info@yourdomain.com" className="contact-link">
                    info@yourdomain.com
                  </a>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35d8ad3f639aee4b93_contact-icon-two.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href="tel:+1(378)400-1234" className="contact-link">
                    +1 (378) 400-1234
                  </a>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35c483a1848884ce54_contact-icon-three.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href="http://www.interno.com/" className="contact-link">
                    www.interno.com
                  </a>
                </div>
                <div className="contact-social-wrap">
                  <a href="#" className="contact-social-link w-inline-block">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                  <a href="#" className="contact-social-link w-inline-block">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="contact-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="contact-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                </div>
              </div>
              <div className="form-wrap">
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
                    <div className="contact-form-button-section right-align">
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
        </div>
      </div>
      
    </div>
  );
}

export default Contact
