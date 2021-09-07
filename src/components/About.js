import React, { Component } from 'react'

 class About extends Component {
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
  <div id="main-wrapper">
    <div className="site-wrapper-reveal">
      <div className="about-banner-wrap banner-space about-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ml-auto mr-auto">
              <div className="about-banner-content text-center">
                <h1 className="mb-15 text-white">About Mitech</h1>
                <h5 className="font-weight--normal text-white">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===========  feature-large-images-wrapper  Start =============*/}
      <div className="feature-large-images-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* section-title-wrap Start */}
              <div className="section-title-wrap text-center section-space--mb_60">
                <h6 className="section-sub-title mb-20">Our company</h6>
                <h3 className="heading">We run all kinds of IT services that <br /> vow your <span className="text-color-primary"> success</span></h3>
              </div>
              {/* section-title-wrap Start */}
            </div>
          </div>
          <div className="cybersecurity-about-box section-space--pb_70">
            <div className="row">
              <div className="col-lg-4 offset-lg-1">
                <div className="modern-number-01">
                  <h2 className="heading  mr-5"><span className="mark-text">38</span>Years’ Experience in IT</h2>
                  <h6 className="heading mt-30">More About Our Success Stories</h6>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="cybersecurity-about-text">
                  <div className="text">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.</div>
                  <div className="button-text">
                    <a href="#" className="btn-text">
                      Discover now
                      <span className="button-icon ml-1">
                        <i className="far fa-long-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-images__six">
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow move-up">
                    {/* ht-box-icon Start */}
                    <div className="ht-box-images style-06">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <div className="default-image">
                            <img className="img-fulid" src="assets/images/icons/mitech-box-image-style-06-image-01-120x120.png" alt />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">What we can do?</h5>
                          <div className="text">We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.
                          </div>
                          <a href="#" className="box-images-arrow">
                            <span className="button-text">Discover now</span>
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    {/* ht-box-icon Start */}
                    <div className="ht-box-images style-06">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <div className="default-image">
                            <img className="img-fulid" src="assets/images/icons/mitech-box-image-style-06-image-02-120x120.png" alt />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Become our partners?</h5>
                          <div className="text">Our preventive and progressive approach will help you take the lead while addressing possible threats in managing data.
                          </div>
                          <a href="#" className="box-images-arrow">
                            <span className="button-text">Discover now</span>
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ht-box-icon End */}
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    {/* ht-box-icon Start */}
                    <div className="ht-box-images style-06">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <div className="default-image">
                            <img className="img-fulid" src="assets/images/icons/mitech-box-image-style-06-image-03-120x120.png" alt />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Need a hand?</h5>
                          <div className="text">Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.
                          </div>
                          <a href="#" className="box-images-arrow">
                            <span className="button-text">Discover now</span>
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ht-box-icon End */}
                  </div>
                </div>
              </div>
              <div className="section-under-heading text-center section-space--mt_60">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>
            </div>
          </div>
        </div>
      </div>
      {/*===========  feature-large-images-wrapper  End =============*/}
      {/*========= About Resources Wrapper Start ===========*/}
      <div className="about-resources-wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="resources-left-box">
                <div className="resources-inner">
                  <h6 className="sub-title mb-20">Resources</h6>
                  <h3 className="heading">Get a copy of brochure on <span className="text-color-primary"> Brand New IT Tech.</span></h3>
                  <div className="button mt-30">
                    <a href="#" className="ht-btn ht-btn-md">Download now (3MB)</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="resources-right-box">
                <div className="resources-right-inner text-center">
                  <div className="resources-images">
                    <img className="img-fluid" src="assets/images/banners/managed-it-services-book-cover.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========= About Resources Wrapper End ===========*/}
      {/*========= About Delivering Wrapper Start ===========*/}
      <div className="about-delivering-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_20">
                <h3 className="heading">We excel in delivering <br />optimal solutions.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="delivering-optimal-wrap">
                <div className="list-item">
                  <div className="marker" />
                  <div className="title-wrap">
                    <h5 className="title"> Warranty Management IT </h5>
                    <div className="desc">Our service offerings enhance customer experience throughout secure &amp; highly functional end-to-end warranty management. </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="marker" />
                  <div className="title-wrap">
                    <h5 className="title"> Quality Control System </h5>
                    <div className="desc">It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system. </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="marker" />
                  <div className="title-wrap">
                    <h5 className="title">Highly Professional Staffs </h5>
                    <div className="desc">Having obtained the official &amp; formal training in IT technology and technical fields, our staffs know more than what they show. </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="delivering-optimal-wrap">
                <div className="list-item">
                  <div className="marker" />
                  <div className="title-wrap">
                    <h5 className="title">Product Engineering &amp; Services </h5>
                    <div className="desc">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version. </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="marker" />
                  <div className="title-wrap">
                    <h5 className="title">Infrastructure Integration Technology </h5>
                    <div className="desc">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="marker" />
                  <div className="title-wrap">
                    <h5 className="title">Information Security Management </h5>
                    <div className="desc">Information security has been a rising issue lately due to a series of scandals from big companies, rest assured, we're here. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=========== fun fact Wrapper Start ==========*/}
      <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 wow move-up">
              <div className="fun-fact--two text-center">
                <div className="fun-fact__count counter">120</div>
                <h6 className="fun-fact__text">Happy clients</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow move-up">
              <div className="fun-fact--two text-center">
                <div className="fun-fact__count counter">32</div>
                <h6 className="fun-fact__text">Finished projects</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow move-up">
              <div className="fun-fact--two text-center">
                <div className="fun-fact__count counter">73</div>
                <h6 className="fun-fact__text">Skilled Experts</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow move-up">
              <div className="fun-fact--two text-center">
                <div className="fun-fact__count counter">318</div>
                <h6 className="fun-fact__text">Media Posts</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=========== fun fact Wrapper End ==========*/}
      {/*====================  testimonial section ====================*/}
      <div className="testimonial-slider-area section-space--pt_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
                <h6 className="section-sub-title mb-20">Testimonials</h6>
                <h3 className="heading">What do people praise about <span className="text-color-primary"> Mitech?</span></h3>
              </div>
              <div className="testimonial-slider">
                <div className="swiper-container testimonial-slider__container">
                  <div className="swiper-wrapper testimonial-slider__wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img src="assets/images/testimonial/mitech-testimonial-avata-02-90x90.jpg" className="img-fluid" alt />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Abbie Ferguson</h6>
                              <span className="designation">Marketing</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img src="assets/images/testimonial/mitech-testimonial-avata-03-90x90.jpg" className="img-fluid" alt />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Monica Blews</h6>
                              <span className="designation">Web designer</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img src="assets/images/testimonial/mitech-testimonial-avata-04-90x90.jpg" className="img-fluid" alt />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Abbie Ferguson</h6>
                              <span className="designation">WEB DESIGNER</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img src="assets/images/testimonial/mitech-testimonial-avata-01-90x90.jpg" className="img-fluid" alt />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                            <div className="author-info">
                              <h6 className="name">Abbie Ferguson</h6>
                              <span className="designation">WEB DESIGNER</span>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of testimonial section  ====================*/}
      {/*====================  brand logo slider area ====================*/}
      <div className="brand-logo-slider-area section-space--ptb_60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* brand logo slider */}
              <div className="brand-logo-slider__container-area">
                <div className="swiper-container brand-logo-slider__container">
                  <div className="swiper-wrapper brand-logo-slider__one">
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-01.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-01-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-02.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-02-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-03.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-03-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-04.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-04-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-05.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-05-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-06.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-06-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-07.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-07-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-08.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-08-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img src="assets/images/brand/mitech-client-logo-09.png" className="img-fluid" alt />
                        </div>
                        <div className="brand-logo__image-hover">
                          <img src="assets/images/brand/mitech-client-logo-09-hover.png" className="img-fluid" alt />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of brand logo slider area  ====================*/}
      {/*============ Contact Us Area Start =================*/}
      <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="image">
                <img className="img-fluid" src="assets/images/banners/home-cybersecurity-contact-bg-image.png" alt />
              </div>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="contact-info style-two text-left">
                <div className="contact-info-title-wrap text-center">
                  <h3 className="heading  mb-10">4.9/5.0</h3>
                  <div className="ht-star-rating lg-style">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <p className="sub-text">by 700+ customers for 3200+ clients</p>
                </div>
                <div className="contact-list-item">
                  <a href="tel:190068668" className="single-contact-list">
                    <div className="content-wrap">
                      <div className="content">
                        <div className="icon">
                          <span className="fal fa-phone" />
                        </div>
                        <div className="main-content">
                          <h6 className="heading">Call for advice now!</h6>
                          <div className="text">1900 68668</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:hello@mitech.com" className="single-contact-list">
                    <div className="content-wrap">
                      <div className="content">
                        <div className="icon">
                          <span className="fal fa-envelope" />
                        </div>
                        <div className="main-content">
                          <h6 className="heading">Say hello</h6>
                          <div className="text">hello@mitech.com</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============ Contact Us Area End =================*/}
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
</div>


    {/* <!-- JS
    ============================================ -->
    <!-- Modernizer JS --> */}
  




            </div>
        )
    }
}
export default About