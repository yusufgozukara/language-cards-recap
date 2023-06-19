import React, { useEffect, useState } from "react";
import "./Item.css";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);
  const { name, img, options } = card;

  useEffect(() => {
    if (!showLogo) {
      const flipCard = setTimeout(() => {
        setShowLogo(true);
      }, 5000);
      return () => clearTimeout(flipCard);
    }
  }, [showLogo]);

  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={img} alt="lang-logo" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
