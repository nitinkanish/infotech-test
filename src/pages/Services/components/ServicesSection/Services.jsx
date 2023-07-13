import React, { useEffect, useState } from "react";
import "./Services.css";
import Android from "../../../../assets/svg/Android.svg";
import Ios from "../../../../assets/svg/Apple.svg";
import FrontendImage from "../../../../assets/images/Frontend.png";
import BackendImage from "../../../../assets/images/Backend.png";
import MobileImage from "../../../../assets/images/Mobile.png";
import TestingImage from "../../../../assets/images/Testing.png";
import UIUXImage from "../../../../assets/images/UIUX.png";

const ServicesData = [
  {
    id: 1,
    name: "Front End",
    title: "Frontend Development",
    description:
      "Frontend Development Description: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century",
    image: FrontendImage,
  },
  {
    id: 2,
    name: "Back End",
    title: "Backend Development",
    description:
      "Backend Frontend Development: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century",
    image: BackendImage,
  },
  {
    id: 3,
    name: "Mobile App",
    title: "Mobile App Development",
    description:
      "Mobile App Development: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century",
    image: MobileImage,
  },
  {
    id: 4,
    name: "Testing",
    title: "Testing",
    description:
      "Testing : Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century",
    image: TestingImage,
  },
  {
    id: 5,
    name: "UIUX",
    title: "UIUX",
    description:
      "UIUX Development: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century",
    image: UIUXImage,
  },
];

const Services = () => {
  const [selectedServiceData, setSelectedServiceData] = useState({});

  useEffect(() => {
    changeSelectedService(3);
  }, []);

  function changeSelectedService(id) {
    const data = ServicesData.filter((item) => {
      return item.id == id;
    });

    if (data && data.length > 0) {
      setSelectedServiceData(data[0]);
    } else {
      setSelectedServiceData(ServicesData[0]);
    }
  }

  const styles = {
    "Front End": {
      marginTop: "25px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "50%",
      overflow: "hidden",
      filter: "drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))",
      borderRadius: "10px",
      width: "270px",
      height: "120px",
    },
    "Back End": {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: "auto",
      width: "50%",
      overflow: "hidden",
      borderRadius: "10px",
      filter: "drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))",
      width: "270px",
      height: "120px",
    },
    "Mobile App": {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: "auto",
      width: "50%",
      overflow: "hidden",
      borderRadius: "10px",
      filter: "drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))",
      width: "270px",
      height: "120px",
    },
    Testing: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: "auto",
      width: "50%",
      overflow: "hidden",
      borderRadius: "10px",
      filter: "drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))",
      width: "270px",
      height: "120px",
    },
    UIUX: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: "auto",
      width: "50%",
      overflow: "hidden",
      borderRadius: "10px",
      filter: "drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))",
      width: "270px",
      height: "120px",
    },
    AndroidIoslogo: {
      display: "flex",
      flexDirection: "row",
      gap: "1.5rem",
      padding: "10px 20px 40px 10px",
    },
  };

  return (
    <>
      <div className="Services">
        <h2>Services</h2>
        <p>
          <span>
            Lorem ipsum was conceived as filler text, formatted in a certain way
            to enable
          </span>
          <span>the presentation of graphic elements in documents</span>
        </p>
        <div className="S-container">
          <div className="S-left">
            <div class="S-overlay">
              <div className="Stack">
                {ServicesData.map((service) => {
                  return (
                    <div
                      key={service.id}
                      onClick={() => changeSelectedService(service.id)}
                      style={{
                        ...styles[service.name],
                        backgroundImage: `url(${service.image})`,
                        cursor: "pointer",
                      }}
                      className={
                        selectedServiceData.id == service.id ? "selected" : ""
                      }
                    >
                      <p>{service.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="S-right">
            <h3>{selectedServiceData.title}</h3>
            <p>{selectedServiceData.description}</p>
            <div className="ContactUs">
              <p>Contact Us</p>
              <div style={styles.AndroidIoslogo}>
                <img src={Android} />
                <img src={Ios} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
