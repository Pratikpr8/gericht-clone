import React from "react";

import "./FindUs.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";

export default function FindUs() {
  return (
    <div id="contact" className="app__wrapper app__bg section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />

        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>

        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>

          <p
            className="p__cormorant"
            style={{ margin: "2rem 0", color: "#dcca87" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>

        <button style={{ marginTop: "2rem" }} className="custom__button">
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
}
