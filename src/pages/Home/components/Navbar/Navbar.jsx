import React from "react";
import logo from "../../../../assets/svg/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
    <div className="container">
    <div className="n-wrapper">

      <div className="n-left">
        <div className="n-logo">
          <img src={logo} />
        </div>
      </div>

      <nav className="n-right">
        <div className="n-list">
          <ul className="nav_list">
            <li className="nav_item">
              <a className="nav_link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#Services">
                Services
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#How we work">
                How we work
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#Testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#Why Choose Us">
                Why Choose Us
              </a>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact Us</button>
      </nav>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
