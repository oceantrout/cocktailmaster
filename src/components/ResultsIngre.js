import "./ResultsIngre.css";
import React from "react";
function ResultsIngre(props) {
  const drinks = props.drinkData.map((item, index) => {
    return (
      <div className="Ingre">
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

  return <>{drinks}</>;
}

export default ResultsIngre;
