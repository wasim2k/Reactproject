import React, { Component } from 'react'

 class Contact extends Component {
    render() {
        return (
            <div>
           

<div>
  <div className="preloader-activate preloader-active open_tm_preloader">
    <div className="preloader-area-wrap">
      <div className="spinner d-flex justify-content-center align-items-center h-100">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  </div>
  {/*====================  header area ====================*/}
  <div className="header-area">
    <div className="header-top-bar-info bg-gray d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top-bar-wrap">
              <div className="top-bar-left">
                <div className="top-bar-text"><a href="careers.html" className="font-medium display-inline">Now Hiring:</a> Are you a driven and motivated software Engineer?</div>
              </div>
              <div className="top-bar-right">
                <ul className="top-bar-info">
                  <li className="info-item">
                    <a href="tel:918093962212" className="info-link">
                      <i className="info-icon fa fa-phone" />
                      <span className="info-text"><strong>+91-809-396-2212</strong></span>
                    </a>
                  </li>
                  <li className="info-item">
                    <i className="info-icon fa fa-map-marker-alt" />
                    <span className="info-text">Indira Nagar, Bangalore, KA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom-wrap header-sticky bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header position-relative">
              {/* brand logo */}
              <div className="header__logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo-dark.png" className="img-fluid" alt />
                </a>
              </div>
              <div className="header-right">
                {/* navigation menu */}
                <div className="header__navigation menu-style-three d-none d-xl-block">
                  <nav className="navigation-menu">
                    <ul>
                      <li>
                        <a href="index.html"><span>Home</span></a>                                    
                      </li>
                      <li>
                        <a href="about-us.html"><span>About</span></a>                                    
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="#"><span>Company</span></a>
                        <ul className="submenu">
                          <li><a href="why-choose-us.html"><span>Why choose us</span></a></li>
                          <li><a href="our-history.html"><span>Our history</span></a></li>
                          <li><a href="faqs.html"><span>FAQs</span></a></li>
                          <li><a href="careers.html"><span>Careers</span></a></li>
                        </ul>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="#"><span>Solutions</span></a>
                        <ul className="submenu">
                          <li><a href="it-services.html"><span>IT Services</span></a></li>
                          <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                          <li><a href="industries.html"><span>Industries</span></a></li>
                          <li><a href="business-solution.html"><span>Business solution</span></a></li>
                          <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="case-studies.html"><span>Case Studies</span></a>
                      </li>
                      <li>
                        <a href="contact-us.html"><span>Contact</span></a>                                    
                      </li>
                      <li>
                        <a href="blog.html"><span>Blog</span></a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* mobile menu */}
                <div className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*====================  End of header area  ====================*/}
  {/* breadcrumb-area start */}
  <div className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb_box text-center">
            <h2 className="breadcrumb-title">Contact us</h2>
            {/* breadcrumb-list start */}
            <ul className="breadcrumb-list">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Contact us </li>
            </ul>
            {/* breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb-area end */}
  <div id="main-wrapper">
    <div className="site-wrapper-reveal">
      {/*====================  Conact us Section Start ====================*/}
      <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-lg-6">
              <div className="conact-us-wrap-one mb-30">
                <h3 className="heading">To make requests for <br />further information, <br /><span className="text-color-primary">contact us</span> via our social channels. </h3>
                <div className="sub-heading">We just need a couple of hours! <br /> No more than 2 working days since receiving your issue ticket.</div>
              </div>
            </div>
            <div className="col-lg-6 col-lg-6">
              <div className="contact-form-wrap">
                {/* <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post"> */}
                <form id="contact-form" action="assets/php/mail.php" method="post">
                  <div className="contact-form">
                    <div className="contact-input">
                      <div className="contact-inner">
                        <input name="con_name" type="text" placeholder="Name *" />
                      </div>
                      <div className="contact-inner">
                        <input name="con_email" type="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="contact-inner">
                      <input name="con_subject" type="text" placeholder="Subject *" />
                    </div>
                    <div className="contact-inner contact-message">
                      <textarea name="con_message" placeholder="Please describe what you need." defaultValue={""} />
                    </div>
                    <div className="submit-btn mt-20">
                      <button className="ht-btn ht-btn-md" type="submit">Send message</button>
                      <p className="form-messege" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  Conact us Section End  ====================*/}
      {/*====================  Conact us info Start ====================*/}
      <div className="contact-us-info-wrappaer section-space--pb_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="conact-info-wrap mt-30">
                <h5 className="heading mb-20">San Francisco</h5>
                <ul className="conact-info__list">
                  <li>58 Howard Street #2 San Francisco, CA 941</li>
                  <li><a href="#" className="hover-style-link text-color-primary">contact.sanfrancisco@mitech.com</a></li>
                  <li><a href="#" className="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="conact-info-wrap mt-30">
                <h5 className="heading mb-20">New York</h5>
                <ul className="conact-info__list">
                  <li>58 Howard Street #14 New York</li>
                  <li><a href="#" className="hover-style-link text-color-primary">contact.newyork@mitech.com</a></li>
                  <li><a href="#" className="hover-style-link text-black font-weight--bold">(+47)1221 09878</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="conact-info-wrap mt-30">
                <h5 className="heading mb-20">Russia</h5>
                <ul className="conact-info__list">
                  <li>The Courtyard Building 11 Curtain Road, Russia</li>
                  <li><a href="#" className="hover-style-link text-color-primary">contact.russia@mitech.com</a></li>
                  <li><a href="#" className="hover-style-link text-black font-weight--bold">(+53)1221 09877</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  Conact us info End  ====================*/}
      {/*========== Call to Action Area Start ============*/}
      <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="cta-content md-text-center">
                <h3 className="heading">We run all kinds of IT services that vow your <span className="text-color-primary"> success</span></h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="cta-button-group--two text-center">
                <a href="#" className="btn btn--white btn-one"><span className="btn-icon mr-2"><i className="far fa-comment-alt-dots" /></span> Let's talk</a>
                <a href="#" className="btn btn--secondary btn-two "><span className="btn-icon mr-2"><i className="far fa-info-circle" /></span> Get info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========== Call to Action Area End ============*/}
    </div>
    {/*====================  footer area ====================*/}
    <div className="footer-area-wrapper bg-gray">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
              <div className="footer-widget__logo mb-30">
                <img src="assets/images/logo/dark-logo-160x48.png" className="img-fluid" alt />
              </div>
              <ul className="footer-widget__list">
                <li>Indira Nagar, Bangalore, KA</li>
                <li><a href="mailto:contact@coolhaxlabs.com" className="hover-style-link">contact@coolhaxlabs.com</a></li>
                <li><a href="tel:918093962212" className="hover-style-link text-black font-weight--bold">(+91) 80939 62212</a></li>
                <li><a href="https://coolhaxlabs.com/" className="hover-style-link text-color-primary">www.coolhaxlabs.com</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">IT Services</h6>
              <ul className="footer-widget__list">
                <li><a href="#" className="hover-style-link">Managed IT</a></li>
                <li><a href="#" className="hover-style-link">IT Support</a></li>
                <li><a href="#" className="hover-style-link">IT Consultancy</a></li>
                <li><a href="#" className="hover-style-link">Cloud Computing</a></li>
                <li><a href="#" className="hover-style-link">Cyber Security</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Quick links</h6>
              <ul className="footer-widget__list">
                <li><a href="#" className="hover-style-link">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover-style-link">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Support</h6>
              <ul className="footer-widget__list">
                <li><a href="faqs.html" className="hover-style-link">Help &amp; FAQ</a></li>
                <li><a href="contact-us.html" className="hover-style-link">Contact Us</a></li>
                <li><a href="#" className="hover-style-link">Cookies Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <span className="copyright-text">© 2018 Coolhax Labs. <a href="https://coolhaxlabs.com/">All Rights Reserved.</a></span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="list ht-social-networks solid-rounded-icon">
                <li className="item">
                  <a href="https://twitter.com/coolhaxlabs" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-twitter link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a href="https://www.facebook.com/coolhaxlabs/" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-facebook-f link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a href="https://www.instagram.com/coolhaxlabs/" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-instagram link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a href="https://in.linkedin.com/company/coolhax-labs" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-linkedin link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a href="https://www.behance.net/coolhaxlab54ac" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-behance link-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*====================  End of footer area  ====================*/}
  </div>
  {/*====================  scroll top ====================*/}
  <a href="#" className="scroll-top" id="scroll-top">
    <i className="arrow-top fal fa-long-arrow-up" />
    <i className="arrow-bottom fal fa-long-arrow-up" />
  </a>
  {/*====================  End of scroll top  ====================*/}
  {/*====================  mobile menu overlay ====================*/}
  <div className="mobile-menu-overlay" id="mobile-menu-overlay">
    <div className="mobile-menu-overlay__inner">
      <div className="mobile-menu-overlay__header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-8">
              {/* logo */}
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo-dark.png" className="img-fluid" alt />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-4">
              {/* mobile menu content */}
              <div className="mobile-menu-content text-right">
                <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay__body">
        <nav className="offcanvas-navigation">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about-us.html">About</a>
            </li>
            <li className="has-children">
              <a href="#">Company</a>
              <ul className="sub-menu">
                <li><a href="why-choose-us.html"><span>Why choose us</span></a></li>
                <li><a href="our-history.html"><span>Our history</span></a></li>
                <li><a href="faqs.html"><span>FAQs</span></a></li>
                <li><a href="careers.html"><span>Careers</span></a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">IT solutions</a>
              <ul className="sub-menu">
                <li><a href="it-services.html"><span>IT Services</span></a></li>
                <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                <li><a href="industries.html"><span>Industries</span></a></li>
                <li><a href="business-solution.html"><span>Business solution</span></a></li>
                <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
              </ul>
            </li>
            <li>
              <a href="case-studies.html">Case Studies</a>
            </li>
            <li>
              <a href="contact-us.html"><span>Contact us</span></a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/*====================  End of mobile menu overlay  ====================*/}
  {/* JS
    ============================================ */}
  {/* Modernizer JS */}
</div>




                
            </div>
        )
    }
}
export default Contact