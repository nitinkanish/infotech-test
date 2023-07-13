import React from "react";
import "./Intro.css";
import IntroBg from "../../../../assets/images/IntroBg.png";

const Intro = () => {
  const IntroSection = {
    backgroundImage: `url(${IntroBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    width: "100%",
    marginTop: "0.3rem",
    overflowY: "hidden",
  };
  return (
    <>
      <div className="Intro" style={IntroSection}>
        <div className="Intro-text">
          <span>Software Development</span>
          <span>Company etc...</span>
          <span>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries.
          </span>
        </div>
      </div>
    </>
  );
};

export default Intro;
