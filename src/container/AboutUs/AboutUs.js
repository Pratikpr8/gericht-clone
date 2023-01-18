import React from "react";

import "./AboutUs.css";

import { images } from "../../constants";

export default function AboutUs() {
  return (
    <div id="aboutus" className="app__aboutus app__bg flex__center section__padding">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="background G" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon img" className="spoon__img" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content-knife flex__center">
          <img src={images.knife} alt="knife img" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon img" className="spoon__img" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  );
}
