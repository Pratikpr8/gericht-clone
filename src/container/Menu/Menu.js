import React from "react";

import "./Menu.css";
import { v4 as uuidv4 } from "uuid";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import { images } from "../../constants";
import { MenuItem } from "../../components";

export default function Menu() {
  return (
    <div id="menu" className="app__menu flex__center section__padding">
      <div className="app__menu-title">
        <SubHeading title="Menu That Fits Your Palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__menu-contents">
        <div className="app__menu-contents_wine flex__center">
          <p className="app__menu-contents_heading">Wine & Beer</p>
          <div className="app__menu-contents_items">
            {data.wines.map((wine) => {
              return (
                <MenuItem
                  key={uuidv4()}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              );
            })}
          </div>
        </div>

        <div className="app__menu-contents_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__menu-contents_cocktails flex__center">
          <p className="app__menu-contents_heading">Cocktails</p>
          <div className="app__menu-contents_items">
            {data.cocktails.map((cocktail) => {
              return (
                <MenuItem
                  key={uuidv4()}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className="custom__button">View More</button>
      </div>
    </div>
  );
}
