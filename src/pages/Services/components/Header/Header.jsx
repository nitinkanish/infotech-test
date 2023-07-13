import React from "react";
import HeaderBg from "../../../../assets/images/HeaderBg.png";
import "./Header.css";

const Header = () => {
  const HeaderBackground = {
    backgroundImage: `url(${HeaderBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    width: "100%",
    height: "auto",
    filter: "drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.25))",
  };
  return (
    <>
      <div className="Header" style={HeaderBackground}>
        <div class="overlay"></div>

        <div className="Header-text">
          <h1>
            <span>REASON WHY WE ARE THE RIGHT CHOICE</span>
            <span>FOR YOUR ONLINE SUCCESS</span>
          </h1>
          <div className="Header-information">
            <div className="experience">
              <span>5+ YEARS</span>
              <span>EXPERIENCE</span>
            </div>
            <div className="project">
              <span>200+</span>
              <span>Project</span>
            </div>
            <div className="developers">
              <span>100+</span>
              <span>Developers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
