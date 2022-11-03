import React from "react";

function Cart(props) {
  console.log("MyShoppingCart");
  let things = props.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(d)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {things}
    </div>
  );
}

export default Cart;
