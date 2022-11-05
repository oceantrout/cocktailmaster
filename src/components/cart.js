import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./cart.css";

function Cart(props) {
  let selections = props.cart.map((d, i) => {
    return (
      <ListGroup.Item key={i} onClick={() => props.handleClick(d)}>
        {d.strDrink}
      </ListGroup.Item>
    );
  });
  return (
    <div className="cart">
      <h5>Your selection is here</h5>
      <ListGroup>{selections}</ListGroup>
    </div>
  );
}

export default Cart;
