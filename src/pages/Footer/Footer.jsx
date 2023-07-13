import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // <div className="footer">
    //   <div className="footer-content">
    //     <div></div>
    //     <div className="footer-Menu"></div>
    //     <div className="footer-services"></div>
    //   </div>
    // </div>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <a className="navbar-brand" href="/">
              Particle infotech
            </a>
            <p>
              Lorem ipsum was conceived as filler text, formattedin a certain
              way to enable Lorem ipsum was conceived as filler text,
              formattedin a certain way to enable
            </p>
            <div className="footer-icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5>Menu</h5>
            <ul>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#howwework">
                  How We Work
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#whychooseus">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h5>Contact Info</h5>
            <ul>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#howwework">
                  How We Work
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="footer-nav-item">
                <a className="footer-nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
