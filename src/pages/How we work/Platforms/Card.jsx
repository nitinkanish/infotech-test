import React from "react";
import "./Card.css";

const ItemsPos = [2, 3, 6, 7, 10, 11]

const Card = ({ backgroundImg, backgroundColor, itemIndex }) => {
  let top;
  if(itemIndex <= 1) {
    top = itemIndex * 250;
  }
  if(itemIndex === 2) {
    top = 150
  }
  if(itemIndex === 3) {
    top = -100
  }
  return (
    <>
      <div
        key={itemIndex}
        className="card"
        style={{
          backgroundColor: `var(${backgroundColor})`,
          left: `${ ItemsPos.includes(itemIndex) ? 250 : ''}px`,
          top: `${top}px`
        }}
      >
        <img
          src={backgroundImg}
        />
      </div>
    </>
  );
};

export default Card;
