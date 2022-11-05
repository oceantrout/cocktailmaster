import "./ResultsIngre.css";
import React from "react";
function ResultsIngre(props) {
  let drinks = props.drinkData.map((item, index) => {
    return (
      <div className="ingre">
        <img
          key={index}
          alt="display"
          src={item.strDrinkThumb}
          onClick={() => props.handleClick(item)}
        />
        <h6>{item.strDrink}</h6>
      </div>
    );
  });

  return <div>{drinks}</div>;
}

export default ResultsIngre;
