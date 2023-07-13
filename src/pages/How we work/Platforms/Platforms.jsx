import React from "react";
import "./Platforms.css";
import Card from "./Card";
import fiverr from "../../../assets/svg/fiverr.svg";
import upwork from "../../../assets/svg/upwork.svg";

const PlatformsData = [
  {
    id: 1,
    name: 'fiverr',
    title: 'Fiverr',
    image: fiverr
  },
  {
    id: 2,
    name: 'upwork',
    title: 'Upwork',
    image: upwork
  },
  {
    id: 3,
    name: 'fiverr',
    title: 'Fiverr',
    image: fiverr
  },
  {
    id: 4,
    name: 'upwork',
    title: 'Upwork',
    image: upwork
  }
]

const Platforms = () => {
  return (
    <>
      <div className="Platforms">
        <div className="P-left">
          <div className="left-content">
            <h1>WE CERTIFIED ON</h1>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century
            </p>
            <div className="button">
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="P-right">
          <div className="cards">
            {PlatformsData.map((platform, i) => {
              return (
                <Card
                  itemIndex={i}
                  backgroundImg={platform.image}
                  backgroundColor={ i % 2 == 0 ? "--red" : '--cyan'}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Platforms;
