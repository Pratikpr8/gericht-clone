import React from "react";

import "./Header.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

export default function Header() {
  return (
    <div id="home" className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Chase The New Flavour" />

        <h1 className="headtext__cormorant h1">The Key To Fine Dining</h1>

        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>

        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
}
