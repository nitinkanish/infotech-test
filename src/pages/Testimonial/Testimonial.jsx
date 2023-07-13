import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <h1>Testimonial</h1>
        <p>
          Lorem ipsum was conceived as filler text, formatted in a certain way
          to enable the presentation of graphic elements in documents
        </p>
      </div>

      <div className="testimonial-section">
        <div className="testimonial-leftSection"></div>
        <div className="testimonial-rightSection"></div>
      </div>
    </div>
  );
};

export default Testimonial;
