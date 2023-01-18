import React from "react";

import "./Gallery.css";
import { v4 as uuidv4 } from "uuid";

import { images } from "../../constants";
import { SubHeading } from "../../components";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

export default function Gallery() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div ref={scrollRef} className="app__gallery-images_container">
          {galleryImages.map((image) => {
            return (
              <div
                key={uuidv4()}
                className="app__gallery-images_card flex__center"
              >
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__images-icon" />
              </div>
            );
          })}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            onClick={() => scroll("left")}
            className="gallery__arrow-icon"
          />
          <BsArrowRightShort
            onClick={() => scroll("right")}
            className="gallery__arrow-icon"
          />
        </div>
      </div>
    </div>
  );
}
