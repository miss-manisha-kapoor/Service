import React from "react";
import "./card.css";
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import img1 from "../images/web-design1.png";
import img2 from "../images/web-design2.png";
import img3 from "../images/web-design3.png";
import img4 from "../images/web-design4.png";
import img5 from "../images/Business1.png";
import img6 from "../images/Business2.png";
import img7 from "../images/Business3.png";
import img8 from "../images/Business4.png";
import img9 from "../images/Business5.png";
import img10 from "../images/Business6.png";
import img11 from "../images/Business7.png";
import img12 from "../images/Business8.png";
import img13 from "../images/app1.png";
import img14 from "../images/app2.png";
import img15 from "../images/app3.png";
import img16 from "../images/app4.png";
import img17 from "../images/graphic1.png";
import img18 from "../images/graphic2.png";
import img19 from "../images/graphic3.png";
import img20 from "../images/graphic4.png";
import img21 from "../images/graphic5.png";
import img22 from "../images/graphic6.png";
import img23 from "../images/graphic7.png";
import img24 from "../images/graphic8.png";
import img25 from "../images/digital1.png";
import img26 from "../images/digital2.png";
import img27 from "../images/digital3.png";
import img28 from "../images/digital4.png";
import img29 from "../images/digital5.png";
import img30 from "../images/digital6.png";
import img31 from "../images/digital7.png";
import img32 from "../images/digital8.png";
import img33 from "../images/software1.png";
import img34 from "../images/software2.png";
import img35 from "../images/software3.png";
import img36 from "../images/software4.png";
import img37 from "../images/software5.png";
import img38 from "../images/software6.png";
import img39 from "../images/software7.png";
import img40 from "../images/software8.png";

