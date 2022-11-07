import "./Results.css";
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Results(props) {
  if (props.drinkData === null) {
    return (
      <h5>{`Nothing returned so far, please try exploring different keywords`}</h5>
    );
  } else {
    let drinks = props.drinkData.map((item, index) => {
      const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          <div className="popup">
            <a>How to make this drink? </a>
            <br></br>
            <a>{item.strInstructions}</a>
            <br></br>
            <br></br>
            <ul className="nobullet">
              <li>Major ingredients : </li>
              <li>{item.strIngredient1}</li>
              <li>{item.strIngredient2}</li>
              <li>{item.strIngredient3}</li>
              <li>
                {item.strIngredient4 == null ? null : item.strIngredient4}
              </li>
            </ul>
          </div>
        </Tooltip>
      );
      return (
        <div className="ingre">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img
              key={index}
              alt="display"
              src={item.strDrinkThumb}
              onClick={() => props.handleClick(item)}
            />
          </OverlayTrigger>
          <h6>{item.strDrink}</h6>
        </div>
      );
    });

    return <div>{drinks}</div>;
  }
}

export default Results;
