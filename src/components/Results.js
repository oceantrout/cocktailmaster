import "./Results.css";
import React from "react";

function Results(props) {
  if (props.drinkData === null) {
    return (
      <h5>{`Nothing returned so far, please try exploring different keywords`}</h5>
    );
  } else {
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
}

export default Results;
