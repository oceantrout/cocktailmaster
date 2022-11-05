import React from "react";

function Cart(props) {
  let selections = props.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(d)}>
        {d.strDrink}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your selection</h2>
      {selections}
    </div>
  );
}

export default Cart;