export default function card() {
  
  return (
    <div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="zoom-out-left">
          <div className="col-md-12">
            <h3 className="text-center">
              <a
                href="https://namratauniversal.com/WebsiteDesigningDevelopment"
                className="text-dark"
              >
                Website Designing And Development
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos= "fade-down-right">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img1} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">E-commerce Website</h6>
                <p className="text-light">
                  The strength to change what I can inability to accept
                  what I can't and the incapacity to tell the difference.
                </p>
                <a
                  href="https://namratauniversal.com/EcommerceWebsiteService"
                  className="btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img2} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Informative Website</h6>
                <p className="text-light">
                  Sometimes I think surest sign that intelligent life
                  elsewhere in the universe is that none of it has tried to
                  contact.
                </p>
                <a
                  href="https://namratauniversal.com/InformativeWebsiteService"
                  className="btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img3} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Dynamic Website</h6>
                <p className="text-light">
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </p>
                <a
                  href="https://namratauniversal.com/DynamicWebsiteService"
                  className="btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img4} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Static Website</h6>
                <p className="text-light">
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </p>
                <a
                  href="https://namratauniversal.com/StaticWebsiteService"
                  className="read-more btn"
                  
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="zoom-out-left">
          <div className="col-md-12">
            <h3 className="text-center">
              <a
                href="https://namratauniversal.com/BusinessPortalDevelopment"
                className="text-dark"
              >
                Business Portal Development
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-left">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img5} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">E-commerce Portal</h6>
                <p className="text-light">
                  Get a unique customized ecommerce portal service with
                  modern tools & features at Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/EcommercePortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img6} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Sales Portal</h6>
                <p className="text-light">
                  Namrata Universal designs and develops easy to use sales
                  portal as per your business requirements.
                </p>
                <a
                  href="https://namratauniversal.com/SalesPortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img7} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">B2B Portal</h6>
                <p className="text-light">
                  With extensive knowledge, Namrata Universal
                  develops B2B portals to growth  to your
                  business.
                </p>
                <a
                  href="https://namratauniversal.com/B2BPortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img8} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">B2C Portal</h6>
                <p className="text-light">
                Give customers convenient shopping option by getting
                  portal at Namrata Universal to get profits on 
                  products.
                </p>
                <a
                  href="https://namratauniversal.com/B2CPortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-right">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img9} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">JOB Portal</h6>
                <p className="text-light">
                  Come and connect with Namrata Universal to design & develop
                  portals for various industries.
                </p>
                <a
                  href="https://namratauniversal.com/JobPortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img10} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Dating Portal</h6>
                <p className="text-light">
                  Help the people find real partner by getting dating portal
                   developed at Namrata Universal at low budget.
                </p>
                <a
                  href="https://namratauniversal.com/DatingPortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img11} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Travel Portal</h6>
                <p className="text-light">
                  Assist your audience explore the world through travel portal.
                  Get travel portal at Namrata Universal 
                </p>
                <a
                  href="https://namratauniversal.com/TravelPortalService"
                  className="read-more btn btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img12} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Government Portal</h6>
                <p className="text-light">
                  Namrata Universal is the best company in designing &
                  developing government portals with best knowledge.
                </p>
                <a
                  href="https://namratauniversal.com/GovernmentPortalService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="zoom-out-left">
          <div className="col-md-12">
            <h3 className="text-center">
              <a
                href="https://namratauniversal.com/AppDesigning"
                className="text-dark"
              >
                App Designing
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-left">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img13} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Android App</h6>
                <p className="text-light">
                  The strength to change what I can, the inability to accept
                  what I can't & incapacity to tell the difference.
                </p>
                <a
                  href="https://namratauniversal.com/AndroidAppService"
                  className="read-more btn btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img14} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">IOS App</h6>
                <p className="text-light">
                  Sometimes I think surest sign of intelligent life exists
                  elsewhere universe is that none of it has tried to
                  contact.
                </p>
                <a
                  href="https://namratauniversal.com/IOSAppService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img15} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Mobile App</h6>
                <p className="text-light">
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </p>
                <a
                  href="https://namratauniversal.com/MobileAppService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img16} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Web App</h6>
                <p className="text-light">
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </p>
                <a
                  href="https://namratauniversal.com/WebAppService"
                  className="read-more btn btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="zoom-out-left">
          <div className="col-md-12">
            <h3 className="text-center">
              <a
                href="https://namratauniversal.com/GraphicDesigningService"
                className="text-dark"
              >
                Graphic Designing
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-right">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img17} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Logo</h6>
                <p className="text-light">
                  Namrata universal provide the best logo design for your
                  business to stand out from the competition.
                </p>
                <a
                  href="https://namratauniversal.com/LogoDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img18} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Banner</h6>
                <p className="text-light">
                  Get your banner designed with innovative ideas and tools at
                  Namrata universal to impress your audience.
                </p>
                <a
                  href="https://namratauniversal.com/BannerDesignedService"
                  className="read-more btn btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img19} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Video</h6>
                <p className="text-light">
                  Namrata universal is best at customizing and editing video
                  through graphic design with 100% positive outcomes.
                </p>
                <a
                  href="https://namratauniversal.com/VideoDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img20} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Brochure</h6>
                <p className="text-light">
                  Namrata Universal has extensive experienced developers
                  who design brochures to meet 
                  goals.
                </p>
                <a
                  href="https://namratauniversal.com/BrochureDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-left">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img21} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Portfolio</h6>
                <p className="text-light">
                  Get an attractive and efficient portfolio design at Namrata
                  Universal and introduce yourself in effective manner.
                </p>
                <a
                  href="https://namratauniversal.com/PortfolioDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img22} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Business Card</h6>
                <p className="text-light">
                  Impress your clients with eye catching business
                  card. So get your business card designed  Namrata
                  Universal.
                </p>
                <a
                  href="https://namratauniversal.com/BusinessCardDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img23} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Poster</h6>
                <p className="text-light">
                  Namrata Universal provides poster design services for various
                  kinds of businesses with extensive knowledge.
                </p>
                <a
                  href="https://namratauniversal.com/PosterDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img24} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Product Design</h6>
                <p className="text-light">
                  Namrata Universal has vast experience in product design as we
                  know the requirements of the customers.
                </p>
                <a
                  href="https://namratauniversal.com/ProductDesignedService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="zoom-out-left">
          <div className="col-md-12">
            <h3 className="text-center">Digital Marketing</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-right">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img25} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Digital Marketing</h6>
                <p className="text-light">
                  Get your business digitalized through digital marketing with
                  the help of Namrata universal. 
                </p>
                <a
                  href="https://namratauniversal.com/DigitalMarketingService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img26} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Seo</h6>
                <p className="text-light">
                  Bring your website to the top of the search engine result page
                  with Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/SEOService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img27} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Website Ads</h6>
                <p className="text-light">
                  Namrata Universal creates website ads to promote your products
                  and services through website ads.
                </p>
                <a
                  href="https://namratauniversal.com/WebsiteAdsService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img28} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Google Ads</h6>
                <p className="text-light">
                  Reach target audience to grow your business with cost
                  efficiency and less effort at Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/GoogleAdsService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-left">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img29} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Social Media Marketing</h6>
                <p className="text-light">
                  Namrata Universal gives assurance of promoting your business
                  through SMM by social media platforms.
                </p>
                <a
                  href="https://namratauniversal.com/SocialMediaMarketingService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img30} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Pay Per Click</h6>
                <p className="text-light">
                  Get 100% guaranteed growth in your online business through pay
                  per click  through Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/PayPerClickService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img31} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Facebook/youtube Ads</h6>
                <p className="text-light">
                  Promote your products and services through FB
                  and reach target audience with  Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/FacebookYoutubeAdsService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img32} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Affiliate Marketing</h6>
                <p className="text-light">
                  Strengthen business through affiliate marketing. Namrata
                  Universal will help you to win business world.
                </p>
                <a
                  href="https://namratauniversal.com/AffiliateMarketingService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row aos-init aos-animate" data-aos="zoom-out-left">
          <div className="col-md-12">
            <h3 className="text-center">
              <a
                href="https://namratauniversal.com/Software"
                className="text-dark"
              >
                Software Development
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-right">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img33} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">CRM S/W</h6>
                <p className="text-light">
                  Get your CRM software developed with modern technology and
                  tools at Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/CRMSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img34} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">SAP S/W</h6>
                <p className="text-light">
                  Get world software development services with
                 standard technology at Namrata Universal.
                </p>
                <a
                  href="https://namratauniversal.com/SAPSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img35} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">ERP S/W</h6>
                <p className="text-light">
                  Give growth to your business with excellent Enterprise
                  Resource Planning (ERP) services at Namrata universal.
                </p>
                <a
                  href="https://namratauniversal.com/ERPSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img36} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Billing S/W</h6>
                <p className="text-light">
                  Track your  services by getting custom billing
                  software with experience at Namrata universal.
                </p>
                <a
                  href="https://namratauniversal.com/BillingSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row aos-init aos-animate" data-aos="fade-down-left">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img37} alt="sample42" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Hospital Management S/W</h6>
                <p className="text-light">
                  Namrata universal offers high quality (H.M) s/w development
                  tailored services to track.
                </p>
                <a
                  href="https://namratauniversal.com/HospitalManagementSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img38} alt="sample22" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Application Management </h6>
                <p className="text-light">
                  Have comprehensive (A.P) S/W development services at Namrata
                  universal with experienced developers.
                </p>
                <a
                  href="https://namratauniversal.com/ApplicationManagementSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img39} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Multimedia S/W</h6>
                <p className="text-light">
                  Be assured of high level of satisfaction in multimedia
                  software development services at Namrata
                  universal.{" "}
                </p>
                <a
                  href="https://namratauniversal.com/MultimediaSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="card">
              <img src={img40} alt="sample20" className="image" />
              <figcaption className="info">
                <h6 className="text-light">Programming S/W</h6>
                <p className="text-light">
                  Improve your ability to create other applications in an
                  effective way by Namrata universal.
                </p>
                <a
                  href="https://namratauniversal.com/ProgrammingSoftwareService"
                  className="read-more btn"
                >
                  Read More
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
