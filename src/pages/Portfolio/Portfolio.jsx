import React, { useState } from "react";
import { PORTFOLIO_CAROUSEL, PORTFOLIO_LINKS } from "../../data/Portfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const indexHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum was conceived as filler text, formatted in a certain way
          to enable the presentation of graphic elements in documents
        </p>
      </div>

      <div className="portfolio-navbar">
        <ul className="p_nav_list">
          {PORTFOLIO_LINKS.map((item, idx) => (
            <li
              key={item.id}
              className="p_nav_item"
              onClick={indexHandler.bind(this, idx)}
            >
              <a className="p_nav_link" href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="portfolio-section">
        <div className="portfolio-subsection">
          <div className="portfolio-leftSection">
            <h1>{PORTFOLIO_CAROUSEL[activeIndex].heading}</h1>
            <p>{PORTFOLIO_CAROUSEL[activeIndex].text}</p>
          </div>
          <div className="portfolio-rightSection">
            <img
              src={PORTFOLIO_CAROUSEL[activeIndex].img}
              alt={PORTFOLIO_CAROUSEL[activeIndex].alt}
            />
          </div>
        </div>
        <div className="porfolio-dots">
          {Array.from(new Array(4), (_, idx) => (
            <button
              onClick={indexHandler.bind(this, idx)}
              className={idx === activeIndex ? "active" : ""}
              key={"dot_" + idx}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
