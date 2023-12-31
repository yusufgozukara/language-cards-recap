import React from "react";
import "./Card.css";
import { languages } from "../../helpers/data";
import Item from "../item/Item";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          return <Item card={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
